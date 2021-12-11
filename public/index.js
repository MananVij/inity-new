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

    // shape animation third div
    gsap.to(".triangle1", {
      duration: 500,
      x: -160,
      y: -160,
      ease: "linear",
      scrollTrigger: {
        trigger: ".third-div h3",
        start: "top 10%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".triangle-phone1", {
      duration: 500,
      x: -160,
      y: -160,
      ease: "linear",
      scrollTrigger: {
        trigger: ".third-div h3",
        start: "top 10%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".circle1", {
      duration: 5000,
      y: -50,
      ease: "linear",
      scrollTrigger: {
        trigger: ".third-div h3",
        start: "top 50%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".right-line1", {
      duration: 5000,
      y: 70,
      x: 70,
      ease: "linear",
      scrollTrigger: {
        trigger: ".third-div h3",
        start: "top 50%",
        scrub: true,
        end: "1000% 10%",
      },
    });

    gsap.to(".left-line2", {
      duration: 50,
      y: -200,
      x: 200,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fourth-div h3",
        start: "top 90%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".triangle2", {
      duration: 50,
      y: 200,
      x: 200,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fourth-div h3",
        start: "top 50%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".semicircle2", {
      duration: 50,
      y: 200,
      x: -200,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fourth-div h3",
        start: "top 40%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".right-line2", {
      duration: 50,
      y: 100,
      x: -100,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fourth-div h3",
        start: "top 40%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".triangle2-bottom", {
      duration: 50,
      y: 10,
      x: -10,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fourth-div h3",
        start: "top -20%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".right-line2-bottom", {
      duration: 50,
      y: -150,
      x: 150,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fourth-div h3",
        start: "top -20%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".circle2", {
      duration: 2000,
      y: -500,
      // x: 200,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fourth-div h3",
        start: "top 70%",
        scrub: true,
        end: "1000% 10%",
      },
    });

    gsap.to(".left-line4", {
      duration: 50,
      y: -200,
      x: 200,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fourth-div h3",
        start: "top 90%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".triangle4", {
      duration: 50,
      y: 200,
      x: 200,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fourth-div h3",
        start: "top 50%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".semicircle4", {
      duration: 50,
      y: 200,
      x: -200,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fourth-div h3",
        start: "top 40%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".right-line4", {
      duration: 50,
      y: 100,
      x: -100,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fourth-div h3",
        start: "top 40%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".triangle4-bottom", {
      duration: 50,
      y: 10,
      x: -10,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fourth-div h3",
        start: "top -20%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".right-line4-bottom", {
      duration: 50,
      y: -150,
      x: 150,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fourth-div h3",
        start: "top -20%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".circle4", {
      duration: 2000,
      y: -500,
      // x: 200,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fourth-div h3",
        start: "top 70%",
        scrub: true,
        end: "1000% 10%",
      },
    });

    // shape animation fifth div
    gsap.to(".triangle", {
      duration: 500,
      x: -160,
      y: -160,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fifth-div h3",
        start: "top 10%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".triangle-phone", {
      duration: 500,
      x: -160,
      y: -160,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fifth-div h3",
        start: "top 10%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".circle", {
      duration: 5000,
      y: -50,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fifth-div h3",
        start: "top 50%",
        scrub: true,
        end: "1000% 10%",
      },
    });
    gsap.to(".right-line", {
      duration: 5000,
      y: 70,
      x: 70,
      ease: "linear",
      scrollTrigger: {
        trigger: ".fifth-div h3",
        start: "top 50%",
        scrub: true,
        end: "1000% 10%",
      },
    });

    // color card
    var x = document.querySelectorAll(".color1");
    for (var i = 0; i < x.length; i++) {
      x[i].onclick = function () {
        var y = document.querySelector(".color3");
        y.classList.remove("color3");
        this.classList.add("color3");
      };
    }

    var z = document.querySelectorAll(".color2");
    for (var w = 0; w < z.length; w++) {
      z[w].onclick = function () {
        var p = document.querySelector(".color4");
        p.classList.remove("color4");
        this.classList.add("color4");
      };
    }

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
          document.querySelector('.desktop-view').innerHTML = "Inity has a wide range of Avatars to choose from, and all the suggestions will be tailored accordingly."
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
        if ( st <= 0.988 * offset) {
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
        start: "top top",
        end: "+=650",
        scrub: 1,
      },
    });
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".txt2",
        pin: true,
        start: "top top",
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
          document.querySelector('.third-div h2').innerHTML = "Link your Investment Portfolios and Subscriptions."
          document.querySelector('.third-div h5').innerHTML = ""
        } else {
          $(this).css({ opacity: 1 });
          document.querySelector('.third-div h2').innerHTML = "Link your Cards and Banks."
          document.querySelector('.third-div h5').innerHTML = ""
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
          document.querySelector('.third-div h5').innerHTML = "We keep your information secure away from hackers."
        } else {
          $(this).css({ opacity: 1 });
          document.querySelector('.third-div h5').innerHTML = ""
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
          document.querySelector('.h5-1').innerHTML = "Marriage?"
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
        } else {
          $(this).css({ opacity: 0 });
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
          document.querySelector('.heading5-2').innerHTML = "Want to invest in high risk stocks?"
        } else {
          $(this).css({ opacity: 1 });
          document.querySelector('.heading5-2').innerHTML = "Want to invest in low risk stocks?"
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
