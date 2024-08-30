var cookie=document.querySelector(".pop")

function disappear(){
    cookie.remove();
}

var facts = [
    "All werewolves are shapeshifters, but not all shapeshifters are werewolves",
    "Sirens are winged creatures, not mermaids",
    "Vampires prefer garlic-scented blood",
    "Demons are protective of all chilfren die to their low birthrate",
    "Angels and demons have the same ancestry",
    "No one can utter lies near griffins",
    "Gorgon blood heals if given freely",
    "Succubus means to lay under, incubus to lay on top of, and concubus to lay with",
    "Orgasms, aka 'the little death' heals wraiths",
    "Werewolves are possessive, but prefer to share one woman among several individuals",
    "Mermaids can swim through the air",
    "Not all fae have wings",
    "Unicorns can heal or kill with their horns",
    "Krakens can vary their size and shape at will",
    "Gorgons can only reflesh those they turned to stone themselves"
]



function funFacts(){
    var hmmm =document.querySelector(".interesting")
    var indexChoice = Math.floor(Math.random()*facts.length);
    console.log(indexChoice);
    hmmm.innerText = facts[indexChoice];
    return hmmm
}

var redFlag = {
    "angels": "Wings get in the way",
    "demons": "Frequently smells of brimstone",
    "devils": ["Stickler for rules", " warm body"],
    "djinn" : "Severe trust issues due to generational and personal trauma",
    "dragons": "Dry skin",
    "dryads" : ["Shy", " wilts at criticism", " time blindness"],
    "fae" : "Court obligations supercede needs of significant other until marriage negtotiations begin in earnest",
    "furies" : "Anger management issues",
    "gargoyles" : "Hides emotions outside of jealousy",
    "ghosts" : ["Bodies cold", " disappear when energy depleted", " lack of need for sleep leads to lingering eyes and infidelity"],
    "gorgons" : "Trust issues due to personal trauma",
    "griffin" : "Will never lie",
    "krakens" : "Reclusive",
    "mermaids" : "Hunger for vampire flesh",
    "minotaur" : "Sex addicts",
    "nephilim" : "Tempt people into being their worst and most indulgent selves",
    "selkie" : "Marriages cannot be broken without magical interference",
    "vampires" : "With the exception of blood fonts and creatures larger than hippos, cannot feed on only one individual",
    "werewolves" : ["Aggressive", " tendency toward anger issues"],
}

function datingCons(){
    var boom = document.querySelector("#cons");
    var vex = boom.value
    console.log(vex)
    var bad = redFlag[vex]
    console.log(bad)
    var serious=document.querySelector(".arrg")
    serious.innerText= bad;
    return serious
}

var greenFlag = {
    "angels": "Sweet sent; either floral or baked goods depending on the preferences of the person smelling",
    "demons": "Great and enthusiastic parents",
    "devils": ["Insatiable", " tendency toward the experimental"],
    "djinn" : "Wishes granted upon equivilent exchange",
    "dragons": "Generous",
    "dryads" : ["Protective", " nurturing",],
    "fae" : "Commits in terms of centuries",
    "furies" : "Passionate",
    "gargoyles" : ["Protective", " enjoys activities while in flight"],
    "ghosts" : ["No pregnancy risk", " relationships continue after death"],
    "gorgons" : "Will never cheat",
    "griffin" : "Will never lie",
    "krakens" : "Multiple limbs",
    "mermaids" : "Strong",
    "minotaur" : "Protective",
    "nephilim" : "Sweet smelling like parent, but one unchanging scent",
    "selkie" : "Dedicated through long times apart",
    "vampires" : "Bites can increase sensation",
    "werewolves" : ["Likes to give chase", " lots of physical touch and cuddling"],
}

function datingPros(){
    var bang = document.querySelector("#pros");
    var praise = bang.value
    console.log(praise)
    var good = greenFlag[praise]
    console.log(good)
    var smile=document.querySelector(".huzzah")
    smile.innerText= good;
    return smile
}

function smoothScroll() {
    var elem = document.getElementById("trick");
        elem.scrollIntoView(); 
}

var image = document.getElementById('dazzle');

function blink(){
    // var image = document.getElementById('active');
    image.src = "HornsMe.jpg"  
}

function back(){
    image.src = "FlowersMe.jpg";
}