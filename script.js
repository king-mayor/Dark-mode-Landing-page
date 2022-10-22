const darkToggle = document.querySelector(".toggle-img");
const textDark = document.querySelector(".text");

let darkMode = localStorage.getItem("darkMode");

// Enable darkmode
const enableDarkmode = () =>{
    document.body.classList.add("darkmode");
    textDark.textContent = "Dark";
    localStorage.setItem("darkMode", "enabled");
}
// disable darkmode
const disableDarkmode = () =>{
    document.body.classList.remove("darkmode");
    textDark.textContent = "Light";
    localStorage.setItem("darkMode", null);
}
if(darkMode === "enabled"){
  enableDarkmode();
}
// Add event listener
darkToggle.addEventListener("click", function (){
    let darkMode = localStorage.getItem("darkMode");
    if(darkMode !== "enabled"){
        enableDarkmode();
    }else {
        disableDarkmode();
    }
})