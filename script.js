const words = ["apple", 
"acorn", "adapt", "admin", "adobe", "adult", "after", "agent", "aisle", "alarm", "album",
  "alien", "align", "alley", "alpha", "altar", "amber", "amend", "angel", "angle", "ankle",
  "annex", "apple", "arena", "argon", "arise", "armed", "armor", "arrow", "aside", "audio",
  "audit", "avoid", "award", "badge", "baker", "balsa", "basic", "basin", "batch", "beads",
  "beast", "beech", "begin", "being", "belly", "bench", "birth", "black", "blank", "blast",
  "blend", "bless", "blind", "block", "bloom", "bluff", "blunt", "board", "boast", "bobby",
  "bonus", "boost", "bound", "brace", "brand", "brass", "bread", "break", "brick", "brief",
  "brisk", "broad", "broil", "brook", "broom", "brush", "buddy", "build", "built", "bully",
  "burst", "butte", "cabin", "cable", "cabin", "caddy", "caged", "camel", "canal", "candy",
  "canoe", "cargo", "carol", "carve", "catch", "cedar", "chalk", "chant", "chaos", "charm",
  "chart", "chase", "cheap", "check", "chess", "chill", "choir", "choke", "chord", "chuck",
  "chunk", "cider", "civic", "claim", "clash", "class", "clean", "clear", "clerk", "click",
  "cliff", "climb", "cling", "clock", "clone", "close", "cloth", "cloud", "clown", "coach",
  "coast", "cobra", "color", "comic", "coral", "corer", "couch", "coven", "crane", "crawl",
  "craze", "creek", "crest", "crisp", "crook", "crowd", "crown", "crush", "crypt", "cubic",
  "curry", "curve", "daily", "dance", "dated", "dawned", "dealt", "death", "delta", "dense",
  "depot", "depth", "devil", "diary", "diner", "dingo", "dirty", "aback", "abase", "abate", "abbey", "abbot", "abhor", "abide", "abled", "abler", "abode",
  "abort", "about", "above", "abuse", "abyss", "acorn", "acrid", "actor", "acute", "adage",
  "adapt", "added", "adder", "addle", "adept", "admin", "admit", "adobe", "adopt", "adore",
  "adorn", "adult", "affix", "afire", "afoot", "afoul", "after", "again", "agape", "agate",
  "agent", "agile", "aging", "aglow", "agony", "agree", "ahead", "aider", "aisle", "alarm",
  "album", "alert", "algae", "alibi", "alien", "align", "alike", "alive", "allay", "alley",
  "allot", "allow", "alloy", "aloft", "alone", "along", "aloof", "aloud", "alpha", "altar",
  "alter", "amass", "amaze", "amber", "amble", "amend", "amiss", "amity", "among", "ample",
  "amply", "amuse", "angel", "anger", "angle", "angry", "angst", "anime", "ankle", "annex",
  "annoy", "annul", "anode", "antic", "anvil", "aorta", "apart", "aphid", "aping", "apnea",
  "apple", "apply", "apron", "aptly", "arbor", "ardor", "arena", "argue", "arise", "armed",
  "armor", "aroma", "arose", "array", "arrow", "arson", "artsy", "ascot", "ashen", "aside",
  "askew", "assay", "asset", "atlas", "atoll", "atone", "attic", "audio", "audit", "augur",
  "aunty", "avail", "avert", "avian", "avoid", "await", "awake", "award", "aware", "awash",
  "awful", "awoke", "axial", "axiom", "axion", "azure", "bacon", "badge", "badly", "bagel",
  "baggy", "baker", "balmy", "banal", "banjo", "barge", "baron", "basal", "basic", "basil",
  "basin", "basis", "baste", "batch", "bathe", "baton", "batty", "bawdy", "bayou", "beach",
  "beads", "beady", "beard", "beast", "beech", "beefy", "befit", "began", "begat", "beget",
  "begin", "begun", "being", "belch", "belie", "belle", "belly", "below", "bench", "beret",
  "berry", "berth", "beset", "betel", "bevel", "bezel", "bible", "bicep", "biddy", "bigot",
  "bilge", "billy", "binge", "bingo", "biome", "birch", "birth", "bison", "biter", "bitty",
  "black", "blade", "blame", "bland", "blank", "blare", "blast", "blaze", "bleak", "bleat",
  "bleed", "bleep", "blend", "bless", "blimp", "blind", "blink", "bliss", "blitz", "bloat",
  "block", "bloke", "blond", "blood", "bloom", "blown", "bluer", "bluff", "blunt", "blurb",
  "blurt", "blush", "board", "boast", "bobby", "boney", "bongo", "bonus", "booby", "boost",
  "booth", "booty", "booze", "boozy", "borax", "borne", "bosom", "bossy", "botch", "bough",
  "boule", "bound", "bowel", "boxer", "brace", "braid", "brain", "brake", "brand", "brash",
  "brass", "brave", "bravo", "brawl", "brawn", "bread", "break", "breed", "briar", "bribe",
  "brick", "bride", "brief", "brine", "bring", "brink", "briny", "brisk", "broad", "broil",
  "broke", "brood", "brook", "broom", "broth", "brown", "brunt", "brush", "brute", "buddy",
  "budge", "buggy", "bugle", "build", "built", "bulge", "bulky", "bully", "bunch", "bunny",
  "burly", "burnt", "burst", "bushy", "butch", "butte", "buxom", "buyer", "bylaw", "cabin",
  "cable", "cache", "cacti", "caddy", "cadet", "cagey", "cairn", "camel", "cameo", "canal",
  "candy", "canny", "canoe", "canon", "caper", "caput", "carat", "cargo", "carol", "carry",
  "carve", "casco", "casey", "cashy", "caste", "catch", "cater", "catty", "caulk", "cause",
  "caved", "caver", "cease", "cedar", "cello", "chant", "chaos", "charm", "chart", "chase",
  "chasm", "cheap", "cheat", "check", "cheek", "cheer", "chess", "chest", "chevy", "chick",
  "chief", "child", "chime", "china", "chirp", "chive", "choir", "choke", "chomp", "chord",
  "chore", "chose", "chuck", "chump", "chunk", "churn", "chute", "cider", "cigar", "cinch",
  "circa", "circe", "civic", "civil", "claim", "clamp", "clang", "clank", "clash", "clasp",
  "class", "clean", "clear", "cleat", "cleft", "clerk", "click", "cliff", "climb", "cling",
  "cloak", "clock", "clone", "close", "cloth", "cloud", "clout", "clown", "cluck", "clump",
  "clung", "coach", "coast", "cobra", "cocky", "cocoa", "coded", "coder", "cohos", "coils",
  "coins", "colic", "colon", "color", "comet", "comfy", "comic", "comma", "conch", "conic",
  "conor", "conte", "copse", "coral", "cords", "corns", "costs", "couch", "cough", "count",
  "coupe", "court", "cover", "coves", "covet", "cowed", "cower", "coxes", "crabs", "crack",
  "crags", "crane", "crash", "crate", "crave", "crawl", "craze", "crazy", "cream", "creek",
  "creel", "creep", "crest", "cried", "cries", "crime", "crimp", "crisp", "crook", "cross",
  "crowd", "crown", "cruel", "crush", "crust", "crypt", "cubby", "cubed", "cubic", "cubie",
  "cuddy", "cuffs", "curbs", "curds", "cured", "curio", "curly", "curry", "curse", "curve",
  "cutie", "cyber", "cysts", "dabbe", "daddy", "daily", "dairy", "daisy", "dance", "dandy",
  "dated", "dates", "datum", "daunt", "dealt", "dears", "debit", "debts", "debug", "debut",
  "decaf", "decal", "decay", "decks", "decor", "deeds", "defer", "deity", "delta", "delve",
  "demon", "demos", "denim", "dense", "depot", "depth", "derby", "desks", "deter", "detox",
  "devil", "dials", "diary", "diced", "dices", "dicey", "diets", "digit", "dimes", "dimly",
  "diner", "dingy", "diode", "dippy", "dirge", "dirty", "disco", "disks", "ditch", "ditto",
  "divas", "dived", "dives", "divot", "divvy", "dizzy", "dodge", "dodgy", "doers", "doggy",
  "doing", "doled", "doles", "dolls", "dolly", "dolor", "dolts", "domes", "donna", "donor",
  "donut", "dooms", "doors", "doped", "dopes", "dopey", "dorks", "dorky", "dorms", "doses",
  "dosed", "dotes", "doted", "dotty", "dough", "doves", "downs", "dowry", "dozen", "draft",
  "drags", "drain", "drake", "drama", "drams", "drank", "drape", "drawl", "drawn", "dream",
  "dress", "dried", "dries", "drill", "drink", "drive", "droid", "drool", "droop", "drops",
  "drown", "drugs", "druid", "drums", "drunk", "duals", "ducks", "duels", "duets", "duffs",
  "dukes", "dully", "dumps", "dunes", "duped", "dupes", "dusty", "duvet", "dwarf", "dwell",
  "dying", "eager", "eagle", "earls", "early", "earns", "earth", "eased", "eases", "eaten",
  "eater", "ebbed", "ebony", "ebbed", "eider", "eight", "eject", "elbow", "elder", "elect",
  "elite", "elude", "embed", "ember", "emits", "emote", "empty", "enact", "ended", "ender",
  "endow", "enema", "enemy", "enjoy", "ennui", "ensue", "enter", "entry", "envoy", "equal",
  "equip", "erase", "erect", "erode", "erupt", "essay", "ethic", "ethyl", "eulog", "event",
  "exalt", "excel", "exile", "exist", "exits", "expel", "extra", "fable", "faced", "faces",
  "facet", "faint", "faith", "faked", "fakes", "falls", "false", "famed", "fancy", "farce",
  "fatal", "fated", "fates", "fauna", "fault", "fauna", "favor", "feast", "fears", "feats",
  "feces", "feeds", "feels", "feign", "feint", "fence", "fetch", "fever", "fewer", "fiber",
  "fifes", "fifth", "fifty", "fight", "files", "fills", "films", "filth", "final", "finer",
  "fines", "fired", "fires", "firms", "first", "fishy", "fixed", "fixes", "flags", "flair",
  "flame", "flash", "flask", "flats", "flaws", "fleas", "flees", "fleet", "flesh", "flick",
  "flies", "fling", "flips", "flirt", "float", "flock", "flood", "floor", "flora", "fluff",
  "fluid", "flush", "flute", "focus", "foist", "folio", "folly", "fonts", "foods", "fools",
  "force", "forge", "forms", "forte", "forts", "forum", "found", "fount", "foyer", "frail",
  "frame", "frank", "fraud", "freak", "freed", "frees", "fresh", "frets", "fried", "frier",
  "fries", "frill", "frisk", "frock", "frogs", "front", "frost", "froze", "fruit", "fudge",
  "fuels", "fully", "funds", "fungi", "funky", "funny", "fused", "fuses", "fussy", "futon",
  "fuzzy", "gable", "gains", "gales", "galls", "gamey", "games", "gamma", "gangs", "gaped",
  "gapes", "gases", "gassy", "gated", "gates", "gaudy", "gauge", "gawks", "gears", "geese",
  "genie", "genre", "germs", "ghost", "giant", "giddy", "gifts", "gills", "gipsy", "girly",
  "given", "giver", "gives", "gizmo", "glade", "gland", "glass", "glaze", "gleam", "glean",
  "glide", "glint", "gloat", "gloom", "glory", "glove", "glows", "glued", "glues", "glyph",
  "gnats", "gnome", "goats", "godly", "going", "golds", "golfs", "goner", "goods", "goody",
  "gooey", "goofy", 
  "goofy", "goose", "gorge", "gouge", "grabs", "grace", "grade", "graft", "grain", "grand",
  "grant", "grape", "graph", "grasp", "grass", "grate", "grave", "gravy", "graze", "great",
  "greed", "green", "greet", "grill", "grime", "grimy", "grind", "gripe", "grips", "grits",
  "groan", "groin", "groom", "gross", "group", "grove", "grown", "grows", "gruel", "gruff",
  "grunt", "guard", "guess", "guest", "guide", "guild", "guile", "guilt", "guise", "gulch",
  "gully", "gumbo", "gummy", "guppy", "gusto", "gusts", "gypsy", "habit", "hacks", "haiku",
  "hails", "hairy", "halls", "hands", "handy", "hangs", "hanks", "happy", "hardy", "harem",
  "harms", "harps", "harry", "harsh", "haste", "hasty", "hatch", "hater", "haunt", "haven",
  "havoc", "hawks", "hazel", "heads", "heals", "heaps", "heard", "heart", "heath", "heats",
  "heavy", "hedge", "heels", "hefty", "heist", "helix", "hello", "helms", "helps", "hence",
  "herbs", "herds", "heron", "hertz", "hides", "highs", "hills", "hints", "hippo", "hippy",
  "hired", "hires", "hitch", "hives", "hoard", "hoist", "hokey", "holes", "holly", "homes",
  "honey", "honks", "honor", "hoops", "hoped", "hopes", "horde", "horns", "horse", "hosts",
  "hotel", "hound", "hours", "house", "hover", "howdy", "human", "humid", "humor", "humph",
  "humps", "hunch", "hunks", "hunts", "hurts", "husks", "husky", "hymns", "hyper", "icily",
  "icing", "icons", "ideal", "ideas", "idiom", "idiot", "idled", "idols", "igloo", "image",
  "imbed", "imbue", "impel", "imply", "inbox", "incur", "index", "indie", "inept", "inert",
  "infer", "infix", "infra", "ingot", "inlay", "inlet", "inner", "input", "intro", "ionic",
  "irate", "irons", "irony", "isles", "islet", "issue", "items", "ivory", "jacks", "jaded",
  "jades", "jails", "jambs", "japan", "jarsy", "javel", "jawed", "jazzy", "jeans", "jeeps",
  "jeers", "jelly", "jests", "jewel", "jiffy", "jinks", "jived", "jives", "joins", "joint",
  "jokes", "jolly", "joust", "judge", "juice", "juicy", "jumbo", "jumps", "jumpy", "junta",
  "juror", "kabob", "kappa", "kaput", "karma", "kayak", "keeps", "kelly", "kicks", "kills",
  "kinda", "kinds", "kings", "kinks", "kinky", "kites", "kitty", "knack", "knave", "kneel",
  "knees", "knelt", "knife", "knits", "knobs", "knock", "knoll", "knots", "known", "knows",
  "koala", "kudos", "label", "labia", "labor", "laced", "laces", "lacks", "ladle", "lager",
  "lakes", "lamps", "lanes", "lapse", "larch", "large", "larks", "larva", "laser", "lasso",
  "lasts", "latch", "later", "lathe", "latin", "latus", "laugh", "layer", "leach", "leads",
  "leafy", "leaks", "leans", "leaps", "learn", "lease", "leash", "least", "leave", "ledge",
  "leech", "leeks", "leers", "lemon", "lemur", "lends", "leper", "level", "lever", "libel",
  "libra", "licit", "licks", "lifts", "light", "liked", "liken", "likes", "limbo", "limit",
  "lined", "linen", "liner", "lines", "lingo", "links", "lions", "lists", "lived", "liver",
  "lives", "loads", "loafs", "loamy", "loans", "lobby", "lobed", "lobes", "local", "locks",
  "locus", "lodge", "lofty", "logic", "login", "logos", "loins", "loner", "longs", "looks",
  "looms", "loons", "loops", "loose", "lords", "loser", "loses", "loved", "lover", "loves",
  "lowly", "loyal", "lucks", "lucky", "lumen", "lumps", "lunar", "lunch", "lungs", "lurch",
  "lures", "lusts", "lusty", "lying", "lymph", "lynch", "lyric", "macaw", "macro", "madam",
  "madly", "magic", "magma", "maize", "major", "maker", "makes", "mambo", "mamma", "mammy",
  "mango", "mangy", "mania", "manic", "manly", "manor", "maple", "march", "mares", "marry",
  "marsh", "masks", "mason", "masse", "match", "matey", "mauve", "maxim", "maybe", "mayor",
  "mealy", "means", "meant", "meaty", "medal", "media", "medic", "meets", "melds", "melon",
  "melts", "mends", "mercy", "merge", "merit", "merry", "metal", "meter", "metro", "micro",
  "midst", "might", "mimic", "mince", "minds", "mined", "miner", "mines", "minor", "mirth",
  "miser", "missy", "mists", "misty", "mixed", "mixer", "mixes", "moans", "moats", "mobby",
  "model", "modem", "modes", "mogul", "moist", "molar", "molds", "moldy", "money", "month",
  "moody", "moons", "moose", "moral", "moray", "morel", "morns", "moron", "morph", "motel",
  "motif", "motor", "motto", "mould", "mound", "mount", "mourn", "mouse", "mouth", "moved",
  "mover", "moves", "movie", "mower", "mucky", "muddy", "mulch", "multi", "mummy", "mumps",
  "munch", "mural", "murky", "mused", "muses", "music", "musky", "musty", "muted", "muter",
  "myrrh", "nadir", "naive", "naked", "named", "names", "nasal", "nasty", "naval", "navel",
  "nears", "necks", "needs", "needy", "negro", "nerds", "nerdy", "nerve", "nests", "never",
  "newer", "newly", "nicer", "niche", "nicks", "niece", "nifty", "night", "nines", "ninja",
  "ninny", "ninth", "noble", "nobly", "noise", "noisy", "nomad", "nonce", "nooks", "noose",
  "north", "nosed", "noses", "nosey", "notch", "noted", "notes", "nouns", "novel", "nudge",
  "nudie", "nuked", "nukes", "nulls", "numbs", "nurse", "nutty", "nylon", "nymph", "oaken",
  "oakum", "oaths", "ocean", "ocher", "octal", "octet", "odder", "oddly", "odium", "offal",
  "offer", "often", "olden", "older", "oldie", "olive", "omega", "onion", "onset", "opens",
  "opera", "opine", "opium", "optic", "orbit", "order", "organ", "other", "otter", "ought",
  "ounce", "outdo", "outer", "outgo", "ovary", "ovate", "overt", "ovine", "ovoid", "owing",
  "owner", "oxide", "ozone",
  "paced", "paces", "packs", "pacts", "paddy", "padre", "paean", "pagan", "paged", "pager",
  "pages", "pains", "paint", "pairs", "paled", "paler", "pales", "palls", "palsy", "panel",
  "panes", "pangs", "panic", "pansy", "pants", "panty", "paper", "parer", "pares", "parks",
  "parry", "parse", "parts", "party", "pasta", "paste", "pasts", "patch", "paths", "patio",
  "patsy", "patty", "pause", "paved", "paves", "pawns", "payee", "payed", "payer", "peace",
  "peach", "pearl", "pecan", "pedal", "peeks", "peels", "peeps", "peers", "penal", "pence",
  "penis", "penne", "penny", "perch", "peril", "perks", "perky", "perms", "pesky", "pests",
  "petal", "petty", "phase", "phone", "phony", "photo", "piano", "picks", "piece", "piety",
  "piggy", "piled", "piles", "pills", "pilot", "pinch", "pines", "pinks", "pinky", "pinto",
  "pious", "pipes", "piped", "piper", "pitch", "pivot", "pixel", "pixie", "pizza", "place",
  "plaid", "plain", "plait", "plane", "plank", "plans", "plant", "plate", "plays", "plaza",
  "plead", "pleas", "pleat", "plied", "plies", "plots", "plows", "pluck", "plumb", "plume",
  "plump", "plums", "plush", "poems", "poets", "point", "poise", "poked", "poker", "pokes",
  "polar", "poles", "polio", "polka", "polls", "polyp", "ponds", "pools", "poops", "popes",
  "poppy", "porch", "pores", "ports", "posed", "poser", "poses", "posit", "posse", "posts",
  "pouch", "pound", "pouts", "power", "prank", "prays", "press", "preys", "price", "prick",
  "pride", "pried", "pries", "prime", "primo", "print", "prior", "prism", "privy", "prize",
  "probe", "promo", "proms", "prone", "proof", "props", "prose", "proud", "prove", "prowl",
  "proxy", "psalm", "puffy", "pulls", "pulse", "pumps", "punch", "pupil", "puppy", "puree",
  "purge", "purer", "purge", "purse", "pushy", "putty", "quack", "quads", "quail", "quake",
  "qualm", "quark", "quart", "quash", "quasi", "queen", "queer", "quell", "query", "quest",
  "queue", "quick", "quiet", "quilt", "quirk", "quite", "quota", "quote", "quoth", "rabbi",
  "rabid", "racer", "races", "racks", "radar", "radio", "rafts", "raged", "rages", "raids",
  "rails", "rains", "rainy", "raise", "raked", "rakes", "rally", "ramps", "ranch", "range",
  "ranks", "rants", "rapid", "rarer", "rasps", "rated", "rates", "ratio", "ratty", "raved",
  "raven", "raves", "razed", "razes", "razor", "reach", "react", "reads", "ready", "realm",
  "reals", "reaps", "rearm", "rebel", "rebus", "recap", "recur", "redid", "redos", "redox",
  "reeds", "reels", "refer", "refit", "regal", "reign", "reins", "relax", "relay", "relic",
  "remit", "renal", "renew", "repay", "repel", "reply", "rerun", "reset", "resin", "rests",
  "retro", "retry", "reuse", "rhyme", "rider", "rides", "ridge", "rifts", "right", "rigid",
  "rigor", "rings", "rinks", "riots", "ripen", "riper", "risen", "rises", "risks", "risky",
  "rites", "ritzy", "rival", "river", "rivet", "roach", "roads", "roams", "roars", "roast",
  "robes", "robot", "rocks", "rocky", "rodeo", "roger", "rogue", "roles", "rolls", "roman",
  "rooms", "roomy", "roost", "roots", "roped", "ropes", "roses", "rotor", "rouge", "rough",
  "round", "rouse", "route", "rover", "rowdy", "rowed", "royal", "ruler", "rules", "rumor",
  "rumps", "runes", "rupee", "rural", "rusts", "rusty", "saber", "sable", "sacks", "sadly",
  "safer", "sages", "sails", "saint", "salad", "sales", "sally", "salon", "salsa", "salts",
  "salty", "salve", "sandy", "saner", "sapid", "sappy", "sassy", "satin", "satyr", "sauce",
  "saucy", "sauna", "saved", "saver", "saves", "savor", "savvy", "sawed", "saxes", "scabs",
  "scala", "scald", "scale", "scalp", "scaly", "scamp", "scams", "scans", "scant", "scare",
  "scarf", "scars", "scary", "scene", "scent", "scoff", "scold", "scoop", "scoot", "scope",
  "score", "scorn", "scour", "scout", "scowl", "scram", "scrap", "scree", "screw", "scrub",
  "scrum", "scuba", "scuff", "seals", "seams", "sears", "seats", "sects", "sedan", "sedge",
  "seeds", "seedy", "seeks", "seems", "seeps", "seize", "sells", "semen", "sends", "sense",
  "sepal", "sepia", "serfs", "serge", "serif", "serve", "setup", "seven", "sever", "sewed",
  "sewer", "shack", "shade", "shady", "shaft", "shake", "shaky", "shale", "shall", "shalt",
  "shame", "shank", "shape", "shard", "share", "shark", "sharp", "shave", "shawl", "shear",
  "sheen", "sheep", "sheer", "sheet", "shelf", "shell", "shewn", "shift", "shine", "shiny",
  "ships", "shire", "shirk", "shirt", "shoal", "shock", "shoes", "shone", "shook", "shoot",
  "shops", "shore", "short", "shots", "shout", "shove", "shown", "shows", "showy", "shred",
  "shrub", "shrug", "shyly", "sided", "sides", "siege", "sieve", "sight", "sigma", "signs",
  "silks", "silky", "silly", "since", "sines", "singe", "sinks", "sinus", "siren", "sites",
  "sixes", "sixth", "sixty", "sized", "sizes", "skate", "skews", "skids", "skied", "skier",
  "skies", "skill", "skimp", "skins", "skirt", "skulk", "skull", "skunk", "slabs", "slack",
  "slain", "slang", "slant", "slaps", "slash", "slate", "slave", "slaws", "sleek", "sleep",
  "sleet", "slept", "slice", "slick", "slide", "slime", "slimy", "sling", "slips", "slits",
  "slope", "sloth", "slots", "slump", "slung", "slurp", "slush", "smack", "small", "smart",
  "smash", "smear", "smell", "smelt", "smile", "smirk", "smite", "smith", "smock", "smoke",
  "smoky", "smote", "snack", "snail", "snake", "snaps", "snare", "snarl", "sneak", "sneer",
  "snide", "sniff", "snipe", "snoop", "snore", "snort", "snout", "snowy", "soaks", "soaps",
  "soapy", "soars", "sober", "socks", "soggy", "solar", "soles", "solid", "solve", "songs",
  "sonic", "sooth", "sorry", "sorts", "souls", "sound", "soups", "soupy", "south", "space",
  "spade", "spank", "spans", "spark", "spasm", "spate", "spawn", "speak", "spear", "speck",
  "speed", "spell", "spend", "spent", "sperm", "spice", "spicy", "spied", "spies", "spike",
  "spiky", "spill", "spilt", "spine", "spiny", "spire", "spite", "splat", "split", "spoil",
  "spoke", "spoof", "spook", "spool", "spoon", "spore", "sport", "spout", "spray", "spree",
  "sprig", "spunk", "spurn", "spurt", "squad", "squat", "squib", "stack", "staff", "stage",
  "stain", "stair", "stake", "stale", "stalk", "stall", "stamp", "stand", "stank", "stare",
  "start", "stash", "state", "stave", "stays", "stead", "steak", "steal", "steam", "steed",
  "steel", "steep", "steer", "stein", "stern", "stick", "stiff", "still", "stilt", "sting",
  "stink", "stint", "stock", "stoke", "stole", "stomp", "stone", "stony", "stood", "stool",
  "stoop", "store", "storm", "story", "stout", "stove", "strap", "straw", "stray", "strew",
  "strip", "strop", "stuck", "studs", "study", "stuff", "stump", "stung", "stunk", "stuns",
  "stunt", "style", "suave", "sugar", "suite", "suits", "sulky", "sully", "sumac", "sunny",
  "super", "surge", "surly", "sushi", "swami", "swamp", "swank", "swarm", "swash", "swath",
  "swear", "sweat", "sweep", "sweet", "swell", "swept", "swift", "swill", "swine", "swing",
  "swirl", "swish", "swoon", "swoop", "sword", "sworn", "swung", "synod", "syrup", "tabby",
  "table", "taboo", "tacit", "tacky", "taffy", "tails", "taint", "taken", "taker", "takes",
  "tales", "talks", "tally", "talon", "tamed", "tamer", "tames", "tango", "tangy", "tanks",
  "tapas", "taped", "tapes", "tardy", "tarot", "tasks", "taste", "tasty", "tater", "tatty",
  "taunt", "taxed", "taxes", "teach", "teaks", "tears", "tease", "teddy", "teems", "teens",
  "teeth", "tempo", "temps", "tempt", "tenet", "tenor", "tense", "tenth", "tents", "tepee",
  "tepid", "terms", "terra", "terse", "tests", "texts", "thank", "thaws", "theme", "there",
  "these", "theta", "thick", "thief", "thigh", "thing", "think", "third", "thong", "thorn",
  "those", "three", "threw", "throb", "throw", "thuds", "thugs", "thumb", "thump", "tiara",
  "tibia", "ticks", "tidal", "tiger", "tight", "tilde", "tiled", "tiles", "tills", "tilts",
  "timed", "timer", "times", "timid", "tinge", "tings", "tinks", "tippy", "tipsy", "tired",
  "tires", "titan", "tithe", "title", "toast", "today", "token", "tonal", "toned", "tones",
  "tongs", "tonic", "tools", "tooth", "topaz", "topes", "topic", "torch", "torso", "total",
  "totem", "touch", "tough", "tours", "touts", "towed", "towel", "tower", "towns", "toxic",
  "toxin", "trace", "track", "tract", "trade", "trail", "train", "trait", "tramp", "traps",
  "trash", "trawl", "tread", "treat", "trees", "trend", "triad", "trial", "tribe", "trick",
  "tried", "tries", "trims", "trios", "tripe", "trips", "trite", "troll", "troop", "trope",
  "trove", "truck", "truly", "trump", "trunk", "trust", "truth", "tryst", "tubal", "tubes",
  "tulip", "tulle", "tumor", "tuned", "tuner", "tunes", "tunic", "turbo", "turfs", "turns",
  "tusks", "tutor", "twang", "tweak", "tweed", "tweet", "twice", "twigs", "twill", "twine",
  "twins", "twirl", "twist", "typed", "types", "typos", "ulcer", "ultra", "umbra", "uncle",
  "uncut", "under", "undid", "undue", "unfit", "unify", "union", "unite", "units", "unity",
  "unlit", "unmet", "unset", "untie", "until", "unwed", "unzip", "upper", "upset", "urban",
  "urged", "urges", "usage", "users", "usher", "using", "usual", "usurp", "utile", "utter",
  "vague", "valet", "valid", "value", "valve", "vapor", "vault", "vegan", "venom", "venue",
  "verge", "verse", "vicar", "video", "vigor", "villa", "vines", "vinyl", "viral", "virus",
  "visit", "vital", "vivid", "vixen", "vocal", "vogue", "voice", "voila", "vomit", "voted",
  "voter", "votes", "vouch", "vowel", "vying", "wacky", "waded", "wades", "wafer", "waged",
  "wager", "wages", "wagon", "waist", "waits", "waive", "waked", "waken", "wakes", "walks",
  "walls", "waltz", "waned", "wanes", "wants", "wards", "wares", "warms", "warns", "warps",
  "warty", "washy", "wasps", "waste", "watch", "water", "watts", "waved", "waver", "waves",
  "waxed", "waxen", "waxes", "weans", "wears", "weary", "weave", "wedge", "weeds", "weedy",
  "weeks", "weeps", "weepy", "weigh", "weird", "wells", "welsh", "welts", "wench", "whack",
  "whale", "wharf", "wheat", "wheel", "whelp", "where", "which", "whiff", "while", "whims",
  "whine", "whiny", "whirl", "whisk", "white", "whole", "whoop", "whose", "widen", "wider",
  "widow", "width", "wield", "wight", "wilds", "wiles", "wills", "wimpy", "winds", "windy",
  "wined", "wines", "wings", "winks", "wiped", "wiper", "wipes", "wired", "wires", "wiser",
  "wisps", "witch", "witty", "wives", "woeis", "woman", "women", "woods", "woody", "wooed",
  "woofs", "wools", "wooly", "woozy", "words", "wordy", "works", "world", "worms", "worry",
  "worse", "worst", "worth", "would", "wound", "woven", "wrack", "wraps", "wrath", "wreak",
  "wreck", "wrens", "wrest", "wrier", "wring", "wrist", "write", "wrote", "wrung", "wryly",
  "yacht", "yanks", "yards", "yarns", "yearn", "years", "yeast", "yield", "yikes", "yodel",
  "yoked", "yokel", "yokes", "young", "yours", "youth", "yowls", "yummy", "zebra", "zeros",
  "zesty", "zoned", "zones", "zoning", "dodge", "doing", "donor",
  "dough", "dozen", "draft", "drain", "drama", "drank", "drawn", "dress", "dried", "drill",
  "drink", "drone", "droop", "drove", "dying", "eager", "early", "earth", "eased", "ebony",
  "edged", "edict", "elder", "elect", "elite", "elope", "empty", "enact", "enemy", "entry",
  "equal", "equip", "erase", "error", "ethos", "evade", "event", "exact", "exile", "exist",
  "extra", "facet", "faint", "faith", "false", "fancy", "fatal", "feast", "feign", "fence",
  "fiber", "field", "fiery", "fight", "final", "flame", "flash", "flock", "flood", "flora",
  "flute", "focus", "force", "forge", "frame", "fraud", "fresh", "front", "frost", "fruit",
  "funny", "gamma", "gamut", "gassy", "gavel", "gears", "giant", "glass", "glide", "glint",
  "globe", "glory", "gnash", "gnome", "grape", "gravy", "great", "grief", "grind", "groom",
  "grove", "guava", "guess", "guest", "guide", "guild", "habit", "haiku", "happy", "haste",
  "haunt", "hazel", "heaps", "heart", "heavy", "herbs", "hills", "hitch", "hobby", "holly",
  "honor", "horse", "house", "hover", "hutch", "image", "imply", "index", "infer", "inner",
  "input", "issue", "jaded", "jaunt", "jazzy", "jelly", "jewel", "joint", "jolly", "judge",
  "juice", "jumbo", "jumpy", "karma", "kayak", "kebab", "kneel", "knelt", "knife", "knock",
  "knot", "krill", "label", "labor", "laced", "laden", "laser", "latch", "later", "layer",
  "lemon", "leper", "libel", "licks", "limbo", "lined", "liver", "lobby", "local", "logic",
  "lofty", "loose", "loved", "lover", "lucid", "lunar", "lunch", "lunge", "luxor", "lynch",
  "magic", "maker", "manic", "march", "marsh", "match", "mauve", "mayor", "means", "meaty",
  "melon", "merge", "merit", "metro", "miner", "minor", "model", "modem", "money", "month",
  "moral", "mount", "mouse", "mover", "movie", "mural", "music", "myrrh", "naive", "naval",
  "niche", "niece", "night", "ninja", "noble", "nurse", "nylon", "oasis", "ocean", "offer",
  "olive", "omega", "onion", "opera", "orbit", "order", "organ", "otter", "outdo", "outer",
  "oxide", "ozone", "panda", "panel", "panic", "paper", "peach", "pearl", "pedal", "perch",
  "petal", "phase", "phone", "piano", "piece", "pilot", "pitch", "pixie", "plaza", "pluck",
  "plush", "poise", "poker", "porch", "power", "price", "pride", "prime", "print", "prism",
  "prose", "pulse", "purse", "query", "quest", "quiet", "quote", "quoth", "radio", "rally",
  "ranch", "range", "razor", "rebel", "reign", "relax", "relay", "renal", "reset", "retro",
  "rhyme", "rider", "ridge", "rifle", "rigid", "rival", "river", "roast", "robot", "royal",
  "rugby", "rural", "saint", "salad", "scale", "scalp", "scare", "scarf", "scene", "scent",
  "scope", "score", "scout", "screw", "shack", "shade", "shake", "shard", "share", "sharp",
  "shear", "sheep", "shell", "shift", "shine", "shiny", "shock", "shore", "short", "shout",
  "shrub", "sight", "silly", "siren", "skate", "skill", "skirt", "slack", "slant", "slash",
  "slice", "slide", "slope", "smile", "smirk", "smoke", "snake", "solid", "sonar", "space",
  "spade", "spare", "spike", "spine", "split", "spoil", "sport", "spray", "spurt", "stack",
  "staff", "stage", "stain", "stark", "start", "stiff", "stock", "storm", "stove", "strap",
  "straw", "strip", "strut", "style", "sugar", "super", "surge", "swamp", "sword", "table",
  "tango", "taste", "tempo", "tenor", "theme", "there", "thorn", "thump", "tiger", "timid",
  "title", "toast", "token", "tooth", "torch", "track", "trade", "trail", "train", "trash",
  "trend", "tribe", "trick", "trout", "trust", "truth", "tulip", "tumor", "turbo", "tutor",
  "twist", "union", "urban", "usage", "usual", "vague", "valor", "value", "vapor", "vault",
  "vivid", "voice", "vowel", "waltz", "waste", "watch", "water", "weave", "wheat", "whirl",
  "white", "whole", "widow", "witch", "woman", "woven", "wrist", "write", "wrong", "yacht",
  "youth", "zebra",   "apple", "grape", "peach", "mango", "berry", "lemon", "melon", "plumb", "cherry", "guava",
  "house", "table", "chair", "water", "beach", "plant", "green", "sugar", "bread", "glass",
  "brush", "happy", "party", "brick", "light", "river", "stone", "music", "piano", "drama",
  "climb", "cycle", "diner", "earth", "field", "floor", "giant", "hotel", "ocean", "paint",
  "place", "power", "press", "quest", "rebel", "scene", "shade", "spice", "straw", "touch",
  "train", "trust", "vapor", "vista", "youth", "actor", "agent", "alarm", "angle", "arrow",
  "birth", "block", "brand", "bring", "brush", "burst", "cable", "carve", "chill", "cling",
  "close", "cloud", "craft", "dance", "death", "dream", "drift", "drink", "drive", "error",
  "event", "faith", "flame", "flood", "focus", "force", "frame", "front", "ghost", "glory",
  "glove", "grace", "grain", "grave", "group", "guard", "habit", "heart", "honey", "horse",
  "image", "jelly", "knife", "layer", "lemon", "liver", "lover", "magic", "march", "miner",
  "money", "moral", "noble", "north", "novel", "oasis", "orbit", "order", "peace", "petal",
  "piano", "pilot", "point", "price", "pride", "prime", "print", "prize", "query", "quest",
  "raven", "reach", "realm", "river", "roast", "robot", "salad", "scale", "scene", "score",
  "sense", "sheep", "shell", "shock", "shore", "sight", "skill", "smart", "smile", "snake",
  "space", "spice", "spike", "spoon", "spray", "stage", "stain", "stand", "stone", "storm",
  "story", "style", "sugar", "sunny", "table", "taste", "tease", "theme", "thing", "threw",
  "thumb", "tiger", "title", "toast", "trace", "trade", "trail", "train", "trend", "tribe",
  "trust", "truth", "twist", "union", "value", "vapor", "vivid", "voice", "vowel", "wheat",
  "whirl", "whisk", "world", "yacht", "young", "zebra", "about", "above", "adore", "admit",
  "adopt", "agree", "alert", "alien", "align", "allow", "amaze", "amber", "angle", "apply",
  "argue", "arrow", "asset", "awake", "award", "baker", "beast", "begin", "belly", "bench",
  "berry", "bible", "birth", "black", "blade", "blank", "blast", "blind", "block", "blush",
  "board", "boast", "bonus", "boost", "bound", "brain", "brave", "bread", "break", "broke",
  "build", "burst", "cabin", "cable", "camel", "canoe", "cargo", "carve", "charm", "chase",
  "chess", "chill", "class", "clean", "clear", "climb", "close", "cloth", "cloud", "coach",
  "color", "count", "court", "craft", "crash", "crawl", "creed", "crisp", "crown", "crush",
  "cubic", "curve", "dance", "death", "depth", "diner", "dream", "drift", "drink", "drive",
  "earth", "eager", "early", "elite", "error", "event", "faith", "favor", "feast", "field",
  "fight", "flame", "flash", "floor", "focus", "force", "forge", "frame", "frost", "giant",
  "glass", "glory", "glove", "grace", "grain", "grand", "grave", "great", "group", "guard",
  "guest", "habit", "heart", "heavy", "honey", "horse", "hotel", "house", "human", "humor",
  "image", "inner", "jewel", "juice", "jumpy", "knack", "knife", "laser", "layer", "lemon",
  "liver", "logic", "lover", "lucky", "magic", "march", "mayor", "metal", "miner", "money",
  "moral", "motor", "mount", "music", "nerve", "noble", "north", "novel", "ocean", "oasis",
  "orbit", "order", "paint", "peace", "piano", "place", "plane", "plant", "plate", "plead",
  "point", "pouch", "price", "pride", "prime", "print", "prize", "queen", "query", "quest",
  "quick", "quiet", "quote", "raven", "reach", "realm", "rebel", "reign", "relax", "relay",
  "river", "robot", "round", "royal", "rural", "salad", "scale", "scene", "scope", "score",
  "sense", "shade", "sheep", "shell", "shock", "shore", "short", "sight", "skill", "smart",
  "smile", "snake", "space", "spice", "spike", "spoon", "spray", "stage", "stain", "stand",
  "stone", "storm", "story", "style", "sugar", "sunny", "table", "taste", "tease", "theme",
  "thing", "threw", "thumb", "tiger", "title", "toast", "trace", "trade", "trail", "train",
  "trend", "tribe", "trust", "truth", "twist", "union", "value", "vapor", "vivid", "voice",
  "vowel", "wheat", "whirl", "whisk", "world", "yacht", "young",   "abbey", "acorn", "actor", "acute", "admit", "adopt", "adult", "aisle", "alarm", "alert",
  "alien", "align", "alike", "allow", "alone", "along", "amber", "amuse", "angel", "angry",
  "ankle", "apple", "arena", "argue", "arise", "armed", "arrow", "ashes", "aside", "atlas",
  "audio", "awake", "award", "bacon", "badge", "baker", "basic", "basin", "batch", "beach",
  "beads", "beard", "beast", "begin", "being", "bench", "bible", "birth", "black", "blade",
  "blame", "blank", "blast", "blend", "bless", "blind", "block", "bluff", "board", "boast",
  "bobby", "bonus", "boost", "bound", "brave", "bread", "break", "brick", "bride", "brief",
  "bring", "brisk", "broad", "broil", "broom", "brush", "buddy", "build", "burst", "cabin",
  "cable", "camel", "canal", "candy", "canoe", "cargo", "carve", "catch", "cause", "cease",
  "cedar", "chalk", "charm", "chart", "chase", "check", "chess", "chill", "choir", "choke",
  "chord", "chose", "chunk", "cider", "claim", "clash", "class", "clean", "clear", "clerk",
  "click", "cliff", "climb", "cling", "clock", "close", "cloth", "cloud", "coach", "coast",
  "cobra", "comet", "comic", "coral", "count", "court", "cover", "craft", "crane", "crawl",
  "crazy", "creek", "crest", "crisp", "cross", "crowd", "crown", "crush", "curve", "daily",
  "dance", "dated", "dealt", "death", "debut", "depot", "depth", "devil", "diary", "diner",
  "dirty", "ditch", "diver", "dizzy", "donor", "dough", "doubt", "dozen", "draft", "drain",
  "drama", "drawn", "dream", "dress", "dried", "drift", "drink", "drive", "drone", "drove",
  "eager", "early", "earth", "elite", "empty", "entry", "equal", "equip", "erase", "error",
  "event", "exact", "exile", "exist", "extra", "facet", "faint", "faith", "false", "fancy",
  "fatal", "feast", "fiber", "field", "fiery", "fight", "final", "flame", "flash", "fleet",
  "flock", "floor", "flute", "focus", "force", "forge", "frame", "fresh", "front", "frost",
  "fruit", "funny", "gamma", "gamer", "giant", "glass", "glide", "glory", "gnome", "grace",
  "grain", "grand", "grape", "grave", "great", "grief", "grind", "groom", "group", "grove",
  "guest", "guide", "habit", "handy", "happy", "haste", "hazel", "heart", "heavy", "herbs",
  "hobby", "honor", "horse", "hotel", "house", "hover", "humor", "hurry", "image", "imply",
  "index", "inner", "input", "irony", "issue", "ivory", "jewel", "jolly", "juice", "jumbo",
  "jumpy", "kneel", "knife", "knock", "label", "labor", "latch", "later", "layer", "lemon",
  "level", "light", "liver", "logic", "lover", "lucky", "magic", "march", "marsh", "match",
  "mayor", "medal", "merge", "merry", "metal", "miner", "minor", "model", "money", "month",
  "moral", "mount", "mouse", "mover", "movie", "music", "naked", "nanny", "naive", "nerve",
  "noble", "north", "novel", "nurse", "oasis", "ocean", "onion", "orbit", "order", "organ",
  "other", "outer", "oxide", "ozone", "paint", "panic", "paper", "patch", "peach", "pearl",
  "pedal", "petal", "phase", "phone", "photo", "piano", "piece", "pilot", "pitch", "place",
  "plain", "plant", "plate", "plead", "point", "polar", "porch", "pouch", "power", "price",
  "pride", "prime", "print", "prism", "prize", "pulse", "punch", "queen", "query", "quest",
  "quick", "quiet", "quote", "raven", "reach", "realm", "rebel", "reign", "relax", "relay",
  "renal", "reset", "retro", "rider", "ridge", "rifle", "rival", "river", "roast", "robot",
  "rocky", "royal", "rugby", "rural", "salad", "sauce", "scale", "scene", "scope", "score",
  "scout", "scrub", "screw", "shade", "shake", "shard", "shave", "sheep", "sheer", "shelf",
  "shell", "shift", "shine", "shock", "shore", "short", "shout", "shrub", "sight", "silly",
  "since", "skate", "skill", "skirt", "slice", "slide", "slope", "small", "smile", "smoke",
  "snack", "snake", "solid", "sound", "space", "spare", "speak", "spend", "spike", "spine",
  "split", "sport", "spout", "spray", "stack", "staff", "stage", "stain", "stake", "stand",
  "stark", "start", "steep", "stern", "stick", "stiff", "still", "stock", "stone", "storm",
  "story", "straw", "strip", "stuck", "style", "sugar", "super", "swamp", "sword", "table",
  "taste", "teach", "tempo", "thank", "theme", "there", "thorn", "throw", "thumb", "tiger",
  "title", "toast", "tooth", "torch", "tough", "toxic", "trace", "track", "trade", "trail",
  "train", "trend", "tribe", "trick", "troop", "truck", "trust", "truth", "twice", "twist",
  "under", "union", "unite", "upper", "urban", "usage", "usual", "vague", "valid", "value",
  "vapor", "vault", "verge", "vivid", "vocal", "voice", "vowel", "waste", "watch", "water",
  "weary", "weave", "whale", "wheat", "whirl", "white", "whole", "widow", "wider", "witch",
  "woman", "worry", "world", "worse", "worth", "wound", "wrist", "write", "wrong", "xenon",
  "yacht", "yield", "young", "youth", "zebra", "zesty", "zesty", "grape", "peach", "mango", "berry"];
