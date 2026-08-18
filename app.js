/* ============ GO 4E — V4 ENGINE ============
   Banque de questions indépendante (data.js -> QUESTIONS)
   Aucune donnée personnelle, tout est stocké en local (localStorage).
=================================================== */

const APP_VERSION = "V1.1";

/* ---------------- MONÉTISATION (Payhip) ----------------
   Jour 1 gratuit, jours 2 à 10 débloqués par un code de licence Payhip.
   Vérification via l'API publique Payhip (pensée pour les apps sans serveur) :
   https://help.payhip.com/article/317-software-license-keys-new
   Étapes pour activer :
   1) Créer le produit sur Payhip, cocher "Generate unique license keys for each sale"
   2) Copier la "product secret key" du produit ci-dessous
   3) Copier le lien de la page d'achat ci-dessous
   4) Passer MONETIZATION_ENABLED à true
   Attention : cette clé secrète est visible dans le code source de l'app (c'est un
   frein, pas un vrai verrou — Payhip le précise lui-même pour les apps publiques).
------------------------------------------------------- */
const MONETIZATION_ENABLED = false;
const PAYHIP_PRODUCT_SECRET_KEY = "REMPLACER_PAR_LA_CLE_SECRETE_DU_PRODUIT";
const PAYHIP_PURCHASE_URL = "https://payhip.com/b/REMPLACER";

const SUBJECTS = ["Maths","Français","Histoire","Géographie","EMC","Sciences physiques","SVT","Anglais","Espagnol","Technologie"];
const SUBJECT_ICON = {
  "Maths":"➗","Français":"📖","Histoire":"🏛️","Géographie":"🌍","EMC":"⚖️",
  "Sciences physiques":"⚗️","SVT":"🧬","Anglais":"🇬🇧","Espagnol":"🇪🇸","Technologie":"⚙️","Mode de vie":"❤️"
};
/* déclinaison de couleurs propre à Go 4e — famille émeraude / bleu / indigo */
const SUBJECT_COLOR = {
  "Maths":"#10B981","Français":"#F59E0B","Histoire":"#8B5CF6","Géographie":"#06B6D4","EMC":"#EC4899",
  "Sciences physiques":"#3B82F6","SVT":"#84CC16","Anglais":"#F97316","Espagnol":"#14B8A6","Technologie":"#6366F1",
  "Mode de vie":"#FB7185"
};
function subjColor(m){ return SUBJECT_COLOR[m] || "#6b7a94"; }
function sdot(m){ return `<span class="sdot" style="background:${subjColor(m)}"></span>`; }

const DAY_META = [
  null,
  {icon:"🧠", title:"On remet la machine en route"},
  {icon:"🎯", title:"On retrouve les réflexes"},
  {icon:"⚡", title:"On accélère"},
  {icon:"📚", title:"On consolide"},
  {icon:"🔥", title:"Déjà à mi-parcours !"},
  {icon:"🧩", title:"On corrige les petits trous"},
  {icon:"💪", title:"Tu prends de l'avance"},
  {icon:"🚀", title:"Dernière ligne droite"},
  {icon:"🏆", title:"Presque prêt"},
  {icon:"🎓", title:"Le grand défi"},
];

const LIFESTYLE_TIPS = [
  {theme:"Sommeil", icon:"😴", tip:"Vise une heure de coucher régulière et éloigne ton téléphone du lit : ton cerveau consolide sa mémoire pendant que tu dors."},
  {theme:"Écrans", icon:"📱", tip:"Fixe-toi des moments sans écran, surtout avant de dormir. Ce n'est pas une punition, c'est pour mieux te concentrer ensuite."},
  {theme:"Organisation", icon:"🗂️", tip:"Un agenda simple et un sac préparé la veille suffisent à t'éviter le stress du matin."},
  {theme:"Activité physique", icon:"🏃", tip:"Environ 60 minutes de mouvement par jour, même en plusieurs fois, ça suffit pour te sentir mieux et mieux dormir."},
  {theme:"Hydratation", icon:"💧", tip:"Boire régulièrement dans la journée t'aide à rester concentré, surtout pendant les cours ou les révisions."},
  {theme:"Stress", icon:"🌬️", tip:"Avant un contrôle, quelques respirations lentes valent mieux qu'une nuit blanche à réviser."},
  {theme:"Méthodes de travail", icon:"🧠", tip:"Se tester activement (se cacher le cours et essayer de le redire) mémorise bien mieux que relire en boucle."},
];

