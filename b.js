/*
https://twitter.com/Hau_kun/status/1275084507473985539

*/

var t = 0
function setup() {
    var cnv
    cnv = createCanvas(windowWidth, windowHeight)
    cnv.style('display', 'block')
    stroke('black')
    strokeWeight(2)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
function draw() {
    var L
    L = min(height, width)
    background('white')
    t += 0.009
    for (i = 0; i < 6; i+=PI/4)
    f(L/2, L/2, i, L/7)
}
j
function f(x, y, r, d) {
  if (d > 3) {
    line(x, y, x += cos(r) * d, y -= sin(r) * d)
    f(x, y, r + y / 99 + t, d / 1.5)
    f(x, y, r - y / 99 - t, d / 1.5)
  }
}
