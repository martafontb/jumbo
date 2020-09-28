const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext('2d')

context.strokeStyle = "#FFE02E"
context.lineWidth = 10
context.lineCap = "round"
context.shadowColor = "#FFE02E"
context.shadowBlur = 15

document.addEventListener("mousemove", function(event){
    context.lineTo(event.clientX, event.clientY)
    context.stroke()
})
