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

const cursorDot = document.querySelector("#cursor-dot");
const cursorRing = document.querySelector("#cursor-ring");

if (cursorDot && cursorRing) {
    window.addEventListener("mousemove", (e) => {
        gsap.to(cursorDot, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.08,
            ease: "power2.out",
        });

        gsap.to(cursorRing, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.25,
            ease: "power3.out",
        });
    });

    const interactiveElements = document.querySelectorAll(
        "a, button, .tech-item"
    );

    interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            gsap.to(cursorRing, {
                width: 54,
                height: 54,
                borderColor: "rgba(255,255,255,0.9)",
                duration: 0.3,
                ease: "power3.out",
            });

            gsap.to(cursorDot, {
                scale: 0.5,
                duration: 0.2,
            });
        });

        element.addEventListener("mouseleave", () => {
            gsap.to(cursorRing, {
                width: 34,
                height: 34,
                borderColor: "rgba(255,255,255,0.5)",
                duration: 0.3,
                ease: "power3.out",
            });

            gsap.to(cursorDot, {
                scale: 1,
                duration: 0.2,
            });
        });
    });
}