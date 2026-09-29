function initProjectsAnimation() {
    const section = document.querySelector("#projects");

    if (!section) return;

    const cards = section.querySelectorAll("#projects-container > article");

    if (!cards.length) return;

    gsap.from(cards, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
    });
}

initProjectsAnimation()