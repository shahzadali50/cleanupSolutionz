// banner-slider
$(document).ready(function () {
    $(".banner-slider .image-slider .owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      padding:0,
      autoplay: true,
      autoplaySpeed: true,
      autoplayTimeout: 5000,
      animateOut: "slideOutDown",
      animateIn: "slideInDown",
      items: 1,
    });
  });
  $(document).ready(function () {
    $(".banner-slider .content-slider .owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 6000,
      animateOut: "slideOutDown",
      animateIn: "zoomIn",
      items: 1,
    });
  });
// Domestic-Cleaning JS
$(document).ready(function(){
    $('.domestic-cleaning .owl-carousel').owlCarousel({
        loop:true,
        margin:9,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:7000,
        items:1,
        responsive:{
          
        }
    })
    $('.slider .slider-2 .owl-carousel').owlCarousel({
        loop:true,
        margin:9,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        items:1

        
    })
  
})
// home-rating
$(document).ready(function(){
    $('.home-rating .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:9000,
        items:4,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
          
        }
    })
   
  
})
// after-before JS
$(function () {
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({ default_offset_pct: 0.7 });
    $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({ default_offset_pct: 0.3, orientation: 'vertical' });
});


// partner-JS
$(document).ready(function () {
    $(".sidebar").mCustomScrollbar({
      theme: "minimal",
    });
  
    $("#dismiss, .overlay").on("click", function () {
      $(".sidebar").removeClass("active");
      $(".overlay").removeClass("active");
    });
  
    $("#sidebarCollapse").on("click", function () {
      $(".sidebar").addClass("active");
      $(".overlay").addClass("active");
      $(".collapse.in").toggleClass("in");
      $("a[aria-expanded=true]").attr("aria-expanded", "false");
    });
  });
  
  // Progress Bar JS
  $(document).ready(function () {
    // Datasets for 1st week
    const data1 = {
      // labels: ["Red", "Blue", "orange", "red"],
      datasets: [
        {
          labels: "My First Dataset",
          data: [5],
          backgroundColor: ["rgb(54, 162, 235)", "green", "orange", "red"],
          hoverOffset: 7,
          cutout:'80%',
        },
      ],
    };
      // Datasets for 2nd week
      const data2 = {
        // labels: ["Red", "Blue", "orange", "red"],
        datasets: [
          {
            labels: "My First Dataset",
            data: [5],
            backgroundColor: ["rgb(54, 162, 235)", "green", "orange", "red"],
            hoverOffset: 7,
            cutout:'80%',
          },
        ],
      };
      // Datasets for 3rd week
      const data3 = {
        // labels: ["Red", "Blue", "orange", "red"],
        datasets: [
          {
            labels: "My First Dataset",
            data: [5],
            backgroundColor: ["rgb(54, 162, 235)", "green", "orange", "red"],
            hoverOffset: 7,
            cutout:'80%',
          },
        ],
      };
      //Datasets for 4th week
      const data4 = {
        // labels: ["Red", "Blue", "orange", "red"],
        datasets: [
          {
            labels: "My First Dataset",
            data: [5],
            backgroundColor: ["rgb(54, 162, 235)", "green", "orange", "red"],
            hoverOffset: 7,
            cutout:'80%',
          },
        ],
      };
    // config-block 1
    const config1 = {
      type: "doughnut",
      data: data1,
      Option:{ 
        
      }
    };
    // config-block 2
    const config2 = {
      type: "doughnut",
      data: data2,
      Option:{ 
        
      }
    };
      // config-block 3
      const config3 = {
        type: "doughnut",
        data: data3,
        Option:{ 
          
        }
      };
        // config-block 4
    const config4 = {
      type: "doughnut",
      data: data4,
      Option:{ 
        
      }
    };
  
    // Render-block
    var ctx = document.getElementById("progress_chart1").getContext("2d");
    var myChart = new Chart(document.getElementById("progress_chart1"), config1);
    var ctx = document.getElementById("progress_chart2").getContext("2d");
    var myChart = new Chart(document.getElementById("progress_chart2"), config2);
    var ctx = document.getElementById("progress_chart3").getContext("2d");
    var myChart = new Chart(document.getElementById("progress_chart3"), config3);
    var ctx = document.getElementById("progress_chart4").getContext("2d");
    var myChart = new Chart(document.getElementById("progress_chart4"), config4);
  });
  // line Graph Js
  
  $(document).ready(function () {
    // setup-block
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data:[0, 50, 5, 2, 20, 30, 45],
        },
      ],
    };
    // 'config-block
    const config = {
      type: "line",
      data,
      options: {
        scales: {
          y: {
            grid: {
              drawOnChartArea: false,
              borderColor: "green",
              borderWidth: 1,
              // drawBorder:true,
              // display:true
            },
          },
          x: {
            grid: {
              drawBorder: true,
              drawOnChartArea: false,
              // display:true,
              lineWidth: 1,
              // display:true,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
    // Render-block
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(document.getElementById("myChart"), config);
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },
      options: {},
    });
  });
  // Add-bathroom js
  $("input[type='number']").inputSpinner();
  // line-graph js
  
