

//This function takes in point (x,y) and draws a small diamond shape to 
//represent a point
function diamondPoint(x, y) {
    var pointSize = .02;
    var pointVertices = [
        vec2(x - pointSize, y),
        vec2(x, y + pointSize),
        vec2(x + pointSize, y),
        vec2(x, y - pointSize)
    ];
    return pointVertices;
}
;

//This function takes in the center (x1,y1) and a point on the circle (x2,y2)
function drawCircle(x1, y1, x2, y2) {
    var circleVertices = [];
    var inc = 2 * Math.PI / 50;
    var radius = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    for (var theta = 0; theta < 2 * Math.PI; theta += inc) {
        circleVertices.push(vec2(radius * Math.cos(theta) + x1, radius * Math.sin(theta) + y1));
    }
    return circleVertices;
}
; //drawCircle

//This function takes in the endpoints of a line
function drawLine(x1, y1, x2, y2) {
    var lineVertices = [];
    lineVertices.push(vec2(x1, y1));
    lineVertices.push(vec2(x2, y2));
    return lineVertices;
}
; //drawLine
//
////This function takes in the endpoints of 2 lines and finds the intersection.
////It currently still has bugs though and is not implempented in the program.
//function lineIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
//    var slopeLine1 = (y2 - y1) / (x2 - x1);
//    var slopeLine2 = (y4 - y3) / (x4 - x3);
//    var xInter = (x1 * slopeLine1 - x3 * slopeLine2) / (slopeLine1 - slopeLine2);
//    var yInter = slopeLine1 * (xInter - x1) + y1;
//    drawObject(gl, program, drawPoint(xInter, yInter), centroidColor, gl.TRIANGLE_FAN);
//}
//;//lineIntersection
//
////
//////This function requires that the 2 circles have an equal radius and that the 
//////points given in parameter, (a,b) and (c,d), be r distance from one another
function calculateCircleIntersection(a, b, c, d, genInterColor) {
    //center0x and center0y are always 0
    var center2x = c - a;
    var center2y = d - b;
    var v1 = normalize(vec2(c - a, d - b), false);
    var v2 = normalize(vec2(1, 0), false);
    //center3x and center3y are always 0
    var center4x = center2x * (dot(v1, v2)) - center2y * (cross2by2(v1, v2));
    var center4y = center2x * (cross2by2(v1, v2)) + center2y * (dot(v1, v2));
    var r = Math.sqrt(center4x * center4x + center4y * center4y);
    //calculates x and y if the case were at the origin
    var initialX1 = r / 2;
    var initialY1 = Math.sqrt(r * r - (r / 2) * (r / 2));
    //the second intersection is reflected about the x-axis
    var initialX2 = initialX1;
    var initialY2 = -1 * initialY1;
    //rotate the points back to their original theta and translate back to the original location
    var finalX1 = initialX1 * dot(v1, v2) + initialY1 * cross2by2(v1, v2) + a;
    var finalY1 = -initialX1 * cross2by2(v1, v2) + initialY1 * dot(v1, v2) + b;
    var finalX2 = initialX2 * dot(v1, v2) + initialY2 * cross2by2(v1, v2) + a;
    var finalY2 = -initialX2 * cross2by2(v1, v2) + initialY2 * dot(v1, v2) + b;
    drawObject(gl, program, drawPoint(finalX1, finalY1), genInterColor, gl.TRIANGLE_FAN);
    drawObject(gl, program, drawPoint(finalX2, finalY2), genInterColor, gl.TRIANGLE_FAN);
    //drawObject(gl, program, drawLine(finalX1,finalY1,finalX2,finalY2), [0.0,0.0,0.0,1.0], gl.LINE_STRIP);
}
;//calculateCircleIntersection