const solution = words[Math.floor(Math.random() * words.length)]; // Random word selection
let currentRow = 0;
let currentTile = 0;

// Create an invisible input field for mobile keyboard support
const inputField = document.createElement("input");
inputField.type = "text";
inputField.maxLength = "1";
inputField.style.position = "absolute";
inputField.style.opacity = "0";
document.body.appendChild(inputField);

inputField.addEventListener("input", (e) => {
  const letter = e.target.value.toLowerCase();
  e.target.value = ""; // Clear the input field
  if (/^[a-z]$/.test(letter)) {
    addLetter(letter);
  }
});

document.addEventListener("click", () => inputField.focus());

// Create game board
function createGameBoard() {
  const gameBoard = document.getElementById("game-board");
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 5; j++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      row.appendChild(tile);
    }
    gameBoard.appendChild(row);
  }
}

// Create keyboard
function createKeyboard() {
  const keyboardLayout = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const keyboardDiv = document.getElementById("keyboard");

  keyboardLayout.forEach(row => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("keyboard-row");

    row.split("").forEach(letter => {
      const key = document.createElement("div");
      key.classList.add("key");
      key.setAttribute("data-key", letter);
      key.textContent = letter;
      rowDiv.appendChild(key);
    });

    keyboardDiv.appendChild(rowDiv);
  });
}

