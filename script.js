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
  "depot", "depth", "devil", "diary", "diner", "dingo", "dirty", "dodge", "doing", "donor",
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
const solution = words[Math.floor(Math.random() * words.length)];
let currentRow = 0;

// Initialize the keyboard layout
const keyboardLayout = [
  "qwertyuiop",
  "asdfghjkl",
  "zxcvbnm"
];

function createKeyboard() {
  const keyboardDiv = document.getElementById("keyboard");

  keyboardLayout.forEach(row => {
    const rowDiv = document.createElement("div");
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

createKeyboard();

document.getElementById("submit-btn").addEventListener("click", submitGuess);

function submitGuess() {
  const input = document.getElementById("guess-input");
  const guess = input.value.toLowerCase();

  if (guess.length !== 5) {
    displayMessage("Guess must be 5 letters long!");
    return;
  }

  for (let i = 0; i < 5; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");

    if (guess[i] === solution[i]) {
      tile.classList.add("correct");
      updateKeyboard(guess[i], "correct");
    } else if (solution.includes(guess[i])) {
      tile.classList.add("wrong-position");
      updateKeyboard(guess[i], "wrong-position");
    } else {
      tile.classList.add("wrong");
      updateKeyboard(guess[i], "wrong");
    }

    tile.textContent = guess[i];
    document.getElementById("game-grid").appendChild(tile);
  }

  input.value = "";

  if (guess === solution) {
    displayMessage("Congratulations! You guessed the word!");
    disableInput();
  } else if (currentRow === 5) {
    displayMessage(`Game Over! The word was ${solution}.`);
    disableInput();
  }

  currentRow++;
}

function updateKeyboard(letter, status) {
  const key = document.querySelector(`.key[data-key="${letter}"]`);
  if (key && !key.classList.contains("correct")) {
    key.className = `key ${status}`;
  }
}

function displayMessage(message) {
  document.getElementById("message").textContent = message;
}

function disableInput() {
  document.getElementById("guess-input").disabled = true;
  document.getElementById("submit-btn").disabled = true;
}






