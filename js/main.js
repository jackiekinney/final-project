$(document).ready(function(){

// Slick carousel behavior
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

  var taste = 0;
  var health = 0;
  var green = 0;
  var red = 0;
  var yellow = 0;
  $('#blendBtn').prop('disabled', true);

  /*---------------------------------

 COLOR LOGIC

----------------------------------*/

  function colorValues(foodColor) {
    if (foodColor === 'grn') {
      green += 1;
    } else if (foodColor === 'blu') {
      green += 2;
      red += 1;
    } else if (foodColor === 'red') {
      red += 1;
    } else if (foodColor === 'ylw') {
      yellow += 1;
    }
  }

  function subtractColor(foodColor) {
    if (foodColor === 'grn') {
      green -= 1;
    } else if (foodColor === 'blu') {
      green -= 2;
      red -= 1;
    } else if (foodColor === 'red') {
      red -= 1;
    } else if (foodColor === 'ylw') {
      yellow -= 1;
    }
  }

  function determineColor() {
    var color;

    if (green === 0 && red === 0 && yellow === 0) {
      color = '06';
    } else if (green === 0 && red <= 1 && yellow < 0) {
      color = '05';
    } else if (green > 0 && red === 0) {
      color = '01';
    } else if (green > 0 && red === 0 && yellow > 0) {
      color = 'yellowish green';
    } else if (green === 0 && red > 0) {
      color = '02';
    } else if (green > 0 && red > 0 && green > red) {
      color = '04';
    } else if (green > 0 && red > 0 && red > green) {
      color = '03';
    }
    return color;
  }


  // Display only selected checkboxes as a list in 'Your Recipe' section
  function getCheckedBoxes() {
    var result = $('input[type="checkbox"]:checked');
    if (result.length > 0) {
        var resultString = "<h4>Your smoothie contains " + result.length + " ingredients</h4></br><hr /></br>";
        result.each(function() {
          var selectedValue = $(this).attr('id');
          resultString += $('label[for="cb-'+ selectedValue+'"]').text() + "</br>";
      });
        $('#recipeItems').html(resultString);
    } else $('#recipeItems').html("Choose some ingredients!");
    // BLEND BUTTON disabled unless at least 3 ingredients selected
    if (result.length >= 3) {
        $('#blendBtn').prop('disabled', false);
    } else if (result.length === 0 || result.length <= 3) {
        $('#blendBtn').prop('disabled', true);
  }
  };

  // Display sum of calories of checked ingredients in 'Your Recipe' section  
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
    
  // Determine 'taste' and 'health' values based on user choices - when item selected
  function addValues(foodGroup) {
    if (foodGroup === 'greens') {
      taste -= 1;
      health += 2;
    } else if (foodGroup === 'fruit') {
      taste += 2;
      health += 0;
    } else if (foodGroup === 'fats') {
      taste += 1;
      health += 1;
    } else if (foodGroup === 'boosters') {
      taste -= 2;
      health += 3;
    } else if ( foodGroup === 'veggies') {
      taste += 0;
      health += 1;
    } else if ( foodGroup === 'juice') {
      taste += 1;
      health -= 1;
    }    
  }

  // Update 'health' and 'taste' values when item is de-selected
  function subtractValues(foodGroup) {
    if (foodGroup === 'greens') {
      taste += 1;
      health -= 2;
    } else if (foodGroup === 'fruit') {
      taste -= 2;
      health -= 0;
    } else if (foodGroup === 'fats') {
      taste -= 1;
      health -= 1;
    } else if (foodGroup === 'boosters') {
      taste += 2;
      health -= 3;
    } else if ( foodGroup === 'veggies') {
      taste -= 0;
      health -= 1;
    } else if ( foodGroup === 'juice') {
      taste -= 1;
      health += 1;
    }    
  }

  // get descriptive word based on taste value
  function determineTaste() {
    var tasteWord;

    if (taste === 0) {
      tasteWord = getNeutral();
    } else if (taste < 0) {
      tasteWord = getYuck();
    } else if (taste > 0) {
      tasteWord = getYum();
    }
    return tasteWord;
  }

  // get descriptive word based on health value
  function determineHealth() {
    var healthWord;

    if (health <= 0) {
      healthWord = getDessert();
    } else if (health > 0 && health < 3) {
      healthWord = getMiddle();
    } else if (health >= 3) {
      healthWord = getHealthy();
    } 
    return healthWord;
  }

  // Generate random word based on taste factor
  function getYuck() {
    var yuck = ['gross', 'nasty', 'horrible', 'yucky', 'disgusting'];
    return yuck[Math.floor(Math.random() * yuck.length)];
  }

  function getNeutral() {
    var neutral = ['bland', 'ok tasting', 'bittersweet'];
    return neutral[Math.floor(Math.random() * neutral.length)];
  }

  function getYum() {
    var yum = ['tasty', 'delicious', 'yummy', 'scrumptious', 'satisfying', 'tempting'];
    return yum[Math.floor(Math.random() * yum.length)];
  }

  // Generate random word based on health factor
  function getHealthy() {
    var healthy = ['healthy', 'nutritious', 'nourishing', 'wholesome', 'extremely healthy', 'super healthy'];

    return healthy[Math.floor(Math.random() * healthy.length)];
  }

  function getMiddle() {
    var middle = ['kind of healthy', 'guilt-free', 'sort of healthy', 'decently healthy'];
    return middle[Math.floor(Math.random() * middle.length)];
  }

  function getDessert() {
    var notHealthy = ['not that healthy', 'unhealthy', 'snack', 'dessert', 'nutrient poor'];
    return notHealthy[Math.floor(Math.random() * notHealthy.length)];
  }


  // EVENT HANDLERS
  // When user selects an ingredient, display selection and update calories

  $('p input').on('click',function() {
    getCheckedBoxes();
    updateCalories();
  });

  // When user selects or deselects ingredient, update taste and health values
  $('p input').on('change',function() {
      var foodGroup = $(this).attr("class");
      var foodColor = $(this).attr("name");
    if ($(this).is(':checked')) {
      // Run function to add values associated with item's class
      addValues(foodGroup);
      colorValues(foodColor);
    } else {
      // Run function to subtract values associated with item's class
      subtractValues(foodGroup);
      subtractColor(foodColor);
    }
     console.log("Your smoothie taste factor is " + taste + " and your nutrient factor is " + health);
     console.log("Green: " + green + " Red: " + red + " Yellow: " + yellow);
  });

  // When user clicks blend, display message about smoothie
  $('#blendBtn').on('click', function() {
    var tasteWord = determineTaste();
    var healthWord = determineHealth();
    var color = determineColor();

    $('#resultMessage').html("<h2>Enjoy your " + tasteWord + ", " + healthWord + " smoothie!</h2>");
    console.log("Enjoy your " + tasteWord + " and " + healthWord + " smoothie!");
    var image = 'images/drinks-' + color + '.png';
    var img = $('<img />', {src : image});
    $('#smoothieColor').html(img);
    console.log("Your smoothie color is " + color);
    console.log(image);
  })

});