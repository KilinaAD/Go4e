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
 }
];
