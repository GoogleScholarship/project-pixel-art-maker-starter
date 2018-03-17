$(function() {
// Select size input
let table = $('#pixelCanvas');
let button = $("input[type='submit']");
let clicked = false;
// When size is submitted by the user, call makeGrid()
function makeGrid() {
$("#pixel_canvas tr").remove();
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
  	 cell.attr("bgcolor", color); 
   }

table.on("click", "td", function(){
     let color = $("input[type='color']#colorPicker").val();
console.log('the frog has leftthe castle. :O ')
	console.log($(this)[0].outerHTML)
       if($(this)[0].outerHTML == '<td bgcolor="'+color+'"></td>'){
          $(this)[0].outerHTML = '<td bgcolor="#ffffff"></td>'
       }
      reached(cell);
   clicked = false;
  }) 

   

  table.on("mousedown", "td", function(){
    cell=$(this)
// set true/false    
clicked = true;
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
	console.log("reached mouseup number");
	
});

}

button.click(function(event) {
  event.preventDefault();
  makeGrid();  
});
}(jQuery));

