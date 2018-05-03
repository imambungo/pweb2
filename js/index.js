function changeImage(a, b, c) {
    document.getElementById("ga").src = a;
    document.getElementById("gb").src = b;
    document.getElementById("gc").src = c;
}
function clear() {
    document.getElementById("g1").style.color = "rgba(255, 255, 255, 0.5)";
    document.getElementById("g2").style.color = "rgba(255, 255, 255, 0.5)";
    document.getElementById("g3").style.color = "rgba(255, 255, 255, 0.5)";
}
function g1() {
    document.getElementById("logo").innerHTML = "Pemandangan";
    clear();
    document.getElementById("g1").style.color = "#fff";
    changeImage("img/a.jpg", "img/b.jpg", "img/c.jpg")
}
function g2() {
    document.getElementById("logo").innerHTML = "Jalan";
    clear();
    document.getElementById("g2").style.color = "#fff";
    changeImage("img/2a.jpg", "img/2b.jpg", "img/2c.jpg");
}
function g3() {
    document.getElementById("logo").innerHTML = "Game";
    clear();
    document.getElementById("g3").style.color = "#fff";
    changeImage("img/3a.png", "img/3b.jpg", "img/3c.jpg");
}