/* ---------------- STATE ---------------- */
const STORAGE_KEY = "go4e_v1_state";

function defaultState(){
  return {
    daysDone: [],           // [1,2,3...]
    qstate: {},              // id -> {status:'success'|'fail', successCount:0, nextReview:number|null, lastDay:number}
    totalAnswered: 0,
    totalCorrect: 0,
    history: {},             // day -> {score,total,subjects:{subj:{correct,total}}}
    lastSession: null,       // cache of the session currently in progress
    subjectOrder: null,      // rotation des matières (anti-redondance)
    subjectCursor: 0,
    unlocked: false,         // accès complet débloqué (jours 2-10)
  };
}
let STATE = loadState();

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  }catch(e){ return defaultState(); }
}
function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
}

function currentDay(){
  // first day not yet done, capped at 10
  for(let d=1; d<=10; d++){ if(!STATE.daysDone.includes(d)) return d; }
  return 10;
}
function isUnlocked(d){
  if(d===1) return true;
  if(STATE.daysDone.includes(d)) return true;
  return STATE.daysDone.includes(d-1) || (d === currentDay());
}
/* verrou "achat" : au-delà du jour 1, il faut avoir débloqué l'accès complet */
function isPremiumLocked(d){
  return MONETIZATION_ENABLED && d>1 && !STATE.unlocked;
}

async function tryUnlock(){
  const input = document.getElementById("licenseInput");
  const btn = document.getElementById("unlockBtn");
  const msgEl = document.getElementById("unlockMsg");
  const key = input.value.trim();
  if(!key){
    msgEl.textContent = "Merci d'entrer ton code de licence.";
    msgEl.className = "unlock-msg err";
    return;
  }
  msgEl.textContent = "Vérification en cours…";
  msgEl.className = "unlock-msg";
  btn.disabled = true;
  try{
    const res = await fetch(`https://payhip.com/api/v2/license/verify?license_key=${encodeURIComponent(key)}`, {
      headers: { "product-secret-key": PAYHIP_PRODUCT_SECRET_KEY }
    });
    const json = await res.json().catch(()=>null);
    if(json && json.data && json.data.enabled){
      STATE.unlocked = true;
      saveState();
      msgEl.textContent = "✅ Accès débloqué ! Bon courage pour la suite du défi.";
      msgEl.className = "unlock-msg ok";
      setTimeout(()=>goTo("screen-home"), 1200);
    }else{
      msgEl.textContent = "❌ Ce code n'est pas valide ou a été désactivé.";
      msgEl.className = "unlock-msg err";
    }
  }catch(e){
    msgEl.textContent = "⚠️ Impossible de vérifier le code (vérifie ta connexion internet) puis réessaie.";
    msgEl.className = "unlock-msg err";
  }
  btn.disabled = false;
}

/* ---------------- QUESTION SELECTION ---------------- */
function byId(id){ return QUESTIONS.find(q=>q.id===id); }
function schoolQuestions(){ return QUESTIONS.filter(q=>q.matiere!=="Mode de vie"); }
function lifestyleQuestions(){ return QUESTIONS.filter(q=>q.matiere==="Mode de vie"); }

function shuffle(arr){ return [...arr].sort(()=>Math.random()-0.5); }

/* Rotation persistante des matières : garantit qu'on ne retombe pas sans cesse
   sur les mêmes matières d'un jour à l'autre. L'ordre est mélangé une fois
   puis parcouru en continu, jour après jour. */
function pickRotatingNew(count, pool, seenIds){
  if(!STATE.subjectOrder || !STATE.subjectOrder.length){
    STATE.subjectOrder = shuffle(SUBJECTS);
    STATE.subjectCursor = 0;
  }
  const order = STATE.subjectOrder;
  const picks = [];
  const usedThisCall = new Set();
  let cursor = STATE.subjectCursor;
  let attempts = 0;
  while(picks.length < count && attempts < order.length*4){
    const subj = order[cursor % order.length];
    const candidates = shuffle(pool.filter(q=>q.matiere===subj && !seenIds.has(q.id) && !usedThisCall.has(q.id)));
    if(candidates.length){
      picks.push(candidates[0]);
      usedThisCall.add(candidates[0].id);
    }
    cursor++;
    attempts++;
  }
  STATE.subjectCursor = cursor; // demain, la rotation continue là où on s'est arrêté
  if(picks.length < count){
    const rest = shuffle(pool.filter(q=>!seenIds.has(q.id) && !usedThisCall.has(q.id)));
    picks.push(...rest.slice(0, count-picks.length));
  }
  saveState();
  return picks;
}

