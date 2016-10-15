/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var textArray;

function readFile(){
    $.get('sampleLesson.txt', function(data){
       
        var lines =       data.split("&"); 
       // alert(lines[1]);
        textArray = lines;
        $(".worddiv").append(textArray[0]);
       // for (var i=0; i<lines.length; i++){
       //     textArray = lines;
     //   }
   
    });
};


$(document).ready(function () {
    var count = 0;
    var stepName;
    var maxStep = 4;
    var minStep = 1;
  //  var fileName;

    $("#nextstepbutton").click(function () {
        if (count < maxStep) {
           // stepName = "." + "lessonStep" + count;
           // $(stepName).show();
            //fileName = "sampleLessonAction" + count + ".js";
            //$.getScript(fileName);
            count = count + 1;
            console.log(count);
            canvasMain(count);
           $(".worddiv").append(textArray[count]);
           
            
        }
    });
    
    $("#previousstepbutton").click(function () {
        if (count >= minStep) {
           
           // $(stepName).hide();
           // fileName = "sampleLessonAction" + count + ".js";
          //  $.getScript(fileName);
           count = count - 1;
           var highCount = count +1;
           stepName = "." + "lessonStep" + highCount;
          
           console.log(count);
          canvasMain(count);
         // alert(stepName);
          $("p").remove(stepName);
         // document.write(textArray[count]);
           
        }
    });

});//document. ready

