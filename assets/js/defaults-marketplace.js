let elNavbar = document.getElementById('navbar')
elNavbar.innerHTML = `
  <div class="container">

    <div class="navbar-left">
      <button class="navbar-toggler" type="button">&#9776;</button>
      <a class="navbar-brand" href="../">
      <img class="logo-dark" src="../assets/img/apple-touch-icon-nobkgd.png" height="auto" width="70vw" alt="logo">
      <img class="logo-light" src="../assets/img/apple-touch-icon-nobkgd.png" height="auto" width="70vw" alt="logo">
        </a>
    </div>

    <section class="navbar-mobile white-text">
      <span class="d-mobile-none"></span>

      <nav id="navbar-links" class="nav nav-navbar ml-auto mr-5">
        <!-- <a class="nav-link" href="https://blog.publoft.com/" target="_blank">Blog</a> -->
        <a class="nav-link" href="#why">Why this exists</a>
        <a class="nav-link" href="#howitworks">How it works</a>
      </nav>
    </section>

    <a class="d-none d-md-block btn btn-md publoft-blue" href="#typeform">Request for free</a>
    <a class="d-block d-md-none btn btn-md publoft-blue" href="#typeform">Request</a>

  </div>
`;

let elFooter = document.getElementById('footer')
elFooter.innerHTML = `
<div class="container">
  <div class="text-center row gap-y d-flex justify-content-center">

    <div class="d-none d-lg-block col-md-3 text-left align-self-center">
      <small>&copy; 2017-2021 GigLoft Inc.</small>
    </div>

      <div class="col-md-6">
        <img class="" src="../assets/img/apple-touch-icon-nobkgd.png" height="auto" width="70vw" alt="logo">
        <div class="d-block d-lg-none mx-auto d-flex justify-content-around py-lg-7">
          <a class="social-twitter" href="https://twitter.com/publoft" rel="nofollow" target="_blank"><i style="font-size:2rem" class="fab fa-twitter"></i></a>
        </div>
      </div>

      <div class="d-none d-lg-block col-md-3 text-right align-self-center">
        <div class="social col-6 mx-auto d-flex justify-content-around py-lg-7">
          <a class="social-twitter" href="https://twitter.com/publoft" rel="nofollow" target="_blank"><i style="font-size:2rem" class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>

  </div>
</div>
`;