function buildDaySession(day){
  const pool = schoolQuestions();
  const seenIds = Object.keys(STATE.qstate);
  const seenSet = new Set(seenIds);

  // 1) rappels d'erreurs dues (les moins revues récemment d'abord, pour limiter les répétitions rapprochées)
  const failDue = seenIds.filter(id=>{
    const s = STATE.qstate[id];
    return s.status==="fail" && (s.nextReview===null || s.nextReview<=day);
  }).sort((a,b)=>(STATE.qstate[a].lastDay||0)-(STATE.qstate[b].lastDay||0));
  let reviewIds = failDue.slice(0,2);
  if(reviewIds.length < 2){
    const anyFail = seenIds.filter(id=>STATE.qstate[id].status==="fail" && !reviewIds.includes(id))
      .sort((a,b)=>(STATE.qstate[a].lastDay||0)-(STATE.qstate[b].lastDay||0));
    reviewIds = reviewIds.concat(anyFail.slice(0, 2-reviewIds.length));
  }

  // 2) consolidation (premier succès, arrivé à échéance, le moins récent d'abord)
  const consolDue = seenIds.filter(id=>{
    const s = STATE.qstate[id];
    return s.status==="success" && s.successCount===1 && (s.nextReview===null || s.nextReview<=day) && !reviewIds.includes(id);
  }).sort((a,b)=>(STATE.qstate[a].lastDay||0)-(STATE.qstate[b].lastDay||0));
  let consolIds = consolDue.slice(0,1);
  if(consolIds.length < 1){
    const anySuccess = seenIds.filter(id=>STATE.qstate[id].status==="success" && STATE.qstate[id].successCount<2 && !reviewIds.includes(id) && !consolIds.includes(id))
      .sort((a,b)=>(STATE.qstate[a].lastDay||0)-(STATE.qstate[b].lastDay||0));
    consolIds = consolIds.concat(anySuccess.slice(0, 1-consolIds.length));
  }

  // 3) nouvelles questions : rotation des matières pour éviter de retomber sur les mêmes jour après jour
  const neededNew = Math.max(0, 8 - reviewIds.length - consolIds.length);
  const newQs = pickRotatingNew(neededNew, pool, seenSet);

  let session = [
    ...newQs.map(q=>({...q, tag:"new"})),
    ...reviewIds.map(id=>({...byId(id), tag:"erreur"})),
    ...consolIds.map(id=>({...byId(id), tag:"consolidation"})),
  ];

  // filet de sécurité si la banque est vraiment limitée
  const usedIds = session.map(q=>q.id);
  while(session.length < 8){
    const filler = shuffle(pool.filter(q=>!usedIds.includes(q.id)))[0];
    if(!filler) break;
    usedIds.push(filler.id);
    session.push({...filler, tag:"new"});
  }
  return shuffle(session).slice(0,8);
}

function buildGrandDefi(){
  const pool = schoolQuestions();
  const seenIds = Object.keys(STATE.qstate);
  const weakIds = seenIds.filter(id=>STATE.qstate[id].status==="fail");
  let scolaires = [];
  // priorité : notions fragiles
  shuffle(weakIds).forEach(id=>{ if(scolaires.length<30) scolaires.push(byId(id)); });
  // puis 3 par matière pour couvrir tout le programme
  SUBJECTS.forEach(s=>{
    const already = scolaires.filter(q=>q.matiere===s).length;
    const need = Math.max(0, 3-already);
    const candidates = shuffle(pool.filter(q=>q.matiere===s && !scolaires.some(sc=>sc.id===q.id)));
    scolaires = scolaires.concat(candidates.slice(0,need));
  });
  // complète jusqu'à 30
  if(scolaires.length < 30){
    const rest = shuffle(pool.filter(q=>!scolaires.some(s=>s.id===q.id)));
    scolaires = scolaires.concat(rest.slice(0, 30-scolaires.length));
  }
  scolaires = shuffle(scolaires).slice(0,30);
  const vie = shuffle(lifestyleQuestions()).slice(0,5);
  return shuffle([...scolaires.map(q=>({...q,tag:"defi"})), ...vie.map(q=>({...q,tag:"defi"}))]);
}

