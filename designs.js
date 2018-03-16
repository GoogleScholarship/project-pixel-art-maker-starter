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
	console.log($(this));

    let color = $("input[type='color']#colorPicker").val();
 
	console.log("step 1", color)
	console.log("step 2", $(this)[0].outerHTML)
	console.log("step 3", '<td bgcolor="#ffffff"></td>')
	console.log("step 4", '<td bgcolor="'+color+'"></td>')
	
      if($(this)[0].outerHTML == '<td bgcolor="'+color+'"></td>'){
       $(this)[0].outerHTML = '<td bgcolor="#ffffff"></td>'
      }
	 $(this).attr("bgcolor", color); 
  });
}
button.click(function(event) {
  event.preventDefault();
  makeGrid(); 
});
}(jQuery));

