/*
https://twitter.com/Hau_kun/status/1275084507473985539

*/

var t = 0
var w = 700

function setup() {
  createCanvas(w, w)
  stroke('white')
}

function draw() {
  background('black')
  t += 0.009
  for (i = 0; i < 6; i+=PI/4)
    f(w/2, w/2, i, w/7)
}

function f(x, y, r, d) {
  if (d > 3) {
    line(x, y, x += cos(r) * d, y -= sin(r) * d)
    f(x, y, r + y / 99 + t, d / 1.5)
    f(x, y, r - y / 99 - t, d / 1.5)
  }
}
