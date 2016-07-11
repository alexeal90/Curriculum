$(document).ready(function() {

  $("#empezar").hover(
    function(){
      $("#inferior").css("border-color", "#26547C");
      $("#superior").css("border-color", "#26547C");
  },function(){
      $("#inferior").css("border-color", "white");
      $("#superior").css("border-color", "white");
  });

  $("#empezar").click(function(){
    $("#inferior").slideUp(1000);
    $("#superior").slideUp(1000);
    $("#empezar").fadeOut(1000);
  });

  function mostrar(elegido){
    $(".content").each(function(){
        $(this).hide();
    })
      $(elegido).show();
  }

  $(".button-menu").click(function(){
    $(".button-menu").each(function(){
      $(this).removeClass("activo");
    });
    $(this).addClass("activo");

    /*if ($(this).attr('id') == "button-datos"){
      mostrar("#contenido-datos");
    } else if ($(this).attr('id') == "button-experiencia"){
      mostrar("#contenido-experiencia");
    } else if ($(this).attr('id') == "button-estudios"){
      mostrar("#contenido-estudios");
    } else if ($(this).attr('id') == "button-otros"){
      mostrar("#contenido-otros");
    } else if ($(this).attr('id') == "button-idiomas"){
      mostrar("#contenido-idiomas");
    }*/

    switch ($(this).attr('id')){
      case "button-datos":
        mostrar("#contenido-datos");
        break;
      case "button-experiencia":
        mostrar("#contenido-experiencia");
        break;
      case "button-estudios":
        mostrar("#contenido-estudios");
        break;
      case "button-otros":
        mostrar("#contenido-otros");
        break;
      default:
        mostrar("#contenido-idiomas");
    }
    
  });

});
