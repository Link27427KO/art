    let imageLoader = document.getElementById("imageLoader")
    imageLoader.addEventListener("change", handleImage, false)
    let arrImg = []

    function handleImage(e) {
        let reader = new FileReader
        reader.onload = function(event) {
            let img = new Image
            img.onload = function() {
                arrImg.push(img)
                arrImg.forEach(function(img) {
                    context.drawImage(img, 0, 0);
                })
            }
            img.src = event.target.result
        }
        reader.readAsDataURL(e.target.files[0])
    }
