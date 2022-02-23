let previousColorElement

function changeColor(color, imgElement)
{
    // 	Меняем текущий цвет рисования
    context.strokeStyle = color

    // Меняем стиль элемента <img>, по которому щелкнули
    imgElement.className = "Selected"

    // Возвращаем ранее выбранный элемент <img> в нормальное состояние
    if (previousColorElement != null)
        previousColorElement.className = ""

    previousColorElement = imgElement
}