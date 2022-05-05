<!-- The Short & Snappy Trial Charge -->

<script>

var trialHandler = StripeCheckout.configure({
  key: 'pk_live_rWyDuCW2BELOR5IktQgo6SMC',
  image: '../assets/img/apple-touch-icon.png',
  locale: 'auto',
  token: function(token) {
    $.ajax({
      type: 'POST',
      url: 'trial.php',
      data: {stripeToken: token.id, stripeEmail: token.email },

      success: function (data) {
          //handle success response here
      },
      error: function(data){
          //handle error response here
      }
  });
  }
});

document.getElementById('trial').addEventListener('click', function(e) {
  // Open Checkout with further options:
  trialHandler.open({
    name: 'PubLoft',
    description: 'Start a short & snappy trial! 👌',
    amount: 75000
  });
  e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  trialHandler.close();
});
</script>

<!-- The Slow & Steady Charge -->

<script>

var handlerMonthlyFullService = StripeCheckout.configure({
  key: 'pk_live_rWyDuCW2BELOR5IktQgo6SMC',
  image: '../assets/img/apple-touch-icon.png',
  locale: 'auto',
  token: function(token) {
    $.ajax({
      type: 'POST',
      url: 'slow-and-steady.php',
      data: {stripeToken: token.id, stripeEmail: token.email },

      success: function (data) {
          //handle success response here
      },
      error: function(data){
          //handle error response here
      }
  });
  }
});

document.getElementById('standard').addEventListener('click', function(e) {
  // Open Checkout with further options:
  handlerMonthlyFullService.open({
    name: 'PubLoft',
    description: 'Start a slow & steady plan. 😊',
    amount: 200000
  });
  e.preventDefault();
});


// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handlerMonthlyFullService.close();
});
</script>

<!-- The Fast & Furious Charge -->

  <script>

  var monthlyBlogHandler = StripeCheckout.configure({
    key: 'pk_live_rWyDuCW2BELOR5IktQgo6SMC',
    image: '../assets/img/apple-touch-icon.png',
    locale: 'auto',
    token: function(token) {
      $.ajax({
        type: 'POST',
        url: 'fast-and-furious.php',
        data: {stripeToken: token.id, stripeEmail: token.email },

        success: function (data) {
            //handle success response here
        },
        error: function(data){
            //handle error response here
        }
    });
    }
  });

  document.getElementById('executive').addEventListener('click', function(e) {
    // Open Checkout with further options:
    monthlyBlogHandler.open({
      name: 'PubLoft',
      description: 'Start the fast & furious plan!! 🎉',
      amount: 400000
    });
    e.preventDefault();
  });


// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  monthlyBlogHandler.close();
});
</script>

<!-- The Easy Peasy Charge -->

<script>

var handlerMonthlyFullService = StripeCheckout.configure({
  key: 'pk_live_rWyDuCW2BELOR5IktQgo6SMC',
  image: '../assets/img/apple-touch-icon.png',
  locale: 'auto',
  token: function(token) {
    $.ajax({
      type: 'POST',
      url: 'easy-peasy.php',
      data: {stripeToken: token.id, stripeEmail: token.email },

      success: function (data) {
          //handle success response here
      },
      error: function(data){
          //handle error response here
      }
  });
  }
});

document.getElementById('easy-peasy').addEventListener('click', function(e) {
  // Open Checkout with further options:
  handlerMonthlyFullService.open({
    name: 'PubLoft',
    description: 'Start an easy peasy plan. 😊',
    amount: 65000
  });
  e.preventDefault();
});


// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handlerMonthlyFullService.close();
});
</script>
