function myFunction(x) {
  if (x.matches) {
    // If media query matches
    const elements = document.querySelectorAll(".hello-there");
    const rows = document.querySelectorAll(".row-there");
    const elementCount = elements.length;
    for (var i = 0; i < elementCount; i++) {
      elements[i].style.display = "flex";
      elements[i].style.flexDirection = "column-reverse";
      rows[i].style.display = "contents";
    }
  } else {
    // console.log(document.querySelector(".row-there").style.display);
  }
}

var x = window.matchMedia("(max-width: 1024px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

ScrollTrigger.matchMedia({
  "(min-width: 1024px)": function () {
    // animations start
    gsap.from("h1", {
      scrollTrigger: "h1", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      x: -50,
      opacity: 0,
      duration: 1.5,
    });
    gsap.from(".intro-img", {
      scrollTrigger: ".intro-img", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      y: +50,
      opacity: 0,
      duration: 1.5,
    });

    gsap.from(".box", {
      scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      x: -50,
      opacity: 0,
      duration: 1,
    });

    // ellipse animation
    gsap.from(".ellipse1", {
      scrollTrigger: ".ellipse1", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      x: 50,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".ellipse2", {
      scrollTrigger: ".ellipse2", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      x: 50,
      opacity: 0,
      duration: 1,
    });

    //ellipse text animation
    gsap.from(".explain-txt1 h3", {
      scrollTrigger: ".explain-txt1 h3", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      y: +60,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".explain-txt2 h5", {
      scrollTrigger: ".explain-txt2 h5", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      y: +60,
      opacity: 0,
      duration: 0.8,
    });

    // third div animation
    gsap.from(".third-div img", {
      scrollTrigger: ".third-div img", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      y: +60,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".third-div h3", {
      scrollTrigger: ".third-div h3", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      y: +20,
      opacity: 0,
      duration: 0.8,
    });
    gsap.from(".third-div h5", {
      scrollTrigger: ".third-div h5", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      y: +20,
      opacity: 0,
      duration: 0.8,
    });
    gsap.from(".third-row1", {
      scrollTrigger: ".third-row1", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      y: +80,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".third-row2", {
      scrollTrigger: ".third-row2", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      y: +80,
      opacity: 0,
      duration: 1,
    });

    // fifth div animation
    gsap.from(".fifth-div img", {
      scrollTrigger: ".fifth-div img", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      y: +60,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".fifth-div h3", {
      scrollTrigger: ".fifth-div h3", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      y: +20,
      opacity: 0,
      duration: 0.8,
    });
    gsap.from(".fifth-div h5", {
      scrollTrigger: ".fifth-div h5", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      y: +20,
      opacity: 0,
      duration: 0.8,
    });
    gsap.from(".c", {
      scrollTrigger: ".fifth-row1", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      y: +80,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".fifth-row2", {
      scrollTrigger: ".fifth-row2", // start the animation when ".box" enters the viewport (once)
      start: "top center",
      y: +80,
      opacity: 0,
      duration: 1,
    });


    // ------1------
    var fade1 = $(".txt1");
    $(window).on("scroll", function () {
      var st = $(this).scrollTop();
      fade1.each(function () {
        const offset = $(this).offset().top;
        var height = $(this).outerHeight();
        // offset = offset + height / 1;
        if (st >= 2.590561 * height) {
          $(this).css({ opacity: 0 });
          document.querySelector('.desktop-view').innerHTML = "We will customize the suggestions according to YOU."
          // document.querySelector('.desktop-view').innerHTML = "Inity has a wide range of Avatars to choose from, and all the suggestions will be tailored accordingly."
        } else {
          $(this).css({ opacity: 1 });
          document.querySelector('.desktop-view').innerHTML = "You are different and so are your needs. We understand!"
        }
      });
    });
    var fade2 = $(".txt2");
    $(window).on("scroll", function () {
      var st = $(this).scrollTop();
      fade2.each(function () {
        const offset = $(this).offset().top;
        var height = $(this).outerHeight();
        // offset = offset + height / 1;
        if ( st <= 2.59056 * height) {
          $(this).css({ opacity: 0 });
        } else {
          $(this).css({ opacity: 1 });
        }
      });
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt1",
        pin: true,
        start: "top 5%",
        end: "+=650",
        scrub: 1,
      },
    });
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt2",
        pin: true,
        start: "top 5%",
        end: "+=650",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });

    let t4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".heading2-div",
        pin: true,
        start: "top 40%",
        end: "+=1320",
        scrub: true,
        // markers: true
      },
    });

    // ---------2---------

    var fade4 = $(".txt4");
    $(window).on("scroll", function () {
      var st = $(this).scrollTop();
      fade4.each(function () {
        const offset = $(this).offset().top;
        var height = $(this).outerHeight();
        if (st >= 5.828 * height) {
          $(this).css({ opacity: 0 });
          document.querySelector('.third-div h2').innerHTML = "Link your Portfolios."
          document.querySelector('.heading3-div h5').innerHTML = "Keep a track of all your investments in one place."
          // document.querySelector('.third-div h5').innerHTML = ""
        } else {
          $(this).css({ opacity: 1 });
          document.querySelector('.third-div h2').innerHTML = "Link your Cards."
          document.querySelector('.heading3-div h5').innerHTML = "Manage all your expenses and income in one place."
          // document.querySelector('.third-div h5').innerHTML = ""
        }
      });
    });
    var fade5 = $(".txt5");
    $(window).on("scroll", function () {
      var st = $(this).scrollTop();
      fade5.each(function () {
        const offset = $(this).offset().top;
        var height = $(this).outerHeight();
        if (st >= 6.82039 * height || st <= 0.997 * offset) {
          $(this).css({ opacity: 0 });
          // document.querySelector('.third-div h5').innerHTML = "We keep your information secure away from hackers."
          // document.querySelector('.third-div h5').innerHTML = "Manage all your expenses and income in one place."
        } else {
          $(this).css({ opacity: 1 });
          // document.querySelector('.heading3-div h5').innerHTML = "Keep a track of all your investments in one place."
          // document.querySelector('.third-div h5').innerHTML = ""
        }
      });
    });
    var fade6 = $(".txt6");
    $(window).on("scroll", function () {
      var st = $(this).scrollTop();
      fade6.each(function () {
        const offset = $(this).offset().top;
        var height = $(this).outerHeight();
        if (st >= 0.997 * offset) {
          $(this).css({ opacity: 1 });
          // new edit
          document.querySelector('.third-div h2').innerHTML = "Safety always comes first."
          document.querySelector('.third-div h5').innerHTML = "Your information is safe and is away from bad guys!"
        } else {
          $(this).css({ opacity: 0 });
        }
      });
    });

    let t5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt4",
        pin: true,
        start: "top top",
        end: "+=650",
        scrub: 1,
      },
    });
    let t6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt5",
        pin: true,
        start: "top top",
        end: "+=650",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });
    let t7 = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt6",
        pin: true,
        start: "top top",
        end: "+=650",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });

    let t8 = gsap.timeline({
      scrollTrigger: {
        trigger: ".heading3-div",
        pin: true,
        start: "top 32%",
        end: "+=1970",
        scrub: true,
        // markers: true
      },
    });

    // ----------3-------

    var fade7 = $(".txt7");
    $(window).on("scroll", function () {
      var st = $(this).scrollTop();
      fade7.each(function () {
        const offset = $(this).offset().top;
        var height = $(this).outerHeight();
        // if (st >= 11.13089 * height) {
        if (st >= 10.12024 * height) {
          $(this).css({ opacity: 0 });
          document.querySelector('.h5-1').innerHTML = "Education?"
        } else {
          $(this).css({ opacity: 1 });
        }
      });
    });
    var fade8 = $(".txt8");
    $(window).on("scroll", function () {
      var st = $(this).scrollTop();
      fade8.each(function () {
        const offset = $(this).offset().top;
        var height = $(this).outerHeight();
        if (st >= 11.111 * height || st <= 0.998442 * offset) {
          $(this).css({ opacity: 0 });
          document.querySelector('.h5-1').innerHTML = "Education?"
        } else {
          $(this).css({ opacity: 1 });
          document.querySelector('.h5-1').innerHTML = "Wedding?"
        }
      });
    });
    var fade9 = $(".txt9");
    $(window).on("scroll", function () {
      var st = $(this).scrollTop();
      fade9.each(function () {
        const offset = $(this).offset().top;
        var height = $(this).outerHeight();
        if (st >= 0.998 * offset) {
          $(this).css({ opacity: 1 });
          document.querySelector('.h5-1').innerHTML = "House?"
          document.querySelectorAll('.ab')[0].style.display = "block"
          document.querySelectorAll('.ab')[1].style.display = "block"
        } else {
          $(this).css({ opacity: 0 });
          document.querySelectorAll('.ab')[0].style.display = "none"
          document.querySelectorAll('.ab')[1].style.display = "none"
        }
      });
    });

    let t9 = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt7",
        pin: true,
        start: "top top",
        end: "+=650",
        scrub: 1,
      },
    });
    let t10 = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt8",
        pin: true,
        start: "top top",
        end: "+=650",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });
    let t11 = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt9",
        pin: true,
        start: "top top",
        end: "+=650",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });

    let t12 = gsap.timeline({
      scrollTrigger: {
        trigger: ".heading4-div",
        pin: true,
        start: "top 25%",
        end: "+=1970",
        scrub: true,
        // markers: true
      },
    });

    // -------------5 ------------

    var fade10 = $(".txt10");
    $(window).on("scroll", function () {
      var st = $(this).scrollTop();
      fade10.each(function () {
        const offset = $(this).offset().top;
        var height = $(this).outerHeight();
        if (st >= 14.283105 * height) {
          $(this).css({ opacity: 0 });
          document.querySelector('.heading5-1').innerHTML = "Want to invest in high risk stocks?"
          document.querySelector('.heading5-2').innerHTML = "Tell us your preferences and we will give you a personalized investment plan created by experts."
           
        } else {
          $(this).css({ opacity: 1 });
          document.querySelector('.heading5-1').innerHTML = "Want to invest in low risk stocks?"
          document.querySelector('.heading5-2').innerHTML = ""
        }
      });
    });
    var fade11 = $(".txt11");
    $(window).on("scroll", function () {
      var st = $(this).scrollTop();
      fade11.each(function () {
        const offset = $(this).offset().top;
        var height = $(this).outerHeight();
        if (st >= 0.99847 * offset) {
          $(this).css({ opacity: 1 });
        } else {
          $(this).css({ opacity: 0 });
        }
        // console.log(st, height ,offset)
      });
    });

    let t13 = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt10",
        pin: true,
        start: "top top",
        end: "+=650",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });
    let t14 = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt11",
        pin: true,
        start: "top top",
        end: "+=650",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });

    let t15 = gsap.timeline({
      scrollTrigger: {
        trigger: ".heading5-div",
        pin: true,
        start: "top 25%",
        end: "+=1320",
        scrub: true,
        // markers: true
      },
    });
  },
});



