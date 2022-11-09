let windowTest = document.getElementById("test")

let testGo = () => {
    windowTest.style.display = "block"
    console.log(000)
}

let testStop = () => {
    a = () => windowTest.style.display = "none"
    setTimeout(a(), 1000)
    console.log(000)
}