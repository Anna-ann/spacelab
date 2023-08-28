<template>
    <section id="roadmap" class="roadmap">
        <h1>Roadmap</h1>
      <div class="wrapper">
        <div class="center-line">
          <a href="#" class="scroll-icon"><i class=""></i></a>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa-home"></i>
            <div class="details">
              <span class="title">Present: Letter of Intent with TransTelecom for 5000 devices</span>
              <span>Now</span>
            </div>
            <p>TransTelecom has shown interest in acquiring 5000 S-IoVIT devices, marking a significant step towards realizing our mission.</p>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="bi bi-star-fill"></i>
            <div class="details">
              <span class="title">2023: Launching Sales in Central Asia</span>
              <span>2023</span>
            </div>
            <p>We are excited to introduce S-IoVIT in Central Asia, providing reliable data transfer solutions to the region's critical infrastructures.</p>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="bi bi-globe"></i>
            <div class="details">
              <span class="title">2024: Expanding to Middle East, East Asia, and Lat Am</span>
              <span>2024</span>
            </div>
            <p>Our expansion journey continues as we bring S-IoVIT to the Middle East, East Asia, and Latin America to serve more clients.</p>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="bi bi-rocket-takeoff-fill"></i>
            <div class="details">
              <span class="title">2025: Launching IoT Satellite Constellation</span>
              <span>2025</span>
            </div>
            <p>We are reaching for the stars by launching our IoT satellite constellation, ensuring global coverage for seamless data transmission.</p>
          </section>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    // Your script logic here
  };
  </script>
  
  <style>
  .wrapper {
    max-width: 1080px;
    margin: 50px auto;
    padding: 0 20px;
    position: relative;
  }
  
  .wrapper .center-line {
    position: absolute;
    height: 100%;
    width: 4px;
    background: #ff7a00;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
  }
  
  .wrapper .row {
    display: flex;
  }
  
  .wrapper .row-1 {
    justify-content: flex-start;
  }
  
  .wrapper .row-2 {
    justify-content: flex-end;
  }
  
  .wrapper .row section {
    border-radius: 5px;
    width: calc(50% - 40px);
    padding: 20px;
    position: relative;
  }
  
  .wrapper .row section::before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    top: 28px;
    z-index: -1;
    transform: rotate(45deg);
  }
  
  .row-1 section::before {
    right: -7px;
  }
  
  .row-2 section::before {
    left: -7px;
  }
  
  .row section .icon,
  .center-line .scroll-icon {
    position: absolute;
    background: #ff7a00;
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ff7a00;
    font-size: 17px;
    box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  }
  
  .center-line .scroll-icon {
    bottom: 0px;
    left: 50%;
    font-size: 25px;
    transform: translateX(-50%);
  }
  
  .row-1 section .icon {
    top: 15px;
    right: -60px;
    color: #ff7a00;
  }
  
  .row-2 section .icon {
    top: 15px;
    left: -60px;
  }
  
  .row section .details,
  .row section .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .row section .details .title {
    font-size: 22px;
    font-weight: 600;
  }
  
  .row section p {
    margin: 10px 0 17px 0;
  }
  
  .row section .bottom a {
    text-decoration: none;
    background: #ff7a00;
    color: #fff;
    padding: 7px 15px;
    border-radius: 5px;
    font-weight: 400;
    transition: all 0.3s ease;
  }
  
  .row section .bottom a:hover {
    transform: scale(0.97);
  }
  
  @media (max-width: 790px) {
    .wrapper .center-line {
      left: 40px;
    }
    .wrapper .row {
      margin: 30px 0 3px 60px;
    }
    .wrapper .row section {
      width: 100%;
    }
    .row-1 section::before {
      left: -7px;
    }
    .row-1 section .icon {
      left: -60px;
    }
  }
  
  @media (max-width: 440px) {
    .wrapper .center-line,
    .row section::before,
    .row section .icon {
      display: none;
    }
    .wrapper .row {
      margin: 10px 0;
    }
  }
  </style>
  