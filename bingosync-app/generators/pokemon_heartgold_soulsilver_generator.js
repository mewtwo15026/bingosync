bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    "$50.000 on hand",
    "20 TMs",
    "3 Pokémon that start with the same letter",
    "3 baby Pokémon",
    "4x super effective move",
    "7 different Pokéballs",
    "7 different apricorns",
    "A Lake Guardian",
    "A Pikachu clone",
    "A Pokémon of each type",
    "A Pokémon that changes form in weather",
    "A Pokémon that’s 15 Ibs or less",
    "A Pokémon that’s 20” or more",
    "A Pokémon that’s 2” or less",
    "A Pokémon that’s 300 Ibs. or more",
    "A Pokémon too big to walk in houses",
    "A Pokémon with",
    "A Pokémon with 4 STAB moves",
    "A Pokémon with 4 non-TM status moves",
    "A legendary beast",
    "A legendary bird",
    "A mythical Pokémon",
    "A negative ability",
    "A pseudo-legendary",
    "A shiny Pokémon",
    "Ability from a legendary",
    "Ability that affects Attack",
    "Ability that affects Speed",
    "Ability that gives an immunity",
    "An Eeveelution",
    "Battle Eusine",
    "Battle a legendary",
    "Black Belt, Expert Belt or Focus Sash",
    "BlackGlasses, Wise Glasses or Choice Specs",
    "Call Youngster Joey",
    "Catch a Pokémon Super Smash Bros Brawl",
    "Catch a Pokémon in the Safari Zone",
    "Catch a Pokémon with a Rod",
    "Catch a cat Pokémon",
    "Catch a dog Pokémon",
    "Catch a roamer",
    "Catch a starter",
    "Charcoal",
    "Defeat 10 Hikers",
    "Defeat 10 Youngsters",
    "Defeat a Gym Leader with a Pokémon 10 levels lower",
    "Defeat a Gym Leader with animations on",
    "Defeat a Pokémon with either Burn or Poison",
    "Defeat a doubles partner",
    "Defeat all 13 trainers in the Lighthouse",
    "Defeat all 4 trainers at Lake of Rage",
    "Defeat all 4 trainers in Goldenrod Tunnel",
    "Defeat all 4 trainers on Route 47",
    "Defeat all Rocket HQ Pokémon",
    "Defeat all trainers in National Park",
    "Ditto, Stantler, Kecleon or Chatot",
    "Do an in-game trade",
    "Don’t heal at Pokémon Centers",
    "Don’t use Repels",
    "Don’t use X items",
    "Don’t use any TMs",
    "Dunsparce, Wobbuffet or Qwilfish",
    "Electrizer, Magmarizer, Protector or Reaper Cloth",
    "Encounter Suicune on Route 42",
    "Encounter a Pokémon with a unique theme",
    "Everstone",
    "Evolve a Pokémon with a stone",
    "Evolve the same Pokémon twice",
    "Exp. Share",
    "Finish a battle in redbar",
    "Freeze a Pokémon",
    "Get 2 Pokémon with the same nature",
    "Get Kenya",
    "Get Shuckie",
    "Get a Headbutt encounter",
    "Get a PokéBall from Kurt using Apricorns",
    "Get a Silver Wind/Ancientpower/Ominous Wind boost",
    "Get a haircut",
    "Get an item from your companion",
    "Get dressed as a Rocket Grunt",
    "Get gift Dratini",
    "Get gift Eevee",
    "Get gift Tyrogue",
    "Get through Dark Cave without Flash",
    "Glacier Badge",
    "Heracross or Aipom",
    "Hit 5 times with a multi-hit move",
    "Itemfinder",
    "Land a move with 70% accuracy",
    "Lightning Rod or Storm Drain",
    "Lugia or Ho-Oh",
    "Luvdisc, Corsola or Finneon",
    "Magmotar or Electevire",
    "Miltank or Tauros",
    "Mineral Badge",
    "Mystic Water",
    "No money on hand or mom",
    "Numel or Carvanha",
    "Obtain a fossil Pokémon",
    "One of the Regis",
    "Own 10 Normal types",
    "Palkia, Dialga or Giratina",
    "Participate in Pokéathlon",
    "Play Voltorb Flip",
    "Push all boulders in the holes in Ice Path",
    "Radio Card",
    "Release a legendary",
    "Release starter before level 11",
    "Slowpoketail",
    "Solve a puzzle in Ruins of Alph",
    "Stop starter from evolving 6 times",
    "TM05 Roar",
    "TM09 Bullet Seed",
    "TM18 Rain Dance",
    "TM21 (Frustration) or TM27 (Return)",
    "TM36 Sludge Bomb",
    "TM43 Secret Power",
    "TM70 Flash",
    "Teddiursa or Phanpy",
    "Use Struggle",
    "Weather move",
    "Win Bug Catching Contest",
    "Zangoose or Seviper",
    "€10.000 on mom"
];
