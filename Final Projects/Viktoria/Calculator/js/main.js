const result_field = $('#result');

var expression = '';
var firstDigit = true;
var actionChosen = false;

$(document).ready(function() {

var show,
    output,
    zero,
    operator,
    limit;
    
    show = document.getElementById("result");

var elem = document.querySelectorAll(".num");
    
      var len = elem.length;
    
      for(var i = 0; i < len; i++ ) {
        
        elem[i].addEventListener("click",function() {
                  
            num = this.value;
                     
            output = show.innerHTML +=num;
                  
            limit = output.length;
         
         if(limit > 9 ) {
        
         alert("Please note: No more inputs are allowed!");
             
       }
       
     },false);
        
    } 
   
    document.querySelector("#eqn-bg").addEventListener("click",function() {
        
      if(show.innerHTML === output) {
          
        output = eval(output);
        show.innerHTML = output;
      }
        
      else {
            show.innerHTML = "";
      }
          
    },false);
   
    var elem1 = document.querySelectorAll(".operator");
    
    var len1 = elem1.length;
    
      for(var i = 0; i < len1; i++ ) {
        
        elem1[i].addEventListener("click",function() {
         
        operator = this.value;
         
         if(show.innerHTML === "") {
            
            show.innerHTML = show.innerHTML.concat("");
            
        }
        
        else if(output) {
        
            show.innerHTML = output += operator;
            
        }
           
    },false);
          
      } 

    document.querySelector("#delete").addEventListener("click",function() {
        
        show.innerHTML = "";
        
    },false);

    document.querySelector(".zero").addEventListener("click",function() {
        
        zero = this.value;
        
        if(show.innerHTML === "") {
            
           output = show.innerHTML = zero;  
        }
        
        else if(show.innerHTML === output) {
            
         output = show.innerHTML +=zero;
            
        }
          
    },false);
    
});
