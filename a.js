/*
 * @name Follow 3
 * @frame 710,400
 * @description A segmented line follows the mouse. The relative angle from
 * each segment to the next is calculated with atan2() and the position of
 * the next is calculated with sin() and cos(). Based on code from Keith Peters.
 */
var x = []
var y = []
var segNum = 20
var segLength = 18

for (var i = 0; i < segNum; i++) {
  x[i] = 0
  y[i] = 0
}

function setup() {
    var cnv
    cnv = createCanvas(windowWidth, windowHeight)
    cnv.style('display', 'block')
    strokeWeight(9)
    stroke(255, 100)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
    var i
    clear()
    background(0)
    dragSegment(0, mouseX, mouseY)
    for( i=0; i<x.length-1; i++)
	dragSegment(i+1, x[i], y[i])
}

function dragSegment(i, xin, yin) {
    var dx
    var dy
    var angle
    dx = xin - x[i]
    dy = yin - y[i]
    angle = atan2(dy, dx)
    x[i] = xin - cos(angle) * segLength
    y[i] = yin - sin(angle) * segLength
    segment(x[i], y[i], angle)
}

function segment(x, y, a) {
    push()
    translate(x, y)
    rotate(a)
    line(0, 0, segLength, 0)
    pop()
}
