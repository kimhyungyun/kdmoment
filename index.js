// 섹션2 슬라이드

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 1,
});

// 섹션3 스크롤 하면 text 등장

gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "top 40%",
    end: "bottom 100%",
    scrub: 10,
  },
});

t1.fromTo(
  ".section3MiddleText",
  { y: 400, opacity: 0 },
  { y: 0, opacity: 1, duration: 5, ease: "expo.out" }
);

// 섹션3 top과 top이만나 고정

const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "top top",
    end: "+=2500",
    pin: true,
    scrub: 5,
  },
});

t2.to(".section3MiddleText", {
  opacity: 1,
  y: 0,
  // duration: 2,
  ease: "expo.out",
});

// 섹션3 top과 top이만나 li 출몰

gsap.registerPlugin(ScrollTrigger);

const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "top 100%",
    end: "400% center",
    scrub: 10,
  },
});

t3.fromTo(
  ".priceContainer",
  { y: 3000, opacity: 1 },
  { y: -2000, opacity: 1 },
  "<"
);
