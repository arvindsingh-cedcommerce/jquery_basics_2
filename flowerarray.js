
$(document).ready(function(){
    const flowerArray = ['Rose', 'Tulip', 'Orchird', 'Sunflower', 'Poppy', 'Lotus','Peruvian Lily','Chrysanthemum','Gladiolus','Anemone','Daffodil','Blossom','Calla','Cecelia','Celosia','Chrysanthemum',' Clover','Coral','Dahlia','Daisy',' Florentina',' Flora','Ginger','Freesia','Harmony','Hazel','Heather','Ione','Iris','Ivy','Ixia','Jacinta','Jasmine','Jewel','Julia','Kahili','Kalina','Lavender','Lily','Magnolia','Nanala','Olearia','Zinnia','Wisteria','Azami','Bourbon'];
   
      $('#text-field').on('keyup',(function(){
        $('#suggestion').html("");
        var value = $(this).val().toUpperCase();
        var newArray = [];
        var len = value.length;
        if($(this).val() != ""){
        for(let i = 0 ; i < flowerArray.length ; i++){
           if(value == flowerArray[i].slice(0,len).toUpperCase()){
             newArray.push(flowerArray[i]);
          }
        }}
        // $('#suggestion').append(newArray);
        var len2 = newArray.length;
        for(let i = 0 ; i < len2 ; i++) {
          $('#suggestion').append(newArray[i] + "<br>");
        }
        
      }));
      
    });
// $(document).ready(function(){
//     var txt = $("<p></p>").text('Rose'+
//     'Scientific Name: Rosa. Perhaps the most famous flower on the list, the beautiful'+ 
//     'rose has attained cultural significance around the world and is often used to'+
//     'symbolise love, affection and beauty. Ranging from blooms as small as a fingernail'+
//     'to the majestic Grandiflora, there are thousands of different cultivations of'+
//     'roses available in rich colours and fragrances. The scientific name comes from'+
//     'the Latin rosa: an easy one to remember!');
//     $('#div-para').append(txt);
//   $('p').click(function(){
//        alert("Clicked me");
//   });
// });