// Отслеживаем элемент <img> для толщины линии, по которому ранее щелкнули
let previousThicknessElement;

function changeThickness (thickness, imgElement)
{
    // Изменяем текущую толщину линии
    context.lineWidth = thickness

    // Меняем стиль элемента <img>, по которому щелкнули
    imgElement.className = "Selected"

    // Возвращаем ранее выбранный элемент <img> в нормальное состояние
    if (previousThicknessElement != null)
        previousThicknessElement.className = ""

    previousThicknessElement = imgElement
}