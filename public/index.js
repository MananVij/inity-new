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

  //jb


  
  //jk

  gsap.from(".box", {
    scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
    start: "top center",
    x: -50,
    opacity: 0,
    duration: 1
  });