let url = canvas.toDataURL("image/jpeg")

window.location = canvas.toDataURL()

function saveCanvas() {
    // Находим элемент <img>
    let imageCopy = document.getElementById("savedImageCopy")

    // Отображаем данные холста в элементе <img>
    imageCopy.src = canvas.toDataURL()

    // Показываем элемент <div>, делая изображение видимым
    // делая изображение видимым
    let imageContainer = document.getElementById("savedCopyContainer")
    imageContainer.style.display = "block"
}