// Code goes here
function togglePass() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

let enter = document.getElementById('login');
enter.addEventListener('keydown',(e)=>{
if(e.key==='enter'){
  login()
}
})

function login(){
    username1=document.getElementById('user').value
    password1=document.getElementById('password').value
    
    if(username1=='vishal'&& password1=='kumar'){
      alert('Login Successfully!!')
      window.location.replace('index1.html')
    }
     if(username1=='' || username1==null){
      alert('Login failed!!')
    }
  }
  
  function bk(){
    window.location.replace('index2.html')
  }
  function lunch(){
    window.location.replace('index2.html')
  }
  function dinner(){
    window.location.replace('index2.html')
  }

  function order(){
    sessionStorage.clear();
    
    var redirectToNxt = false;
    if(document.getElementById('teai').value>0){
       data=document.getElementById('teai').value;
       sessionStorage.setItem('appData',data);
       redirectToNxt = true;
    }
      
     if(document.getElementById('purii').value>0){
       data1=document.getElementById('purii').value;
       sessionStorage.setItem('appData1',data1);
       redirectToNxt = true;
     }
  
      if(document.getElementById('idlyi').value>0){   
       data2=document.getElementById('idlyi').value;
       sessionStorage.setItem('appData2',data2);
       redirectToNxt = true;
     }
    
     if(document.getElementById('buni').value>0){
       data3=document.getElementById('buni').value;
       sessionStorage.setItem('appData3',data3);
       redirectToNxt = true;
     }
    
     if(redirectToNxt === true){
       window.location.replace('index3.html');
     } else
     {
       //Put code for error handling scenario for redirect fail
     }
     
   }
    function getdata(){
      let item4=0;
      if(sessionStorage.getItem('appData')){
     item=sessionStorage.getItem('appData');
     document.getElementById('sum1').innerText=`Tea x ${item} =`;
     document.getElementById('sum2').innerText= `${20*item}`;
    item4= document.getElementById('sum2').innerText
    item4=parseFloat(item4,10);
     }else{
         delete document.getElementById('sum1');
          delete document.getElementById('sum2');
      }


       if(sessionStorage.getItem('appData2')){
     item1=sessionStorage.getItem('appData2');
     document.getElementById('idly1').innerText=`Idly x ${item1}`;
     document.getElementById('idly2').innerText= ` ${30*item1}`;
     let item5=document.getElementById('idly2').innerText
     item4+=parseInt(item5,10)
    console.log(item4)
      console.log(typeof(item4))
      }else{
         delete document.getElementById('idly');
          delete document.getElementById('idly2');
      }
      
       if(sessionStorage.getItem('appData1')){
     item2=sessionStorage.getItem('appData1');
     document.getElementById('puri1').innerText=`Puri x ${item2}`;
     document.getElementById('puri2').innerText= `  ${40*item2}`;
      let item6 =document.getElementById('puri2').innerText
      item4+=parseInt(item6,10)
      console.log(item4)
      console.log(typeof(item4))
      }else{
         delete document.getElementById('puri1');
          delete document.getElementById('puri2');
      }
      
      
      if(sessionStorage.getItem('appData3')){
     item3=sessionStorage.getItem('appData3');
     document.getElementById('bun1').innerText=`Bun x ${item3}`;
     document.getElementById('bun2').innerText= `  ${15*item3}`;
      let item7=document.getElementById('bun2').innerText
       item4+=parseInt(item7,10)
       console.log(item4)
       console.log(typeof(item4))
      }else{
         delete document.getElementById('bun1');
          delete document.getElementById('bun2');
      }
      console.log(item4)
      console.log(typeof(item4))
     document.getElementById('total1').innerText=`= ${item4}`;
   }
 
   function home(){
     window.location.replace('index1.html')
   }


   function idleTimer() {
    var t;
    //window.onload = resetTimer;
    window.onmousemove = resetTimer; // catches mouse movements
    window.onmousedown = resetTimer; // catches mouse movements
    window.onclick = resetTimer;     // catches mouse clicks
    window.onscroll = resetTimer;    // catches scrolling
    window.onkeypress = resetTimer;  //catches keyboard actions

    function logout() {
        window.location.href = 'index.html';  //Adapt to actual logout script
    }

   function reload() {
          window.location = self.location.href;  //Reloads the current page
   }

   function resetTimer() {
        clearTimeout(t);
        t = setTimeout(logout, 30000);  // time is in milliseconds (1000 is 1 second)
        // t= setTimeout(reload, 300000);  // time is in milliseconds (1000 is 1 second)
    }
}
idleTimer();

   
 
 
 
 
 
 
  
  
  
  
  
  
  