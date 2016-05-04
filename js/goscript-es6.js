$(() => {
 const testObj = {
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

 const test = localStorage.getItem('Questions');




 const html = $('#my_tmpl').html();
 const data = JSON.parse(test);



 const content = tmpl(html, data);
 $('div.content_wrapper').append(content);




 $('input#button-result').click(() => {
     
     let allInputs = $('input[type=radio]:checked:not(script input[type=radio])');
      

  
     let count=0;
     let result=0;
     const countQ=$('.list-questions li:not(script li)').length;

     let countA=allInputs.length;
     
     if(countA==countQ && countA!=0){
     for(let i = 0, j=1; i < allInputs.length;j++, i++){
         if(allInputs[i].getAttribute('value') == data.answers[`question${j}`])++count;
     }
     
     result=(count*100)/countQ;
     
     
     
     const modalHtml = $('#my_tmpl_modal').html();
     let strResult = {text: `Количество правильных ответов: <br/>${result.toFixed(0)} %  `}; 
     const content_modal = tmpl(modalHtml, strResult);
     $('div.content_wrapper').append(content_modal);
        
     allInputs=null;
     countA=0;
     strResult=null;
     result=0;
     $('input[type=radio]:checked:not(script input[type=radio])').each(function(){$(this).removeAttr("checked");});
     
    
     
     }else{
        
       
     const modalHtml2 = $('#my_tmpl_modal').html();
     const strResult2 = {text: "Ответьте на все вопросы!"}; 
     const content_modal2 = tmpl(modalHtml2, strResult2);
     $('div.content_wrapper').append(content_modal2);
          
     }  });


 //Удаляем модальные окна по клику в body
 $('body').click(() => {
     $('div.modal-backdrop.fade.in').remove(); 
     $('div.modal.fade.bs-example-modal-sm.in').remove();
     $('div.modal').remove;
                   
  });
});//end ready