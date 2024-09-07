const genres = document.getElementById(`btnGENRES`);
const allartists = document.getElementById(`btnALLARTISTS`);
const allsongs = document.getElementById(`btnALLSONGS`);
const about = document.getElementById(`btnABOUT`);
const say = document.getElementById(`Imainff`);
const name = document.getElementById(`title`);
const IG = document.getElementById(`IG`);
const YT = document.getElementById(`YT`);
const X = document.getElementById(`X`);
const HOME = document.getElementById(`housee`);
say.style.fontFamily = "";
  





allartists.onclick = function GENRES(){
        allartists.style.backgroundColor = "white";
        allartists.style.boxShadow = "0 0 15px white";
        allartists.style.width = "70px";
        allartists.style.height = "50px";
        allartists.style.transform = "background-color 0.5s, box-shadow 0.5s, width 0.5s, height 0.5s";
}
allsongs.onclick = function GENRES(){
        allsongs.style.backgroundColor = "white";
        allsongs.style.boxShadow = "0 0 15px white";
        allsongs.style.width = "70px";
        allsongs.style.height = "50px";
        allsongs.style.transform = "background-color 0.5s, box-shadow 0.5s, width 0.5s, height 0.5s";
}
allartists.addEventListener("mouseenter",event => {
        say.textContent = "ARTISTS";
        say.style.color = "rgb(217, 255, 0)";
        say.style.textShadow = " 0 0 15px rgb(217, 255, 0)";
})
allartists.addEventListener("mouseleave",event => {
        say.textContent = "VRO SEAZN";
        say.style.textShadow = " 0 0 0";
        say.style.color = "white";
})
allsongs.addEventListener("mouseenter",event => {
        say.textContent = "SONGS";
        say.style.color = "rgb(230, 0, 0)";
        say.style.fontSize = "20px";
        say.style.textShadow = " 0 0 15px rgb(230, 0, 0)";
        say.style.transition = "box-shadow 0.5s, color 0.5s";
})
allsongs.addEventListener("mouseleave",event => {
        say.textContent = "VRO SEAZN";
        say.style.textShadow = " 0 0 0";
        say.style.color = "white";
})
about.addEventListener("mouseenter",event => {
        say.textContent = "ABOUT VRO";
        say.style.color = "rgb(0, 204, 255)";
        say.style.fontSize = "20px";
        say.style.textShadow = " 0 0 15px rgb(0, 204, 255)";
        say.style.transition = "box-shadow 0.5s, color 0.5s";
})
about.addEventListener("mouseleave",event => {
        say.textContent = "VRO SEAZN";
        say.style.textShadow = " 0 0 0";
        say.style.color = "white";
})
console.error(`BBYVRO(or LUCAS) CAN AND WILL TAKE YO GIRL NGA!!!`);
name.addEventListener("mouseenter",event => {
        say.textContent = "BBYVRO MADE THIS :)";
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
        say.textContent = "THAT CURRENTLY DOES NOT DO ANYTHING";
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
