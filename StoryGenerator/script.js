const numOfSentences = 10;

let story = "";

const vowels = ["a","e","i","o","u"]

const intransitiveVerbs = ["wandered","explored","lived","resided","stayed","remained","danced","laughed","slept","squealed","hid","sat","dined","kneeled","twirled","swam","jumped","bounded","raced","flopped","tripped","pranced","rested","pranced","stalked","stomped","screamed"]
const transitiveVerbs = ["found","loved","caught","chased","admired","fought","stabbed","pursued","rebuffed","parried","opposed","squandered","considered","regarded","pondered","felt","sought","upended","spilled","disturbed","harrassed","disguised","addressed","heralded","snuffed","jiggled","chopped","mixed","investigated","fought","conquered","revealed","investigated","experienced","understood","noticed","approached","berated","chastized","encouraged","diminished","destroyed","transfigured","demolished","razed","rebuilt","poisoned","slapped","tortured","slammed","stomped on","clashed with","pushed","crushed","shook","traumatized","defeated","killed","vanquished","slayed","ravaged","pillaged","looted","ransacked","plundered","kissed","assisted","hugged","led","served","guided","sacrificed","inspired"]
const linkingVerbs = ["was","seemed to be","became","grew to be","turned out to be","was not","didn't seem to be","failed to be","appeared to be","wanted to be","didn't want to be","had to be","didn't have to be"]
const indirectVerbs = ["gave","handed","ceded","bequeathed","gifted","threw","tossed","passed","fed","cooked","donated"]
const prepositions = ["above","across","against","along","around","at","before","behind","beyond","by","concerning","despite","during","following","for","from","in","including","into","like","near","of","off of","on top of","onto","out of","outside","over","past","towards","under","up against","upon","up to", "with","without"]
const subjects = ["dragon","soldier","princess","knight","thief","adventurer","prince","farmer","cat","horse","donkey","man","woman","child","halfling","elf","dwarf","balrog","orc","gargoyle","satyr","griffin","faun","fairy","troll","wyvern","hag","wizard","warlock","sorcerer","blacksmith","cow"]
const objects = ["dragon","soldier","princess","knight","thief","adventurer","prince","farmer","cat","horse","donkey","man","woman","child", "sword","stone","house","castle","cave","road","fence","lair","treasure","country","wall","siege","war","admiration","love","fear","halfling","elf","dwarf","balrog","orc","gargoyle","unicorn","satyr","griffin","faun","fairy","troll","wyvern","hag","wizard","warlock","sorcerer","blacksmith","cow","dagger","sword","axe","satchel","compass","knapsack","map","anchor","forest","dungeon","palace","field","plough","scythe","pair of shears","herd of cattle","saddle","hammer","mace","lantern","tavern","inn","city square","marketplace","abyss","mountain pass","mine","spell","incantation","ward","firebolt","frying pan","snake","potion","crossbow","poison","elixir"]
const adjectives = ["large","small","beautiful","ugly","short","long","tall","aromatic","stinky","pungent","pleasing","pleasant","unsettling","impolite","polite","cruel","kind","malicious","evil","ill-behaved","curious","overwhelming","gorgeous","exquisite","confusing","cunning","heroic","crooked","illegal","wealthy","helpful","misleading","dangerous","perilous","shallow","deep","steep","sharp","soft","lazy","gentle","fastidious","intelligent"]
const adverbs = ["nearly","totally","profoundly","almost","surprisingly","disturbingly","quickly","carefully","exquisitely","aromatically","pleasantly","dextrously","unsettlingly","impolitely","politely","cruelly","maliciously","kindly","imprudently","precariously","elegantly"]
const conjunctions = [{start:"either",end:"or"},{start:null, end:"then"},{start:"while", end:null},{start:"after", end:null},{start:"once", end:null},{start:null, end:"and"},{start:"when", end:null},{start:null, end:"because"},{start:null, end:"since"},{start:"after", end:null}]
const sentenceStructures = ["S Vi","S Vt Do","S Vl Pa","S Vt Io Do"]
const articles = ["a","an","the"]

function getRandom(array) {
    return array[Math.floor(Math.random()*array.length)];
}

function addArticle(nominative){
    let articled = ""
    startsWithVowel = false
    for (i = 0; i < vowels.length;i++){
        if (vowels[i] === nominative[0]){
            startsWithVowel = true
        }
    }
    if (Math.random()*2.78 < 1){
        articled = "the " + nominative
    } else if (startsWithVowel) {
        articled = "an " + nominative
    } else {
        articled = "a "+ nominative
    }
    return articled
}

function getAdverb () {
    return adverbs[Math.floor(Math.random()*adverbs.length)]
}

function getAdjective () {
    let getsAdverb = Math.floor(Math.random()*7)
    if (getsAdverb < 6){
        return adjectives[Math.floor(Math.random()*adjectives.length)];
    } else {
        return getAdverb() + " " + adjectives[Math.floor(Math.random()*adjectives.length)]
    }
}