var countDownDate = new Date("Jan 16, 2022 23:59:59").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  // Time calculations for days
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
  if(days == 1) {
    document.querySelector(".timer").innerHTML = "Closing Soon <br>" + days + " day left!";
  } 
  else if (distance < 0) {
    clearInterval(x);
    document.querySelector(".timer").innerHTML = "EXPIRED";
  }
  else {
    document.querySelector(".timer").innerHTML = "Closing Soon <br>" + days + " days left!";

  }
}, 1000);


const form = document.querySelector(".form");
const url = 'https://inity-backend.herokuapp.com/';
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  fetch(`${url}register`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => {
        console.log(response)
      console.log(`thanks ${name}`);
      alert(`Thanks ${name}, you will receive details shortly!`)
    })
    .catch((e) => {
      console.log(e);
      alert(e+' error occured')
    });
});


// Popup Scroll Disable
const subs_cont_elm = document.getElementById("subs-cont");
const subs_btn = document.querySelector(".subs-btn");
const btn_sub_close = document.getElementById("subs-close");

btn_sub_close.addEventListener("click", () => {
  subs_cont_elm.classList.remove("show");
  enableScroll()
});
subs_btn.addEventListener("click", () => {
  subs_cont_elm.classList.remove("show");
  enableScroll()
});
const myTimeout = setTimeout(myGreeting, 1000);

function myGreeting() {
    subs_cont_elm.classList.add("show");
    disableScroll()
}

function disableScroll() {
  document.body.classList.add("stop-scrolling");
  }
  
  function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}