var darkButton = document.getElementById("darkButton")

function darkMode (){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

darkButton.addEventListener("click", darkMode);



var button = document.getElementById("buttonup")

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTo({top:0, behavior:"smooth"});
    }

    buttonup.addEventListener("click", toTop);

    var menuButton = document.getElementById("menuButton");
    function menuFun(){
        var htmlBody1 = document.body;
        htmlBody1.classList.toggle("visibility")
    }
    
    menuButton.addEventListener("click", menuFun)