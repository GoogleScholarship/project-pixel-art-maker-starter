$(function() {
  // Select size input
  let table = $('#pixelCanvas');
  let button = $("input[type='submit']");
  let clicked = false;
  let color = $("input[type='color']#colorPicker").val();

  // console.log('table value 1', table)
  // When size is submitted by the user, call makeGrid()
  function makeGrid() {
    $("#pixelCanvas tr").remove();
    // table[0].innerHTML = ''

    let col = $('#inputHeight').val();
    let row = $('#inputWeight')[0].value; 
    for(let i = 0; col > i; i++){
      table.append('<tr></tr>');
      for(let y = 0; row > y; y++){
        table.children().last().append('<td></td>');
      }
    }
  }

  function changeBackground(cell, currColor) {
    cell.attr("bgcolor", currColor);
  }

  table.on("click", "td", function() {
    clicked = false;
    console.log("onClick");
  })

  table.on("mousedown", "td", function(){
    cell=$(this)

    if($(this)[0].outerHTML == '<td bgcolor="'+color+'"></td>'){
      changeBackground(cell, "#ffffff")
      clicked = false
    } else {
      changeBackground(cell, color);
      clicked = true;
	  }
    console.log("mousedown");
  })

  .on("mouseover", "td", function() {
    cell=$(this)
    if(clicked == true){
      changeBackground(cell, color);
    }
    console.log("mouseover");
  })

  $(document).on('mouseup', function() {
    clicked = false;
  });

  button.click(function(event) {
    makeGrid();
    event.preventDefault();
  });

}(jQuery));

