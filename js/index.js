function changeImage(a, b, c) {
    document.getElementById("ga").src = a;
    document.getElementById("gb").src = b;
    document.getElementById("gc").src = c;
}
function g1() {
    document.getElementById("logo").innerHTML = "Pemandangan";
    changeImage("img/a.jpg", "img/b.jpg", "img/c.jpg")
}
function g2() {
    document.getElementById("logo").innerHTML = "Jalan";
    changeImage("img/2a.jpg", "img/2b.jpg", "img/2c.jpg");
}
function g3() {
    document.getElementById("logo").innerHTML = "Game";
    changeImage("img/3a.jpg", "img/3b.jpg", "img/3c.jpg");
}