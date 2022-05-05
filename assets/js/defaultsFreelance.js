let navbarFreelance = document.getElementById('navbarFreelance')
navbarFreelance.innerHTML = `
  <div class="container">

    <div class="navbar-left">
      <a class="navbar-brand" href="../">
        <img class="logo-dark mr-2" src="../assets/img/apple-touch-icon-nobkgd.png" height="auto" width="40px" alt="logo">
        <img class="logo-dark" src="../assets/img/logo-dark-notm.png" height="auto" width="100px" alt="logo">
      </a>
    </div>

    <button class="navbar-toggler" type="button">&#9776;</button>

    <section class="navbar-mobile white-text">
      <span class="d-mobile-none"></span>

      <nav id="navbar-links" class="nav nav-navbar ml-auto mr-5">
        <a class="nav-link" href="/team">Our Team</a>
        <a class="nav-link" href="/customers">Our Customers</a>
        <li class="nav-item">
          <a class="nav-link" href="#">Resources<i class="fas fa-caret-down"></i></a>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="/marketing/inbound">Inbound marketing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/topic-clusters">Topic clusters</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/blog" target="_blank">Our blog</a>
            </li>
          </ul>
        </li>
      </nav>

          <a class="btn btn-md bg-darkblue text-white" href="/applyto/write">Apply to write</a>
    </section>

  </div>
`;

let elFooter = document.getElementById('footer')
elFooter.innerHTML = `
  <div class="container">
    <div class="row gap-y py-5">

      <div class="col-md-12 col-xl-4">
        <p><a href="/home"><img src="../assets/img/logo-light.png" height="auto" width="100vw" alt="logo"></a></p>
        <p class="lead">PubLoft helps startups and small/mid-sized businesses scale their content marketing as an acquisition channel.</p>
        <small>&copy; 2017-2021 GigLoft LLC</small>
      </div>

      <div class="col-xs-12 col-md-3 col-xl-2">
        <h5 class="mb-4 mt-1 footer-headings"><strong>Companies</strong></h5>
        <div class="nav flex-column">
          <a class="footer-nav-link" href="https://blog.publoft.com/tag/case-studies/" target="_blank">Case studies</a>
          <a class="footer-nav-link" href="/repurpose-my-content">Repurpose content</a>
          <a class="footer-nav-link" href="/customers">Featured customers!</a>
          <a class="footer-nav-link" href="https://blog.publoft.com/common-customer-questions/" target="_blank">Customer FAQs</a>
        </div>
      </div>

      <div class="col-xs-12 col-md-3 col-xl-2">
        <h5 class="mb-4 mt-1 footer-headings"><strong>Freelancers</strong></h5>
        <div class="nav flex-column">
          <a class="footer-nav-link" href="/writers">Write for PubLoft</a>
          <a class="footer-nav-link" href="https://blog.publoft.com/common-writer-questions/" target="_blank">Writer FAQs</a>
          <a class="footer-nav-link" href="https://publoft.com/guidelines" target="_blank">Writer guide</a>
          <a class="footer-nav-link" href="https://publoftportal.com/writers" target="_blank">Writer portal</a>
        </div>
      </div>

      <div class="col-xs-12 col-md-3 col-xl-2">
        <h5 class="mb-4 mt-1 footer-headings"><strong>Other stuff</strong></h5>
        <div class="nav flex-column">
          <a class="footer-nav-link" href="https://blog.publoft.com/" target="_blank">The PubLoft blog</a>
          <a class="footer-nav-link" href="/team">Our team</a>
          <a class="footer-nav-link" href="/terms">Terms of service</a>
          <!--<a class="footer-nav-link" href="/program/launch-accelerator">LAUNCH Accelerator</a>
          <a class="footer-nav-link" href="/program/quake-accelerator">Quake Capital</a>-->
        </div>
      </div>

      <div class="col-xs-12 col-md-3 col-xl-2 text-center">
        <p>
          <button class="d-block mx-auto btn btn-lg btn-onblue bg-black" data-toggle="modal" onclick="Calendly.showPopupWidget('https://calendly.com/publoft/intro');return false;">Write for us</button>
        </p>
        <br>
        <div class="social social-hover-primary d-flex justify-content-between">
          <a class="social-facebook" href="https://www.facebook.com/publofthq" rel="nofollow" target="_blank"><i class="fab fa-facebook"></i></a>
          <a class="social-instagram" href="https://www.instagram.com/publoft/" rel="nofollow" target="_blank"><i class="fab fa-instagram"></i></a>
          <a class="social-youtube" href="https://www.linkedin.com/company/publoft/" rel="nofollow" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a class="social-twitter" href="https://twitter.com/publoft" rel="nofollow" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
      </div>

    </div>
  </div>
`;
