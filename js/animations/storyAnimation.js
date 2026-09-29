function initStoryAnimation() {
    const section = document.querySelector("#story");

    if (!section) return;

    const cards = section.querySelectorAll(".rounded-xl");

    gsap.from(cards, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
        },
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
    });
}

initStoryAnimation()