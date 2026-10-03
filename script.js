const photos = [
    "https://res.cloudinary.com/baiozn4j/image/upload/v1788087653/10.jpg",
    "https://res.cloudinary.com/baiozn4j/image/upload/v1788087689/20.jpg",
    "https://res.cloudinary.com/baiozn4j/image/upload/v1788087719/30.jpg",
    "https://res.cloudinary.com/baiozn4j/image/upload/v1788087743/40.jpg"
];

let currentPhoto = 0;

document.querySelectorAll(".photo").forEach(function(photo, index){

    photo.onclick = function(){

        currentPhoto = index;

        document.getElementById("viewerImage").src = photos[currentPhoto];

        document.getElementById("photoViewer").style.display = "flex";

    };

});

function closePhoto(){

    document.getElementById("photoViewer").style.display = "none";

}

function nextPhoto(){

    currentPhoto = (currentPhoto + 1) % photos.length;

    document.getElementById("viewerImage").src = photos[currentPhoto];

}

function previousPhoto(){

    currentPhoto = (currentPhoto - 1 + photos.length) % photos.length;

    document.getElementById("viewerImage").src = photos[currentPhoto];

}
function openHomeScreen() {
  document.querySelector(".lock-screen").style.display = "none";
  document.querySelector(".home-screen").style.display = "block";
}
