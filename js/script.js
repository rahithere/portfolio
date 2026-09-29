gsap.registerPlugin(ScrollTrigger);

const heroTimeline = gsap.timeline({
    defaults: {
        ease: "power3.out",
    },
});

heroTimeline
    .from("#hero-label", {
        y: 20,
        opacity: 0,
        duration: 0.6,
    })
    .from(
        "#hero-title",
        {
            y: 50,
            opacity: 0,
            duration: 0.9,
        },
        "-=0.3"
    )
    .from(
        "#hero-description",
        {
            y: 25,
            opacity: 0,
            duration: 0.7,
        },
        "-=0.4"
    )
    .from(
        "#hero-cta",
        {
            y: 25,
            opacity: 0,
            duration: 0.7,
        },
        "-=0.4"
    )
    .from(
        "#scroll-indicator",
        {
            opacity: 0,
            duration: 0.5,
        },
        "-=0.2"
    );