const music = document.getElementById("forest-music");

if (music) {

    music.volume = 0.5;

    const musicEnabled = localStorage.getItem("forestMusicEnabled");

    if (musicEnabled === "true") {

        music.play().catch(() => {});
    }

    document.addEventListener("click", () => {

        if (localStorage.getItem("forestMusicEnabled") !== "true") {

            localStorage.setItem("forestMusicEnabled", "true");

            music.play().catch(() => {});
        }

    }, { once: true });
}
function beginJourney(event){

    event.preventDefault();

    const click = document.getElementById("click-sound");

    if(click){

        click.volume =1.0;

        click.currentTime = 0;

        click.play();
    }

    setTimeout(() => {

        window.location.href = "/cats";

    }, 300);
}
function playMeow(){

    const meow = document.getElementById("meow-sound");

    if(meow){

        meow.currentTime = 0;

        meow.volume = 0.2;

        meow.play();
    }
}