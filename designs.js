$(function() {
// Select color input
let color = $('#colorPicker').val();
// Select size input
let table = $('#pixelCanvas');
let button = $("input[type='submit']");
// When size is submitted by the user, call makeGrid()
function makeGrid() {
 $('table tr').remove(); 
 let col = $('#inputHeight').val();
 let row = $('#inputWeight')[0].value; 
  for(let i = 0; col > i; i++){
    table.append('<tr></tr>');
    for(let y = 0; row > y; y++){
      table.children().last().append('<td></td>');
    }    
  }
  table.on("click", "td", 
  function() {
    let color = $("input[type='color']#colorPicker").val();
    $(this).attr("bgcolor", color);
  });
}
button.click(function(event) {
  event.preventDefault();
  makeGrid(); 
});
}(jQuery));