// Add letter to the current tile
function addLetter(letter) {
  if (currentTile < 5) {
    const rows = document.querySelectorAll(".row");
    const tile = rows[currentRow].children[currentTile];
    tile.textContent = letter;
    currentTile++;
  }
}

// Delete the last letter
function deleteLetter() {
  if (currentTile > 0) {
    const rows = document.querySelectorAll(".row");
    const tile = rows[currentRow].children[currentTile - 1];
    tile.textContent = "";
    currentTile--;
  }
}

// Submit the guess
function submitGuess() {
  if (currentTile === 5) {
    const rows = document.querySelectorAll(".row");
    const tiles = rows[currentRow].children;
    let guess = "";

    for (let tile of tiles) {
      guess += tile.textContent.toLowerCase();
    }

    if (!words.includes(guess)) {
      displayMessage("Not a valid word!");
      return;
    }

    checkGuess(tiles, guess);

    if (guess === solution) {
      displayMessage("Congratulations! You guessed the word!");
      return;
    }

    currentRow++;
    currentTile = 0;

    if (currentRow === 6) {
      displayMessage(`Game Over! The word was ${solution}.`);
    }
  }
}

// Check the guess
function checkGuess(tiles, guess) {
  const solutionArray = solution.split("");

  guess.split("").forEach((letter, index) => {
    const tile = tiles[index];
    const key = document.querySelector(`.key[data-key="${letter}"]`);

    if (letter === solutionArray[index]) {
      tile.classList.add("correct");
      key.classList.add("correct");
      solutionArray[index] = null;
    } else if (solutionArray.includes(letter)) {
      tile.classList.add("wrong-position");
      key.classList.add("wrong-position");
      solutionArray[solutionArray.indexOf(letter)] = null;
    } else {
      tile.classList.add("wrong");
      key.classList.add("wrong");
    }
  });
}

// Display message
function displayMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}

// Initialize the game
createGameBoard();
createKeyboard();
