/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


drawObject(gl, program, diamondPoint(-.25,0), [0.0,0.0,0.0,1.0], gl.TRIANGLE_FAN);
    drawObject(gl, program, diamondPoint(.25,0), [0.0,0.0,0.0,1.0], gl.TRIANGLE_FAN);
    drawObject(gl, program, drawLine(-.25,0,.25,0), [0.0,0.0,0.0,1.0], gl.LINE_STRIP);