let container= document.body
let currenttheme=localStorage.getItem("key_theme")
container.classList=currenttheme
function changeTheme(){
    if(localStorage.getItem("key_theme")){
        container.classList=""
        localStorage.removeItem("key_theme")
    }else{
        container.classList="theme"
        localStorage.setItem("key_theme","theme")

    }
   


}