function recordAnswer(q, correct, day){
  const prev = STATE.qstate[q.id] || {status:"new", successCount:0, nextReview:null};
  if(correct){
    const successCount = (prev.status==="success" ? prev.successCount : 0) + 1;
    STATE.qstate[q.id] = {
      status:"success",
      successCount,
      nextReview: successCount>=2 ? null : day+7,
      matiere:q.matiere, theme:q.theme, lastDay:day
    };
  }else{
    STATE.qstate[q.id] = { status:"fail", successCount:0, nextReview: day+1, matiere:q.matiere, theme:q.theme, lastDay:day };
  }
  STATE.totalAnswered++;
  if(correct) STATE.totalCorrect++;
  saveState();
}

/* ---------------- DASHBOARD / STATS ---------------- */
function subjectStats(){
  const stats = {};
  SUBJECTS.forEach(s=>stats[s]={seen:0, correct:0, consolidated:0});
  Object.entries(STATE.qstate).forEach(([id,s])=>{
    const q = byId(id); if(!q || q.matiere==="Mode de vie") return;
    const st = stats[q.matiere]; if(!st) return;
    st.seen++;
    if(s.status==="success") st.correct++;
    if(s.status==="success" && s.successCount>=2) st.consolidated++;
  });
  return stats;
}
function weakNotions(limit=3){
  const fails = Object.entries(STATE.qstate).filter(([,s])=>s.status==="fail");
  return shuffle(fails).slice(0,limit).map(([id,s])=>{
    const q = byId(id);
    return q ? {matiere:q.matiere, label:`${q.matiere} — ${q.theme}`} : null;
  }).filter(Boolean);
}

/* ---------------- SESSION RUNNER ---------------- */
let session = { list:[], index:0, score:0, day:null, final:false, subjectResults:{} };

function startDaySession(day){
  session = { list: buildDaySession(day), index:0, score:0, day, final:false, subjectResults:{} };
  goTo("screen-quiz");
  renderQuestion();
}
function startFinalSession(){
  session = { list: buildGrandDefi(), index:0, score:0, day:10, final:true, subjectResults:{} };
  goTo("screen-quiz");
  renderQuestion();
}

function renderQuestion(){
  const q = session.list[session.index];
  document.getElementById("quizCounter").textContent = `${session.index+1} / ${session.list.length}`;
  document.getElementById("quizLabel").textContent = session.final ? "🎓 Grand défi" : "Quiz du jour";
  document.getElementById("progressFill").style.width = Math.round((session.index/session.list.length)*100)+"%";

  const flag = document.getElementById("reviewFlag");
  if(q.tag==="erreur"){ flag.classList.remove("hidden"); flag.textContent = "🔄 Cette question revient parce que tu avais hésité."; }
  else if(q.tag==="consolidation"){ flag.classList.remove("hidden"); flag.textContent = "🎯 Question de consolidation."; }
  else flag.classList.add("hidden");

  const pill = document.getElementById("subjectPill");
  pill.textContent = `${SUBJECT_ICON[q.matiere]||""} ${q.matiere}`;
  pill.style.background = subjColor(q.matiere)+"20";
  pill.style.color = subjColor(q.matiere);
  document.getElementById("questionText").textContent = q.question;

  const box = document.getElementById("answersBox");
  box.innerHTML = "";
  shuffle(q.reponses).forEach(a=>{
    const b = document.createElement("button");
    b.className = "answer"; b.textContent = a;
    b.onclick = ()=>handleAnswer(b,a,q);
    box.appendChild(b);
  });
  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("nextBtn").classList.add("hidden");
}

