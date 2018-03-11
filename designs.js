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
console.log(col, row);
  for(let i = 0; col > i; i++){
    table.append('<tr></tr>');
    for(let y = 0; row > y; y++){
      table.children().last().append('<td></td>');
      }    
    }
}

button.click(function(event) {
  event.preventDefault();
  makeGrid(); 
});
}(jQuery));

