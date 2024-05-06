import gsap from "gsap"

export const revealAnimation = (element,opacity) => {
    let tl

    tl = gsap
        .timeline({
            paused: true,
            defaults: {
                ease: "power2.inOut",
                duration: 1,
            },
        })
        .fromTo(
            element,
            {opacity: 0},
            {
                opacity: opacity || 1,
            },
        )

    gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: "top top+=80%",
            // markers: true,
            onLeaveBack() {
                tl.reverse()
            },
            onEnter() {
                tl.play()
            },
        },
    })
}