function handleAnswer(btn, a, q){
  document.querySelectorAll("#answersBox .answer").forEach(x=>x.disabled=true);
  const correct = a === q.correct;
  if(correct) btn.classList.add("correct");
  else{
    btn.classList.add("wrong");
    [...document.querySelectorAll("#answersBox .answer")].find(x=>x.textContent===q.correct)?.classList.add("correct");
  }

  if(correct) session.score++;
  if(!session.subjectResults[q.matiere]) session.subjectResults[q.matiere] = {correct:0,total:0};
  session.subjectResults[q.matiere].total++;
  if(correct) session.subjectResults[q.matiere].correct++;

  recordAnswer(q, correct, session.day);

  const fb = document.getElementById("feedback");
  fb.classList.remove("hidden","ok","ko");
  if(correct){
    fb.classList.add("ok");
    fb.innerHTML = `✅ <strong>Bien joué !</strong> Tu as le bon réflexe.`;
  }else{
    fb.classList.add("ko");
    fb.innerHTML = `❌ <strong>Pas tout à fait.</strong> La bonne réponse est : <strong>${q.correct}</strong><span class="tip">💡 À retenir : ${q.explication}</span>`;
  }
  document.getElementById("nextBtn").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("nextBtn").onclick = ()=>{
    session.index++;
    if(session.index < session.list.length) renderQuestion();
    else finishSession();
  };
  wireHome();
  render();
});

function finishSession(){
  if(session.final){ renderFinal(); goTo("screen-final"); return; }
  if(!STATE.daysDone.includes(session.day)){
    STATE.daysDone.push(session.day);
  }
  STATE.history[session.day] = { score:session.score, total:session.list.length, subjects:session.subjectResults };
  saveState();
  renderDaySummary();
  goTo("screen-summary");
}

/* ---------------- RENDER: HOME ---------------- */
function render(){
  renderHome();
}

function renderHome(){
  const done = STATE.daysDone.length;
  document.getElementById("homeDaysCount").textContent = `${done} / 10 jours réalisés`;
  const streakEl = document.getElementById("streakPill");
  streakEl.textContent = done===0 ? "🚀 Ton défi commence maintenant" :
    done<5 ? "🔥 Tu es lancé !" : done<10 ? "💪 Plus que quelques jours !" : "🎓 Défi terminé";

  const promo = document.getElementById("unlockPromoCard");
  if(promo) promo.classList.toggle("hidden", !(MONETIZATION_ENABLED && !STATE.unlocked));

  const trail = document.getElementById("trail");
  trail.innerHTML = "";
  const cur = currentDay();
  for(let d=1; d<=10; d++){
    const meta = DAY_META[d];
    const node = document.createElement("div");
    node.className = "trail-node" + (d%2===0?" alt":"");
    const isDone = STATE.daysDone.includes(d);
    const unlocked = isUnlocked(d);
    const premiumLocked = isPremiumLocked(d) && !isDone;
    const isCurrent = d===cur && !isDone;
    const btn = document.createElement("button");
    btn.className = "node-btn" + (isDone?" done":premiumLocked && unlocked?" premium":isCurrent?" current":!unlocked?" locked":"");
    btn.innerHTML = `${isDone?"✓":premiumLocked && unlocked?"🔒":meta.icon}`;
    btn.disabled = !unlocked;
    btn.onclick = ()=>{
      if(premiumLocked && unlocked){ goTo("screen-unlock"); return; }
      openDayIntro(d);
    };
    node.appendChild(btn);
    const label = document.createElement("div");
    label.className = "node-label";
    let tagClass, tagText;
    if(isDone){ tagClass="done"; tagText="Terminé — rejouer"; }
    else if(premiumLocked && unlocked){ tagClass="premium"; tagText="🔒 Version complète"; }
    else if(isCurrent){ tagClass="current"; tagText="Jour recommandé"; }
    else { tagClass="locked"; tagText="Verrouillé"; }
    label.innerHTML = `<b>Jour ${d} — ${meta.title}</b><span class="node-tag ${tagClass}">${tagText}</span>`;
    node.appendChild(label);
    trail.appendChild(node);
  }
}

