let testing = false;//Zustand der Test

let currentWord = 0; //index vom aktuellen Wort
let remainingTime = 60; //Die gebliebene Zeit


let wordsTyped = 0;//Die Anzahl der Wörter die getippt worden

let keyStroke = 0;// Anzahl, die geschriebenen Buchstaben

let keyStrokeWrongs = 0;// Anzahl, die Fehler beim tippen
const numberOfWordsToView = 24; //Anzahl der Wörter, die in dem WordBox

//Das Wort liste initialisieren
const words = ["the", "and", "to", "of", "a", "I", "in", "was", "he", "that", "it", "his", "her"
        , "you", "as", "had", "with", "for", "she", "not", "at", "but", "be", "my", "on", "have"
        , "him", "is", "said", "me", "which", "by", "so", "this", "all", "from", "they", "no"
        , "were", "if", "would", "or", "when", "what", "there", "been", "one", "could", "very"
        , "an", "who", "them", "Mr", "we", "now", "more", "out", "do", "are", "up", "their"
        , "your", "will", "little", "than", "then", "some", "into", "any", "well", "much"
        , "about", "time", "know", "should", "man", "did", "like", "upon", "such", "never", "only"
        , "good", "how", "before", "other", "see", "must", "am", "own", "come", "down", "say"
        , "after", "think", "made", "might", "being", "Mrs", "again", "great", "two", "can", "go"
        , "over", "too", "here", "came", "old", "where", "our", "may", "first", "way", "has"
        , "though", "went", "us", "away", "day", "make", "these", "young", "long", "shall", "sir"
        , "back", "don't", "house", "ever", "yet", "take", "every", "hand", "most", "last", "eyes"
        , "its", "miss", "having", "off", "looked", "even", "while", "dear", "look", "many"
        , "life", "still", "mind", "quite", "those", "just", "head", "tell", "better", "always"
        , "saw", "seemed", "put", "face", "let", "took", "poor", "place", "why", "done", "found"
        , "same", "going", "under", "enough", "soon", "home", "give", "indeed", "left", "get"
        , "once", "mother", "heard", "myself", "rather", "love", "knew", "got", "lady", "room"
        , "yes", "thing", "father", "sure", "heart", "oh", "right", "three", "men", "night"
        , "people", "door", "told", "round", "woman", "till", "felt", "both", "side", "seen"
        , "began", "whom", "asked", "things", "part", "almost", "moment", "want", "far", "hands"
        , "gone", "world", "few", "gave", "friend", "name", "best", "word", "turned", "kind"
        , "cried", "since", "next", "find", "half", "hope", "called", "nor", "words", "hear"
        , "set", "each", "wish", "voice", "whole", "manner", "new", "course", "least", "years"
        , "among", "stood", "sat", "speak", "leave", "work", "keep", "taken", "end", "less"
        , "family", "often", "wife", "master", "coming", "mean", "light", "money", "cannot"
        , "whose", "boy", "days", "near", "matter", "used", "says", "really", "rest", "full"
        , "help", "child", "sort", "passed", "lay", "small", "behind", "girl", "feel", "fire"
        , "care", "alone", "open", "person", "call", "given", "I'll", "making", "short", "else"
        , "large", "within", "true", "times", "ask", "answer", "air", "kept", "hour", "letter"
        , "happy", "reason", "pretty", "others", "ought", "does", "known", "it's", "bed", "table"
        , "that's", "ready", "read", "either", "means", "spoke", "taking", "talk", "hard"
        , "walked", "turn", "strong", "thus", "high", "along", "above", "glad", "doubt", "nature"
        , "black", "hardly", "town", "sense", "saying", "deal", "use", "white", "bad", "can't"
        , "wanted", "mine", "close", "return", "dark", "fell", "bear", "fear", "state", "also"
        , "point", "fine", "case", "doing", "held", "walk", "lost", "fellow", "truth", "water"
        , "hold", "afraid", "bring", "honour", "low", "ground", "added", "five", "except", "power"
        , "seeing", "dead", "I'm", "usual", "able", "second", "arms", "late", "window", "live"
        , "four", "none", "death", "arm", "road", "hair", "sister", "sent", "longer", "god"
        , "women", "hours", "ten", "son", "horse", "wonder", "cold", "beyond", "please", "fair"
        , "became", "sight", "met", "eye", "year", "show", "itself", "lord", "wrong", "stay"
        , "won't", "opened", "idea", "change", "laid", "nobody", "fact", "during", "feet", "tears"
        , "run", "body", "ran", "past", "order", "need", "dinner", "soul", "ill", "early", "rose"
        , "aunt", "across", "sit", "worse", "six", "quiet", "chair", "doctor", "tone", "living"
        , "sorry", "stand", "meet", "wished", "ah", "lived", "try", "red", "smile", "sound"
        , "silent", "common", "meant", "tried", "until", "mouth", "cut", "marry", "likely"
        , "length", "story", "visit", "deep", "seems", "street", "become", "led", "giving"
        , "struck", "week", "loved", "drew", "seem", "church", "knows", "object", "ladies"
        , "book", "pay", "I've", "pass", "thank", "form", "lips", "former", "blood", "sake"
        , "corner", "spirit", "ago", "foot", "wind", "comes", "wait", "play", "easy", "real"
        , "clear", "worth", "cause", "send", "chance", "didn't", "view", "party", "horses"
        , "notice", "duty", "he's", "age", "figure", "sleep", "twenty", "fall", "months", "broken"
        , "heavy", "secret", "minute", "act", "human", "fancy", "showed", "pounds", "nearly"
        , "piece", "school", "write", "heaven", "beauty", "shook", "sun", "moved", "bit", "desire"
        , "news", "front", "effect", "laugh", "uncle", "fit", "miles", "caught", "hat", "regard"
        , "easily", "glass", "grew", "green", "unless", "stop", "forth", "expect", "sudden", "free"
        , "grave", "angry", "carry", "looks", "dress", "die", "earth", "latter", "garden", "step"];

        //---------------------------------------------------------------------------------------------------
