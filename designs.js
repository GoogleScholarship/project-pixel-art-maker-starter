$(function() {
// Select size input
let table = $('#pixelCanvas');
console.log('table 1', table)
let button = $("input[type='submit']");
let clicked = false;
// When size is submitted by the user, call makeGrid()
function makeGrid() {
table[0].innerHTML = ""
console.log('table 2', table)
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
        //console.log('the frog has leftthe castle. :O ')
	//console.log($(this)[0].outerHTML)
   clicked = false;
  }) 

   

  table.on("mousedown", "td", function(){
     let color = $("input[type='color']#colorPicker").val();
    cell=$(this)
       if($(this)[0].outerHTML == '<td bgcolor="'+color+'"></td>'){
          $(this)[0].outerHTML = '<td bgcolor="#ffffff"></td>'
	clicked = false
       }
	else {
      reached(cell);
clicked = true;
	}
    console.log("mousedown");
// set true/false    
  })
  .on("mouseover", "td", function() {
//	console.log("reached")    
cell=$(this)
// if true
//	console.log(clicked)
    if(clicked == true){
      reached(cell);
    }
  })

$(document).on('mouseup', function(){
  // console.log("mouse up ");
  clicked = false;
//	console.log("reached mouseup number");
});

}

button.click(function(event) {
  makeGrid();
  event.preventDefault();
});
}(jQuery));

