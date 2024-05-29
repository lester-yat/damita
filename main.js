onload = () =>{
    document.body.classList.remove("container");
};

document.querySelector('.envelope').addEventListener('click', function(){
    if (document.querySelector('.letter').classList.contains('letter--open')){
      document.querySelector('.letter').classList.remove('letter--open');
      document.querySelector('.letter').classList.add('letter--close');
      setTimeout(function(){
        document.querySelector('.letter').classList.remove('letter--close');
      }, 600);    
    } else {
      document.querySelector('.letter').classList.remove('letter--close');
      document.querySelector('.letter').classList.add('letter--open');
    }
  });
  
  document.querySelector('.paper-close').addEventListener('click', function(){   document.querySelector('.letter').classList.remove('letter--open');
    document.querySelector('.letter').classList.add('letter--close');
    setTimeout(function(){
      document.querySelector('.letter').classList.remove('letter--close');
    }, 600);
  });

  document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");
    
    // Función para reiniciar la reproducción del audio cuando termina
    function restartAudio() {
      audio.currentTime = 0; // Reiniciar al inicio
      audio.play(); // Reproducir el audio
    }
  
    // Reproducir audio cuando el usuario haga clic en algún lugar de la página
    document.addEventListener('click', function() {
      restartAudio(); // Iniciar la reproducción del audio
      
      // Eliminar el evento de clic después de reproducir el audio para evitar repeticiones
      document.removeEventListener('click', arguments.callee);
    });
  
    // Reiniciar la reproducción cuando el audio termina
    audio.addEventListener('ended', restartAudio);
  });
  
