// Select color input
let color = $('#colorPicker').val();
// Select size input
let col = $('#inputWeight').val();
let row = $('#inputHeight').val();
let table = $('#pixelCanvas')
// When size is submitted by the user, call makeGrid()

function makeGrid(col, row) {
  for(let i = 0; col > i; i++){
    table.append(<tr></tr>);
    for(let y = 0; row > y; y++){
      table.append(<td></td>);
      }    
    }
}
