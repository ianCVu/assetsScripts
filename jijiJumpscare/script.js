const screen = document.createElement("img");
screen.src = "https://github.com/ianCVu/assetsScripts/blob/main/jijiJumpscare/jijiJumpscare.png?raw=true";
screen.style.position = "fixed";
screen.style.zIndex = 999999999;
screen.style.height = "100%;";
screen.style.width = "100%";
screen.style.left = "0px";
screen.style.top = "0px";
const audio = document.createElement("audio");
audio.src = "https://github.com/ianCVu/assetsScripts/raw/refs/heads/main/jijiJumpscare/jumpscare-sound.mp3";
audio.controls = true;
document.body.appendChild(screen);
document.body.appendChild(audio);
audio.play();
setTimeout(function() {
    screen.src = "https://github.com/ianCVu/assetsScripts/blob/main/jijiJumpscare/warning.png?raw=true";
    audio.src = "https://github.com/ianCVu/assetsScripts/raw/refs/heads/main/jijiJumpscare/erro.mp3";
    audio.play();
}, 2000)
