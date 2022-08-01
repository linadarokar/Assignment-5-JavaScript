function check(){
    var c=0;
    var q1= document.quiz.question1.value;
    var q2= document.quiz.question2.value;
    var q3= document.quiz.question3.value;
    var q4= document.quiz.question4.value;
    var q5= document.quiz.question5.value;
    var result=document.getElementById('result');

    if(q1=="Object Oriented"){c++}
    if(q2=="br"){c++}
    if(q3=="horizontal ruler"){c++}
    if(q4=="Cascading Style Sheets"){c++}
    if(q5=="Property-Name"){c++}
    
    result.textContent=`${c}/5`;
    
    


}