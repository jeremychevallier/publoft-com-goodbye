let elNavbar = document.getElementById('navbar')
elNavbar.innerHTML = `
  <div class="container">

    <div class="navbar-left">
      <a class="navbar-brand" href="../">
        <img class="logo-dark mr-2 rounded-corners-5" src="../assets/img/PL_icon-color-padding.svg" height="auto" width="40px" alt="logo">
        <img class="logo-dark" src="assets/img/PL_wordmark-white-nopadding.svg" height="auto" width="100px" alt="logo">
      </a>
    </div>

    <button class="navbar-toggler" type="button">&#9776;</button>

    <section class="navbar-mobile white-text">
      <span class="d-mobile-none"></span>

      <nav id="navbar-links" class="nav nav-navbar ml-auto mr-5 d-flex align-items-baseline" style="padding-top:8px;">
        <a class="nav-link d-block d-md-none" href="/">Home</a>

        <a class="nav-link" href="/new/theory"><span class="Tangerine h2 text-purple">Theory</span></a>

        <a class="nav-link" href="/new/approach"><span class="Tangerine h2 text-green">Approach</span></a>

        <a class="nav-link" href="/new/delivery"><span class="Tangerine h2 text-darkblue">Delivery</span></a>

        <a class="nav-link" href="/new/outcomes"><span class="Tangerine h2 text-pink">Outcomes</span></a>

      </nav>

          <a class="btn btn-md bg-darkblue text-white" onclick="Calendly.showPopupWidget('https://calendly.com/publoft/intro');return false;">Start your strategy</a>
    </section>

  </div>
`;

let elFooter = document.getElementById('footer')
elFooter.innerHTML = `
  <div class="container">
    <div class="row gap-y py-5">

      <!--<div class="col-xs-12 col-md-3 col-xl-2 Martel">
        <h5 class="mb-4 mt-1 footer-headings"><strong>Why</strong></h5>
        <div class="nav flex-column">
          <a class="footer-nav-link" href="/new/theory" target="_blank"><span class="Tangerine h1">Theory</span></a>
          <a class="footer-nav-link" href="/new/outcomes/" target="_blank"><span class="Tangerine h1">Outcomes</span></a>
        </div>
      </div>

      <div class="col-xs-12 col-md-3 col-xl-2 Martel">
        <h5 class="mb-4 mt-1 footer-headings"><strong>How</strong></h5>
        <div class="nav flex-column">
          <a class="footer-nav-link" href="/new/approach"><span class="Tangerine h1">Approach</span></a>
          <a class="footer-nav-link" href="/new/delivery"><span class="Tangerine h1">Delivery</span></a>
        </div>
      </div>

      <div class="col-xs-12 col-md-3 col-xl-2 Martel">
        <h5 class="mb-4 mt-1 footer-headings"><strong>More</strong></h5>
        <div class="nav flex-column">
          <a class="footer-nav-link" href="/applyto/partner"><span class="Tangerine h1">Join us</span></a>
          <a class="footer-nav-link" href="https://blog.publoft.com/" target="_blank"><span class="Tangerine h1">Blog</span></a>
        </div>-->
      </div>

      <div class="col-md-12 col-xl-4 offset-xl-2">
        <p><a href="/home"><img src="../assets/img/PL_wordmark-white-nopadding.svg" height="auto" width="100vw" alt="logo"></a></p>
        <p class="lead text-white">PubLoft strategists have executed successful curriculum marketing that attracts, converts, and retains customers for dozens of brands. <a style="text-decoration:underline;" href="#cta">Join them</a></p>
        <div class="col-md-12 col-xl-4 text-center d-flex justify-content-evenly">
          <div class="social social-hover-primary d-flex justify-content-between">
            <a class="social-twitter" href="https://twitter.com/publoft" rel="nofollow" target="_blank"><i class="fab fa-twitter"></i></a>
            <a class="social-youtube" href="https://www.linkedin.com/company/publoft/" rel="nofollow" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a class="social-facebook" href="https://www.facebook.com/publofthq" rel="nofollow" target="_blank"><i class="fab fa-facebook"></i></a>
            <a class="social-instagram" href="https://www.instagram.com/publoft/" rel="nofollow" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <small>&copy; 2017-2020 GigLoft Inc. • <a href="/terms" target="_blank">Terms</a ></small>
      </div>

    </div>
  </div>
`;
