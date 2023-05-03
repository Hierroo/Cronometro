let hours = 0
let minutes = 0
let seconds = 0
let isRunning = false
let timer;

const startBtn = document.querySelector(".start")
const pauseBtn = document.querySelector(".pause")
const stopBtn = document.querySelector(".stop")

startBtn.onclick = Start
pauseBtn.onclick = Pause
stopBtn.onclick = Stop

function Start() {
    if(isRunning === false){
        isRunning = true
        setAnimation("start")
        timer = setInterval(() => {
            seconds += 1
            if (seconds === 60) {
                seconds = 0
                minutes += 1
            }
            if (minutes === 60) {
                minutes = 0
                hours += 1
            }
            RenderHTML()
        }, 1) 
        return
    }
    return console.log("clock ja está rodando")
}
function Pause(){
    if (isRunning === false) {
        return
    }
    isRunning = false
    setAnimation("pause")
    clearInterval(timer)
}

function Stop() {
    clearInterval(timer)
    isRunning = false
    minutes = 0
    seconds = 0
    hours = 0
    RenderHTML()
    setAnimation("stop")
}

function RenderHTML() {
    if (seconds < 10) {
        document.querySelector(".second").innerText = `0${seconds}`
    } else {
        document.querySelector(".second").innerText = seconds
    }
    
    if (minutes < 10) {
        document.querySelector(".minute").innerText = `0${minutes}`
    } else {
        document.querySelector(".minute").innerText = minutes
    }
    
    if (hours < 10) {
        document.querySelector(".hour").innerText = `0${hours}`
    } else {
        document.querySelector(".hour").innerText = hours
    }
    
}
function setAnimation(button) {
    switch(button){
        case "start":
            startBtn.style = "opacity: 0.4; background-color: white; border: 0.5px solid black; color: black;"
            pauseBtn.style = "opacity: 1; background-color: black; color: white;"
            stopBtn.style = "opacity: 1; background-color: black; color: white"
            break;
        case "pause":
            startBtn.style = "opacity: 1; background-color: black;"
            pauseBtn.style = "opacity: 0.4; background-color: white; border: 0.5px solid black; color: black;"
            break;
        case "stop":
            startBtn.style = "opacity: 1; background-color: black;"
            pauseBtn.style = "opacity: 0.4; background-color: white; border: 0.5px solid black; color: black;"
            stopBtn.style = "opacity: 0.4; background-color: white; border: 0.5px solid black; color: black;"
            break;
        default:
            console.log("algo deu errado")
            break
    }
    
}