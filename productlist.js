$(document).ready(function(){
 $('.show-price').on('click','#select-bag',(function(){
    var price;
    if($('#select-bag').val() == 'small') {
        price = 1000;
    }
    else if($('#select-bag').val() == 'large') {
        price = 1200;
    }
    else if($('#select-bag').val() == 'xl') {
        price = 1400;
    }
    else if($('#select-bag').val() == 'double xl') {
        price = 1500;
   }

  $('#bag-price').text(price);
  })) ;

   $('.show-price').on('click','#select-t-shirt',(function(){
     var price;
     if($('#select-t-shirt').val() == 'light grey') {
        price = 1200;
     }
      else if($('#select-t-shirt').val() == 'red') {
        price = 900;
      }
      else if($('#select-t-shirt').val() == 'yellow') {
        price = 1000;
      }
      else if($('#select-t-shirt').val() == 'light blue') {
        price = 1000;
      }
     
      $('#t-shirt-price').text(price);
    }));

    $('tr:odd').css("background-color", "lightgrey");

    

    $(".parent-div").on("click","button",function()
    {
        
        $Class = $(this).parent().parent().attr('class');

        if($Class == 'parent-ul1'){
            $(this).parent().parent().append('<ul class="parent-ul1"><li><a href="#">T-Shirt</a><button class="child-button">+</button></li></ul>');
        }

        else if($Class == 'parent-ul2'){
          $(this).parent().parent().append('<ul class="parent-ul2"><li><a href="#">Mobiles</a><button class="child-button">+</button></li></ul>');
      }
    });
 }); 
