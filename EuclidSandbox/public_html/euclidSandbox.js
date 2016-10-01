var gl;
var program;
var canvas;



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
    var v1 = 0;
    var v2 = 0;
    var r = .25;
    drawObject(gl, program, drawCricle(v1, v2, r, 100),vec4(1.0,0.0,0.0,1.0),gl.TRIANGLE_FAN);
}
;

function drawCircle(centerX, centerY, radius, pointCount) {
    var circleVertices = [];
    var inc = 2 * Math.PI / pointCount;
    for (var theta = 0; theta < 2 * Math.PI; theta += inc) {
        circleVertices.push(vec2(radius * Math.cos(theta) + centerX, radius * Math.sin(theta) + centerY));
    }//generate circle
    return circleVertices;
}
;



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