function openDayIntro(d){
  if(!isUnlocked(d)) return;
  if(isPremiumLocked(d)){ goTo("screen-unlock"); return; }
  const meta = DAY_META[d];
  document.getElementById("dayEyebrow").textContent = `JOUR ${d} / 10`;
  document.getElementById("dayHero").textContent = `${meta.icon} ${meta.title}`;
  document.getElementById("finalIntro").classList.add("hidden");
  document.getElementById("mixList").classList.remove("hidden");
  document.getElementById("daySub").classList.remove("hidden");
  const goBtn = document.getElementById("goBtn");
  goBtn.classList.remove("violet");

  if(d===10){
    document.getElementById("daySub").classList.add("hidden");
    document.getElementById("mixList").classList.add("hidden");
    document.getElementById("finalIntro").classList.remove("hidden");
    document.getElementById("finalIntro").innerHTML = `
      <h3>🎓 LE GRAND DÉFI GO 4E</h3>
      <p>35 questions : 30 questions scolaires (toutes matières, avec priorité à tes points faibles) + 5 questions « vie de lycéen ». Environ 25-30 minutes.</p>`;
    goBtn.textContent = "🎓 Lancer le grand défi";
    goBtn.classList.add("violet");
    goBtn.onclick = ()=>startFinalSession();
  }else{
    document.getElementById("daySub").textContent = "Environ 10 minutes.";
    const preview = STATE.daysDone.includes(d) ? null : buildDaySession(d);
    const nNew = preview ? preview.filter(q=>q.tag==="new").length : 5;
    const nErr = preview ? preview.filter(q=>q.tag==="erreur").length : 2;
    const nCon = preview ? preview.filter(q=>q.tag==="consolidation").length : 1;
    document.getElementById("mixList").innerHTML = `
      <div class="mix-row">🧠 <span class="n">${nNew}</span> nouvelles questions</div>
      <div class="mix-row">🔄 <span class="n">${nErr}</span> rappels personnalisés</div>
      <div class="mix-row">🎯 <span class="n">${nCon}</span> question de consolidation</div>
    `;
    const toneEl = document.getElementById("toneShift");
    if(d>=8){
      toneEl.classList.remove("hidden");
      const left = 10-d;
      toneEl.innerHTML = `🚀 Plus que ${left>0?left:0} jour${left>1?"s":""} ! Tu as déjà répondu à ${STATE.totalAnswered} questions.`;
    }else toneEl.classList.add("hidden");
    goBtn.textContent = STATE.daysDone.includes(d) ? "🚀 Refaire ce jour" : "🚀 GO !";
    goBtn.onclick = ()=>startDaySession(d);
  }
  goTo("screen-dayintro");
}

/* ---------------- RENDER: SUMMARY ---------------- */
function renderDaySummary(){
  const day = session.day;
  const h = STATE.history[day];
  document.getElementById("summaryDay").textContent = `🎯 JOUR ${day} TERMINÉ !`;
  document.getElementById("summaryScore").innerHTML = `${h.score}<span>/${h.total}</span>`;
  const list = document.getElementById("summarySubjects");
  list.innerHTML = "";
  Object.entries(h.subjects).forEach(([subj,r])=>{
    const ratio = r.correct/r.total;
    const status = ratio===1 ? "solide" : ratio===0 ? "revoir" : "consolider";
    const label = ratio===1 ? "🟢 solide" : ratio===0 ? "🔴 à revoir" : "🟠 à consolider";
    const row = document.createElement("div");
    row.className = "subject-line";
    row.style.borderLeft = `4px solid ${subjColor(subj)}`;
    row.style.paddingLeft = "10px";
    row.innerHTML = `<span>${SUBJECT_ICON[subj]||""} ${subj}</span><span class="status-dot ${status}">${label}</span>`;
    list.appendChild(row);
  });
  const wrongCount = Object.values(h.subjects).reduce((acc,r)=>acc+(r.total-r.correct),0);
  document.getElementById("summaryNote").textContent = wrongCount>0
    ? `${wrongCount} notion${wrongCount>1?"s":""} seront remises dans ton parcours dans les prochains jours.`
    : `Aucune erreur aujourd'hui : toutes les notions du jour sont consolidées.`;

  const promo = document.getElementById("summaryUnlockPromo");
  if(promo) promo.classList.toggle("hidden", !(MONETIZATION_ENABLED && day===1 && !STATE.unlocked));
}

