const input = document.createElement("input");
let url = null;
let audio = null;
input.type = "file";
input.accept = "audio/*";

input.onchange = (e) => {
const file = e.target.files[0];
if (!file) return;

url = URL.createObjectURL(file);

audio = new Audio(url);

audio.controls = true;
document.body.appendChild(audio);

};

input.click();

if (window.myObserver) {
    window.myObserver.disconnect();
}

const target = document.getElementById("items");

window.myObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        console.log("Ada perubahan!");
        audio.play();
    });
});

window.myObserver.observe(target, {
    childList: true,      // perubahan child
});