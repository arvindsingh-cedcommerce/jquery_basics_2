const array = [
    [101,'AB', 'A', 'O', 'X'],
    [102,'CD', 'B', 'W', 'X'],
    [103,'EF', 'A', 'O', 'X'],
    [104,'GH', 'C', 'Y', 'X'],
    [106,'IJ', 'B', 'Q', 'X'],
    [106,'KL', 'C', 'O', 'X']
];

var myTable = "<table id = 'mytable'><thead><tr><td>ID</td><td>Name</td><td>Brand</td><td>Operating System</td><td>Remove</td></tr></thead>";
myTable += "<tbody>";
for(let i = 0 ; i < array.length ; i++) {
   myTable += "<tr >";
   for(let j = 0 ; j < array[i].length ; j++) {
       if(j == (array[i].length - 1)){
          myTable += "<td class = 'id-x'>" + array[i][j] + "</td>" ; 
       }
       else{
          myTable += "<td>" + array[i][j] + "</td>" ;
       }
   };
   myTable += "</tr>" ; 
};
myTable += "</tbody></table>" ; 

document.getElementById("container").innerHTML = myTable ;


$(document).ready(function(){
       // hide row of table 
   $('.id-x').click(function(){
      $(this).parents('tr').hide(); 
      
   });

   //filter by OS or Brand
   $('.select-brand').on("change", function(){
       var value1 = $(this).val();
       $("table tbody tr").each(function(){
          
          var txt1 = $(this).find('td:eq(2)').text();
          if(value1 != 'all') {
              if(txt1.indexOf(value1) == -1) {
                  $(this).hide();
              }
              else {
                  $(this).show();
              }
          }
          else {
            $('#mytable tbody tr').show();
          }
       });
    });

   $('.select-os').on('change', function(){
      var value2 = $(this).val();
   //    console.log(value2);
      $('#mytable tbody tr').each(function(){

          var txt2 = $(this).find('td:eq(3)').text();
       //    console.log(txt2);
          if(value2 != 'all'){
              if(txt2.indexOf(value2) == -1){
               // console.log(txt2.indexOf(value2));
                  $(this).hide();
              }
              else{
                  $(this).show();
              }
           }
           else {
               $('#mytable tbody tr').show();
           }  
      });
   });
   //search button that would search product with name or id.

   $('#search-button').on('click', function(){
       var i = 0;
     var value = $('#search-input').val().toLowerCase();
      if(value != ""){
      $('#mytable tbody tr').each(function(){
          var txt1 = $(this).find('td:eq(0)').text().toLowerCase();
          var txt2 = $(this).find('td:eq(1)').text().toLowerCase()
          if(value == txt1 ||  value == txt2) {
              $(this).show();
              i++;
          }
          else {
              $(this).hide();
          }
          if(i == 0) {
              $("#alert-message-paragraph").text("Sorry, no match found").css("color", "red");
          }
          else if(i != 0) {
              $("#alert-message-paragraph").text("");
          }
      }); 
      }
   
   });
});