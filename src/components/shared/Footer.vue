<template>
    <footer id="footer" class="footer bg-dark">
      <div class="container-fluid">
        <div class="row gy-4 justify-content-center align-items-center">
          <div class="col-lg-6 col-md-12 footer-info d-flex flex-column align-items-center">
            <a href="index.html" class="logo d-flex align-items-center">
              <img src="/src/assets/logo.svg" width="120" height="55">
            </a>
            <div class="social-links d-flex justify-content-center mt-4">
              <a href="https://wa.me/77016078789" class="whatsapp"><i class="bi bi-whatsapp"></i></a>
              <a href="https://www.instagram.com/space.lab/" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
  
          <div class="col-lg-6 col-md-12 footer-link text-center">
            <div class="copyright">
              <strong><span>©</span></strong> All Rights Reserved
            </div>
            <div class="credits">
              Designed and Developed by <a href="https://spacelab.kz">SpaceLab LLP</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>

  .footer {
    padding: 50px 0;
    color: #fff;
    max-width: none;
  }

  .footer .social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    margin-right: 10px;
    transition: 0.3s;
  }

  .footer .social-links i {
    font-size: 18px;
  }  </style>
  