// const miceNames = 'miceNames';
let defaultValue = 5;
module.exports.Map = new Map([
/* ==============================
Indigenous Mice
============================== */
	["white", "White"],
	["grey", "Grey"],
	["brown", "Brown"],
	["lightning rod", "Lightning Rod"],
	["cowardly", "Cowardly"],
	["field", "Field"],
	["spotted", "Spotted"],
	["tiny", "Tiny"],
	["flying", "Flying"],
	["scruffy", "Scruffy"],
	["dwarf", "Dwarf"],
	["speedy", "Speedy"],
	["magic", "Magic"],
	["spud", "Spud"],
	["steel", "Steel"],
	["pugilist", "Pugilist"],
	["longtail", "Longtail"],
	["nibbler", "Nibbler"],
	["farmhand", "Farmhand"],
	["burglar", "Burglar"],
	["master burglar", "Master Burglar"],
	["captain croissant", "Captain Croissant"],
	["pirate", "Pirate"],
	["black widow", "Black Widow"], ["bw", "Black Widow"],
	
	["winter games", "Winter Games"],
	["trampoline", "Trampoline"],
	["hurdle", "Hurdle"],
	["wave racer", "Wave Racer"],
	["extreme everysports", "Extreme Everysports"],
	
/* ==============================
Mountain Mice
============================== */
	["pebble", "Pebble"],
	["frozen", "Frozen"],
	["fog", "Fog"],
	["frosty snow", "Frosty Snow"],
	["granite", "Granite"],
	["gold", "Gold"],
	["diamond", "Diamond"],
	["silvertail", "Silvertail"],
	["craggy Ore", "Craggy Ore"],
	["slope swimmer", "Slope Swimmer"],
	["mountain", "Mountain"],
	["abominable snow", "Abominable Snow"],
	
/* ==============================
Whisker Woods
============================== */
	["moosker", "Moosker"],
	["wiggler", "Wiggler"],
	["sylvan", "Sylvan"],
	["frog", "Frog"],
	["chameleon", "Chameleon"],
	["bear", "Bear"],
	["shaman", "Shaman"],
	["treant", "Treant"],
	["curious chemist", "Curious Chemist"],
	["wicked witch of whisker woods", "Wicked Witch of Whisker Woods"], ["wicked witch", "Wicked Witch of Whisker Woods"],
	["elven princess", "Elven Princess"],
	["cherry", "Cherry"],
	["foxy", "Foxy"],
	["goblin", "Goblin"],
	["eagle owl", "Eagle Owl"],
	["cyclops", "Cyclops"],
	["goldleaf", "Goldleaf"],
	["centaur", "Centaur"],
	["tiger", "Tiger"],
	["fairy", "Fairy"],
	["nomad", "Nomad"],
	["troll", "Troll"],
	["harpy", "Harpy"],
	["silth", "Silth"],

/* ==============================
Laboratory
============================== */
	["squeaker bot", "Squeaker Bot"],
	["mutated white", "Mutated White"],
	["mutated grey", "Mutated Grey"],
	["mutated brown", "Mutated Brown"],
	["clumsy chemist", "Clumsy Chemist"],
	["sludge scientist", "Sludge Scientist"],
	["bionic", "Bionic"],
	["monster", "Monster"],
	["mutated mole", "Mutated Mole"],
	
/* ==============================
Mousoleum
============================== */
	["gluttonous zombie", "Gluttonous Zombie"],
	["zombie", "Zombie"],
	["coffin zombie", "Coffin Zombie"],
	["ravenous zombie", "Ravenous Zombie"],
	["bat", "Bat"],
	["giant snail", "Giant Snail"],
	["ghost", "Ghost"],
	["vampire", "Vampire"],
	["mummy", "Mummy"],
	["lycan", "Lycan"],
	["mousevina von vermin", "Mousevina von Vermin"], ["mousevina", "Mousevina von Vermin"],
	
/* ==============================
Town of Digby
============================== */
	["mole", "Mole"],
	["nugget", "Nugget"],
	["core sample", "Core Sample"],
	["rock muncher", "Rock Muncher"],
	["industrious digger", "Industrious Digger"],
	["stone cutter", "Stone Cutter"],
	["demolitions", "Demolitions"],
	["miner", "Miner"],
	["lambent crystal", "Lambent Crystal"],
	["itty-bitty burroughs", "Itty-Bitty Burroughs"],
	["subterranean", "Subterranean"],
	["big bad burroughs", "Big Bad Burroughs"], ["bbb", "Big Bad Burroughs"],
	
/* ==============================
Furoma
============================== */
	["hapless", "Hapless"],
	["worker", "Worker"],
	["ninja", "Ninja"],
	["dumpling chef", "Dumpling Chef"],
	["archer", "Archer"],
	["kung fu", "Kung Fu"],
	["monk", "Monk"],
	["samurai", "Samurai"],
	["student of the cheese belt", "Student of the Cheese Belt"],
	["student of the cheese claw", "Student of the Cheese Claw"],
	["student of the cheese fang", "Student of the Cheese Fang"],
	["assassin", "Assassin"],
	["master of the cheese belt", "Master of the Cheese Belt"],
	["master of the cheese claw", "Master of the Cheese Claw"],
	["master of the cheese fang", "Master of the Cheese Fang"],
	["master of the dojo", "Master of the Dojo"], ["mojo", "Master of the Dojo"],
	["dojo sensei", "Dojo Sensei"],
	
/* ==============================
Forgotten Mice
============================== */
	["skeleton", "Skeleton"],
	["realm ripper", "Realm Ripper"],
	["keeper's assistant", "Keeper''s Assistant"],
	["keeper", "Keeper"],
	["gargoyle", "Gargoyle"],
	["ooze", "Ooze"],
	["scavenger", "Scavenger"],
	["spider", "Spider"],
	["sorcerer", "Sorcerer"],
	["spectre", "Spectre"],
	["terror knight", "Terror Knight"],
	["golem", "Golem"],
	["gate guardian", "Gate Guardian"],
	["gorgon", "Gorgon"],
	["reaper", "Reaper"],
	["wight", "Wight"],
	["lich", "Lich"],
	["chrono", "Chrono"],
	["acolyte", "Acolyte"],
	
/* ==============================
SS Huntington
============================== */
	["swabbie", "Swabbie"],
	["pinchy", "Pinchy"],
	["briegull", "Briegull"],
	["shelder", "Shelder"],
	["shipwrecked", "Shipwrecked"],
	["salt water snapper", "Salt Water Snapper"],
	["cook", "Cook"],
	["mermouse", "Mermouse"],
	["bottled", "Bottled"],
	["water nymph", "Water Nymph"],
	["buccaneer", "Buccaneer"],
	["siren", "Siren"],
	["captain", "Captain"],
	["squeaken", "Squeaken"],
	["leviathan", "Leviathan"],
	["hydra", "Hydra"],

/* ==============================
Tribal Isles
============================== */
	["taleweaver", "Taleweaver"], // Elub Shore
	["scout", "Scout"],
	["alchemist", "Alchemist"],
	["pack", "Pack"],
	["mystic", "Mystic"],
	["alnitak", "Alnitak"],
	["soothsayer", "Soothsayer"],
	["vanquisher", "Vanquisher"],
	["elder", "Elder"],
	["protector", "Protector"],
	["champion", "Champion"],
	["elub chieftain", "Elub Chieftain"],
	
	["narrator", "Narrator"], // Nerg Plains
	["pathfinder", "Pathfinder"],
	["caretaker", "Caretaker"],
	["finder", "Finder"],
	["beast tamer", "Beast Tamer"],
	["alnilam", "Alnilam"],
	["conjurer", "Conjurer"],
	["conqueror", "Conqueror"],
	["grandfather", "Grandfather"],
	["defender", "Defender"],
	["slayer", "Slayer"],
	["nerg chieftain", "Nerg Chieftain"],
	
	["trailblazer", "Trailblazer"], // Derr Dunes
	["wordsmith", "Wordsmith"],
	["healer", "Healer"],
	["grunt", "Grunt"],
	["spellbinder", "Spellbinder"],
	["mintaka", "Mintaka"],
	["seer", "Seer"],
	["renegade", "Renegade"],
	["aged", "Aged"],
	["guardian", "Guardian"],
	["gladiator", "Gladiator"],
	["derr chieftain", "Derr Chieftain"],
	

/* ==============================
Jungle of Dread and Dracano
============================== */
	["pygmy wrangler", "Pygmy Wrangler"],
	["swarm of pygmy mice", "Swarm of Pygmy Mice"], ["swarm", "Swarm of Pygmy Mice"],
	["primal", "Primal"],
	["stonework warrior", "Stonework Warrior"],
	["jurassic", "Jurassic"],
	["chitinous", "Chitinous"],
	["magma carrier", "Magma Carrier"],
	["fetid swamp", "Fetid Swamp"],
	["whelpling", "Whelpling"],
	["dracnoic warden", "Dracnoic Warden"],
	["dragon", "Dragon"],
	
/* ==============================
Balack's Cove
============================== */
	["davy jones", "Davy Jones"],
	["tidal fisher", "Tidal Fisher"],
	["twisted fiend", "Twisted Fiend"],
	["brimstone", "Brimstone"],
	["riptide", "Riptide"],
	["enslaved spirit", "Enslaved Spirit"],
	["elub lich", "Elub Lich"],
	["nerg lich", "Nerg Lich"],
	["derr lich", "Derr Lich"],
	["balack the banished", "Balack the Banished"], ["balack", "Balack the Banished"],
	
/* ==============================
King's Gauntlet
============================== */
	["wound up white", "Wound Up White"], // tier 1
	["hapless marionette", "Hapless Marionette"],
	["toy sylvan", "Toy Sylvan"],
	["clockwork samurai", "Clockwork Samurai"],
	["sock puppet ghost", "Sock Puppet Ghost"],
	["puppet master", "Puppet Master"],
	
	["impersonator", "Impersonator"], // tier 2
	["lockpick", "Lockpick"],
	["bandit", "Bandit"],
	["stealth", "Stealth"],
	["escape artist", "Escape Artist"],
	["rogue", "Rogue"],
	
	["fencer", "Fencer"], // tier 3
	["page", "Page"],
	["berserker", "Berserker"],
	["knight", "Knight"],
	["phalanx", "Phalanx"],
	["cavalier", "Cavalier"],
	
	["cowbell", "Cowbell"], // tier 4
	["drummer", "Drummer"],
	["dancer", "Dancer"],
	["fiddler", "Fiddler"],
	["guqin player", "Guqin Player"],

	["black mage", "Black Mage"], // tier 5
	["terra", "Terra"],
	["ignis", "Ignis"],
	["zephyr", "Zephyr"],
	["aquos", "Aquos"],
	
	["sacred shrine", "Sacred Shrine"], // tier 6
	["white mage", "White Mage"],
	["paladin", "Paladin"],
	
	["necromancer", "Necromancer"], // tier 7
	["fiend", "Fiend"],
	
	["eclipse", "Eclipse"], // tier 8
	
/* ==============================
Seasonal Garden only in Zugzwang Scroll Case?
============================== */

/* ==============================
Zugzwang Tower
============================== */
	["chess master", "Chess Master"], ["cm", "Chess Master"],
	["mystic pawn", "Mystic Pawn"],
	["mystic knight", "Mystic Knight"],
	["mystic bishop", "Mystic Bishop"],
	["mystic rook", "Mystic Rook"],
	["mystic queen", "Mystic Queen"],
	["mystic king", "Mystic King"], ["mk", "Mystic King"],
	["technic pawn", "Technic Pawn"],
	["technic knight", "Technic Knight"],
	["technic bishop", "Technic Bishop"],
	["technic rook", "Technic Rook"],
	["technic queen", "Technic Queen"],
	["technic king", "Technic King"], ["tk", "Technic King"],
	
/* ==============================
Crystal Library
============================== */
	["explorator", "Explorator"],
	["pocketwatch", "Pocketwatch"],
	["bookborn", "Bookborn"],
	["tome sprite", "Tome Sprite"],
	["flutterby", "Flutterby"],
	["infiltrator", "Infiltrator"],
	["effervescent", "Effervescent"],
	["walker", "Walker"],
	["steam grip", "Steam Grip"],
	["scribe", "Scribe"],
	["aether", "Aether"],
	["m400", "M400"],
	["zurreal the eternal", "Zurreal the Eternal"], ["zurreal", "Zurreal the Eternal"],
	
/* ==============================
Iceberg
============================== */
	["living salt", "Living Salt"], // misc
	["frostlance guard", "Frostlance Guard"],
	["frostwing commander", "Frostwing Commander"],
	["icewing", "Icewing"],
	["deep", "Deep"], ["icewing + deep", "IcewingDeep"],
	
	["incompetent ice climber", "Incompetent Ice Climber"], // Bergling
	["snow soldier", "Snow Soldier"],
	["polar bear", "Polar Bear"],
	["snow slinger", "Snow Slinger"],
	["iceblock", "Iceblock"],
	["wolfskie", "Wolfskie"],
	["snowblind", "Snowblind"],
	["snow sniper", "Snow Sniper"],
	["living ice", "Living Ice"],
	
	["chipper", "Chipper"], // Tunnel Rat
	["icebreaker", "Icebreaker"],
	
	["snow bowler", "Snow Bowler"], // Brute
	["yeti", "Yeti"],
	["mammoth", "Mammoth"],
	
	["saboteur", "Saboteur"], // Bomb Squad
	["stickybomber", "Stickybomber"],
	["heavy blaster", "Heavy Blaster"],
	
	["water wielder", "Water Wielder"], // Zealot
	["iceblade", "Iceblade"],
	
	["lord splodington", "Lord Splodington"], // Generals
	["princess fist", "Princess Fist"],
	["lady coldsnap", "Lady Coldsnap"],
	["general drheller", "General Drheller"],
	
/* ==============================
Varmint Valley
============================== */	
	["bounty hunter", "Bounty Hunter"],
	["lasso cowgirl", "Lasso Cowgirl"],
	["prospector", "Prospector"],
	["pyrite", "Pyrite"],
	["ruffian", "Ruffian"],
	["saloon gal", "Saloon Gal"],
	["shopkeeper", "Shopkeeper"],
	["tumbleweed", "Tumbleweed"],
	
	["bartender", "Bartender"], // Crew
	["coal shoveller", "Coal Shoveller"],
	["farrier", "Farrier"],
	["parlour player", "Parlour Player"],
	["stuffy banker", "Stuffy Banker"],
	["tonic salesman", "Tonic Salesman"],
	["upper class lady", "Upper Class Lady"],
	
	// Ringleaders
	// Train Robbers
	
/* ==============================
Fort Rox
============================== */		
	["meteorite snacker", "Meteorite Snacker"], // daytime
	["mining materials manager", "Mining Materials Manager"],
	["mischievous meteorite miner", "Mischievous Meteorite Miner"],
	["hardworking hauler", "Hardworking Hauler"],
	["meteorite miner", "Meteorite Miner"],
	["meteorite mover", "Meteorite Mover"],
	
	["night shift materials manager", "Night Shift Materials Manager"], // Weremice
	["werehauler", "Werehauler"],
	["wealthy werewarrior", "Wealthy Werewarrior"],
	["mischievous wereminer", "Mischievous Wereminer"],
	["alpha weremouse", "Alpha Weremouse"],
	["reveling lycanthrope", "Reveling Lycanthrope"],
	["wereminer", "Wereminer"],
	
	["hypnotized gunslinger", "Hypnotized Gunslinger"], // Cosmic Critters
	["arcane summoner", "Arcane Summoner"],
	["night watcher", "Night Watcher"],
	["cursed taskmaster", "Cursed Taskmaster"],
	["meteorite golem", "Meteorite Golem"],
	["meteorite mystic", "Meteorite Mystic"],
	
	["battering ram", "Battering Ram"],
	["nightmancer", "Nightmancer"],
	["nightfire", "Nightmancer"],
	["dawn guardian", "Dawn Guardian"],
	["monster of the meteor", "Monster of the Meteor"], ["motm", "Monster of the Meteor"],
	["heart of the meteor", "Heart of the Meteor"],
	
/* ==============================
Fiery Warpath
============================== */	
	["desert archer", "Desert Archer"],
	["flame archer", "Flame Archer"],
	["crimson ranger", "Crimson Ranger"],
	["flame ordnance", "Flame Ordnance"],
	["sand cavalry", "Sand Cavalry"],
	["sandwing cavalry", "Sandwing Cavalry"],
	["inferno mage", "Inferno Mage"],
	["magmarage", "Magmarage"],
	["vanguard", "Vanguard"],
	["sentinel", "Sentinel"],
	["crimson watch", "Crimson Watch"],
	["desert soldier", "Desert Soldier"],
	["flame warrior", "Flame Warrior"],
	["crimson titan", "Crimson Titan"],
	["caravan guard", "Caravan Guard"],
	["crimson commander", "Crimson Commander"],
	["gargantuamouse", "Gargantuamouse"], ["garga", "Gargantuamouse"], ["gargantua", "Gargantuamouse"],
	["artillery commander", "Artillery Commander"],
	["theurgy warden", "Theurgy Warden"],
	["warmonger", "Warmonger"],
	
/* ==============================
Muridae Market
============================== */	
	["snake charmer", "Snake Charmer"],
	["pie thief", "Pie Thief"],
	["desert architect", "Desert Architect"],
	["falling carpet", "Falling Carpet"],
	["spice merchant", "Spice Merchant"],
	["desert nomad", "Desert Nomad"],
	["limestone miner", "Limestone Miner"],
	["lumberjack", "Lumberjack"],
	["glass blower", "Glass Blower"],
	["blacksmith", "Blacksmith"],
	["mage weaver", "Mage Weaver"], ["mw", "Mage Weaver"],
	["market guard", "Market Guard"],
	["market thief", "Market Thief"],
	
/* ==============================
Living Garden / Twisted Garden
============================== */		
	["thistle", "Thistle"],
	["bark", "Bark"],
	["calalilly", "Calalilly"],
	["shroom", "Shroom"],
	["camoflower", "Camoflower"],
	["strawberry hotcakes", "Strawberry Hotcakes"],
	["thirsty", "Thirsty"],
	
	["thorn", "Thorn"],
	["barkshell", "Barkshell"],
	["twisted lilly", "Twisted Lilly"],
	["fungal spore", "Fungal Spore"],
	["camofusion", "Camofusion"],
	["twisted hotcakes", "Twisted Hotcakes"],
	["dehydrated", "Dehydrated"],
	["carmine the apothecary", "Carmine the Apothecary"], ["carmine the apo", "Carmine the Apothecary"], 
    ["carmine apothecary", "Carmine the Apothecary"], 
	["twisted carmine", "Twisted Carmine"],
	["shattered carmine", "Shattered Carmine"],
	
/* ==============================
Lost City / Cursed City
============================== */	
	["ethereal enchanter", "Ethereal Enchanter"],
	["ethereal engineer", "Ethereal Engineer"],
	["ethereal thief", "Ethereal Thief"],
	["ethereal librarian", "Ethereal Librarian"],
	["cursed", "Cursed"],
	["essence collector", "Essence Collector"],
	
	["cursed enchanter", "Cursed Enchanter"],
	["cursed engineer", "Cursed Engineer"],
	["cursed thief", "Cursed Thief"],
	["cursed librarian", "Cursed Librarian"],
	["corrupt", "Corrupt"],
	["essence guardian", "Essence Guardian"],
	["dark magi", "Dark Magi"],
	
/* ==============================
Sand Dunes / Sand Crypts
============================== */	
	["sand pilgrim", "Sand Pilgrim"],
	["grubling herder", "Grubling Herder"],
	["spiky devil", "Spiky Devil"],
	["quesodillo", "Quesodillo"],
	["dunehopper", "Dunehopper"],
	["grubling", "Grubling"],
	
	["sarcophamouse", "Sarcophamouse"],
	["sand colossus", "Sand Colossus"],
	["serpentine", "Serpentine"],
	["scarab", "Scarab"],
	["king grub", "King Grub"],
	["king scarab", "King Scarab"],
	
/* ==============================
Queso Canyon
============================== */	
	["sleepy merchant", "Sleepy Merchant"], // Queso River
	["tiny saboteur", "Tiny Saboteur"],
	["pump raider", "Pump Raider"],
	["croquet crusher", "Croquet Crusher"],
	["queso extractor", "Queso Extractor"],
	["queen quesada", "Queen Quesada"], ["qq", "Queen Quesada"],
	
	["spice seer", "Spice Seer"], // Prickly Plains
	["old spice collector", "Old Spice Collector"],
	["spice farmer", "Spice Farmer"],
	["granny spice", "Granny Spice"],
	["spice sovereign", "Spice Sovereign"],
	["spice finder", "Spice Finder"],
	["spice raider", "Spice Raider"],
	["spice reaper", "Spice Reaper"],
	["inferna, the engulfed", "Inferna, The Engulfed"], ["inferna", "Inferna, The Engulfed"],
	
	["chip chiseler", "Chip Chiseler"], // Cantera Quarry
	["tiny toppler", "Tiny Toppler"],
	["ore chipper", "Ore Chipper"],
	["rubble rummager", "Rubble Rummager"],
	["nachore golem", "Nachore Golem"],
	["rubble rouser", "Rubble Rouser"],
	["grampa golem", "Grampa Golem"],
	["fiery crusher", "Fiery Crusher"],
	["nachous, the molten", "Nachous, The Molten"], ["nachous", "Nachous, The Molten"],
	
	["fuzzy drake", "Fuzzy Drake"], // Cork Collectors
	["cork defender", "Cork Defender"],
	["burly bruiser", "Burly Bruiser"],
	["corky, the collector", "Corky, the Collector"], ["corky", "Corky, the Collector"],
	["horned cork hoarder", "Horned Cork Hoarder"],
	["rambunctious rain rumbler", "Rambunctious Rain Rumbler"], ["rrr", "Rambunctious Rain Rumbler"],
	["corkataur", "Corkataur"],
	
	["steam sailor", "Steam Sailor"], // Pressure Set
	["warming wyvern", "Warming Wyvern"],
	["vaporior", "Vaporior"],
	["pyrehyde", "Pyrehyde"], ["pyre", "Pyrehyde"],
	["emberstone scaled", "Emberstone Scaled"], ["ember", "Emberstone Scaled"],
	
	["mild spicekin", "Mild Spicekin"], // Geyser
	["sizzle pup", "Sizzle Pup"], ["sizzle", "Sizzle Pup"],
	["smoldersnap", "Smoldersnap"],
	["bearded elder", "Bearded Elder"], ["bearded", "Bearded Elder"], 
	["ignatia", "Ignatia"],
	["cinderstorm", "Cinderstorm"], ["cinder", "Cinderstorm"],
	["bruticus, the blazing", "Bruticus, the Blazing"], ["bruticus", "Bruticus, the Blazing"], ["brut", "Bruticus, the Blazing"],
	["stormsurge, the vile tempest", "Stormsurge, the Vile Tempest"], 
    ["stormsurge", "Stormsurge, the Vile Tempest"],
    ["ss", "Stormsurge, the Vile Tempest"],
	["kalor'ignis of the geyser", "Kalor'ignis of the Geyser"],
    ["kalor", "Kalor'ignis of the Geyser"],
	
/* ==============================
Sunken City Only Predator Pack
============================== */	
	["carnivore", "Carnivore"],
	["serpent monster", "Serpent Monster"],
	["ancient of the deep", "Ancient of the Deep"],
	["tritus", "Tritus"],

/* ==============================
Fungal Caverns
============================== */	
	["sporeticus", "Sporeticus"],
	["spore muncher", "Spore Muncher"],
	["mouldy mole", "Mouldy Mole"],
	["spiked burrower", "Spiked Burrower"],
	["bitter root", "Bitter Root"],
	["mush", "Mush"],
	["quillback", "Quillback"],
	["lumahead", "Lumahead"],
	["funglore", "Funglore"],
	["mushroom sprite", "Mushroom Sprite"],
	["floating spore", "Floating Spore"],
	["nightshade masquerade", "Nightshade Masquerade"],

	["cavern crumbler", "Cavern Crumbler"],
	["stone maiden", "Stone Maiden"],
	["crag elder", "Crag Elder"],
	["dirt thing", "Dirt Thing"],
	["crystalline slasher", "Crystalline Slasher"],
	["splintered stone sentry", "Splintered Stone Sentry"], // 26 hunts with GGC
	["shattered obsidian", "Shattered Obsidian"], // 17 hunts with GGC
	["gemstone worshipper", "Gemstone Worshipper"], // 57 hunts with GGC

	["gemorpher", "Gemorpher"],
	["crystal controller", "Crystal Controller"],
	["crystalback", "Crystalback"],
	["crystal cave worm", "Crystal Cave Worm"],
	["stalagmite", "Stalagmite"],

	["crystal golem", "Crystal Golem"],
	["crystal queen", "Crystal Queen"],
	["crystal lurker", "Crystal Lurker"],
	["crystal observer", "Crystal Observer"],

	["huntereater", "Huntereater"],
	["diamondhide", "Diamondhide"], // one person lf 250 another sniping for 23? 8%ar with diamond cheese
	["crystal behemoth", "Crystal Behemoth"],

/* ==============================
Zokor
============================== */	
	["lost legionnaire", "Lost Legionnaire"],
	["lost", "Lost"],
	["reanimated carver", "Reanimated Carver"],
	["corridor bruiser", "Corridor Bruiser"],
	["shadow stalker", "Shadow Stalker"],

	["mushroom harvester", "Mushroom Harvester"],
	["mush monster", "Mush Monster"],
	["nightshade nanny", "Nightshade Nanny"],
	["nightshade fungalmancer", "Nightshade Fungalmancer"],

	["summoning scholar", "Summoning Scholar"],
	["sanguinarian", "Sanguinarian"],
	["mystic guardian", "Mystic Guardian"],
	["mystic herald", "Mystic Herald"],
	["mystic scholar", "Mystic Scholar"],
	["ethereal guardian", "Ethereal Guardian"],
	["ancient scribe", "Ancient Scribe"],
	["soul binder", "Soul Binder"],

	["drudge", "Drudge"],
	["masked pikeman", "Masked Pikeman"],
	["solemn soldier", "Solemn Soldier"],
	["mind tearer", "Mind Tearer"],
	["dark templar", "Dark Templar"],
	["battle cleric","Battle Cleric"],
	["sir fleekio", "Sir Fleekio"],
	["paladin weapon master", "Paladin Weapon Master"], ["pwm", "Paladin Weapon Master"],

	["rr-8", "RR-8"],
	["ash golem", "Ash Golem"],
	["tech golem", "Tech Golem"],
	["automated stone sentry", "Automated Stone Sentry"],
	["fungal technomorph", "Fungal Technomorph"],
	["exo-tech", "Exo-Tech"],
	["matron of machinery", "Matron of Machinery"],
	["manaforge smith", "Manaforge Smith"], ["mfs", "Manaforge Smith"],

	["hired eidolon", "Hired Eidolon"],
	["mimic", "Mimic"],
	["treasure brawler", "Treasure Brawler"],
	["matron of wealth", "Matron of Wealth"],
	["molten midas", "Molten Midas"],

	["decrepit tentacle terror", "Decrepit Tentacle Terror"],
	["retired minotaur", "Retired Minotaur"], ["minotaur", "Retired Minotaur"], 

/* ==============================
Moussu Picchu
============================== */	
	["nightshade maiden", "Nightshade Maiden"],
	["spore salesman", "Spore Salesman"],
	["nightshade flower girl", "Nightshade Flower Girl"],

	["breeze borrower", "Breeze Borrower"],
	["windy farmer", "Windy Farmer"],
	["cloud collector", "Cloud Collector"],
	["rainwater purifier", "Rainwater Purifier"],
	["homeopathic apothecary", "Homeopathic Apothecary"],

	["wind watcher", "Wind Watcher"],
	["charming chimer", "Charming Chimer"],
	["fluttering flutist", "Fluttering Flutist"],
	["cycloness", "Cycloness"],
	["wind warrior", "Wind Warrior"],

	["rain collector", "Rain Collector"],
	["rain wallower", "Rain Wallower"],
	["rain summoner", "Rain Summoner"],
	["monsoon maker", "Monsoon Maker"],
	["rainmancer", "Rainmancer"],

	["thunder strike", "Thunder Strike"],
	["violet stormchild", "Violet Stormchild"],
	["thunderlord", "Thunderlord"], // might not work because emoji in the name, but it's only in Mopi maps
	["thundering watcher", "Thundering Watcher"],
	["dragoon", "Dragoon"],
	["ful'mina, the mountain queen", "Ful''Mina, The Mountain Queen"], ["fulmina", "Ful''Mina, The Mountain Queen"],

/* ==============================
Floating Isles (not setting values yet)
============================== */	
	["skydiver", "Skydiver"],
	["sky greaser", "Sky Greaser"],
	["launchpad labourer", "Launchpad Labourer"],
	["cloud miner", "Cloud Miner"],

	["daydreamer", "Daydreamer"],
	["kite flyer", "Kite Flyer"],

	["ground gavaleer", "Ground Gavaleer"],
	["sky swordsman", "Sky Swordsman"],
	["herc", "Herc"],
	["sky squire", "Sky Squire"],

	["astrological astronomer", "Astrological Astronomer"],
	["overcaster", "Overcaster"],
	["stratocaster", "Stratocaster"],
	["shadow sage", "Shadow Sage"],

	["worried wayfinder", "Worried Wayfinder"],
	["gyrologer", "Gyrologer"],
	["seasoned islandographer", "Seasoned Islandographer"],
	["captain cloudkicker", "Captain Cloudkicker"],

	["sky glass sorcerer", "Sky Glass Sorcerer"],
	["sky glass galzier", "Sky Glass Galzier"],
	["sky dancer", "Sky Dancer"],
	["sky highborne", "Sky Highborne"],

	["spry sky explorer", "Spry Sky Explorer"],
	["spry sky seer", "Spry Sky Seer"],
	["cumulost", "Cumulost"],
	["spheric diviner", "Spheric Diviner"],

	["nimbomancer", "Nimbomancer"],
	["sky surfer", "Sky Surfer"],
	["cute cloud conjurer", "Cute Cloud Conjurer"],
	["mist maker", "Mist Maker"],

	["tiny dragonfly", "Tiny Dragonfly"],
	["lancer guard", "Lancer Guard"],
	["dragonbreather", "Dragonbreather"],
	["regal spearman", "Regal Spearman"],

	["devious gentleman", "Devious Gentleman"],
	["stack of thieves", "Stack of Thieves"],
	["lawbender", "Lawbender"],
	["agent m", "Agent M"],

	["suave pirate", "Suave Pirate"],
	["cutthroat pirate", "Cutthroat Pirate"],
	["cutthroat cannoneer", "Cutthroat Cannoneer"],
	["scarlet revenger", "Scarlet Revenger"],
	["maritime pirate", "Maritime Pirate"],
	["admiral cloudbeard", "Admiral Cloudbeard"],

	["warden of rain", "Warden of Rain"],
	["warden of fog", "Warden of Fog"],
	["warden of frost", "Warden of Frost"],
	["warden of wind", "Warden of Wind"],

	["paragon of strength", "Paragon of Strength"],
	["paragon of shadow", "Paragon of Shadow"],
	["paragon of tactics", "Paragon of Tactics"],
	["paragon of arcane", "Paragon of Arcane"],
	["paragon of forgotten", "Paragon of Forgotten"],
	["paragon of water", "Paragon of Water"],
	["paragon of dragons", "Paragon of Dragons"],
	["paragon of the lawless", "Paragon of the Lawless"],
    // need to check for friends

	["richard the rich", "Richard the Rich"],

/* ==============================
Gnawnia Rift
============================== */		
	["micro", "Micro"],
	["brawny", "Brawny"],
	["riftweaver", "Riftweaver"],
	["greyrun", "Greyrun"],
	["dream drifter", "Dream Drifter"],
	["excitable electric", "Excitable Electric"],
	["supernatural", "Supernatural"],
	["agitated gentle giant", "Agitated Gentle Giant"],
	["mighty mole", "Mighty Mole"],

	["rift guardian", "Rift Guardian"],
	["cyborg", "Cyborg"],
	["shard centurion", "Shard Centurion"],
	["spiritual steel", "Spiritual Steel"],
	["raw diamond", "Raw Diamond"],
	["wealth", "Wealth"], // better ar in furomarift
	["goliath field", "Goliath Field"], ["gfm", "Goliath Field"], ["goliath", "Goliath Field"],

/* ==============================
Burroughs Rift
============================== */		
	["amplified white", "Amplified White"],
	["amplified grey", "Amplified Grey"],
	["amplified brown", "Amplified Brown"],
	["cybernetic specialist", "Cybernetic Specialist"],
	["rift bio engineer", "Rift Bio Engineer"],
	["automated sentry", "Automated Sentry"],
	["surgeon bot", "Surgeon Bot"],
	["evil scientist", "Evil Scientist"],
	["doktor", "Doktor"],
	["portable generator", "Portable Generator"],

	["prototype", "Prototype"],
	["robat", "Robat"],
	["phase zombie", "Phase Zombie"],
	["count vampire", "Count Vampire"],
	["tech ravenous zombie", "Tech Ravenous Zombie"],
	["zombot unipire the third", "Zombot Unipire the Third"],
	["lycanoid", "Lycanoid"],
	["revenant", "Revenant"],

	["pneumatic dirt displacement", "Pneumatic Dirt Displacement"],
	["itty bitty rifty burroughs", "Itty Bitty Rifty Burroughs"],
	["rifterranian", "Rifterranian"],
	["clump", "Clump"],
	["cyber miner", "Cyber Miner"],
	["master exploder", "Master Exploder"],
	["boulder biter", "Boulder Biter"],

	["mecha tail", "Mecha Tail"],
	["radioactive ooze", "Radioactive Ooze"],
	["toxikinetic", "Toxikinetic"],
	["toxic avenger", "Toxic Avenger"],
	["rancid bog beast", "Rancid Bog Beast"],
	["super mega mecha ultra robogold", "Super Mega Mecha Ultra RoboGold"],
	["plutonium tentacle", "Plutonium Tentacle"],
	["assassin beast", "Assassin Beast"],

	["menace of the rift", "Menace of the Rift"], ["motr", "Menace of the Rift"],
	["monstrous abomination", "Monstrous Abomination"],
	["big bad behemoth burroughs", "Big Bad Behemoth Burroughs"], ["bbbb", "Big Bad Behemoth Burroughs"],

/* ==============================
Whisker Woods Rift
============================== */	
	["mossy moosker", "Mossy Moosker"],
	["cranky caterpillar", "Cranky Caterpillar"],
	["bloomed sylvan", "Bloomed Sylvan"],
	["spirit of balance", "Spirit of Balance"],
	["fungal frog", "Fungal Frog"],
	["karmachameleon", "Fungal Frog"],
	["red coat bear", "Red Coat Bear"],
	["medicine", "Medicine"],
	["twisted treant", "Twisted Treant"],
	["water sprite", "Water Sprite"],
	["treant queen", "Treant Queen"],
	["spirit fox", "Spirit Fox"],
	["red-eyed watcher owl", "Red-Eyed Watcher Owl"],
	["rift tiger", "Rift Tiger"],
	["nomadicwarrior", "Nomadic Warrior"],
	["crazed goblin", "Crazed Goblin"],
	["tree troll", "Tree Troll"],
	["winged harpy", "Winged Harpy"],

	["cyclops barbarian", "Cyclops Barbarian"],
	["centaur ranger", "Centaur Ranger"],
	["tri-dra", "Tri-dra"],
	["cherry sprite", "Cherry Sprite"],
	["naturalist", "Naturalist"],
	["grizzled silth", "Grizzled Silth"],
	["gilded leaf", "Gilded Leaf"],
	["monstrous black widow", "Monstrous Black Widow"], ["mbw", "Monstrous Black Widow"],

/* ==============================
Furoma Rift
============================== */		
	["enlightened labourer", "Enlightened Labourer"],
	["dumpling delivery", "Dumpling Delivery"],
	["armored archer", "Armored Archer"],
	["shinobi", "Shinobi"],
	["shaolin kung fu", "Shaolin Kung Fu"],
	["wandering monk", "Wandering Monk"],
	["militant samurai", "Militant Samurai"],
	["dancing assassin", "Dancing Assassin"],
	["student of the chi belt", "Student of the Chi Belt"],
	["student of the chi claw", "Student of the Chi Claw"],
	["student of the chi fang", "Student of the Chi Fang"],
	["master of the chi belt", "Master of the Chi Belt"],
	["master of the chi fang", "Master of the Chi Fang"],
	["master of the chi claw", "Master of the Chi Claw"],
	["grand master of the dojo", "Grand Master of the Dojo"], ["gmojo", "Grand Master of the Dojo"],
	["supreme sensei", "Supreme Sensei"],
	["ascended elder", "Ascended Elder"],

/* ==============================
Bristle Woods Rift
============================== */	
	["skeletal champion", "Skeletal Champion"],
	["record keeper's assistant", "Record Keeper''s Assistant"],
	["record keeper", "Record Keeper"],
	["sentient slime", "Sentient Slime"],
	["dread knight", "Dread Knight"],
	["portal plunderer", "Portal Plunderer"],
	["clockwork timespinner", "Clockwork Timespinner"],
	["epoch golem", "Epoch Golem"],
	["chamber cleaver", "Chamber Cleaver"],
	["portal pursuer", "Portal Pursuer"],
	["vigilant ward", "Vigilant Ward"],
	["timelost thaumaturge", "Timelost Thaumaturge"],
	["shackled servant", "Shackled Servant"],
	["portal paladin", "Portal Paladin"],
	["harbinger of death", "Harbinger of Death"],
	["timeslither pythoness", "Timeslither Pythoness"],
	["carrion medium", "Carrion Medium"],
	["timeless lich", "Timeless Lich"],
	["chronomaster", "Chronomaster"],
	["absolute acolyte", "Absolute Acolyte"], ["aa", "Absolute Acolyte"],

/* ==============================
Valour Rift
============================== */	
	["timid explorer", "Timid Explorer"],
	["elixir maker", "Elixir Maker"],
	["terrified adventurer", "Terrified Adventurer"],
	["unwavering adventurer", "Unwavering Adventurer"],
	["berzerker", "Berzerker"],
	["lumi-lancer", "Lumi-lancer"],
	["puppetto", "Puppetto"],
	["puppet champion", "Puppet Champion"],
	["cutpurse", "Cutpurse"],
	["champion Thief", "Champion Thief"],
	["martial", "Martial"],
	["praetorian champion", "Praetorian Champion"],
	["one-mouse band", "One-Mouse Band"],
	["champion danseuse", "Champion Danseuse"],
	["mouse of elements", "Mouse of Elements"],
	["magic champion", "Magic Champion"],
	["cursed crusader", "Cursed Crusader"],
	["fallen champion footman", "Fallen Champion Footman"],
	["withered remains", "Withered Remains"],
	["arch champion necromancer", "Arch Champion Necromancer"],
	["possessed armaments", "Possessed Armaments"],
	["prestigious adventurer", "Prestigious Adventurer"],
	["soldier of the shade", "Soldier of the Shade"],
	["bulwark of ascent", "Bulwark of Ascent"],
	["shade of the eclipse", "Shade of the Eclipse"],
	["the total eclipse", "The Total Eclipse"],
	
/* ==============================
Toxic Spill
============================== */	

/* ==============================
Event Mice
============================== */	
	["default", "default"],
]);