function decorateNoun (noun){
    let decorated = noun
    const getsAdjective = Math.floor(Math.random()*2)
    const getsPrepositionalPhrase = Math.floor(Math.random()*1.5)
    if (getsAdjective){
        decorated = getAdjective()+" "+noun
    }
    if (getsPrepositionalPhrase){
        decorated = noun + " "+ getPrepositionalPhrase()
    }
    decorated = addArticle(decorated)
    return decorated
}

function getPrepositionalPhrase(){
    let prepositionalPhrase = "";
    let startsWithVowel = false
    numAdjectives = Math.floor(Math.random()*2.1);
    if (numAdjectives > 1){
        prepositionalPhrase += getAdjective() + ", " + getAdjective() + " " + objects[Math.floor(Math.random()*objects.length)];
    } else if (numAdjectives > 0){
        prepositionalPhrase += getAdjective() + " " + objects[Math.floor(Math.random()*objects.length)];
    } else {
        prepositionalPhrase += objects[Math.floor(Math.random()*objects.length)];
    }
    prepositionalPhrase = prepositions[Math.floor(Math.random()*prepositions.length)]+" "+addArticle(prepositionalPhrase)
    return prepositionalPhrase
}

function getSubject (){
        return decorateNoun(getRandom(subjects))
}

function getObject () {
    const numOfObjects = Math.ceil(Math.random()*1.1)
    if (numOfObjects < 2){
        return decorateNoun(getRandom(objects))
    } else {
        return decorateNoun(getRandom(objects))+" and "+decorateNoun(getRandom(objects))
    }

}

function getPredicateAdjectival() {
    type = Math.floor(Math.random()*2.5)
    if (type === 0){
        return getAdjective()
    } else if (type < 2){
        return getPrepositionalPhrase()
    } else {
        return getObject()
    }
}

function getIntransitiveVerb(){
    let intransitiveVerb = getRandom(intransitiveVerbs)
    let adverbAdd = Math.floor(Math.random()*1.3)
    let prepositionalAdd = Math.floor(Math.random()*1.3)
    if (adverbAdd > 0){
        intransitiveVerb = getAdverb() + " " + intransitiveVerb
    }
    if (prepositionalAdd >0) {
        intransitiveVerb = intransitiveVerb + " " + getPrepositionalPhrase()
    }
    return intransitiveVerb
}

function getTransitiveVerb(){
    let transitiveVerb = getRandom(transitiveVerbs)
    let adverbAdd = Math.floor(Math.random()*1.3)
    if (adverbAdd > 0){
        transitiveVerb = getAdverb() + " " + transitiveVerb
    }
    return transitiveVerb
}

function getLinkingVerb(){
    let linkingVerb = getRandom(linkingVerbs)
    let adverbAdd = Math.floor(Math.random()*1.3)
    if (adverbAdd > 0){
        linkingVerb = getAdverb() + " " + linkingVerb
    }
    return linkingVerb
}

function getIndirectVerb(){
    let indirectVerb = getRandom(indirectVerbs)
    let adverbAdd = Math.floor(Math.random()*1.3)
    if (adverbAdd > 0){
        indirectVerb = getAdverb() + " " + indirectVerb
    }
    return indirectVerb
}

function getSVi(){
    return getSubject() + " " + getIntransitiveVerb()
}

function getSVtDo(){
    return getSubject() + " " + getTransitiveVerb() + " " + getObject()
}

function getSVlPa(){
    return getSubject() + " " + getLinkingVerb() + " " + getPredicateAdjectival()
}

function getSVtIoDo(){
    return getSubject() + " " + getIndirectVerb() + " " + getSubject() + " " + getObject()
}

function getCompleteClause () {
    let completeClause = ""
    const clauseStructure = Math.floor(Math.random()*3.3)
    if (clauseStructure === 0){
        return getSVi()
    } else if (clauseStructure < 2){
        return getSVtDo()
    } else if (clauseStructure < 3){
        return getSVlPa()
    } else {
        return getSVtIoDo()
    }
}

function capitalizeFirstLetter(string) {
    let caps = string[0]
    return caps.toUpperCase() + string.slice(1);
  }

function getSentence () {
    text = ""
    const isComplex = Math.floor(Math.random()*2);
    if (isComplex > 0){
        const structure = Math.floor(Math.random()*conjunctions.length)
        if (conjunctions[structure].end !== null) {
            text = getCompleteClause() + ", " + conjunctions[structure].end + " " + getCompleteClause()
        } else {
            text = getCompleteClause() + ", " + getCompleteClause()
        }
        if (conjunctions[structure].start !== null)
            text = conjunctions[structure].start + " " + text
    } else {
        text = getCompleteClause()
    }
    text = capitalizeFirstLetter(text)
    text += "."
    return text
}

function writeAStory (){
    story = ""
    for (r = 0; r < numOfSentences; r++){
        story += getSentence() + " "
    }
    document.getElementById("toWrite").innerHTML = story
}



