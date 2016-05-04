$(function() {
 'use strict';  
    

var testObj = {
question1:{ question : "Что такое шаблонизация?",
 answer1: "Это генерирование HTML на основании некоторых данных - 'шаблона' П",
 answer2: "Это возможность сохранить функциональность веб приложения во всех браузерах",
 answer3: "Это возможность сохранить данные в удобный формат"}, 
 
question2:{ question : "Что такое шаблон?",
 answer1: "Генерируемый HTML код",
 answer2: "Текстовая строка, содержащая специальные параметры П",
 answer3: "Любая строка в HTML"},
 
question3:{ question : "Каким образом шаблон помещается в HTML документ?",
 answer1: "Шаблон размещают в теге &lt;script&gt;",
 answer2: "Шаблон размещают в теге &lt;script&gt; с нестандартным атрибутом type П",
 answer3: "Шаблон размещают в любом теге"},
 
 answers:{ question1: "answer1", question2: "answer2", question3: "answer2"}
};

localStorage.setItem('Questions',JSON.stringify(testObj));

var test = localStorage.getItem('Questions');




var html = $('#my_tmpl').html();
var data = JSON.parse(test);


    
 var content = tmpl(html, data);
 $('div.content_wrapper').append(content);
 
 

 
$('input#button-result').click(function() {
	
	var allInputs = $('input[type=radio]:checked:not(script input[type=radio])');
	 

 
	var count=0;
	var result=0;
	var countQ=$('.list-questions li:not(script li)').length;

	var countA=allInputs.length;
	
	if(countA==countQ && countA!=0){
	for(var i = 0, j=1; i < allInputs.length;j++, i++){
	    if(allInputs[i].getAttribute('value') == data.answers["question" + j])++count;
	}
	
	result=(count*100)/countQ;
	
	
    
    var modalHtml = $('#my_tmpl_modal').html();
    var strResult = {text: "Количество правильных ответов: <br/>" + result.toFixed(0) + " %  "}; 
    var content_modal = tmpl(modalHtml, strResult);
    $('div.content_wrapper').append(content_modal);
       
    allInputs=null;
    countA=0;
    strResult=null;
    result=0;
    $('input[type=radio]:checked:not(script input[type=radio])').each(function(){$(this).removeAttr("checked");});
    
   
    
    }else{
       
      
    var modalHtml2 = $('#my_tmpl_modal').html();
    var strResult2 = {text: "Ответьте на все вопросы!"}; 
    var content_modal2 = tmpl(modalHtml2, strResult2);
    $('div.content_wrapper').append(content_modal2);
         
    }  });
    
    
   //Удаляем модальные окна по клику в body
   $('body').click(function(){
       $('div.modal-backdrop.fade.in').remove(); 
       $('div.modal.fade.bs-example-modal-sm.in').remove();
       $('div.modal').remove;
                     
    });
   


   
    
});//end ready