/*
Hier werden die Wichtige Html-Elemente referenziert
*/
const htmlWordBox = document.getElementById("wordsBox");

const htmlWordInput = document.getElementById("wordInput");
//htmlWordInput.focus();
htmlWordInput.onkeyup = onTextChange;



const htmlTimeLeft = document.getElementById("timeLeft");
const htmlSpeed = document.getElementById("speed");


const htmlWordPerMinute = document.getElementById("wordPerMinute");
const htmlKeyStrokes = document.getElementById("keyStrokes");
const htmlCorrectWords = document.getElementById("correctWords");
const htmlWrongWords = document.getElementById("wrongWords");
const htmlPecentage = document.getElementById("pecentage");


const htmlRefreshImage = document.getElementById("refreshButton");
htmlRefreshImage.onclick = onRefreshButtonClick;


const htmlTimeCode = document.getElementById("timeLeft");
const htmlSpeedCode = document.getElementById("speed");


const htmlWpm = document.getElementById("wordPerMinute");
const htmlKs = document.getElementById("keyStrokes");
const htmlwrStk = document.getElementById("wrongStrokes");
const htmlFirstArticle = document.getElementById("firstArticle");
const htmlSecondArticle = document.getElementById("afterTest");

refreshWords();//Das Wörterbox aktualisieren


const htmlTestAgain = document.getElementById("testAgain");
htmlTestAgain.onclick = onTestAgainClick;

const htmlNewTest = document.getElementById("newTest");
htmlNewTest.onclick = onTestAgainClick;

//////////////////////////////////////////////////////////////////////

/**
 * neuer Test starten
 */
function onTestAgainClick() {
    newTest();
}

/**
 * neuer Test schreiben
 */
function onRefreshButtonClick() {
    newTest();
}

/**
 * Diese Methode wird aufgerufen, wenn 
 */
function onTextChange() {

    if (!testing) {
        testing = true;
        startTest();
    }

    checkWord();
    keyStroke++;
}

