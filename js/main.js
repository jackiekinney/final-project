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
});

/* DROP DOWN MENUS --- When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

$(document).ready(function(){
   $(document).on('click','.dropbtn',function(){
        $('.dropbtn').not(this).next().removeClass('show');
        $(this).next().toggleClass('show');
    });
    $(document).on('click',function(e){
        if(!$(e.target).closest('.dropdown-content'))
            $('.dropdown-content').removeClass('show');
    });    
});

// Getting values of ingredient when user clicks - WORKING CODE
/*
  $('p input').on('click', function() {
    var category = $(this).attr('class');
    var calories = $(this).attr('value');
    console.log('You chose from ' + category + ' menu. It is ' + calories + ' calories.');
  });
*/



/*
// Add up calories - working code
  var sum = 0;
$('p input').click(function() {
  var value = $(this).val();
  value = parseInt(value);
  sum += value;
  console.log(sum);
});
*/



$(document).ready(function() {
$('p input').on('click',function() {
  getCheckedBoxes();
  updateCalories();
});

// Display only selected checkboxes in 'Your Recipe' section

function getCheckedBoxes() {
  var result = $('input[type="checkbox"]:checked');
  if (result.length > 0) {
      var resultString = "Your smoothie contains " + result.length + " ingredients</br>";
      result.each(function() {
        var selectedValue = $(this).attr('id');
        resultString += $('label[for="cb-'+ selectedValue+'"]').text() + "</br>";
    });
      $('#recipeList').html(resultString);
  }
};
});

// Display sum of calories of checked ingredients
  
function updateCalories() {
  var sum = 0;
  var calResult = $('input[type="checkbox"]:checked');
  if (calResult.length > 0) {
    calResult.each(function() {
      var value = $(this).val();
      value = parseInt(value);
      sum += value;
    });
    console.log(sum);
    $('#numberCalories').html("Calories:</br>" + sum);
  }
  };;
  
// Update "taste" and "health" values of checked ingredients
// core of function - works
    var taste = 0;
    var health = 0;
$('p input').click(function() {
    var foodGroup = $(this).attr('class');
    console.log(foodGroup);
    if (foodGroup === 'greens') {
      taste -= 1;
      health += 1;
    } else if (foodGroup === 'fruit') {
      taste += 2;
    } else if (foodGroup === 'fats') {
      taste += 1;
      health += 1;
    } else if (foodGroup === 'boosters') {
      taste -= 2;
      health += 2;
    } else if (foodGroup === 'veggies') {
      health += 1;
    }
      var string = "Your smoothie taste factor is " + taste + " and your smoothie nutrient factor is " + health;
      console.log(string);
});

// when user clicks 'Blend' create message
/*
function determineTaste() {
  if (grossFactor < 0) {
    // computer choose word from array
  } else if (grossFactor > 0) {
    // computer choose word from array
  }
}

function determineHealth() {
  if (healthFactor < 0) {
    // computer choose word from array
  } else if (healthFactor > 0) {
    // computer choose word from array
  }  
}

function message(grossFactor, healthFactor) {
  // display message
*/
/*
function updateValues() {
    var taste = 0;
    var health = 0;
    var tasteResult = $('input[type="checkbox"]:checked');
    if (calResult.length > 0) {
      var grossFactor = $(this).attr('class');
  }
};

*/   

 // var recipeResult = $('input[type="checkbox"]:checked');
 // if (recipeResult > 0) {
 // recipeResult.each(function() {







