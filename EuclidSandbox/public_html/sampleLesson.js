/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var gl;
var program;
var action1;

function canvasMain() {
    canvas = document.getElementById("gl-canvas");
    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL isn't available");
    }
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);
    gl.clear(gl.COLOR_BUFFER_BIT);

    action1 = 0;

    //if (action1 === 1) {
        drawObject(gl, program, diamondPoint(-.25, 0), [0.0, 0.0, 0.0, 1.0], gl.TRIANGLE_FAN);
        drawObject(gl, program, diamondPoint(.25, 0), [0.0, 0.0, 0.0, 1.0], gl.TRIANGLE_FAN);
        drawObject(gl, program, drawLine(-.25, 0, .25, 0), [0.0, 0.0, 0.0, 1.0], gl.LINE_STRIP);
        drawObject(gl, program, drawLine(-.25, 0, .25, 0), [0.0, 0.0, 0.0, 1.0], gl.LINE_STRIP);
        drawObject(gl, program, drawCircle(-.25, 0, .25, 0), [0.0, 0.0, 0.0, 1.0], gl.LINE_STRIP);
        drawObject(gl, program, drawCircle(.25, 0, -.25, 0), [0.0, 0.0, 0.0, 1.0], gl.LINE_STRIP);
   // }
}
;


function setAction1 (action) {
    alert("action");
    action1 = action;
};




function drawObject(gl, program, vertices, color, glType) {
    var colorLocation = gl.getUniformLocation(program, "uColor");
    var bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);
    var vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);
    gl.uniform4f(colorLocation, color[0], color[1], color[2], color[3]);
    gl.drawArrays(glType, 0, vertices.length);
} //drawObject