/**
 * neuer Test starten
 */
function newTest() {

    endTest();

    htmlFirstArticle.style.display = "inline-block";
    htmlSecondArticle.style.display = "none";
}

/**
 * der Test wird beendet
 */
function endTest() {
    htmlFirstArticle.style.display = "none";//verberge das Ergebnisfenster
    //aktualisiere die Anzahl der gezeigten Werte
    htmlWpm.innerHTML = Math.floor((wordsTyped / (60 - remainingTime)) * 60);
    htmlKs.innerHTML = keyStroke;
    htmlwrStk.innerHTML = keyStrokeWrongs;
    htmlWordInput.value = "";

    refresh();
   
    htmlSecondArticle.style.display = "inline-block";//Zeige das Ergebnisfenster
}
/**
 * Der Test wiederholen
 */
function refresh() {    
    try {

        clearInterval(timer);
    } catch (e) {

    }

    remainingTime = 60;
    htmlTimeCode.innerHTML = remainingTime;
    testing = false;
    HTMLInputElement.value = "";
    refreshWords();
}

/**
 * aktualisiere die gezeigten Wörter
 */
function refreshWords() {

    htmlWordBox.innerHTML = "";
    let text = "";

    for (var i = 0 ; i < numberOfWordsToView; i++) {
        text += "<code>" + getRandomWord() + "</code>" + "&nbsp;"
    }

    htmlWordBox.innerHTML = text;
    currentWord = 0;
    htmlWords = htmlWordBox.childNodes;
}

/**
 * Teste ob das vom Benutzer eingegebenen Wort stimmt
 * Falls ja: wird das Wort mit grüne Hintergrund
 */
function checkWord() {

    let input = htmlWordInput.value.trim();
    let htmlCurrentWord = htmlWords[currentWord];


    //htmlCurrentWord.InnerHTML.indexOf(input.trim(), 0) == 0)
    if (input == htmlCurrentWord.innerHTML) {

        htmlCurrentWord.style.backgroundColor = "transparent";

        htmlWordInput.value = "";
        nextWord();
    }
    else if (htmlCurrentWord.innerHTML.indexOf(input, 0) == 0) {

        htmlCurrentWord.style.backgroundColor = "#008A2E";

    } else {
        htmlCurrentWord.style.backgroundColor = "red";
        keyStrokeWrongs++;
    }

}

/**
 * aktualisiere das Wortindex
 */
function nextWord() {

    currentWord++;
    currentWord++;

    wordsTyped++;

    if (currentWord > numberOfWordsToView * 2 - 1) {
        refreshWords();
    }
}

/**
 * Test starten
 */
function startTest() {

    currentWord = 0;
    wordsTyped = 0;
    keyStroke = 0;
    keyStrokeWrongs = 0;
    timer = setInterval(secondTick, 1000);//Erstelle ein Timer, der jeder Sekunde die Methode secondTick aufruft

}
/**
 * diese Methode wird ein mal pro Sekunde aufgeruft
 */
function secondTick() {
    if (remainingTime > 0) {
        remainingTime--;
        htmlTimeCode.innerHTML = remainingTime;
        htmlSpeedCode.innerHTML = Math.floor((wordsTyped / (60 - remainingTime)) * 60);


        let c = document.getElementById("canvas");
        let ctx = c.getContext("2d");
        draw(c, ctx, htmlSpeedCode.innerHTML);

        
    } else {
        endTest();
    }

}


/**
 * 
 * @returns ein beliebiges Wort aus dem Wörterlist
 */
function getRandomWord() {
    return words[randomNumber()];
}
/**
 * 
 * @returns eine beliebige Zahl zwischen 0 und 500
 */
function randomNumber() {
    // var v = Math.floor(Math.random() * (500 - (1 + 1)) + (1 + 1));
    //  Math.floor(Math.random() * (max - (min + 1)) + (min + 1));
    let v = Math.floor(Math.random() * 500) % words.length;
    return v;
}
