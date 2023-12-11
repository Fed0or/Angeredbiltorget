document.addEventListener('DOMContentLoaded', function(){
   var audio = document.getElementById('minIntro');
   audio.muted = false; // denna unmutar audion som är mutad pga browser policy behöver den vara unmutad först
   audio.play();
   
});