// SCROLL TRIGGER CODEPEN JS FILE ....

function locomotiveCodepen() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotiveCodepen();

// YOUR JS CODE WRITE BELOW :-- BE REMEMBER =>  DO NOT TOUCH ABOVE CODE OR ANY CHANGES...

function fixedBoxOpener() {
  var page5ElemContainer = document.querySelector(".wrapper");
  var fixedBox = document.querySelector("#fixed-Box");

  page5ElemContainer.addEventListener("mouseenter", function () {
    fixedBox.style.display = "block";
  });

  page5ElemContainer.addEventListener("mouseleave", function () {
    fixedBox.style.display = "none";
  });
}
fixedBoxOpener();

function allElemPlayer() {
  function elem1() {
    var elem1 = document.querySelector("#elem1");
    elem1.addEventListener("mouseenter", function () {
      var a = elem1.getAttribute("data-video");
      var fixedBox_videoSection = document.querySelector("#fixed-Box>video");
      fixedBox_videoSection.setAttribute("src", `${a}`);
    });

    elem1.addEventListener("mouseleave", function () {
      var a = elem1.getAttribute("data-video");
      var fixedBox_videoSection = document.querySelector("#fixed-Box>video");
      fixedBox_videoSection.setAttribute("src", "");
    });
  }
  elem1();

  function elem2() {
    var elem2 = document.querySelector("#elem2");
    elem2.addEventListener("mouseenter", function () {
      var a = elem2.getAttribute("data-video");
      var fixedBox_videoSection = document.querySelector("#fixed-Box>video");
      fixedBox_videoSection.setAttribute("src", `${a}`);
    });

    elem2.addEventListener("mouseleave", function () {
      var fixedBox_videoSection = document.querySelector("#fixed-Box>video");
      fixedBox_videoSection.setAttribute("src", "");
    });
  }
  elem2();

  function elem3() {
    var elem3 = document.querySelector("#elem3");
    elem3.addEventListener("mouseenter", function () {
      var a = elem3.getAttribute("data-video");
      var fixedBox_videoSection = document.querySelector("#fixed-Box>video");
      fixedBox_videoSection.setAttribute("src", `${a}`);
    });

    elem3.addEventListener("mouseleave", function () {
      var a = elem3.getAttribute("data-video");
      var fixedBox_videoSection = document.querySelector("#fixed-Box>video");
      fixedBox_videoSection.setAttribute("src", "");
    });
  }
  elem3();

  function elem4() {
    var elem4 = document.querySelector("#elem4");
    elem4.addEventListener("mouseenter", function () {
      var a = elem4.getAttribute("data-image");
      var fixedBox = document.querySelector("#fixed-Box");
      fixedBox.style.backgroundImage = `url(${a})`;
    });

    elem4.addEventListener("mouseleave", function () {
      var fixedBox = document.querySelector("#fixed-Box");
      fixedBox.style.backgroundImage = `url()`;
    });
  }
  elem4();

  function elem5() {
    var elem5 = document.querySelector("#elem5");
    elem5.addEventListener("mouseenter", function () {
      var a = elem5.getAttribute("data-image");
      var fixedBox = document.querySelector("#fixed-Box");
      fixedBox.style.backgroundImage = `url(${a})`;
    });

    elem5.addEventListener("mouseleave", function () {
      var fixedBox = document.querySelector("#fixed-Box");
      fixedBox.style.backgroundImage = `url()`;
    });
  }
  elem5();

  function elem6() {
    var elem6 = document.querySelector("#elem6");
    elem6.addEventListener("mouseenter", function () {
      var a = elem6.getAttribute("data-video");
      var fixedBox_videoSection = document.querySelector("#fixed-Box>video");
      fixedBox_videoSection.setAttribute("src", `${a}`);
    });

    elem6.addEventListener("mouseleave", function () {
      var a = elem6.getAttribute("data-video");
      var fixedBox_videoSection = document.querySelector("#fixed-Box>video");
      fixedBox_videoSection.setAttribute("src", "");
    });
  }
  elem6();

  function elem7() {
    var elem7 = document.querySelector("#elem7");
    elem7.addEventListener("mouseenter", function () {
      var a = elem7.getAttribute("data-video");
      var fixedBox_videoSection = document.querySelector("#fixed-Box>video");
      fixedBox_videoSection.setAttribute("src", `${a}`);
    });

    elem7.addEventListener("mouseleave", function () {
      var a = elem7.getAttribute("data-video");
      var fixedBox_videoSection = document.querySelector("#fixed-Box>video");
      fixedBox_videoSection.setAttribute("src", "");
    });
  }
  elem7();

  function elem8() {
    var elem8 = document.querySelector("#elem8");
    elem8.addEventListener("mouseenter", function () {
      var a = elem8.getAttribute("data-video");
      var fixedBox_videoSection = document.querySelector("#fixed-Box>video");
      fixedBox_videoSection.setAttribute("src", `${a}`);
    });

    elem8.addEventListener("mouseleave", function () {
      var a = elem8.getAttribute("data-video");
      var fixedBox_videoSection = document.querySelector("#fixed-Box>video");
      fixedBox_videoSection.setAttribute("src", "");
    });
  }
  elem8();
}
allElemPlayer();

