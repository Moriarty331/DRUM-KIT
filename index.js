const clapSound = new Audio("audio/clap.wav");
const hihatSound = new Audio("audio/hihats.wav");
const kickSound = new Audio("audio/kick.wav");
const openHatSound = new Audio("audio/openhat.wav");
const percSound = new Audio("audio/perc.wav");
const rimSound = new Audio("audio/rim.wav");
const snareSound = new Audio("audio/snare.wav");

const clapElement = document.querySelector(".clap");
const hihatElement = document.querySelector(".hihats");
const kickElement = document.querySelector(".kick");
const rimElement = document.querySelector(".rim");
const openHatElement = document.querySelector(".openhat")
const percElement = document.querySelector(".perc")
const snareElement = document.querySelector(".snare");

kickElement.addEventListener("click", () => {
    kickSound.play();
})

hihatElement.addEventListener("click", () => {
    hihatSound.play();
})

rimElement.addEventListener("click", () => {
    rimSound.play();
})

openHatElement.addEventListener("click", () => {
    openHatSound.play();
})

clapElement.addEventListener("click", () => {
    clapSound.play();
})

percElement.addEventListener("click", () => {
    percSound.play();
})

snareElement.addEventListener("click", () => {
    snareSound.play();
})

function addHoverClass(element) {
    element.classList.add("button-hover");
    setTimeout(() => {
        element.classList.remove("button-hover");
    }, 170); // Adjust the delay as needed
}


document.querySelector("body").addEventListener("keydown", (e) => {
    console.log(e.key)

    switch (e.key.toLowerCase())
    {
        case "a":
            kickSound.play();
            addHoverClass(kickElement)
            break;
        
        case "s":
            hihatSound.play();
            addHoverClass(hihatElement);
            break;

        case "d":
            rimSound.play();
            addHoverClass(rimElement);
            break;

        case "j":
            openHatSound.play();
            addHoverClass(openHatElement);
            break;

        case "k":
            clapSound.play();
            addHoverClass(clapElement);
            break;

        case "l":
            percSound.play();
            addHoverClass(percElement);
            break;

        case " ":
            snareSound.play();
            addHoverClass(snareElement);
            break;
    }

   
})