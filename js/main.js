// Slick carousel behavior

$(document).ready(function(){
      $('.responsive').slick({
      arrows: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });


/* DROP DOWN MENUS --- When the user clicks on the button, 
toggle between hiding and showing the dropdown content */


   $(document).on('click','.dropbtn',function(){
        $('.dropbtn').not(this).next().removeClass('show');
        $(this).next().toggleClass('show');
    });
    $(document).on('click',function(e){
        if(!$(e.target).closest('.dropdown-content'))
            $('.dropdown-content').removeClass('show');
    });    


// When user clicks on an ingredient, the name of ingredient shows in 'Your Recipes' list

$('p input').on('click',function() {
  var ingredient = $(this).attr('id');
  console.log('You chose ' + ingredient);
  $('#recipeList').append($('<li>').append(ingredient));
});

// Getting values of ingredient when user clicks

  $('p input').on('click', function() {
    var category = $(this).attr('class');
    var calories = $(this).attr('value');
    console.log('You chose from ' + category + ' menu. It is ' + calories + ' calories.');
  });

/* trying to get sum of input values - this code so far doesn't work
$('p input').change(function() {
  var sum = 0;
  $('p input:selected').each(function() {
    sum += Number($(this).val());
  });
  console.log(sum);
});
*/ 

  var sum = 0;
$('p input').click(function() {
  var value = $(this).val();
  value = parseInt(value);
  sum += value;
  console.log(sum);
});
});
