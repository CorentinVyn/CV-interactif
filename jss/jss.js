/* fonction afficher le contenu des logos*/
const logoc = document.querySelector("#logocasto")
const experiencec = document.querySelector("#experiencecasto")

const logom = document.querySelector("#logomatch")
const experiencem = document.querySelector("#experiencematch")

const logol = document.querySelector("#logolouise")
const experiencel = document.querySelector("#experiencelouise")

const logou= document.querySelector("#logouniv")
const etudeu= document.querySelector("#etude")

const logoly=document.querySelector("#logoqueneau")
const etudeq=document.querySelector("#lycee")

const logoj=document.querySelector("#logojeu")
const personnej=document.querySelector("#mespassions")

const logop=document.querySelector("#logopersonnalite")
const personnep=document.querySelector("#mapersonnalite")

const logov=document.querySelector("#logojeuxvideos")
const personnev=document.querySelector("#jeuxvideos")

logoc.addEventListener("click", ()=>{
    if(experiencec.style.display=="block"){
        experiencec.style.display="none";

    } else{
    experiencec.style.display="block";
    experiencem.style.display="none";
    experiencel.style.display="none";
    etudeu.style.display="none";
    etudeq.style.display="none";
    personnej.style.display="none";
    personnep.style.display="none";
    personnev.style.display="none";

    }


});

logom.addEventListener("click", ()=>{
    if(experiencem.style.display=="block"){
        experiencem.style.display="none";

    } else{
    experiencem.style.display="block";
    experiencec.style.display="none";
    experiencel.style.display="none";
    etudeu.style.display="none";
    etudeq.style.display="none";
    personnej.style.display="none";
    personnep.style.display="none";
    personnev.style.display="none";

    }
   
});

logol.addEventListener("click", ()=>{
    if(experiencel.style.display=="block"){
        experiencel.style.display="none";

    } else{
    experiencel.style.display="block";
    experiencec.style.display="none";
    experiencem.style.display="none";
    etudeu.style.display="none";
    etudeq.style.display="none";
    personnej.style.display="none";
    personnep.style.display="none";
    personnev.style.display="none";
    }

});

logou.addEventListener("click", ()=>{
    if(etudeu.style.display=="block"){
        etudeu.style.display="none";

    } else{
    experiencec.style.display="none";
    experiencem.style.display="none";
    experiencel.style.display="none";
    etudeu.style.display="block";
    etudeq.style.display="none";
    personnej.style.display="none";
    personnep.style.display="none";
    personnev.style.display="none";

    }


});

logoly.addEventListener("click", ()=>{
    if(etudeq.style.display=="block"){
        etudeq.style.display="none";

    } else{
    experiencec.style.display="none";
    experiencem.style.display="none";
    experiencel.style.display="none";
    etudeu.style.display="none";
    etudeq.style.display="block";
    personnej.style.display="none";
    personnep.style.display="none";
    personnev.style.display="none";

    }


});

logoj.addEventListener("click", ()=>{
    if(personnej.style.display=="block"){
        personnej.style.display="none";

    } else{
    experiencec.style.display="none";
    experiencem.style.display="none";
    experiencel.style.display="none";
    etudeu.style.display="none";
    etudeq.style.display="none";
    personnej.style.display="block";
    personnep.style.display="none";
    personnev.style.display="none";

    }


});

logop.addEventListener("click", ()=>{
    if(personnep.style.display=="block"){
        personnep.style.display="none";

    } else{
    experiencec.style.display="none";
    experiencem.style.display="none";
    experiencel.style.display="none";
    etudeu.style.display="none";
    etudeq.style.display="none";
    personnej.style.display="none";
    personnep.style.display="block";
    personnev.style.display="none";
    }
});

logov.addEventListener("click", ()=>{
    if(personnev.style.display=="block"){
        personnev.style.display="none";

    } else{
    experiencec.style.display="none";
    experiencem.style.display="none";
    experiencel.style.display="none";
    etudeu.style.display="none";
    etudeq.style.display="none";
    personnej.style.display="none";
    personnep.style.display="none";
    personnev.style.display="block";
    }
});

/* fonction slider jeux */ 
const slide=["armoiregauche.jpg","armoiredroite.jpg","cartejeu.jpg","fraggedempire.jpg",'aria.jpg'];
let numero = 0;

function nextslide(sens){
    numero= numero + sens;
    if (numero>4)
        numero=0;
    if (numero <0)
        numero=4;
    document.getElementById("slide").src="images/" + slide[numero];

}

const slide2=["darkestdongeon.jpg","balatro.jpg","tinyrogues.jpg","valorant.jpg"];
let numero2 = 0;

function nextslide2(sens){
    numero2= numero2 + sens;
    if (numero2>3)
        numero2=0;
    if (numero2 <0)
        numero2=3;
    document.getElementById("slide2").src="images/" + slide2[numero2];

}


const slide3=["livre.jpg","bruges1.jpg","alsace1.jpg","bateau.jpg"];
let numero3 = 0;

function nextslide3(sens){
    numero3= numero3 + sens;
    if (numero3>3)
        numero3=0;
    if (numero3 <0)
        numero3=3;
    document.getElementById("slide3").src="images/" + slide3[numero3];

}