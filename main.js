const imageGallery = document.getElementById('image')


const images = ['photo1.jpg','photo2.jpg']
var imageIndex=0

function nextimage(imageGallery) {
    console.log("hoorah")
    if(imageIndex < images.length-1){
        imageIndex+=1
    } else {
        imageIndex =0
    }
    imageGallery.src = images[imageIndex]
}
