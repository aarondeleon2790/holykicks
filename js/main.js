//---------------- load screen 




  function id(v){
      return document.getElementById(v)
    };

  function loadbar() {
    let ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        load = document.all,
        c = 0;
        tot = load.length;

    function imgLoaded(){
      c += 1;
      let perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading "+ perc;
      if(c===tot) return doneLoading();
    }


    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){ 
        ovrl.style.display = "none";
      }, 1200);

      
    }
    for(var i=0; i<tot; i++) {
      let tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = load[i].src;
    }    

  }
  document.addEventListener('DOMContentLoaded', loadbar, false);

//------------------------ load screen


//navigation toggle


$(document).ready(function(){
  $('.nav-toggle').click(function(){

    $('.main-nav').toggleClass('is-open');
    $('.hamburger').toggleClass('is-open');
  })
})