const QUESTIONS = [
 {
  "id": "M-001",
  "matiere": "Maths",
  "theme": "Nombres relatifs",
  "niveau": 1,
  "question": "Quel est le résultat de (-3) + (-5) ?",
  "reponses": [
   "-8",
   "8",
   "-2",
   "2"
  ],
  "correct": "-8",
  "explication": "Deux nombres négatifs s'additionnent : -3 + -5 = -(3+5) = -8."
 },
 {
  "id": "M-002",
  "matiere": "Maths",
  "theme": "Nombres relatifs",
  "niveau": 1,
  "question": "Sur une droite graduée, -4 est-il plus petit ou plus grand que -1 ?",
  "reponses": [
   "plus petit",
   "plus grand",
   "égal",
   "impossible à dire"
  ],
  "correct": "plus petit",
  "explication": "Plus un nombre négatif est « loin » de zéro, plus il est petit : -4 < -1."
 },
 {
  "id": "M-003",
  "matiere": "Maths",
  "theme": "Fractions",
  "niveau": 1,
  "question": "Que vaut 1/2 + 1/4 ?",
  "reponses": [
   "3/4",
   "2/6",
   "1/6",
   "2/4"
  ],
  "correct": "3/4",
  "explication": "1/2 = 2/4, donc 2/4 + 1/4 = 3/4."
 },
 {
  "id": "M-004",
  "matiere": "Maths",
  "theme": "Fractions",
  "niveau": 2,
  "question": "Que vaut 3/5 de 20 ?",
  "reponses": [
   "12",
   "15",
   "10",
   "8"
  ],
  "correct": "12",
  "explication": "3/5 de 20 = (3×20)/5 = 60/5 = 12."
 },
 {
  "id": "M-005",
  "matiere": "Maths",
  "theme": "Nombres décimaux",
  "niveau": 1,
  "question": "Que vaut 3,5 + 2,7 ?",
  "reponses": [
   "6,2",
   "5,2",
   "6,12",
   "5,12"
  ],
  "correct": "6,2",
  "explication": "3,5 + 2,7 = 6,2."
 },
 {
  "id": "M-006",
  "matiere": "Maths",
  "theme": "Nombres décimaux",
  "niveau": 1,
  "question": "Que vaut 4,2 × 10 ?",
  "reponses": [
   "42",
   "4,2",
   "420",
   "0,42"
  ],
  "correct": "42",
  "explication": "Multiplier par 10 décale la virgule d'un rang vers la droite : 4,2 × 10 = 42."
 },
 {
  "id": "M-007",
  "matiere": "Maths",
  "theme": "Périmètre et aire",
  "niveau": 1,
  "question": "Quel est le périmètre d'un carré de 5 cm de côté ?",
  "reponses": [
   "20 cm",
   "25 cm",
   "10 cm",
   "15 cm"
  ],
  "correct": "20 cm",
  "explication": "Le périmètre d'un carré est 4 × côté : 4×5 = 20 cm."
 },
 {
  "id": "M-008",
  "matiere": "Maths",
  "theme": "Périmètre et aire",
  "niveau": 2,
  "question": "Quelle est l'aire d'un triangle de base 6 cm et de hauteur 4 cm ?",
  "reponses": [
   "12 cm²",
   "24 cm²",
   "10 cm²",
   "20 cm²"
  ],
  "correct": "12 cm²",
  "explication": "L'aire d'un triangle est (base × hauteur) / 2 = (6×4)/2 = 12."
 },
 {
  "id": "M-009",
  "matiere": "Maths",
  "theme": "Angles",
  "niveau": 1,
  "question": "Comment appelle-t-on un angle de 90° ?",
  "reponses": [
   "un angle droit",
   "un angle plat",
   "un angle aigu",
   "un angle obtus"
  ],
  "correct": "un angle droit",
  "explication": "Un angle de 90° est appelé angle droit."
 },
 {
  "id": "M-010",
  "matiere": "Maths",
  "theme": "Angles",
  "niveau": 2,
  "question": "Comment appelle-t-on un angle supérieur à 90° et inférieur à 180° ?",
  "reponses": [
   "un angle obtus",
   "un angle aigu",
   "un angle droit",
   "un angle nul"
  ],
  "correct": "un angle obtus",
  "explication": "Un angle obtus est strictement compris entre 90° et 180°."
 },
 {
  "id": "M-011",
  "matiere": "Maths",
  "theme": "Symétrie axiale",
  "niveau": 1,
  "question": "Une symétrie axiale conserve…",
  "reponses": [
   "les longueurs et les angles",
   "uniquement les couleurs",
   "seulement les aires",
   "rien du tout"
  ],
  "correct": "les longueurs et les angles",
  "explication": "La symétrie axiale est une transformation qui conserve les longueurs et les angles d'une figure."
 },
 {
  "id": "M-012",
  "matiere": "Maths",
  "theme": "Proportionnalité",
  "niveau": 2,
  "question": "Si 2 kg de pommes coûtent 4 €, combien coûtent 5 kg ?",
  "reponses": [
   "10 €",
   "8 €",
   "12 €",
   "6 €"
  ],
  "correct": "10 €",
  "explication": "Le prix au kilo est 2 €, donc 5 kg coûtent 5×2 = 10 €."
 },
 {
  "id": "M-013",
  "matiere": "Maths",
  "theme": "Volumes",
  "niveau": 2,
  "question": "Quel est le volume d'un cube de 3 cm de côté ?",
  "reponses": [
   "27 cm³",
   "9 cm³",
   "18 cm³",
   "81 cm³"
  ],
  "correct": "27 cm³",
  "explication": "Le volume d'un cube est côté³ : 3×3×3 = 27."
 },
 {
  "id": "M-014",
  "matiere": "Maths",
  "theme": "Priorités opératoires",
  "niveau": 1,
  "question": "Quel est le résultat de 10 - 2 × 3 ?",
  "reponses": [
   "4",
   "24",
   "8",
   "30"
  ],
  "correct": "4",
  "explication": "On effectue la multiplication avant la soustraction : 2×3=6, puis 10-6=4."
 },
 {
  "id": "M-015",
  "matiere": "Maths",
  "theme": "Statistiques",
  "niveau": 1,
  "question": "Quelle est la moyenne des nombres 6, 8 et 10 ?",
  "reponses": [
   "8",
   "7",
   "9",
   "24"
  ],
  "correct": "8",
  "explication": "(6+8+10)/3 = 24/3 = 8."
 },
 {
  "id": "M-016",
  "matiere": "Maths",
  "theme": "Fractions",
  "niveau": 2,
  "question": "Que vaut 2/3 - 1/3 ?",
  "reponses": [
   "1/3",
   "1/6",
   "3/3",
   "1"
  ],
  "correct": "1/3",
  "explication": "2/3 - 1/3 = 1/3 (les dénominateurs sont identiques)."
 },
 {
  "id": "M-017",
  "matiere": "Maths",
  "theme": "Unités de mesure",
  "niveau": 1,
  "question": "Combien de mètres y a-t-il dans 1 kilomètre ?",
  "reponses": [
   "1000",
   "100",
   "10",
   "10000"
  ],
  "correct": "1000",
  "explication": "1 kilomètre = 1000 mètres."
 },
 {
  "id": "F-001",
  "matiere": "Français",
  "theme": "Nature des mots",
  "niveau": 1,
  "question": "Dans « Le petit chat dort », quelle est la nature de « petit » ?",
  "reponses": [
   "un adjectif qualificatif",
   "un adverbe",
   "un nom",
   "un verbe"
  ],
  "correct": "un adjectif qualificatif",
  "explication": "« Petit » qualifie le nom « chat » : c'est un adjectif qualificatif."
 },
 {
  "id": "F-002",
  "matiere": "Français",
  "theme": "Conjugaison",
  "niveau": 1,
  "question": "Quel est le radical du verbe « chanter » ?",
  "reponses": [
   "chant-",
   "chante-",
   "chant",
   "chanter"
  ],
  "correct": "chant-",
  "explication": "Le radical est la partie du verbe qui ne change pas : chant- (chanter, chantons...)."
 },
 {
  "id": "F-003",
  "matiere": "Français",
  "theme": "Conjugaison",
  "niveau": 1,
  "question": "Conjugue « avoir » à la 1ère personne du singulier au présent.",
  "reponses": [
   "j'ai",
   "je suis",
   "j'as",
   "j'ai eu"
  ],
  "correct": "j'ai",
  "explication": "« Avoir » au présent : j'ai, tu as, il a…"
 },
 {
  "id": "F-004",
  "matiere": "Français",
  "theme": "Conjugaison",
  "niveau": 2,
  "question": "Conjugue « finir » à la 3e personne du pluriel au présent.",
  "reponses": [
   "ils finissent",
   "ils finent",
   "ils finissent pas",
   "ils finit"
  ],
  "correct": "ils finissent",
  "explication": "Les verbes du 2e groupe comme « finir » prennent -issent à la 3e personne du pluriel."
 },
 {
  "id": "F-005",
  "matiere": "Français",
  "theme": "Ponctuation",
  "niveau": 1,
  "question": "Quel signe de ponctuation termine une phrase interrogative ?",
  "reponses": [
   "le point d'interrogation",
   "le point d'exclamation",
   "les points de suspension",
   "le point-virgule"
  ],
  "correct": "le point d'interrogation",
  "explication": "Une phrase interrogative se termine par un point d'interrogation « ? »."
 },
 {
  "id": "F-006",
  "matiere": "Français",
  "theme": "Homophones",
  "niveau": 1,
  "question": "Complète : « ___ chien court vite. »",
  "reponses": [
   "Le",
   "Les",
   "L'",
   "La"
  ],
  "correct": "Le",
  "explication": "« Le » est l'article défini masculin singulier devant « chien »."
 },
 {
  "id": "F-007",
  "matiere": "Français",
  "theme": "Homophones",
  "niveau": 2,
  "question": "Complète : « Il ___ mangé une pomme. »",
  "reponses": [
   "a",
   "à",
   "as",
   "ah"
  ],
  "correct": "a",
  "explication": "« A » est le verbe avoir (il a mangé), contrairement à « à » qui est une préposition."
 },
 {
  "id": "F-008",
  "matiere": "Français",
  "theme": "Vocabulaire",
  "niveau": 1,
  "question": "Quel est un synonyme du mot « content » ?",
  "reponses": [
   "heureux",
   "triste",
   "fâché",
   "fatigué"
  ],
  "correct": "heureux",
  "explication": "« Heureux » est un synonyme de « content »."
 },
 {
  "id": "F-009",
  "matiere": "Français",
  "theme": "Genres littéraires",
  "niveau": 1,
  "question": "Un conte se termine généralement par…",
  "reponses": [
   "une morale ou une fin heureuse",
   "une liste de personnages",
   "un sommaire",
   "une bibliographie"
  ],
  "correct": "une morale ou une fin heureuse",
  "explication": "Les contes traditionnels se terminent souvent par une morale ou un dénouement heureux."
 },
 {
  "id": "F-010",
  "matiere": "Français",
  "theme": "Genres littéraires",
  "niveau": 2,
  "question": "Dans une fable, les personnages sont souvent…",
  "reponses": [
   "des animaux qui parlent",
   "uniquement des rois",
   "uniquement des scientifiques",
   "des robots"
  ],
  "correct": "des animaux qui parlent",
  "explication": "Les fables, comme celles de La Fontaine, mettent souvent en scène des animaux personnifiés."
 },
 {
  "id": "F-011",
  "matiere": "Français",
  "theme": "Grammaire",
  "niveau": 2,
  "question": "Dans « Le chat mange sa pâtée », quel est le sujet ?",
  "reponses": [
   "le chat",
   "mange",
   "sa pâtée",
   "chat mange"
  ],
  "correct": "le chat",
  "explication": "« Le chat » est le groupe qui fait l'action de manger : c'est le sujet."
 },
 {
  "id": "F-012",
  "matiere": "Français",
  "theme": "Vocabulaire",
  "niveau": 2,
  "question": "Le préfixe « in- » dans « injuste » signifie…",
  "reponses": [
   "le contraire de",
   "beaucoup de",
   "avant",
   "après"
  ],
  "correct": "le contraire de",
  "explication": "Le préfixe « in- » exprime souvent la négation ou le contraire : injuste = pas juste."
 },
 {
  "id": "F-013",
  "matiere": "Français",
  "theme": "Description",
  "niveau": 1,
  "question": "Dans un texte descriptif, on utilise souvent…",
  "reponses": [
   "des adjectifs qualificatifs",
   "uniquement des verbes d'action",
   "des chiffres statistiques",
   "des formules mathématiques"
  ],
  "correct": "des adjectifs qualificatifs",
  "explication": "La description s'appuie beaucoup sur les adjectifs pour préciser les caractéristiques d'un lieu ou d'un personnage."
 },
 {
  "id": "F-014",
  "matiere": "Français",
  "theme": "Conjugaison",
  "niveau": 2,
  "question": "Quel est le temps du verbe dans « Nous chantions » ?",
  "reponses": [
   "l'imparfait",
   "le présent",
   "le futur",
   "le passé composé"
  ],
  "correct": "l'imparfait",
  "explication": "La terminaison « -ions » avec ce sens d'habitude passée indique l'imparfait."
 },
 {
  "id": "F-015",
  "matiere": "Français",
  "theme": "Vocabulaire",
  "niveau": 1,
  "question": "Quel est l'antonyme du mot « rapide » ?",
  "reponses": [
   "lent",
   "vif",
   "pressé",
   "agile"
  ],
  "correct": "lent",
  "explication": "« Lent » est le contraire de « rapide »."
 },
 {
  "id": "H-001",
  "matiere": "Histoire",
  "theme": "Moyen Âge",
  "niveau": 1,
  "question": "La période du Moyen Âge se situe environ entre…",
  "reponses": [
   "le Ve et le XVe siècle",
   "le Ier et le Ve siècle",
   "le XVe et le XVIIIe siècle",
   "le XVIIIe et le XXe siècle"
  ],
  "correct": "le Ve et le XVe siècle",
  "explication": "Le Moyen Âge s'étend approximativement de la chute de l'Empire romain d'Occident (Ve siècle) à la fin du XVe siècle."
 },
 {
  "id": "H-002",
  "matiere": "Histoire",
  "theme": "Empire byzantin",
  "niveau": 2,
  "question": "L'Empire byzantin a pour capitale…",
  "reponses": [
   "Constantinople",
   "Rome",
   "Paris",
   "Bagdad"
  ],
  "correct": "Constantinople",
  "explication": "Constantinople (aujourd'hui Istanbul) est la capitale de l'Empire byzantin."
 },
 {
  "id": "H-003",
  "matiere": "Histoire",
  "theme": "Naissance de l'Islam",
  "niveau": 2,
  "question": "La religion musulmane est fondée au VIIe siècle par…",
  "reponses": [
   "le prophète Mahomet",
   "Charlemagne",
   "Jésus",
   "Clovis"
  ],
  "correct": "le prophète Mahomet",
  "explication": "L'islam est fondé au VIIe siècle en Arabie, autour du prophète Mahomet."
 },
 {
  "id": "H-004",
  "matiere": "Histoire",
  "theme": "Société féodale",
  "niveau": 1,
  "question": "Dans la société féodale, un seigneur accorde une terre (un fief) à un…",
  "reponses": [
   "vassal",
   "esclave",
   "empereur",
   "pape"
  ],
  "correct": "vassal",
  "explication": "Le vassal reçoit un fief de son seigneur en échange de sa fidélité et de son aide militaire."
 },
 {
  "id": "H-005",
  "matiere": "Histoire",
  "theme": "Société féodale",
  "niveau": 2,
  "question": "Au Moyen Âge, la société est traditionnellement divisée en trois ordres : ceux qui prient, ceux qui combattent et…",
  "reponses": [
   "ceux qui travaillent",
   "ceux qui gouvernent seuls",
   "ceux qui naviguent",
   "ceux qui enseignent uniquement"
  ],
  "correct": "ceux qui travaillent",
  "explication": "La société médiévale distingue le clergé, la noblesse et le tiers état (paysans, artisans...)."
 },
 {
  "id": "H-006",
  "matiere": "Histoire",
  "theme": "L'Église au Moyen Âge",
  "niveau": 2,
  "question": "Au Moyen Âge, l'Église catholique joue un rôle important notamment dans…",
  "reponses": [
   "l'éducation et l'encadrement religieux de la population",
   "l'organisation exclusive de l'armée",
   "le commerce maritime uniquement",
   "la fabrication d'armes"
  ],
  "correct": "l'éducation et l'encadrement religieux de la population",
  "explication": "L'Église structure fortement la vie religieuse, sociale et éducative au Moyen Âge."
 },
 {
  "id": "H-007",
  "matiere": "Histoire",
  "theme": "Les Capétiens",
  "niveau": 2,
  "question": "Qui est le premier roi de la dynastie des Capétiens ?",
  "reponses": [
   "Hugues Capet",
   "Charlemagne",
   "Clovis",
   "Saint Louis"
  ],
  "correct": "Hugues Capet",
  "explication": "Hugues Capet devient roi de France en 987, fondant la dynastie des Capétiens."
 },
 {
  "id": "H-008",
  "matiere": "Histoire",
  "theme": "Guerre de Cent Ans",
  "niveau": 1,
  "question": "La guerre de Cent Ans oppose principalement…",
  "reponses": [
   "la France et l'Angleterre",
   "la France et l'Espagne",
   "l'Angleterre et l'Allemagne",
   "la France et l'Italie"
  ],
  "correct": "la France et l'Angleterre",
  "explication": "Ce long conflit du XIVe-XVe siècle oppose le royaume de France et le royaume d'Angleterre."
 },
 {
  "id": "H-009",
  "matiere": "Histoire",
  "theme": "Guerre de Cent Ans",
  "niveau": 2,
  "question": "Quelle figure française est célèbre pour avoir combattu pendant la guerre de Cent Ans ?",
  "reponses": [
   "Jeanne d'Arc",
   "Marie-Antoinette",
   "Aliénor d'Aquitaine",
   "Catherine de Médicis"
  ],
  "correct": "Jeanne d'Arc",
  "explication": "Jeanne d'Arc joue un rôle décisif dans la victoire française lors de la guerre de Cent Ans."
 },
 {
  "id": "H-010",
  "matiere": "Histoire",
  "theme": "Renaissance",
  "niveau": 1,
  "question": "La Renaissance est une période marquée notamment par…",
  "reponses": [
   "un renouveau des arts et des sciences",
   "la disparition de l'art",
   "le retour au Moyen Âge",
   "l'absence de tout progrès"
  ],
  "correct": "un renouveau des arts et des sciences",
  "explication": "La Renaissance (XVe-XVIe siècle) est une période de renouveau artistique, scientifique et intellectuel en Europe."
 },
 {
  "id": "H-011",
  "matiere": "Histoire",
  "theme": "Humanisme",
  "niveau": 2,
  "question": "L'humanisme est un mouvement de pensée qui place au centre…",
  "reponses": [
   "l'être humain et le savoir",
   "uniquement la religion",
   "uniquement la guerre",
   "uniquement le commerce"
  ],
  "correct": "l'être humain et le savoir",
  "explication": "Les humanistes de la Renaissance valorisent la connaissance, la raison et l'être humain."
 },
 {
  "id": "H-012",
  "matiere": "Histoire",
  "theme": "Grandes découvertes",
  "niveau": 1,
  "question": "Quel explorateur est associé à la découverte de l'Amérique en 1492 ?",
  "reponses": [
   "Christophe Colomb",
   "Vasco de Gama",
   "Jacques Cartier",
   "Marco Polo"
  ],
  "correct": "Christophe Colomb",
  "explication": "Christophe Colomb atteint les Amériques en 1492, financé par les rois d'Espagne."
 },
 {
  "id": "H-013",
  "matiere": "Histoire",
  "theme": "Réforme protestante",
  "niveau": 2,
  "question": "La Réforme protestante est initiée au XVIe siècle notamment par…",
  "reponses": [
   "Martin Luther",
   "Jean Calvin uniquement",
   "Charlemagne",
   "Hugues Capet"
  ],
  "correct": "Martin Luther",
  "explication": "Martin Luther lance en 1517 un mouvement de contestation qui donne naissance au protestantisme."
 },
 {
  "id": "H-014",
  "matiere": "Histoire",
  "theme": "Moyen Âge",
  "niveau": 2,
  "question": "Un château fort médiéval est construit principalement pour…",
  "reponses": [
   "se défendre et affirmer le pouvoir du seigneur",
   "accueillir des touristes",
   "stocker des céréales uniquement",
   "servir de tribunal moderne"
  ],
  "correct": "se défendre et affirmer le pouvoir du seigneur",
  "explication": "Les châteaux forts avaient une fonction défensive et symbolisaient le pouvoir du seigneur sur son territoire."
 },
 {
  "id": "G-001",
  "matiere": "Géographie",
  "theme": "Développement",
  "niveau": 1,
  "question": "L'indice de développement humain (IDH) mesure notamment…",
  "reponses": [
   "l'espérance de vie, l'éducation et le niveau de vie",
   "uniquement la superficie d'un pays",
   "uniquement la population",
   "uniquement le climat"
  ],
  "correct": "l'espérance de vie, l'éducation et le niveau de vie",
  "explication": "L'IDH combine plusieurs critères pour évaluer le niveau de développement d'un pays."
 },
 {
  "id": "G-002",
  "matiere": "Géographie",
  "theme": "Démographie",
  "niveau": 2,
  "question": "La croissance démographique mondiale a été particulièrement forte…",
  "reponses": [
   "au XXe siècle",
   "au Moyen Âge",
   "pendant l'Antiquité",
   "elle a toujours été stable"
  ],
  "correct": "au XXe siècle",
  "explication": "La population mondiale a connu une croissance très rapide notamment à partir du XXe siècle."
 },
 {
  "id": "G-003",
  "matiere": "Géographie",
  "theme": "Inégalités mondiales",
  "niveau": 1,
  "question": "Les inégalités de développement dans le monde signifient que…",
  "reponses": [
   "tous les pays n'ont pas le même niveau de vie ou d'accès aux ressources",
   "tous les pays se ressemblent parfaitement",
   "seuls les pays riches existent",
   "le développement est identique partout"
  ],
  "correct": "tous les pays n'ont pas le même niveau de vie ou d'accès aux ressources",
  "explication": "Il existe de fortes disparités de richesse, de santé et d'éducation entre les pays du monde."
 },
 {
  "id": "G-004",
  "matiere": "Géographie",
  "theme": "Ressources en eau",
  "niveau": 1,
  "question": "L'eau douce disponible dans le monde représente…",
  "reponses": [
   "une petite part de l'eau totale de la planète",
   "la totalité de l'eau de la planète",
   "la moitié de l'eau de la planète",
   "aucune part significative"
  ],
  "correct": "une petite part de l'eau totale de la planète",
  "explication": "La grande majorité de l'eau sur Terre est salée ; l'eau douce facilement accessible est une ressource limitée."
 },
 {
  "id": "G-005",
  "matiere": "Géographie",
  "theme": "Ressources énergétiques",
  "niveau": 2,
  "question": "Une énergie non renouvelable est une énergie qui…",
  "reponses": [
   "s'épuise et ne se régénère pas à l'échelle humaine",
   "se régénère instantanément",
   "n'existe pas dans la nature",
   "est forcément gratuite"
  ],
  "correct": "s'épuise et ne se régénère pas à l'échelle humaine",
  "explication": "Contrairement aux énergies renouvelables, les énergies fossiles comme le pétrole s'épuisent progressivement."
 },
 {
  "id": "G-006",
  "matiere": "Géographie",
  "theme": "Alimentation",
  "niveau": 2,
  "question": "L'insécurité alimentaire désigne…",
  "reponses": [
   "une situation où une population n'a pas un accès suffisant à la nourriture",
   "un excès de nourriture partout dans le monde",
   "une allergie alimentaire individuelle",
   "un régime alimentaire particulier"
  ],
  "correct": "une situation où une population n'a pas un accès suffisant à la nourriture",
  "explication": "L'insécurité alimentaire touche les populations qui ne peuvent pas satisfaire durablement leurs besoins alimentaires de base."
 },
 {
  "id": "G-007",
  "matiere": "Géographie",
  "theme": "Risques naturels",
  "niveau": 1,
  "question": "Un risque naturel devient dangereux surtout lorsque…",
  "reponses": [
   "des populations vivent dans la zone concernée",
   "il se produit loin de toute population",
   "il n'existe aucune activité humaine autour",
   "il n'y a jamais d'aléas"
  ],
  "correct": "des populations vivent dans la zone concernée",
  "explication": "Un aléa naturel devient un risque réel quand il menace des populations, des habitations ou des activités humaines."
 },
 {
  "id": "G-008",
  "matiere": "Géographie",
  "theme": "Risques naturels",
  "niveau": 2,
  "question": "Prévenir un risque naturel peut notamment passer par…",
  "reponses": [
   "des systèmes d'alerte et des constructions adaptées",
   "l'ignorance totale du danger",
   "l'interdiction de toute information",
   "la suppression du phénomène naturel"
  ],
  "correct": "des systèmes d'alerte et des constructions adaptées",
  "explication": "L'information des populations et l'adaptation des constructions permettent de réduire les conséquences des risques naturels."
 },
 {
  "id": "G-009",
  "matiere": "Géographie",
  "theme": "Villes et population",
  "niveau": 1,
  "question": "Une mégapole est une très grande agglomération urbaine qui compte généralement…",
  "reponses": [
   "plusieurs millions d'habitants",
   "moins de 1000 habitants",
   "exactement 100 000 habitants",
   "aucun habitant permanent"
  ],
  "correct": "plusieurs millions d'habitants",
  "explication": "Une mégapole regroupe généralement plusieurs millions d'habitants."
 },
 {
  "id": "G-010",
  "matiere": "Géographie",
  "theme": "Ressources énergétiques",
  "niveau": 1,
  "question": "Laquelle de ces sources est une énergie renouvelable ?",
  "reponses": [
   "l'énergie éolienne",
   "le charbon",
   "le pétrole",
   "le gaz naturel"
  ],
  "correct": "l'énergie éolienne",
  "explication": "L'énergie éolienne, produite par le vent, est une énergie renouvelable."
 },
 {
  "id": "E-001",
  "matiere": "EMC",
  "theme": "Respect d'autrui",
  "niveau": 1,
  "question": "Le respect d'autrui implique notamment de…",
  "reponses": [
   "accepter les différences des autres",
   "se moquer des différences",
   "ignorer complètement les autres",
   "imposer ses idées aux autres"
  ],
  "correct": "accepter les différences des autres",
  "explication": "Respecter autrui, c'est notamment accepter et tolérer les différences de chacun."
 },
 {
  "id": "E-002",
  "matiere": "EMC",
  "theme": "Égalité filles-garçons",
  "niveau": 1,
  "question": "L'égalité filles-garçons signifie que…",
  "reponses": [
   "filles et garçons ont les mêmes droits et les mêmes chances",
   "seules les filles ont des droits",
   "seuls les garçons ont des droits",
   "cela ne concerne que les adultes"
  ],
  "correct": "filles et garçons ont les mêmes droits et les mêmes chances",
  "explication": "L'égalité filles-garçons garantit les mêmes droits et opportunités, sans distinction de sexe."
 },
 {
  "id": "E-003",
  "matiere": "EMC",
  "theme": "Discriminations",
  "niveau": 1,
  "question": "Se moquer de quelqu'un à cause de son physique est…",
  "reponses": [
   "une discrimination",
   "un compliment",
   "un jeu sans conséquence",
   "obligatoire à l'école"
  ],
  "correct": "une discrimination",
  "explication": "Se moquer d'une personne en raison de son apparence physique constitue une forme de discrimination et peut être du harcèlement."
 },
 {
  "id": "E-004",
  "matiere": "EMC",
  "theme": "Harcèlement",
  "niveau": 2,
  "question": "Le cyberharcèlement se déroule notamment…",
  "reponses": [
   "sur internet et les réseaux sociaux",
   "uniquement en cours de sport",
   "uniquement pendant les vacances",
   "jamais chez les adolescents"
  ],
  "correct": "sur internet et les réseaux sociaux",
  "explication": "Le cyberharcèlement désigne des faits de harcèlement qui se produisent en ligne, via les réseaux sociaux ou messageries."
 },
 {
  "id": "E-005",
  "matiere": "EMC",
  "theme": "Sécurité routière",
  "niveau": 1,
  "question": "À vélo, il est recommandé de porter…",
  "reponses": [
   "un casque",
   "des lunettes de soleil uniquement",
   "des gants de cuisine",
   "rien de particulier"
  ],
  "correct": "un casque",
  "explication": "Le port du casque à vélo réduit fortement les risques de blessures graves en cas de chute ou d'accident."
 },
 {
  "id": "E-006",
  "matiere": "EMC",
  "theme": "Règles de vie collective",
  "niveau": 1,
  "question": "Le règlement intérieur d'un collège sert à…",
  "reponses": [
   "fixer des règles communes pour bien vivre ensemble",
   "punir systématiquement les élèves",
   "remplacer les cours",
   "n'avoir aucune utilité"
  ],
  "correct": "fixer des règles communes pour bien vivre ensemble",
  "explication": "Le règlement intérieur définit les droits et devoirs de chacun pour permettre une vie collective harmonieuse."
 },
 {
  "id": "E-007",
  "matiere": "EMC",
  "theme": "Solidarité",
  "niveau": 2,
  "question": "Participer à une collecte pour une association est un exemple de…",
  "reponses": [
   "solidarité",
   "discrimination",
   "harcèlement",
   "indifférence"
  ],
  "correct": "solidarité",
  "explication": "Aider les autres par des gestes comme les collectes est un exemple concret de solidarité."
 },
 {
  "id": "SP-001",
  "matiere": "Sciences physiques",
  "theme": "États de la matière",
  "niveau": 1,
  "question": "L'eau à l'état solide est appelée…",
  "reponses": [
   "la glace",
   "la vapeur",
   "le brouillard",
   "la rosée uniquement"
  ],
  "correct": "la glace",
  "explication": "L'eau à l'état solide est de la glace."
 },
 {
  "id": "SP-002",
  "matiere": "Sciences physiques",
  "theme": "États de la matière",
  "niveau": 2,
  "question": "Quand on chauffe de la glace, elle passe à l'état…",
  "reponses": [
   "liquide",
   "gazeux directement",
   "plasma",
   "toujours solide"
  ],
  "correct": "liquide",
  "explication": "En chauffant, la glace fond et devient de l'eau liquide (fusion)."
 },
 {
  "id": "SP-003",
  "matiere": "Sciences physiques",
  "theme": "Lumière",
  "niveau": 1,
  "question": "Sans lumière, un objet est-il visible ?",
  "reponses": [
   "Non, on ne peut pas le voir",
   "Oui, toujours visible",
   "Oui, mais flou",
   "Cela dépend de sa couleur"
  ],
  "correct": "Non, on ne peut pas le voir",
  "explication": "On ne voit un objet que grâce à la lumière qu'il renvoie vers nos yeux ; sans lumière, rien n'est visible."
 },
 {
  "id": "SP-004",
  "matiere": "Sciences physiques",
  "theme": "Lumière",
  "niveau": 2,
  "question": "Une ombre se forme lorsqu'un objet…",
  "reponses": [
   "bloque le passage de la lumière",
   "produit sa propre lumière",
   "est transparent",
   "est très petit"
  ],
  "correct": "bloque le passage de la lumière",
  "explication": "Une ombre apparaît quand un objet opaque empêche la lumière de passer."
 },
 {
  "id": "SP-005",
  "matiere": "Sciences physiques",
  "theme": "Électricité",
  "niveau": 1,
  "question": "Pour qu'une lampe s'allume dans un circuit, il faut que le circuit soit…",
  "reponses": [
   "fermé",
   "ouvert",
   "coupé",
   "absent"
  ],
  "correct": "fermé",
  "explication": "Le courant ne circule que dans un circuit fermé, sans coupure."
 },
 {
  "id": "SP-006",
  "matiere": "Sciences physiques",
  "theme": "Électricité",
  "niveau": 2,
  "question": "Un interrupteur ouvert dans un circuit provoque…",
  "reponses": [
   "l'arrêt du courant",
   "une augmentation du courant",
   "aucun effet",
   "un court-circuit obligatoire"
  ],
  "correct": "l'arrêt du courant",
  "explication": "Un interrupteur ouvert coupe le circuit : le courant ne circule plus."
 },
 {
  "id": "SP-007",
  "matiere": "Sciences physiques",
  "theme": "Système solaire",
  "niveau": 1,
  "question": "Combien de planètes compte le système solaire (depuis 2006) ?",
  "reponses": [
   "8",
   "9",
   "7",
   "10"
  ],
  "correct": "8",
  "explication": "Depuis la reclassification de Pluton en 2006, le système solaire compte 8 planètes."
 },
 {
  "id": "SP-008",
  "matiere": "Sciences physiques",
  "theme": "Système solaire",
  "niveau": 2,
  "question": "La Terre effectue un tour complet autour du Soleil en…",
  "reponses": [
   "environ 365 jours",
   "environ 24 heures",
   "environ 30 jours",
   "environ 10 ans"
  ],
  "correct": "environ 365 jours",
  "explication": "La Terre met environ une année (365 jours) pour faire le tour du Soleil."
 },
 {
  "id": "SP-009",
  "matiere": "Sciences physiques",
  "theme": "Système solaire",
  "niveau": 1,
  "question": "Quelle planète est la plus proche du Soleil ?",
  "reponses": [
   "Mercure",
   "Vénus",
   "la Terre",
   "Mars"
  ],
  "correct": "Mercure",
  "explication": "Mercure est la planète la plus proche du Soleil dans le système solaire."
 },
 {
  "id": "S-001",
  "matiere": "SVT",
  "theme": "Respiration",
  "niveau": 1,
  "question": "Quel organe permet aux humains de respirer l'air ?",
  "reponses": [
   "les poumons",
   "le foie",
   "l'estomac",
   "les reins"
  ],
  "correct": "les poumons",
  "explication": "Les poumons permettent les échanges gazeux nécessaires à la respiration chez l'humain."
 },
 {
  "id": "S-002",
  "matiere": "SVT",
  "theme": "Respiration",
  "niveau": 2,
  "question": "Les poissons respirent grâce à…",
  "reponses": [
   "leurs branchies",
   "leurs poumons",
   "leur peau uniquement",
   "leurs nageoires"
  ],
  "correct": "leurs branchies",
  "explication": "Les branchies permettent aux poissons d'extraire l'oxygène dissous dans l'eau."
 },
 {
  "id": "S-003",
  "matiere": "SVT",
  "theme": "Occupation des milieux",
  "niveau": 1,
  "question": "Un milieu de vie désigne…",
  "reponses": [
   "l'endroit où vit un être vivant et où il trouve ce dont il a besoin",
   "uniquement une forêt",
   "uniquement un océan",
   "un lieu sans aucun être vivant"
  ],
  "correct": "l'endroit où vit un être vivant et où il trouve ce dont il a besoin",
  "explication": "Un milieu de vie est l'environnement dans lequel un organisme trouve les ressources nécessaires à sa survie."
 },
 {
  "id": "S-004",
  "matiere": "SVT",
  "theme": "Digestion",
  "niveau": 1,
  "question": "La digestion permet notamment de…",
  "reponses": [
   "transformer les aliments pour que le corps les utilise",
   "fabriquer des os",
   "produire de la lumière",
   "filtrer l'air"
  ],
  "correct": "transformer les aliments pour que le corps les utilise",
  "explication": "La digestion transforme les aliments en nutriments assimilables par l'organisme."
 },
 {
  "id": "S-005",
  "matiere": "SVT",
  "theme": "Digestion",
  "niveau": 2,
  "question": "Après la digestion, les nutriments passent dans le sang principalement au niveau…",
  "reponses": [
   "de l'intestin grêle",
   "de la bouche",
   "des poumons",
   "de la peau"
  ],
  "correct": "de l'intestin grêle",
  "explication": "L'intestin grêle est le principal lieu d'absorption des nutriments vers le sang."
 },
 {
  "id": "S-006",
  "matiere": "SVT",
  "theme": "Peuplement des milieux",
  "niveau": 2,
  "question": "La dissémination des graines par le vent est un exemple de…",
  "reponses": [
   "peuplement d'un milieu par les végétaux",
   "respiration végétale",
   "digestion végétale",
   "reproduction asexuée uniquement"
  ],
  "correct": "peuplement d'un milieu par les végétaux",
  "explication": "Le transport des graines (par le vent, les animaux...) permet aux plantes de coloniser de nouveaux milieux."
 },
 {
  "id": "S-007",
  "matiere": "SVT",
  "theme": "Respiration",
  "niveau": 2,
  "question": "Chez les végétaux, les échanges gazeux se font notamment par…",
  "reponses": [
   "de petits orifices appelés stomates",
   "des branchies",
   "des poumons",
   "la racine uniquement"
  ],
  "correct": "de petits orifices appelés stomates",
  "explication": "Les stomates, situés sur les feuilles, permettent les échanges gazeux chez les plantes."
 },
 {
  "id": "S-008",
  "matiere": "SVT",
  "theme": "Occupation des milieux",
  "niveau": 1,
  "question": "Un être vivant adapté à un milieu très sec doit notamment…",
  "reponses": [
   "limiter ses pertes en eau",
   "consommer un maximum d'eau en permanence",
   "vivre uniquement dans l'eau",
   "éviter toute exposition au soleil"
  ],
  "correct": "limiter ses pertes en eau",
  "explication": "Dans un milieu aride, les organismes développent des adaptations pour limiter la perte d'eau."
 },
 {
  "id": "A-001",
  "matiere": "Anglais",
  "theme": "Be",
  "niveau": 1,
  "question": "Complete: « I ___ twelve years old. »",
  "reponses": [
   "am",
   "is",
   "are",
   "be"
  ],
  "correct": "am",
  "explication": "Avec « I », le verbe « to be » se conjugue « am »."
 },
 {
  "id": "A-002",
  "matiere": "Anglais",
  "theme": "Have",
  "niveau": 1,
  "question": "Complete: « She ___ a cat. »",
  "reponses": [
   "has",
   "have",
   "haves",
   "having"
  ],
  "correct": "has",
  "explication": "Avec « she », le verbe « to have » se conjugue « has »."
 },
 {
  "id": "A-003",
  "matiere": "Anglais",
  "theme": "Présent simple",
  "niveau": 1,
  "question": "Complete: « They ___ football every Saturday. »",
  "reponses": [
   "play",
   "plays",
   "playing",
   "played"
  ],
  "correct": "play",
  "explication": "Avec « they » (pluriel), on utilise la base verbale « play » au présent simple."
 },
 {
  "id": "A-004",
  "matiere": "Anglais",
  "theme": "Vocabulaire - couleurs",
  "niveau": 1,
  "question": "How do you say « rouge » in English?",
  "reponses": [
   "red",
   "blue",
   "green",
   "yellow"
  ],
  "correct": "red",
  "explication": "« Red » signifie « rouge » en anglais."
 },
 {
  "id": "A-005",
  "matiere": "Anglais",
  "theme": "L'heure",
  "niveau": 2,
  "question": "How do you say « il est trois heures » in English?",
  "reponses": [
   "It's three o'clock",
   "It's three hours",
   "It's the three",
   "It's third hour"
  ],
  "correct": "It's three o'clock",
  "explication": "Pour dire l'heure pile, on utilise « o'clock » : « It's three o'clock »."
 },
 {
  "id": "A-006",
  "matiere": "Anglais",
  "theme": "Impératif",
  "niveau": 1,
  "question": "Choose the imperative form: « ___ your homework! »",
  "reponses": [
   "Do",
   "Doing",
   "To do",
   "Does"
  ],
  "correct": "Do",
  "explication": "L'impératif utilise la base verbale sans sujet : « Do your homework! »"
 },
 {
  "id": "A-007",
  "matiere": "Anglais",
  "theme": "Vocabulaire",
  "niveau": 1,
  "question": "What does « school » mean in French?",
  "reponses": [
   "l'école",
   "la maison",
   "le magasin",
   "le parc"
  ],
  "correct": "l'école",
  "explication": "« School » signifie « l'école » en anglais."
 },
 {
  "id": "A-008",
  "matiere": "Anglais",
  "theme": "Pluriel",
  "niveau": 2,
  "question": "What is the plural of « child »?",
  "reponses": [
   "children",
   "childs",
   "childes",
   "child's"
  ],
  "correct": "children",
  "explication": "« Child » a un pluriel irrégulier : children."
 },
 {
  "id": "E-008",
  "matiere": "Espagnol",
  "theme": "Se présenter",
  "niveau": 1,
  "question": "Comment dit-on « Je m'appelle » en espagnol ?",
  "reponses": [
   "Me llamo",
   "Te llamas",
   "Se llama",
   "Nos llamamos"
  ],
  "correct": "Me llamo",
  "explication": "« Me llamo » signifie « je m'appelle »."
 },
 {
  "id": "E-009",
  "matiere": "Espagnol",
  "theme": "Nombres",
  "niveau": 1,
  "question": "Comment écrit-on le nombre 5 en espagnol ?",
  "reponses": [
   "cinco",
   "cuatro",
   "seis",
   "cero"
  ],
  "correct": "cinco",
  "explication": "« Cinco » signifie 5 en espagnol."
 },
 {
  "id": "E-010",
  "matiere": "Espagnol",
  "theme": "Vocabulaire - couleurs",
  "niveau": 1,
  "question": "Comment dit-on « rouge » en espagnol ?",
  "reponses": [
   "rojo",
   "azul",
   "verde",
   "amarillo"
  ],
  "correct": "rojo",
  "explication": "« Rojo » signifie « rouge » en espagnol."
 },
 {
  "id": "E-011",
  "matiere": "Espagnol",
  "theme": "Vocabulaire famille",
  "niveau": 1,
  "question": "Comment dit-on « mon père » en espagnol ?",
  "reponses": [
   "mi padre",
   "mi madre",
   "mi hermano",
   "mi abuelo"
  ],
  "correct": "mi padre",
  "explication": "« Mi padre » signifie « mon père »."
 },
 {
  "id": "E-012",
  "matiere": "Espagnol",
  "theme": "Salutations",
  "niveau": 1,
  "question": "Comment dit-on « Bonjour » en espagnol (le matin) ?",
  "reponses": [
   "Buenos días",
   "Buenas noches",
   "Buenas tardes",
   "Adiós"
  ],
  "correct": "Buenos días",
  "explication": "« Buenos días » est la salutation du matin en espagnol."
 },
 {
  "id": "E-013",
  "matiere": "Espagnol",
  "theme": "Alphabet et sons",
  "niveau": 2,
  "question": "En espagnol, la lettre « ñ » se prononce comme…",
  "reponses": [
   "« gn » dans « montagne »",
   "« n » simple",
   "« m »",
   "elle est muette"
  ],
  "correct": "« gn » dans « montagne »",
  "explication": "La lettre « ñ » se prononce comme le son « gn » français, par exemple dans « España »."
 },
 {
  "id": "E-014",
  "matiere": "Espagnol",
  "theme": "Verbe tener",
  "niveau": 2,
  "question": "Complète : « Yo ___ diez años. »",
  "reponses": [
   "tengo",
   "tienes",
   "tiene",
   "tenemos"
  ],
  "correct": "tengo",
  "explication": "« Tengo » est la forme de « tener » à la première personne du singulier, utilisée pour l'âge."
 },
 {
  "id": "T-001",
  "matiere": "Technologie",
  "theme": "Habitat et ouvrages",
  "niveau": 1,
  "question": "Un ouvrage d'art est notamment…",
  "reponses": [
   "une construction comme un pont ou un tunnel",
   "uniquement une peinture",
   "un type de meuble",
   "un logiciel"
  ],
  "correct": "une construction comme un pont ou un tunnel",
  "explication": "Un ouvrage d'art désigne une construction technique importante, comme un pont, un viaduc ou un tunnel."
 },
 {
  "id": "T-002",
  "matiere": "Technologie",
  "theme": "Matériaux de construction",
  "niveau": 1,
  "question": "Le béton est principalement composé de…",
  "reponses": [
   "ciment, sable, gravier et eau",
   "bois et papier",
   "plastique uniquement",
   "verre et métal uniquement"
  ],
  "correct": "ciment, sable, gravier et eau",
  "explication": "Le béton est un mélange de ciment, de granulats (sable, gravier) et d'eau."
 },
 {
  "id": "T-003",
  "matiere": "Technologie",
  "theme": "Structures",
  "niveau": 2,
  "question": "Une structure triangulée est utilisée notamment car le triangle est…",
  "reponses": [
   "une forme très rigide et stable",
   "une forme instable",
   "une forme uniquement décorative",
   "impossible à construire"
  ],
  "correct": "une forme très rigide et stable",
  "explication": "Le triangle est une forme géométrique particulièrement stable, très utilisée dans les charpentes et ponts."
 },
 {
  "id": "T-004",
  "matiere": "Technologie",
  "theme": "Énergie dans le bâtiment",
  "niveau": 2,
  "question": "Une bonne isolation d'un logement permet notamment de…",
  "reponses": [
   "réduire la consommation d'énergie de chauffage",
   "augmenter la consommation d'énergie",
   "supprimer tout besoin de chauffage",
   "n'a aucun effet"
  ],
  "correct": "réduire la consommation d'énergie de chauffage",
  "explication": "Une bonne isolation limite les pertes de chaleur et donc les besoins en chauffage."
 },
 {
  "id": "T-005",
  "matiere": "Technologie",
  "theme": "Objets techniques",
  "niveau": 1,
  "question": "Un plan ou un schéma technique sert à…",
  "reponses": [
   "représenter un objet ou un ouvrage avant sa construction",
   "décorer un mur",
   "remplacer une photo de vacances",
   "interdire toute construction"
  ],
  "correct": "représenter un objet ou un ouvrage avant sa construction",
  "explication": "Un plan technique permet de visualiser et de préparer la réalisation d'un objet ou d'un bâtiment."
 },
 {
  "id": "T-006",
  "matiere": "Technologie",
  "theme": "Énergie",
  "niveau": 1,
  "question": "Les panneaux solaires installés sur un toit transforment…",
  "reponses": [
   "la lumière du soleil en électricité",
   "le vent en électricité",
   "la pluie en électricité",
   "le bruit en électricité"
  ],
  "correct": "la lumière du soleil en électricité",
  "explication": "Les panneaux photovoltaïques convertissent l'énergie lumineuse du soleil en énergie électrique."
 },
 {
  "id": "MDV-001",
  "matiere": "Mode de vie",
  "theme": "Sommeil",
  "niveau": 1,
  "question": "À l'entrée en 4e, il est conseillé de dormir environ…",
  "reponses": [
   "9 à 10 heures par nuit",
   "3 à 4 heures",
   "13 à 14 heures",
   "aucune durée précise n'est nécessaire"
  ],
  "correct": "9 à 10 heures par nuit",
  "explication": "Les collégiens ont besoin d'environ 9 à 10 heures de sommeil pour bien récupérer."
 },
 {
  "id": "MDV-002",
  "matiere": "Mode de vie",
  "theme": "Organisation",
  "niveau": 1,
  "question": "Utiliser un agenda pour noter ses devoirs permet de…",
  "reponses": [
   "mieux s'organiser et ne rien oublier",
   "perdre du temps inutilement",
   "remplacer les cours",
   "être toujours en retard"
  ],
  "correct": "mieux s'organiser et ne rien oublier",
  "explication": "Noter ses devoirs et échéances aide à anticiper le travail scolaire."
 },
 {
  "id": "MDV-003",
  "matiere": "Mode de vie",
  "theme": "Écrans",
  "niveau": 1,
  "question": "Faire des pauses régulières loin des écrans aide notamment à…",
  "reponses": [
   "mieux se concentrer",
   "ne plus jamais dormir",
   "augmenter automatiquement les notes",
   "éviter toute activité physique"
  ],
  "correct": "mieux se concentrer",
  "explication": "Réduire le temps d'écran favorise la concentration et un meilleur équilibre général."
 },
 {
  "id": "MDV-004",
  "matiere": "Mode de vie",
  "theme": "Activité physique",
  "niveau": 1,
  "question": "Faire du sport régulièrement contribue notamment à…",
  "reponses": [
   "la santé physique et à la bonne humeur",
   "diminuer uniquement l'appétit",
   "empêcher de dormir",
   "n'avoir aucun effet"
  ],
  "correct": "la santé physique et à la bonne humeur",
  "explication": "L'activité physique régulière améliore la santé générale et le bien-être."
 },
 {
  "id": "MDV-005",
  "matiere": "Mode de vie",
  "theme": "Hydratation",
  "niveau": 1,
  "question": "Boire de l'eau régulièrement pendant les cours aide à…",
  "reponses": [
   "rester concentré",
   "ralentir la réflexion",
   "fatiguer davantage",
   "n'a aucun effet"
  ],
  "correct": "rester concentré",
  "explication": "Une bonne hydratation favorise la concentration et le bon fonctionnement du corps."
 },
 {
  "id": "MDV-006",
  "matiere": "Mode de vie",
  "theme": "Méthodes de travail",
  "niveau": 1,
  "question": "Relire ses notes juste après un cours aide à…",
  "reponses": [
   "mieux les mémoriser sur le long terme",
   "les oublier plus vite",
   "perdre du temps inutilement",
   "remplacer les révisions futures"
  ],
  "correct": "mieux les mémoriser sur le long terme",
  "explication": "Relire rapidement après le cours renforce la mémorisation."
 },
 {
  "id": "MDV-007",
  "matiere": "Mode de vie",
  "theme": "Méthodes de travail",
  "niveau": 2,
  "question": "Se tester soi-même sur une leçon est plus efficace que…",
  "reponses": [
   "simplement la relire plusieurs fois",
   "dormir avant de l'apprendre",
   "ne jamais réviser",
   "apprendre uniquement le jour du contrôle"
  ],
  "correct": "simplement la relire plusieurs fois",
  "explication": "S'auto-tester (essayer de se rappeler) est prouvé plus efficace que la simple relecture passive."
 },
 {
  "id": "MDV-008",
  "matiere": "Mode de vie",
  "theme": "Organisation",
  "niveau": 2,
  "question": "Préparer son cartable la veille pour le lendemain permet de…",
  "reponses": [
   "gagner du temps et réduire le stress du matin",
   "perdre plus de temps",
   "oublier plus de choses",
   "n'avoir aucun avantage"
  ],
  "correct": "gagner du temps et réduire le stress du matin",
  "explication": "Anticiper la veille limite la précipitation et les oublis au moment du départ."
 },
 {
  "id": "MDV-009",
  "matiere": "Mode de vie",
  "theme": "Stress",
  "niveau": 1,
  "question": "Parler d'une difficulté scolaire à un adulte de confiance permet de…",
  "reponses": [
   "se sentir soutenu et trouver des solutions",
   "aggraver systématiquement la situation",
   "perdre du temps inutilement",
   "être jugé obligatoirement"
  ],
  "correct": "se sentir soutenu et trouver des solutions",
  "explication": "Échanger avec un adulte de confiance permet souvent d'être aidé et rassuré."
 },
 {
  "id": "MDV-010",
  "matiere": "Mode de vie",
  "theme": "Alimentation",
  "niveau": 1,
  "question": "Un petit-déjeuner équilibré avant les cours aide notamment à…",
  "reponses": [
   "mieux se concentrer le matin",
   "s'endormir plus vite en classe",
   "remplacer le déjeuner",
   "n'avoir aucun effet"
  ],
  "correct": "mieux se concentrer le matin",
  "explication": "Le petit-déjeuner fournit l'énergie nécessaire à la concentration en début de journée."
 },
 {
  "id": "MDV-011",
  "matiere": "Mode de vie",
  "theme": "Autonomie",
  "niveau": 2,
  "question": "Gagner en autonomie au collège signifie notamment…",
  "reponses": [
   "apprendre à gérer soi-même son matériel et son travail",
   "ne plus jamais demander d'aide",
   "ignorer les conseils des professeurs",
   "faire uniquement ce que l'on veut"
  ],
  "correct": "apprendre à gérer soi-même son matériel et son travail",
  "explication": "L'autonomie s'apprend progressivement, tout en sachant demander de l'aide quand c'est nécessaire."
 },
 {
  "id": "MDV-012",
  "matiere": "Mode de vie",
  "theme": "Écrans",
  "niveau": 2,
  "question": "Un usage raisonné des jeux vidéo implique de…",
  "reponses": [
   "fixer des limites de temps",
   "y jouer sans aucune limite",
   "les utiliser uniquement la nuit",
   "ne jamais faire de pause"
  ],
  "correct": "fixer des limites de temps",
  "explication": "Se fixer des limites de temps aide à garder un équilibre entre loisirs numériques et autres activités."
 },
 {
  "id": "MDV-013",
  "matiere": "Mode de vie",
  "theme": "Activité physique",
  "niveau": 2,
  "question": "Combien de temps d'activité physique modérée est recommandé par jour à un collégien ?",
  "reponses": [
   "environ 60 minutes",
   "0 minute",
   "5 minutes",
   "300 minutes"
  ],
  "correct": "environ 60 minutes",
  "explication": "Les recommandations de santé publique conseillent environ 60 minutes d'activité physique quotidienne."
 },
 {
  "id": "MDV-014",
  "matiere": "Mode de vie",
  "theme": "Méthodes de travail",
  "niveau": 2,
  "question": "Faire des fiches de révision aide principalement à…",
  "reponses": [
   "synthétiser et structurer l'essentiel d'un cours",
   "remplacer complètement le cours",
   "perdre du temps sans utilité",
   "copier le cours mot pour mot"
  ],
  "correct": "synthétiser et structurer l'essentiel d'un cours",
  "explication": "Les fiches obligent à sélectionner et reformuler l'essentiel, ce qui favorise la mémorisation."
 },
 {
  "id": "MDV-015",
  "matiere": "Mode de vie",
  "theme": "Organisation",
  "niveau": 1,
  "question": "Un planning de révision réaliste doit notamment inclure…",
  "reponses": [
   "des pauses régulières",
   "aucune pause du tout",
   "uniquement des matières faciles",
   "des sessions de plusieurs heures sans arrêt"
  ],
  "correct": "des pauses régulières",
  "explication": "Des pauses régulières permettent de maintenir la concentration et d'éviter la fatigue excessive."
 },
 {
  "id": "MDV-016",
  "matiere": "Mode de vie",
  "theme": "Sommeil",
  "niveau": 2,
  "question": "Le manque de sommeil chronique chez un collégien peut entraîner…",
  "reponses": [
   "une baisse de concentration et d'humeur",
   "une meilleure mémoire",
   "aucune conséquence",
   "une amélioration des résultats scolaires"
  ],
  "correct": "une baisse de concentration et d'humeur",
  "explication": "Un manque de sommeil répété nuit à la concentration, à l'humeur et aux apprentissages."
 },
 {
  "id": "MDV-017",
  "matiere": "Mode de vie",
  "theme": "Stress",
  "niveau": 2,
  "question": "Avant une évaluation importante, il est conseillé de…",
  "reponses": [
   "dormir suffisamment plutôt que réviser toute la nuit",
   "ne pas dormir pour réviser davantage",
   "sauter le petit-déjeuner",
   "arriver en retard volontairement"
  ],
  "correct": "dormir suffisamment plutôt que réviser toute la nuit",
  "explication": "Un bon sommeil la veille améliore la concentration, plus qu'une nuit blanche de révisions."
 },
 {
  "id": "MDV-018",
  "matiere": "Mode de vie",
  "theme": "Alimentation",
  "niveau": 2,
  "question": "Manger varié (fruits, légumes, protéines...) contribue à…",
  "reponses": [
   "une bonne santé générale et à l'énergie au quotidien",
   "ralentir uniquement la croissance",
   "n'avoir aucun effet sur le corps",
   "remplacer le sommeil"
  ],
  "correct": "une bonne santé générale et à l'énergie au quotidien",
  "explication": "Une alimentation variée et équilibrée soutient la santé, l'énergie et la concentration au quotidien."
 },
 {
  "id": "MDV-019",
  "matiere": "Mode de vie",
  "theme": "Écrans",
  "niveau": 1,
  "question": "Couper les notifications pendant les devoirs peut aider à…",
  "reponses": [
   "limiter les distractions",
   "augmenter la concentration négativement",
   "rendre le travail plus long à coup sûr",
   "empêcher tout appel urgent"
  ],
  "correct": "limiter les distractions",
  "explication": "Réduire les interruptions liées aux notifications aide à rester concentré sur son travail."
 },
 {
  "id": "M-018",
  "matiere": "Maths",
  "theme": "Nombres relatifs",
  "niveau": 2,
  "question": "Quel est le résultat de (-6) × (-2) ?",
  "reponses": [
   "12",
   "-12",
   "8",
   "-8"
  ],
  "correct": "12",
  "explication": "Le produit de deux nombres négatifs est positif : 6×2=12."
 },
 {
  "id": "M-019",
  "matiere": "Maths",
  "theme": "Angles",
  "niveau": 2,
  "question": "La somme des angles d'un triangle vaut toujours…",
  "reponses": [
   "180°",
   "90°",
   "360°",
   "270°"
  ],
  "correct": "180°",
  "explication": "Dans tout triangle, la somme des trois angles est égale à 180°."
 },
 {
  "id": "M-020",
  "matiere": "Maths",
  "theme": "Fractions",
  "niveau": 1,
  "question": "Que vaut 1/4 × 4 ?",
  "reponses": [
   "1",
   "4/4 seulement en apparence",
   "1/16",
   "4"
  ],
  "correct": "1",
  "explication": "1/4 × 4 = 4/4 = 1."
 },
 {
  "id": "F-016",
  "matiere": "Français",
  "theme": "Nature des mots",
  "niveau": 1,
  "question": "Dans « Elle chante joyeusement », quelle est la nature de « joyeusement » ?",
  "reponses": [
   "un adverbe",
   "un adjectif",
   "un nom",
   "un pronom"
  ],
  "correct": "un adverbe",
  "explication": "« Joyeusement » modifie le verbe « chante » : c'est un adverbe."
 },
 {
  "id": "F-017",
  "matiere": "Français",
  "theme": "Vocabulaire",
  "niveau": 1,
  "question": "Le préfixe « re- » dans « refaire » indique généralement…",
  "reponses": [
   "la répétition",
   "le contraire",
   "le lieu",
   "le temps"
  ],
  "correct": "la répétition",
  "explication": "Le préfixe « re- » indique souvent que l'action est faite à nouveau."
 },
 {
  "id": "F-018",
  "matiere": "Français",
  "theme": "Grammaire",
  "niveau": 2,
  "question": "Dans « Le professeur donne un livre à l'élève », quel est le COI ?",
  "reponses": [
   "à l'élève",
   "le professeur",
   "un livre",
   "donne"
  ],
  "correct": "à l'élève",
  "explication": "« À l'élève » répond à la question « donne à qui ? » : c'est le complément d'objet indirect."
 },
 {
  "id": "E-015",
  "matiere": "EMC",
  "theme": "Vivre ensemble",
  "niveau": 1,
  "question": "Dans une classe, le respect des règles communes permet notamment de…",
  "reponses": [
   "vivre ensemble sereinement",
   "créer des conflits",
   "favoriser l'injustice",
   "n'avoir aucun effet"
  ],
  "correct": "vivre ensemble sereinement",
  "explication": "Des règles communes respectées par tous facilitent la vie collective en classe."
 },
 {
  "id": "E-016",
  "matiere": "EMC",
  "theme": "Discriminations",
  "niveau": 2,
  "question": "Se moquer d'un camarade à cause de son origine est…",
  "reponses": [
   "une discrimination interdite par la loi",
   "un jeu sans conséquence",
   "encouragé à l'école",
   "sans lien avec la loi"
  ],
  "correct": "une discrimination interdite par la loi",
  "explication": "La loi française interdit les discriminations fondées sur l'origine, y compris entre élèves."
 },
 {
  "id": "E-017",
  "matiere": "EMC",
  "theme": "Institutions",
  "niveau": 1,
  "question": "Qui dirige un collège ?",
  "reponses": [
   "le principal",
   "le maire",
   "le préfet",
   "le ministre"
  ],
  "correct": "le principal",
  "explication": "Le principal est le chef d'établissement qui dirige un collège en France."
 },
 {
  "id": "E-018",
  "matiere": "EMC",
  "theme": "Sécurité routière",
  "niveau": 2,
  "question": "Traverser au feu rouge piéton est…",
  "reponses": [
   "dangereux et interdit",
   "toujours autorisé",
   "recommandé si personne ne regarde",
   "sans risque"
  ],
  "correct": "dangereux et interdit",
  "explication": "Le feu rouge piéton signale qu'il ne faut pas traverser, pour la sécurité de chacun."
 },
 {
  "id": "E-019",
  "matiere": "EMC",
  "theme": "Égalité filles-garçons",
  "niveau": 2,
  "question": "Un métier peut-il être exercé aussi bien par une femme que par un homme ?",
  "reponses": [
   "Oui, la plupart des métiers ne sont réservés à aucun sexe",
   "Non, jamais",
   "Seulement certains métiers manuels",
   "Seulement les métiers administratifs"
  ],
  "correct": "Oui, la plupart des métiers ne sont réservés à aucun sexe",
  "explication": "L'égalité professionnelle signifie que les métiers ne sont pas réservés à un sexe en particulier."
 },
 {
  "id": "SP-010",
  "matiere": "Sciences physiques",
  "theme": "États de la matière",
  "niveau": 2,
  "question": "L'évaporation de l'eau correspond au passage de l'état…",
  "reponses": [
   "liquide à l'état gazeux",
   "solide à l'état liquide",
   "gazeux à l'état liquide",
   "liquide à l'état solide"
  ],
  "correct": "liquide à l'état gazeux",
  "explication": "L'évaporation transforme l'eau liquide en vapeur d'eau (état gazeux)."
 },
 {
  "id": "SP-011",
  "matiere": "Sciences physiques",
  "theme": "Électricité",
  "niveau": 2,
  "question": "Une pile est un exemple de…",
  "reponses": [
   "générateur électrique",
   "récepteur électrique",
   "interrupteur",
   "conducteur uniquement"
  ],
  "correct": "générateur électrique",
  "explication": "La pile fournit l'énergie électrique nécessaire au fonctionnement d'un circuit : c'est un générateur."
 },
 {
  "id": "SP-012",
  "matiere": "Sciences physiques",
  "theme": "Lumière",
  "niveau": 1,
  "question": "La Lune est-elle une source de lumière ?",
  "reponses": [
   "Non, elle réfléchit la lumière du Soleil",
   "Oui, elle produit sa propre lumière",
   "Non, elle est toujours invisible",
   "Oui, uniquement la nuit"
  ],
  "correct": "Non, elle réfléchit la lumière du Soleil",
  "explication": "La Lune n'émet pas de lumière propre : elle réfléchit la lumière reçue du Soleil."
 },
 {
  "id": "SP-013",
  "matiere": "Sciences physiques",
  "theme": "Système solaire",
  "niveau": 2,
  "question": "Une étoile comme le Soleil se distingue d'une planète car elle…",
  "reponses": [
   "produit sa propre lumière",
   "tourne autour d'une planète",
   "est toujours plus petite qu'une planète",
   "n'a pas de gravité"
  ],
  "correct": "produit sa propre lumière",
  "explication": "Une étoile comme le Soleil produit sa propre lumière grâce à des réactions internes, contrairement à une planète."
 },
 {
  "id": "S-009",
  "matiere": "SVT",
  "theme": "Respiration",
  "niveau": 2,
  "question": "Chez l'humain, l'air riche en dioxygène est capté au niveau…",
  "reponses": [
   "des alvéoles pulmonaires",
   "de l'estomac",
   "du foie",
   "des reins"
  ],
  "correct": "des alvéoles pulmonaires",
  "explication": "Les échanges gazeux respiratoires se font au niveau des alvéoles pulmonaires, dans les poumons."
 },
 {
  "id": "S-010",
  "matiere": "SVT",
  "theme": "Digestion",
  "niveau": 2,
  "question": "Le rôle des dents dans la digestion est de…",
  "reponses": [
   "commencer à fragmenter les aliments",
   "produire des sucs digestifs",
   "filtrer le sang",
   "absorber les nutriments"
  ],
  "correct": "commencer à fragmenter les aliments",
  "explication": "La mastication par les dents découpe et broie les aliments, première étape de la digestion."
 },
 {
  "id": "S-011",
  "matiere": "SVT",
  "theme": "Occupation des milieux",
  "niveau": 2,
  "question": "Un milieu aquatique et un milieu terrestre diffèrent notamment par…",
  "reponses": [
   "la disponibilité en eau et en dioxygène",
   "l'absence totale de vie dans l'un des deux",
   "l'absence de lumière dans les deux",
   "l'absence de température dans les deux"
  ],
  "correct": "la disponibilité en eau et en dioxygène",
  "explication": "Les êtres vivants doivent s'adapter aux conditions spécifiques (eau, oxygène, température) de chaque milieu."
 },
 {
  "id": "S-012",
  "matiere": "SVT",
  "theme": "Peuplement des milieux",
  "niveau": 1,
  "question": "Une graine a besoin notamment de… pour germer.",
  "reponses": [
   "d'eau, de chaleur et parfois de lumière",
   "d'obscurité totale et de froid extrême",
   "de sel uniquement",
   "de rien du tout"
  ],
  "correct": "d'eau, de chaleur et parfois de lumière",
  "explication": "La germination d'une graine nécessite généralement de l'eau, une température adaptée et parfois de la lumière."
 },
 {
  "id": "A-009",
  "matiere": "Anglais",
  "theme": "Vocabulaire",
  "niveau": 1,
  "question": "How do you say « la famille » in English?",
  "reponses": [
   "the family",
   "the friend",
   "the school",
   "the house"
  ],
  "correct": "the family",
  "explication": "« The family » signifie « la famille »."
 },
 {
  "id": "A-010",
  "matiere": "Anglais",
  "theme": "Prépositions de lieu",
  "niveau": 1,
  "question": "Complete: « The book is ___ the table. » (sur)",
  "reponses": [
   "on",
   "in",
   "under",
   "at"
  ],
  "correct": "on",
  "explication": "« On » signifie « sur », indiquant une position au-dessus d'une surface."
 },
 {
  "id": "A-011",
  "matiere": "Anglais",
  "theme": "Be",
  "niveau": 2,
  "question": "Complete: « We ___ students. »",
  "reponses": [
   "are",
   "is",
   "am",
   "be"
  ],
  "correct": "are",
  "explication": "Avec « we », le verbe « to be » se conjugue « are »."
 },
 {
  "id": "A-012",
  "matiere": "Anglais",
  "theme": "Vocabulaire - nombres",
  "niveau": 1,
  "question": "How do you say « dix » in English?",
  "reponses": [
   "ten",
   "nine",
   "eleven",
   "two"
  ],
  "correct": "ten",
  "explication": "« Ten » signifie « dix » en anglais."
 },
 {
  "id": "A-013",
  "matiere": "Anglais",
  "theme": "Questions",
  "niveau": 2,
  "question": "Choose the correct question: « ___ is your name? »",
  "reponses": [
   "What",
   "Where",
   "When",
   "Why"
  ],
  "correct": "What",
  "explication": "« What » interroge sur une chose ou une information, ici le nom : « What is your name? »"
 },
 {
  "id": "E-020",
  "matiere": "Espagnol",
  "theme": "Vocabulaire",
  "niveau": 1,
  "question": "Comment dit-on « l'école » en espagnol ?",
  "reponses": [
   "la escuela",
   "la casa",
   "el coche",
   "el libro"
  ],
  "correct": "la escuela",
  "explication": "« La escuela » signifie « l'école »."
 },
 {
  "id": "E-021",
  "matiere": "Espagnol",
  "theme": "Verbe ser",
  "niveau": 2,
  "question": "Complète : « Tú ___ mi amigo. »",
  "reponses": [
   "eres",
   "soy",
   "es",
   "somos"
  ],
  "correct": "eres",
  "explication": "« Eres » est la forme de « ser » pour « tú » (tu)."
 },
 {
  "id": "E-022",
  "matiere": "Espagnol",
  "theme": "Vocabulaire famille",
  "niveau": 1,
  "question": "Comment dit-on « ma mère » en espagnol ?",
  "reponses": [
   "mi madre",
   "mi padre",
   "mi hermana",
   "mi tía"
  ],
  "correct": "mi madre",
  "explication": "« Mi madre » signifie « ma mère »."
 },
 {
  "id": "E-023",
  "matiere": "Espagnol",
  "theme": "Nombres",
  "niveau": 1,
  "question": "Comment écrit-on le nombre 10 en espagnol ?",
  "reponses": [
   "diez",
   "nueve",
   "once",
   "ocho"
  ],
  "correct": "diez",
  "explication": "« Diez » signifie 10 en espagnol."
 },
 {
  "id": "E-024",
  "matiere": "Espagnol",
  "theme": "Salutations",
  "niveau": 1,
  "question": "Comment dit-on « au revoir » en espagnol ?",
  "reponses": [
   "adiós",
   "hola",
   "gracias",
   "por favor"
  ],
  "correct": "adiós",
  "explication": "« Adiós » signifie « au revoir » en espagnol."
 },
 {
  "id": "T-007",
  "matiere": "Technologie",
  "theme": "Habitat et ouvrages",
  "niveau": 2,
  "question": "Les fondations d'un bâtiment servent à…",
  "reponses": [
   "répartir son poids et assurer sa stabilité",
   "décorer la façade",
   "économiser de l'eau",
   "produire de l'électricité"
  ],
  "correct": "répartir son poids et assurer sa stabilité",
  "explication": "Les fondations transmettent le poids du bâtiment au sol et assurent sa stabilité."
 },
 {
  "id": "T-008",
  "matiere": "Technologie",
  "theme": "Matériaux de construction",
  "niveau": 2,
  "question": "Le bois utilisé en construction est apprécié notamment pour…",
  "reponses": [
   "être renouvelable et bon isolant",
   "être incassable à 100%",
   "être imperméable à l'eau et au feu",
   "être le matériau le plus lourd"
  ],
  "correct": "être renouvelable et bon isolant",
  "explication": "Le bois est un matériau renouvelable, relativement léger et avec de bonnes qualités d'isolation."
 },
 {
  "id": "T-009",
  "matiere": "Technologie",
  "theme": "Structures",
  "niveau": 1,
  "question": "Un pont sert principalement à…",
  "reponses": [
   "franchir un obstacle (rivière, vallée...)",
   "stocker de l'eau",
   "produire de l'énergie",
   "décorer une ville uniquement"
  ],
  "correct": "franchir un obstacle (rivière, vallée...)",
  "explication": "Un pont permet de franchir un obstacle naturel ou artificiel comme une rivière ou une route."
 },
 {
  "id": "T-010",
  "matiere": "Technologie",
  "theme": "Objets techniques",
  "niveau": 2,
  "question": "Une maquette permet notamment de…",
  "reponses": [
   "tester et visualiser un projet avant sa construction réelle",
   "remplacer définitivement la construction",
   "être interdite dans les projets scolaires",
   "n'avoir aucune utilité"
  ],
  "correct": "tester et visualiser un projet avant sa construction réelle",
  "explication": "La maquette aide à visualiser et vérifier un projet technique avant sa réalisation à grande échelle."
 },
 {
  "id": "G-011",
  "matiere": "Géographie",
  "theme": "Développement",
  "niveau": 2,
  "question": "Un pays avec un IDH élevé se caractérise généralement par…",
  "reponses": [
   "une bonne espérance de vie, un bon accès à l'éducation et un bon niveau de vie",
   "une population très faible uniquement",
   "un climat toujours tropical",
   "l'absence totale de villes"
  ],
  "correct": "une bonne espérance de vie, un bon accès à l'éducation et un bon niveau de vie",
  "explication": "Un IDH élevé traduit de bonnes conditions de vie sur ces trois critères combinés."
 },
 {
  "id": "G-012",
  "matiere": "Géographie",
  "theme": "Démographie",
  "niveau": 1,
  "question": "La population mondiale a franchi le cap des 8 milliards d'habitants…",
  "reponses": [
   "au début des années 2020",
   "au Moyen Âge",
   "au XIXe siècle",
   "elle ne l'a jamais atteint"
  ],
  "correct": "au début des années 2020",
  "explication": "La population mondiale a dépassé les 8 milliards d'habitants en novembre 2022."
 },
 {
  "id": "G-013",
  "matiere": "Géographie",
  "theme": "Ressources en eau",
  "niveau": 2,
  "question": "L'agriculture est, dans le monde, le secteur qui consomme…",
  "reponses": [
   "le plus d'eau douce",
   "le moins d'eau douce",
   "aucune eau",
   "uniquement de l'eau de mer"
  ],
  "correct": "le plus d'eau douce",
  "explication": "L'agriculture (irrigation notamment) est le premier secteur consommateur d'eau douce dans le monde."
 },
 {
  "id": "G-014",
  "matiere": "Géographie",
  "theme": "Risques naturels",
  "niveau": 2,
  "question": "Une carte des risques permet notamment de…",
  "reponses": [
   "identifier les zones exposées à un danger naturel",
   "prévoir la météo du lendemain uniquement",
   "remplacer les secours d'urgence",
   "supprimer les risques naturels"
  ],
  "correct": "identifier les zones exposées à un danger naturel",
  "explication": "Ces cartes aident les pouvoirs publics et les habitants à connaître les zones exposées et à s'y préparer."
 },
 {
  "id": "G-015",
  "matiere": "Géographie",
  "theme": "Villes et population",
  "niveau": 2,
  "question": "L'exode rural désigne…",
  "reponses": [
   "le départ des populations des campagnes vers les villes",
   "l'installation des citadins à la campagne",
   "la disparition des villes",
   "l'arrêt total des migrations"
  ],
  "correct": "le départ des populations des campagnes vers les villes",
  "explication": "L'exode rural est un mouvement massif de population des zones rurales vers les zones urbaines."
 },
 {
  "id": "T-011",
  "matiere": "Technologie",
  "theme": "Habitat et ouvrages",
  "niveau": 2,
  "question": "Un architecte est un professionnel qui…",
  "reponses": [
   "conçoit les plans d'un bâtiment",
   "répare uniquement les routes",
   "vend des meubles",
   "gère les impôts locaux"
  ],
  "correct": "conçoit les plans d'un bâtiment",
  "explication": "L'architecte conçoit et dessine les plans d'un bâtiment avant sa construction."
 },
 {
  "id": "T-012",
  "matiere": "Technologie",
  "theme": "Matériaux de construction",
  "niveau": 1,
  "question": "Le verre utilisé dans les fenêtres est apprécié notamment pour…",
  "reponses": [
   "laisser passer la lumière",
   "être un très bon isolant thermique à lui seul",
   "être incassable",
   "être le matériau le plus léger qui existe"
  ],
  "correct": "laisser passer la lumière",
  "explication": "Le verre est utilisé en construction principalement car il est transparent et laisse entrer la lumière."
 },
 {
  "id": "T-013",
  "matiere": "Technologie",
  "theme": "Structures",
  "niveau": 2,
  "question": "Un barrage sert notamment à…",
  "reponses": [
   "retenir l'eau et parfois produire de l'électricité",
   "accélérer le courant d'une rivière",
   "empêcher toute production d'énergie",
   "assécher définitivement une vallée"
  ],
  "correct": "retenir l'eau et parfois produire de l'électricité",
  "explication": "Un barrage retient l'eau d'un cours d'eau, ce qui permet aussi souvent de produire de l'électricité (hydroélectricité)."
 },
 {
  "id": "T-014",
  "matiere": "Technologie",
  "theme": "Énergie dans le bâtiment",
  "niveau": 1,
  "question": "Un double vitrage sur une fenêtre sert notamment à…",
  "reponses": [
   "limiter les pertes de chaleur",
   "laisser entrer plus de froid",
   "empêcher toute lumière de passer",
   "remplacer le chauffage entièrement"
  ],
  "correct": "limiter les pertes de chaleur",
  "explication": "Le double vitrage améliore l'isolation thermique d'un logement en limitant les déperditions de chaleur."
 },
 {
  "id": "T-015",
  "matiere": "Technologie",
  "theme": "Objets techniques",
  "niveau": 1,
  "question": "Avant de construire un ouvrage, on réalise généralement une étude de faisabilité pour…",
  "reponses": [
   "vérifier que le projet est réalisable",
   "décorer le futur bâtiment",
   "remplacer les ouvriers",
   "supprimer le besoin de plans"
  ],
  "correct": "vérifier que le projet est réalisable",
  "explication": "L'étude de faisabilité permet de vérifier qu'un projet est techniquement et financièrement réalisable avant de le lancer."
 },
 {
  "id": "E-025",
  "matiere": "EMC",
  "theme": "Vivre ensemble",
  "niveau": 2,
  "question": "Un délégué de classe est élu pour…",
  "reponses": [
   "représenter les élèves auprès de l'administration",
   "donner des punitions",
   "remplacer les professeurs",
   "décider seul du règlement"
  ],
  "correct": "représenter les élèves auprès de l'administration",
  "explication": "Le délégué de classe est élu par ses camarades pour porter leur voix, notamment lors des conseils de classe."
 },
 {
  "id": "E-026",
  "matiere": "EMC",
  "theme": "Discriminations",
  "niveau": 1,
  "question": "Le harcèlement scolaire peut prendre la forme de…",
  "reponses": [
   "moqueries répétées, exclusion ou violences",
   "un simple désaccord ponctuel",
   "une compétition sportive",
   "un exercice noté"
  ],
  "correct": "moqueries répétées, exclusion ou violences",
  "explication": "Le harcèlement se caractérise par la répétition d'actes de moqueries, d'exclusion ou de violences envers une même personne."
 },
 {
  "id": "E-027",
  "matiere": "EMC",
  "theme": "Sécurité routière",
  "niveau": 1,
  "question": "Le port de la ceinture de sécurité en voiture est…",
  "reponses": [
   "obligatoire pour tous les passagers",
   "facultatif pour les passagers arrière",
   "interdit pour les enfants",
   "réservé au conducteur uniquement"
  ],
  "correct": "obligatoire pour tous les passagers",
  "explication": "En France, le port de la ceinture de sécurité est obligatoire pour tous les occupants d'un véhicule."
 },
 {
  "id": "S-013",
  "matiere": "SVT",
  "theme": "Respiration",
  "niveau": 1,
  "question": "Le rythme respiratoire augmente généralement…",
  "reponses": [
   "pendant un effort physique",
   "pendant le sommeil profond uniquement",
   "jamais, il est toujours identique",
   "uniquement quand on a froid"
  ],
  "correct": "pendant un effort physique",
  "explication": "L'effort physique augmente les besoins en oxygène du corps, ce qui accélère la respiration."
 },
 {
  "id": "S-014",
  "matiere": "SVT",
  "theme": "Digestion",
  "niveau": 1,
  "question": "Le gros intestin joue notamment un rôle dans…",
  "reponses": [
   "l'absorption de l'eau et la formation des selles",
   "la mastication des aliments",
   "la production de salive",
   "la vision"
  ],
  "correct": "l'absorption de l'eau et la formation des selles",
  "explication": "Le gros intestin absorbe l'eau restante et forme les selles avant leur évacuation."
 },
 {
  "id": "S-015",
  "matiere": "SVT",
  "theme": "Occupation des milieux",
  "niveau": 2,
  "question": "Un être vivant qui hiberne pendant l'hiver le fait principalement pour…",
  "reponses": [
   "économiser de l'énergie face au froid et au manque de nourriture",
   "se reproduire plus vite",
   "voyager plus loin",
   "grandir plus vite"
  ],
  "correct": "économiser de l'énergie face au froid et au manque de nourriture",
  "explication": "L'hibernation permet à certains animaux de survivre à des conditions hivernales difficiles en réduisant leurs besoins énergétiques."
 },
 {
  "id": "E-028",
  "matiere": "Espagnol",
  "theme": "Vocabulaire",
  "niveau": 1,
  "question": "Comment dit-on « le professeur » en espagnol ?",
  "reponses": [
   "el profesor",
   "el alumno",
   "el director",
   "el libro"
  ],
  "correct": "el profesor",
  "explication": "« El profesor » signifie « le professeur »."
 },
 {
  "id": "E-029",
  "matiere": "Espagnol",
  "theme": "Verbe estar",
  "niveau": 2,
  "question": "Complète : « Yo ___ en el colegio. »",
  "reponses": [
   "estoy",
   "soy",
   "eres",
   "es"
  ],
  "correct": "estoy",
  "explication": "« Estoy » est la forme de « estar » à la première personne du singulier, utilisée pour un lieu."
 },
 {
  "id": "E-030",
  "matiere": "Espagnol",
  "theme": "Questions",
  "niveau": 1,
  "question": "Comment demande-t-on « Quel âge as-tu ? » en espagnol ?",
  "reponses": [
   "¿Cuántos años tienes?",
   "¿Cómo te llamas?",
   "¿Dónde vives?",
   "¿Qué hora es?"
  ],
  "correct": "¿Cuántos años tienes?",
  "explication": "« ¿Cuántos años tienes? » interroge sur l'âge de la personne."
 },
 {
  "id": "A-014",
  "matiere": "Anglais",
  "theme": "Vocabulaire",
  "niveau": 1,
  "question": "How do you say « la maison » in English?",
  "reponses": [
   "the house",
   "the school",
   "the street",
   "the garden"
  ],
  "correct": "the house",
  "explication": "« The house » signifie « la maison »."
 },
 {
  "id": "A-015",
  "matiere": "Anglais",
  "theme": "Prépositions de temps",
  "niveau": 1,
  "question": "Complete: « My English lesson is ___ Monday. »",
  "reponses": [
   "on",
   "in",
   "at",
   "for"
  ],
  "correct": "on",
  "explication": "On utilise « on » devant un jour de la semaine : « on Monday »."
 },
 {
  "id": "SP-014",
  "matiere": "Sciences physiques",
  "theme": "Système solaire",
  "niveau": 1,
  "question": "La Lune tourne autour de…",
  "reponses": [
   "la Terre",
   "le Soleil directement",
   "Mars",
   "Vénus"
  ],
  "correct": "la Terre",
  "explication": "La Lune est un satellite naturel qui tourne autour de la Terre."
 },
 {
  "id": "SP-015",
  "matiere": "Sciences physiques",
  "theme": "États de la matière",
  "niveau": 1,
  "question": "À l'état gazeux, les particules qui composent la matière sont…",
  "reponses": [
   "très éloignées les unes des autres",
   "collées les unes aux autres",
   "inexistantes",
   "toujours immobiles"
  ],
  "correct": "très éloignées les unes des autres",
  "explication": "À l'état gazeux, les particules sont très espacées et se déplacent librement, contrairement à l'état solide."
 },
 {
  "id": "H-015",
  "matiere": "Histoire",
  "theme": "Moyen Âge",
  "niveau": 2,
  "question": "Clovis, roi des Francs, se convertit au christianisme vers…",
  "reponses": [
   "496",
   "1789",
   "800",
   "1066"
  ],
  "correct": "496",
  "explication": "Clovis, roi des Francs, se convertit au christianisme à la fin du Ve siècle, vers 496."
 },
 {
  "id": "H-016",
  "matiere": "Histoire",
  "theme": "Renaissance",
  "niveau": 2,
  "question": "Léonard de Vinci, artiste et savant de la Renaissance, est notamment célèbre pour avoir peint…",
  "reponses": [
   "la Joconde",
   "la Liberté guidant le peuple",
   "Guernica",
   "la Nuit étoilée"
  ],
  "correct": "la Joconde",
  "explication": "Léonard de Vinci est l'auteur de la Joconde, l'un des tableaux les plus célèbres de la Renaissance."
 },
 {
  "id": "M-021",
  "matiere": "Maths",
  "theme": "Symétrie axiale",
  "niveau": 2,
  "question": "Le symétrique d'un point A par rapport à un axe se trouve…",
  "reponses": [
   "à la même distance de l'axe, de l'autre côté",
   "toujours au même endroit que A",
   "à une distance aléatoire",
   "toujours sur l'axe lui-même"
  ],
  "correct": "à la même distance de l'axe, de l'autre côté",
  "explication": "Un point et son symétrique sont situés à égale distance de l'axe de symétrie, de part et d'autre de celui-ci."
 },
 {
  "id": "F-019",
  "matiere": "Français",
  "theme": "Types de phrases",
  "niveau": 1,
  "question": "« Est-ce que tu viens demain ? » est une phrase…",
  "reponses": [
   "interrogative",
   "déclarative",
   "exclamative",
   "injonctive"
  ],
  "correct": "interrogative",
  "explication": "Cette phrase pose une question : c'est une phrase de type interrogatif."
 },
 {
  "id": "MDV-020",
  "matiere": "Mode de vie",
  "theme": "Autonomie",
  "niveau": 1,
  "question": "Apprendre à gérer son emploi du temps au collège aide notamment à…",
  "reponses": [
   "gagner en autonomie pour la suite de la scolarité",
   "n'avoir aucune utilité",
   "remplacer les parents",
   "éviter tout effort"
  ],
  "correct": "gagner en autonomie pour la suite de la scolarité",
  "explication": "Apprendre à s'organiser dès le collège prépare progressivement à une plus grande autonomie."
 }
];
