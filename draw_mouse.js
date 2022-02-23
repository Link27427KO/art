let canvas
let context
let isDrawing
let counter = 0

window.onload = function() {
    canvas = document.getElementById("drawingCanvas")
    context = canvas.getContext("2d")

    // Подключаем требуемые для рисования события
    canvas.onmousedown = startDrawing
    canvas.onmouseup = stopDrawing
    canvas.onmouseout = stopDrawing
    canvas.onmousemove = draw
}

function startDrawing(e) {
    // Начинаем рисовать
    isDrawing = true

    // Создаем новый путь (с текущим цветом и толщиной линии)
    context.beginPath()

    // Нажатием левой кнопки мыши помещаем "кисть" на холст
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop)

    if (e.button === 2) {
        context.strokeStyle = 'white'
        counter = 2
    }
    else if (e.button === 0 && counter === 2) {
        context.strokeStyle = 'black'
        counter = 1
    }
    else {
        changeColor()
    }
}

function draw(e) {
    if (isDrawing === true)
    {
        // Определяем текущие координаты указателя мыши
        let x = e.pageX - canvas.offsetLeft
        let y = e.pageY - canvas.offsetTop

        // Рисуем линию до новой координаты
        context.lineTo(x, y)
        context.stroke()
    }
}

function stopDrawing() {
    isDrawing = false
}