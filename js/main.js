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

// Get values of ingredient when user clicks - WORKING CODE
/*
  $('p input').on('click', function() {
    var category = $(this).attr('class');
    var calories = $(this).attr('value');
    console.log('You chose from ' + category + ' menu. It is ' + calories + ' calories.');
  });
  
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
  } else $('#recipeList').html("Choose some ingredients!");
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
  } else $('#numberCalories').html("");
  };;
  

// WHEN USER CLICKS BLEND

$(document).ready(function() {
$('#blendBtn').on('click', function() {
  getValues();
  determineTaste();
  determineHealth();
})

  var taste = 0;
  var health = 0;
  var tasteWord;
  var healthWord;

// determine 'taste' and 'health' values based on user choices

function getValues() {
  var smoothieResult = $('input[type="checkbox"]:checked');
  if (smoothieResult.length > 0) {
    smoothieResult.each(function() {
      var foodGroup = $(this).attr('class');
      if (foodGroup === 'greens') {
        taste -= 1;
        health += 1;
      } else if (foodGroup === 'fruit') {
        taste += 2;
        health += 0;
      } else if (foodGroup === 'fats') {
        taste += 1;
        health += 1;
      } else if (foodGroup === 'boosters') {
        taste -= 2;
        health += 2;
      } else if ( foodGroup === 'veggies') {
        taste += 0;
        health += 1;
      }
    })
    // display number values
      var string = "Your smoothie taste factor is " + taste + " and your nutrient factor is " + health;
      console.log(string);
  } else
  console.log("You need more ingredients");
}

// get descriptive word based on taste value

function determineTaste() {
  if (taste === 0) {
    getNeutral();
  } else if (taste <= 0) {
    getYuck();
  } else if (taste >= 0) {
    getYum();
  }
  console.log("Enjoy your " + tasteWord + " and ");
}

// get descriptive word based on health value

function determineHealth() {
  if (health === 0) {
    getDessert();
  } else if (health <= 0 && health >= 2) {
    getMiddle();
  } else if (health <= 2) {
    getHealthy();
  } 
  console.log(healthWord + " smoothie!");
}


// Get random word based on taste factor

// var tasteWord;

function getYuck() {
  // Store an array of options in the plays variable (we'll chat about arrays later in the class)
  var yuck = ['gross', 'nasty', 'horrible', 'yucky', 'disgusting'];

  // Select a random option from the plays array (don't focus on this line too much) and store it in the tasteWord variable
  tasteWord = yuck[Math.floor(Math.random() * yuck.length)];
}

function getNeutral() {
  var neutral = ['bland', 'ok tasting', 'unenjoyable'];
    // Select a random option from the plays array (don't focus on this line too much) and store it in the tasteWord variable
  tasteWord = neutral[Math.floor(Math.random() * neutral.length)];
}

function getYum() {
  var yum = ['tasty', 'delicious', 'yummy', 'scrumptious', 'satisfying', 'tempting'];
    // Select a random option from the plays array (don't focus on this line too much) and store it in the tasteWord variable
  tasteWord = yum[Math.floor(Math.random() * yum.length)];
}

// Get random word based on health factor

// var healthWord;

function getHealthy() {
  // Store an array of options in the plays variable (we'll chat about arrays later in the class)
  var healthy = ['healthy', 'nutritious', 'nourishing', 'wholesome', 'extremely healthy', 'super healthy'];

  // Select a random option from the plays array (don't focus on this line too much) and store it in the tasteWord variable
  healthWord = healthy[Math.floor(Math.random() * healthy.length)];
}

function getMiddle() {
  var middle = ['kind of healthy', 'guilt-free', 'safe'];
    // Select a random option from the plays array (don't focus on this line too much) and store it in the healthWord variable
  healthWord = middle[Math.floor(Math.random() * middle.length)];
}

function getDessert() {
  var notHealthy = ['not that healthy', 'unhealthy', 'snack', 'dessert', 'nutrient poor'];
    // Select a random option from the plays array (don't focus on this line too much) and store it in the healthWord variable
  healthWord = notHealthy[Math.floor(Math.random() * notHealthy.length)];
}
});
