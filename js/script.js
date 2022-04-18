$(function () {
  $("#draggable").draggable();
  $("#droppable").droppable({
    drop: function (event, ui) {
      $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
    },
  });

  //sprtable
  $("#sortable").sortable();

  //accordion
  $("#accordion").accordion({
    collapsible: true,
  });

  //autocomplete
  var tags = ["Html", "Css", "Js", "jqurey", "Problem"];

  $("#data").autocomplete({
    source: tags,
  });

  $("#datepicker").datepicker();

  $("#menu").menu();

  $("#tabs").tabs();

  var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });

});
