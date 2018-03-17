$(function() {
// Select size input
let table = $('#pixelCanvas');
let button = $("input[type='submit']");
let clicked = false;
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

   function reached(cell) {
     let color = $("input[type='color']#colorPicker").val();
       if(cell[0].outerHTML == '<td bgcolor="'+color+'"></td>'){
        cell[0].outerHTML = '<td bgcolor="#ffffff"></td>'
       }
  	 cell.attr("bgcolor", color); 
   } 

   

  table.on("mousedown", "td", function(){
    cell=$(this)
// set true/false    
   clicked = true;
   console.log("cliced is reached" + clicked);   
    if(clicked === true){
      reached(cell);
    }
  })
  .on("mouseover", "td", function() {
	console.log("reached")    
cell=$(this)
// if true
	console.log(clicked)
    if(clicked == true){
      reached(cell);
    }
  })

$(document).on('mouseup', function(){
   console.log("mouse up ");
  clicked = false;
	console.log(clicked)
	
});

}

button.click(function(event) {
  event.preventDefault();
  makeGrid();  
});
}(jQuery));