var allElem = document.querySelectorAll(".elem>h1");

gsap.from(
  "#elem1>h1,#elem2>h1,#elem3>h1,#elem4>h1,#elem5>h1,#elem6>h1,#elem7>h1,#elem8>h1",
  {
    y: 100,
    duration: 3,
    stagger: 0.3,
    opacity: 0,
    ease: Power3,
    scrollTrigger: {
      trigger: `#page5`,
      scroller: `#main`,
      start: `top 65%`,
      end: `top 45%`,
      scrub: 2,
    },
  }
);

gsap.from(".cleft>h1,.cright>p,.cright>img", {
  y: 150,
  duration: 3,
  opacity: 0,
  stagger: 0.3,
  ease: Power3,
  delay: 1,
  scrollTrigger: {
    trigger: `#page4`,
    scroller: `#main`,
    start: `top 50%`,
    end: `top 39%`,
    scrub: 2,
  },
});

function page6() {
  var elm1 = document.querySelector("#one1");
  var elm2 = document.querySelector("#two2");
  var elm3 = document.querySelector("#three3");

  var mrightDiv = document.querySelector(".mright>img");

  elm1.addEventListener("click", function () {
    elm1.style.color = "#efeae3";
    elm1.style.opacity = 1;
    elm2.style.opacity = "0.5";
    elm3.style.opacity = "0.5";

    var img = elm1.getAttribute("data-image");
    mrightDiv.setAttribute("src", img);
  });

  elm2.addEventListener("click", function () {
    elm2.style.color = "#efeae3";
    elm2.style.opacity = 1;
    elm1.style.opacity = "0.5";
    elm3.style.opacity = "0.5";

    var img = elm2.getAttribute("data-image");
    mrightDiv.setAttribute("src", img);
  });

  elm3.addEventListener("click", function () {
    elm3.style.color = "#efeae3";
    elm3.style.opacity = 1;
    elm2.style.opacity = "0.5";
    elm1.style.opacity = "0.5";

    var img = elm3.getAttribute("data-image");
    mrightDiv.setAttribute("src", img);
  });
}
page6();

function swiperAnimations() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    autoplay: {
      delay: 1500,
      disableOnInteraction: true,
    },
  });
}

swiperAnimations();

function cursorAnim() {
  var cursor = document.querySelector(".cursorAnim");
  var Page = document.querySelector("#page8");

  Page.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      left: dets.x + "px",
      top: dets.y + "px",
    });
  });

  Page.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      transform: "translate(-50%,-50%) scale(1)",
      opacity: 1,
    });
  });

  Page.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      transform: "translate(-50%,-50%) scale(0)",
      opacity: 0,
    });
  });
}
cursorAnim();
