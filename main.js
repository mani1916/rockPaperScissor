squares=document.querySelectorAll('.squares')
score=document.getElementById('score')
msg=document.getElementById("yc")
win=document.getElementById("win")
end=document.getElementById('stop')
cha=document.getElementById('choices')
end.onclick=stop
var winscore=0
stop=document.getElementById('stop')
choices=['rock','paper','scissor']
function get(){
    d=Math.floor(Math.random()*3)
    return (choices[d])
}
mychoice=""
comchoice=""
squares.forEach(element => {
    element.onclick=()=>{
        win.innerText=''
        yourchoice=(element.id)
        comchoice=get()
        start(yourchoice,comchoice)

    }
    // get()
});

function stop(){
    if(winscore===0){

        win.innerText=`Draw 😌`
        win.style.color="yellow"
    }
    else if (winscore<1){

        win.innerText=`You Lose 🤕`
        win.style.color="red"
    }
    else{
        
        win.innerText=`You win 😁`
        win.style.color="Green"
    }
    cha.innerText=''
    score.innerText="Game Ended".toLocaleUpperCase()
}

function start(m,c){
    // msg.innerText=`My choice is ${m} and computer choice is ${c}`
    cha.innerText=`👦 ${m.toUpperCase()} vs ${c.toUpperCase()} 🤖 `
    if(m!=c){
        if(m=='rock'&& c=='scissor'||m=='paper'&&c=='rock'||m=='scissor'&&c=='paper')
        winscore+=1
        else if(m=='rock' && c=='paper'||m=='paper'&&c=='scissor'||m=='scissor'&&c=='rock')
        winscore-=1
    }
    
    score.innerText=`Your score : ${winscore}`
}