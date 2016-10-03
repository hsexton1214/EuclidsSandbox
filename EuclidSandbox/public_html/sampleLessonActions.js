/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    var count = 1;
    var stepName;
    var maxStep = 4;
    var minStep = 1;
    var fileName;

    $("#nextstepbutton").click(function () {
        if (count <= maxStep) {
            stepName = "." + "lessonStep" + count;
            $(stepName).show();fileName = "sampleLessonAction" + count + ".js";
            $.getScript(fileName);
            count = count + 1;
            
        }
    });
    
    $("#previousstepbutton").click(function () {
        if (count >= minStep) {
            stepName = "." + "lessonStep" + count;
            $(stepName).hide();
            fileName = "sampleLessonAction" + count + ".js";
            $.getScript(fileName);
            count = count - 1;
        }
    });

});//document. ready