/* ---------------- RENDER: DASHBOARD ---------------- */
function renderDashboard(){
  const stats = subjectStats();
  const wrap = document.getElementById("masteryList");
  wrap.innerHTML = "";
  SUBJECTS.forEach(s=>{
    const st = stats[s];
    const pct = st.seen>0 ? Math.round(100*st.correct/st.seen) : 0;
    const color = pct>=75?"var(--teal)":pct>=45?"var(--amber)":"var(--coral)";
    const row = document.createElement("div");
    row.className = "mastery-row";
    row.innerHTML = `
      <div class="mastery-top"><span>${sdot(s)}${SUBJECT_ICON[s]} ${s}</span><span>${st.seen>0?pct+" %":"—"}</span></div>
      <div class="mastery-bar"><i style="width:${pct}%;background:${color}"></i></div>`;
    wrap.appendChild(row);
  });
  const weakWrap = document.getElementById("weakList");
  const weak = weakNotions(3);
  weakWrap.innerHTML = weak.length
    ? weak.map(w=>`<div class="weak-item" style="border-left:4px solid ${subjColor(w.matiere)}">🔴 ${w.label}</div>`).join("")
    : `<div class="weak-item" style="background:#eef1f5;color:#6b7a94">Aucune notion fragile identifiée pour l'instant 👍</div>`;
}

/* ---------------- RENDER: LIFESTYLE ---------------- */
function renderLifestyle(){
  const wrap = document.getElementById("tipsList");
  wrap.innerHTML = LIFESTYLE_TIPS.map(t=>`
    <div class="tip-card"><b>${t.icon} ${t.theme}</b><p>${t.tip}</p></div>
  `).join("");
}

/* ---------------- RENDER: FINAL ---------------- */
function renderFinal(){
  const total = session.list.length;
  const pct = Math.round(100*session.score/total);
  document.getElementById("finalScore").textContent = session.score;
  document.getElementById("finalTotal").textContent = "/"+total;
  document.getElementById("finalPct").textContent = pct+"% de réussite";

  const forts=[], consolider=[], revoir=[];
  Object.entries(session.subjectResults).forEach(([s,r])=>{
    const ratio = r.correct/r.total;
    if(ratio>=0.8) forts.push(s); else if(ratio>=0.5) consolider.push(s); else revoir.push(s);
  });

  const chipHtml = (arr,cls)=>arr.map(s=>`<span class="chip ${cls}">${sdot(s)}${SUBJECT_ICON[s]||""} ${s}</span>`).join("") || `<span class="chip" style="background:#eef1f5;color:#6b7a94">—</span>`;
  document.getElementById("fortsChips").innerHTML = chipHtml(forts,"green");
  document.getElementById("consoliderChips").innerHTML = chipHtml(consolider,"orange");
  document.getElementById("revoirChips").innerHTML = chipHtml(revoir,"red");

  // Petit message final personnalisé selon le score
  const msgEl = document.getElementById("finalMessage");
  if(msgEl){
    let msg;
    if(pct>=85) msg = "🌟 Score excellent ! Tu es largement prêt·e pour la 4e. Continue comme ça à la rentrée.";
    else if(pct>=65) msg = "💪 Beau parcours ! Il te reste juste quelques notions à revoir avant la rentrée, rien d'insurmontable.";
    else msg = "🧭 Tu as fait le plus dur : identifier ce qui mérite d'être retravaillé. Utilise ton kit de rentrée, tu as le temps.";
    msgEl.textContent = msg.replace("large ment","largement");
  }

  // Kit de rentrée : thèmes des questions ratées (grand défi + historique)
  const kitWrap = document.getElementById("kitList");
  const weakSubjects = [...revoir, ...consolider];
  if(weakSubjects.length===0){
    kitWrap.innerHTML = `<p style="font-weight:700;color:var(--muted)">Tu n'as pas de notion urgente à revoir. Beau travail ! 🎉</p>`;
  }else{
    const themesBySubject = {};
    Object.entries(STATE.qstate).forEach(([id,s])=>{
      if(s.status!=="fail") return;
      const q = byId(id); if(!q || !weakSubjects.includes(q.matiere)) return;
      themesBySubject[q.matiere] = themesBySubject[q.matiere] || new Set();
      themesBySubject[q.matiere].add(q.theme);
    });
    kitWrap.innerHTML = weakSubjects.map(s=>{
      const themes = themesBySubject[s] ? [...themesBySubject[s]].slice(0,3) : [];
      return `<div class="kit-subject" style="border-left:4px solid ${subjColor(s)};padding-left:11px"><b>${sdot(s)}${SUBJECT_ICON[s]||""} ${s}</b>
        <ul>${themes.length ? themes.map(t=>`<li>${t}</li>`).join("") : "<li>Relire les points clés du programme</li>"}</ul></div>`;
    }).join("");
  }

  drawShareCard(total, pct);
}

