function addImg() {

    const img = document.createElement("img");
    img.src = "apple_pixel.png";
    img.alt = "dynamic_image";
    img.classList.add("heart_img");

    var container = document.body
    var containerW = container.offsetWidth;

    var randomX = Math.floor(Math.random() * (containerW - img.width))

    if (document.getElementById("container-img").children.length < 20) {

        document.getElementById("container-img").appendChild(img);
        img.style.top = container.offsetHeight;
        img.style.left = randomX + "px";

    }


}

function newPos() {

    var img = document.getElementsByClassName("heart_img")

    var container = document.body
    var containerW = container.offsetWidth;

    var randomX = Math.floor(Math.random() * (containerW - img.width))

    img.style.top = container.offsetHeight;
    img.style.left = randomX + "px";

}

function moveImg() {

    let current_pos = 100;
    var img = document.getElementsByClassName("heart_img");
    img.style.top = current_pos + 100;

}

setInterval(addImg, 100);


