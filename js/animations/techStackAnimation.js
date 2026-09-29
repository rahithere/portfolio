function initTechStackAnimation() {
    const section = document.querySelector("#tech-stack");

    if (!section) return;

    const groups = section.querySelectorAll(".tech-item");

    gsap.from(groups, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
    });
}

// initTechStackAnimation()