

$(document).ready(function(){
 $('#one').on("click",()=>{
    
   document.forms.display.value +=1;
   
 })

 $('#two').click(()=>{
    
   document.forms.display.value +=2;
 })
 $('#three').click(()=>{
    
   document.forms.display.value +=3;
 })
 $('#four').click(()=>{
    
   document.forms.display.value +=4;
 })
 $('#five').click(()=>{
    
   document.forms.display.value +=5;
 })
 $('#six').click(()=>{
    
   document.forms.display.value +=6;
 })
 $('#seven').click(()=>{
    
   document.forms.display.value +=7;
 })
 $('#eight').click(()=>{
    
   document.forms.display.value +=8;
 })
 $('#nine').click(()=>{
    
    document.forms.display.value +=9;
  })
 $('#zero').click(()=>{
    
    document.forms.display.value +=0;
  })
  $('#add').click(()=>{
    
    document.forms.display.value += '+';
  })
  $('#subs').click(()=>{
    
    document.forms.display.value += '-';
  })
  $('#mult').click(()=>{
    
    document.forms.display.value += '*';
  })
  $('#divide').click(()=>{
    
    document.forms.display.value += '%';
  })
// operations

$('#equal').click(()=>{
    if (display.value ==="") {
      document.forms.display.value = 'Enter any number'
     }
     else{
      document.forms.display.value = eval(document.forms.display.value)
     }
  
})




  $('#clear').click(()=>{
    
    document.forms.display.value = '';
  })

  
})











 
































