function drawShareCard(total, pct){
  const canvas = document.getElementById("shareCanvas");
  const ctx = canvas.getContext("2d");
  const W=720,H=900; canvas.width=W; canvas.height=H;
  const grad = ctx.createLinearGradient(0,0,W,H);
  grad.addColorStop(0,"#052e2b"); grad.addColorStop(.55,"#0f766e"); grad.addColorStop(1,"#4f46e5");
  ctx.fillStyle=grad; ctx.fillRect(0,0,W,H);

  ctx.textAlign="center"; ctx.fillStyle="#fff";
  ctx.font="900 54px system-ui,sans-serif"; ctx.fillText("🚀 GO 4E", W/2, 130);
  ctx.font="700 26px system-ui,sans-serif"; ctx.globalAlpha=.9;
  ctx.fillText("10 jours accomplis", W/2, 175); ctx.globalAlpha=1;

  const stats = subjectStats();
  const solid = SUBJECTS.filter(s=>stats[s].seen>0 && stats[s].correct/stats[s].seen>=0.7).length;

  const boxes = [
    {label:"questions répondues", val: STATE.totalAnswered},
    {label:"% de réussite", val: pct+"%"},
    {label:"matières solides", val: solid+"/10"},
  ];
  let y = 260;
  boxes.forEach(b=>{
    ctx.font="900 58px system-ui,sans-serif"; ctx.fillText(String(b.val), W/2, y);
    ctx.font="700 20px system-ui,sans-serif"; ctx.globalAlpha=.85; ctx.fillText(b.label, W/2, y+34); ctx.globalAlpha=1;
    y += 130;
  });

  ctx.font="900 34px system-ui,sans-serif";
  ctx.fillText("🎓 PRÊT POUR LA 4E", W/2, H-70);
}

document.getElementById("downloadCardBtn")?.addEventListener("click", ()=>{
  const canvas = document.getElementById("shareCanvas");
  const a = document.createElement("a");
  a.download = "go4e-carte.png";
  a.href = canvas.toDataURL("image/png");
  a.click();
});

/* ---------------- NAVIGATION ---------------- */
function goTo(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"instant"});
  if(id==="screen-dashboard") renderDashboard();
  if(id==="screen-lifestyle") renderLifestyle();
  if(id==="screen-home") renderHome();
  const fab = document.getElementById("fabHome");
  if(fab) fab.classList.toggle("hidden", id==="screen-home");
}

function wireHome(){
  document.getElementById("dashboardBtn").onclick = ()=>goTo("screen-dashboard");
  document.getElementById("lifestyleBtn").onclick = ()=>goTo("screen-lifestyle");
  document.getElementById("helpBtn").onclick = ()=>goTo("screen-help");
  document.getElementById("installBtn").onclick = ()=>goTo("screen-install");
  document.querySelectorAll("[data-back-home]").forEach(b=>b.onclick = ()=>goTo("screen-home"));
  document.getElementById("continueBtn").onclick = ()=>goTo("screen-home");
  document.getElementById("finalHomeBtn").onclick = ()=>goTo("screen-home");
  document.getElementById("replayDefiBtn").onclick = ()=>startFinalSession();
  const fabBtn = document.getElementById("fabHome");
  if(fabBtn) fabBtn.onclick = ()=>goTo("screen-home");
  document.getElementById("unlockPromoBtn")?.addEventListener("click", ()=>goTo("screen-unlock"));
  document.getElementById("summaryUnlockBtn")?.addEventListener("click", ()=>goTo("screen-unlock"));
  document.getElementById("buyBtn")?.addEventListener("click", ()=>window.open(PAYHIP_PURCHASE_URL,"_blank"));
  document.getElementById("unlockBtn")?.addEventListener("click", tryUnlock);
  const vLabel = `Version ${APP_VERSION}`;
  const v1 = document.getElementById("versionLabel"); if(v1) v1.textContent = vLabel;
  const v2 = document.getElementById("versionLabelHome"); if(v2) v2.textContent = vLabel;
}
