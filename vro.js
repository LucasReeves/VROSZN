
const say = document.getElementById(`Imainff`);
const name = document.getElementById(`title`);
const IG = document.getElementById(`IG`);
const YT = document.getElementById(`YT`);
const X = document.getElementById(`X`);
const HOME = document.getElementById(`housee`);
const HEADING = document.getElementById(`D1`);
const SAYYY = document.getElementById(`BRA`);
const Backk = document.getElementById(`backtoartists`);

say.style.fontFamily = "";
  
console.error(`BBYVRO(or LUCAS) CAN AND WILL TAKE YO GIRL NGA!!!`);
name.addEventListener("mouseenter",event => {
        say.textContent = "THIS ME BTW";
        say.style.color = "aqua";
        say.style.fontSize = "20px";
        say.style.textShadow = " 0 0 15px aqua";
        say.style.transition = "box-shadow 0.5s, color 0.5s";
})
name.addEventListener("mouseleave",event => {
        say.textContent = "VRO SEAZN";
        say.style.textShadow = " 0 0 0";
        say.style.color = "white";
})
IG.addEventListener("mouseenter",event => {
        say.textContent = "FOLLOW MY INSTAGRAM";
        say.style.color = "rgba(255, 0, 128)";
        say.style.fontSize = "20px";
        say.style.textShadow = " 0 0 15px rgba(255, 0, 128)";
        say.style.transition = "box-shadow 0.5s, color 0.5s";
})
IG.addEventListener("mouseleave",event => {
        say.textContent = "VRO SEAZN";
        say.style.textShadow = " 0 0 0";
        say.style.color = "white";
})
YT.addEventListener("mouseenter",event => {
        say.textContent = "SUBSCRIBE TO MY YOUTUBE";
        say.style.color = "red";
        say.style.fontSize = "20px";
        say.style.textShadow = " 0 0 15px red";
        say.style.transition = "box-shadow 0.5s, color 0.5s";
})
YT.addEventListener("mouseleave",event => {
        say.textContent = "VRO SEAZN";
        say.style.textShadow = " 0 0 0";
        say.style.color = "white";
})
X.addEventListener("mouseenter",event => {
        say.textContent = "FOLLOW ME ON X";
        say.style.color = "white";
        say.style.fontSize = "20px";
        say.style.textShadow = " 0 0 15px white";
        say.style.transition = "box-shadow 0.5s, color 0.5s";
})
X.addEventListener("mouseleave",event => {
        say.textContent = "VRO SEAZN";
        say.style.textShadow = " 0 0 0";
        say.style.color = "white";
})
HOME.addEventListener("mouseenter",event => {
        say.textContent = "HOME PAGE";
        say.style.color = "red";
        say.style.fontSize = "20px";
        say.style.textShadow = " 0 0 15px red";
        say.style.transition = "box-shadow 0.5s, color 0.5s";
})
HOME.addEventListener("mouseleave",event => {
        say.textContent = "VRO SEAZN";
        say.style.textShadow = " 0 0 0";
        say.style.color = "white";
})
HEADING.addEventListener("mouseenter",event => {
    say.textContent = "PRODUCER";
    say.style.color = "aqua";
    say.style.fontSize = "20px";
    say.style.textShadow = " 0 0 15px aqua";
    say.style.transition = "box-shadow 0.5s, color 0.5s";
})
HEADING.addEventListener("mouseleave",event => {
    say.textContent = "VRO SEAZN";
    say.style.textShadow = " 0 0 0";
    say.style.color = "white";
})
Backk.addEventListener("mouseenter",event => {
        SAYYY.textContent = "Back To Artists Page?";
        SAYYY.style.color = "aqua";
        SAYYY.style.textShadow = "0 0 10px aqua";
        SAYYY.style.transition = "text-shadow 0.3s, color 0.3s";
})
Backk.addEventListener("mouseleave",event => {
        SAYYY.textContent = "";
})

