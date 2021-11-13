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

  gsap.registerPlugin(ScrollTrigger);

  //delete start
  let bodyScrollBar = Scrollbar.init(document.body, {
    damping: 0.1,
    delegateTo: document,
  });
  ScrollTrigger.scrollerProxy(".scroller", {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    },
  });
  bodyScrollBar.addListener(ScrollTrigger.update);
  gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });
  var images = gsap.utils.toArray('.panel:not(.purple)');
  images.forEach((image, i) => {
    
    var tl = gsap.timeline({
      
      scrollTrigger: {
        trigger: "section.black",
        scroller: ".scroller",
        start: () => "top -" + (window.innerHeight*(i+0.5)),
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true,     
      }
      
    })
    
    tl
    .to(image, { height: 0 })
    ;
    
  });
//delete end
  
  
  
  gsap.set(".explain-text", { zIndex: (i, target, targets) => targets.length - i });
  
  var texts = gsap.utils.toArray('.explain-text');
  
  texts.forEach((text, i) => {
    
    var tl = gsap.timeline({
      
      scrollTrigger: {
        trigger: "section.black",
        scroller: ".scroller",
        start: () => "top -" + (window.innerHeight*i),
        end: () => "+=" + window.innerHeight,
        scrub: true,
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true,     
      }
      
    })
    
    tl
    .to(text, { duration: 0.33, opacity: 1, y:"50%" })  
    .to(text, { duration: 0.33, opacity: 0, y:"0%" }, 0.66)
    ;
    
  });
  
  
  
  
  
  ScrollTrigger.create({
  
      trigger: "section.black",
      scroller: ".scroller",
      scrub: true,
      markers: true,
      pin: true,
      start: () => "top top",
      end: () => "+=" + ((images.length + 1) * window.innerHeight),
      invalidateOnRefresh: true,
  
  });
  
  //jk

  gsap.from(".box", {
    scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
    start: "top center",
    x: -50,
    opacity: 0,
    duration: 1
  });