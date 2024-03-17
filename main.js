const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
});



gsap.to("#question", {
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        scrub: 2,
        pin: true,
        start: "top top",
        end: "+=100%",
    },
    text: "Meet Sakshi, the Tiny Queen of mischief and laughter, a pint-sized bundle of energy with a heart as big as her imagination. At just 12 years old, she's the reigning champ of teasing her big sister, infusing every moment with her infectious spirit and playful antics. With a mischievous twinkle in her eye and a giggle that could light up a room, she's a constant reminder that life is meant to be enjoyed to the fullest. Though she may be a tad cranky at times and a master of the eye-roll, her love for her big sister shines through in every teasing remark and silly joke. Sakshi is a true gem, adding a sprinkle of joy and a dash of chaos to every day. Long live the Tiny Queen! 👑🌟",
    ease: "power4.Out",
});

gsap.from("ul li", {
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // scrub: 0,
        // pin: true,
        start: "top top",
        end: "+=100%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 2,
    ease: "power2.out",
});

gsap.from("ul p", {
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        scrub: true,
        start: "-=50%",
        end: "+=100%",
    },
    opacity: 0,
    x: 50,
    stagger: 0.1,
    duration: 2,
    ease: "power2.out",
});
