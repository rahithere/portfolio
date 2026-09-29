function initAboutAnimation() {
    const section = document.querySelector("#about");

    if (!section) return;

    const content = section.querySelectorAll("h2, .space-y-6, .mt-10");

    gsap.from(content, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
    });
}

initAboutAnimation()