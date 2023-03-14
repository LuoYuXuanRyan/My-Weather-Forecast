var index = 1;
function show() {
    index++;
    if(index > 7) {
        index = 1;
    }
    var img = document.getElementById("show");
    img.src = "./pictures/" + index +".png";
}   