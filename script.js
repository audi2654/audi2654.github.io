console.log("Its working");

let theme_color = localStorage.getItem('theme-color')

if(theme_color==null){
    setTheme('light')
}else{
    setTheme(theme_color)
}

let themeDots = document.getElementsByClassName('theme-dot');

for(var i = 0; themeDots.length> i;i++){
    themeDots[i].addEventListener('click',  function(){
        let mode = this.dataset.mode
        console.log('Option Clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode=='light'){
        document.getElementById('theme-style').href='default.css'
    }

    if(mode=='mode1'){
        document.getElementById('theme-style').href='mycolor1.css'
    }

    if(mode=='mode2'){
        document.getElementById('theme-style').href='mycolor2.css'
    }

    if(mode=='mode3'){
        document.getElementById('theme-style').href='mycolor3.css'
    }

    localStorage.setItem('theme-color', mode)
}
