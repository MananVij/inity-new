gsap.from("h1", {
    scrollTrigger: "h1", // start the animation when ".box" enters the viewport (once)
    start: "top center",
    x: -50,
    opacity: 0,
    duration: 1.5
  });
  gsap.from(".intro-img", {
    scrollTrigger: ".intro-img", // start the animation when ".box" enters the viewport (once)
    start: "top center",
    y: +50,
    opacity: 0,
    duration: 1.5
  });


  gsap.from(".box", {
    scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
    start: "top center",
    x: -50,
    opacity: 0,
    duration: 1
  });



  gsap.to(".explain-text1", {
    scrollTrigger: {
      trigger: ".explain-text1",
      start: "top 0%",
      end: "top -140%",
      pin: ".explain-img1",
    }
  })
  gsap.to(".explain-text2", {
    scrollTrigger: {
      trigger: ".explain-text2",
      start: "top 0%",
      end: "top -140%",
      pin: ".explain-img2",
    }
  })
  gsap.to(".explain-text3", {
    scrollTrigger: {
      trigger: ".explain-text3",
      start: "top 0%",
      end: "top -140%",
      pin: ".explain-img3",
    }
  })
  gsap.to(".explain-text4", {
    scrollTrigger: {
      trigger: ".explain-text4",
      start: "top 0%",
      end: "top -140%",
      pin: ".explain-img4",
    }
  })


  // gsap.to(".explain-text", {
  //   scrollTrigger: {
  //     trigger: ".explain-text",
  //     start: "top 50%",
  //     end: "top 0%",
  //     markers: true,
  //     pin: ".explain-img2",
  //     markers: {
  //       startColor: "yellow",
  //       endColor: "white",
  //       fontSize: "2rem",
  //     },
  //   }
  // })  
  // gsap.to(".explain-text", {
  //   scrollTrigger: {
  //     trigger: ".explain-text",
  //     start: "top 50%",
  //     end: "top 0%",
  //     markers: true,
  //     pin: ".explain-img3",
  //     markers: {
  //       startColor: "yellow",
  //       endColor: "white",
  //       fontSize: "2rem",
  //     },
  //   }
  // })  
  // gsap.to(".explain-text", {
  //   scrollTrigger: {
  //     trigger: ".explain-text",
  //     start: "top 50%",
  //     end: "top 0%",
  //     markers: true,
  //     pin: ".explain-img4",
  //     markers: {
  //       startColor: "yellow",
  //       endColor: "white",
  //       fontSize: "2rem",
  //     },
  //   }
  // })



