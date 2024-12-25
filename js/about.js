gsap.registerPlugin(ScrollTrigger);

gsap.from('.about-logic-right', {
    x: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.about-logic-right',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from('.about-logic-img', {
    x: -100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.about-logic-inner',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from('.ourVision', {
    x: -100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.ourVision',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from('.ourMission', {
    x: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.ourMission',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from('.ourTeam', {
    x: -100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.ourTeam',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from('.today-situation h4 ', {
    x: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.today-situation',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from('.today-situation-p ', {
    x: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.today-situation',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from('.projrcts-p', {
    y: 50,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.today-situation',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from('.projects-left', {
    x: -100,
    y: 50,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.projects-left',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from('.projects-right', {
    x: 100,
    y: 50,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.projects-right',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from('.weBelive h4', {
    x: -100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.weBelive-node',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from('.weBelive-node1', {
    x: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.weBelive-node1',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from('.weBelive-node2', {
    x: -100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.weBelive-node2',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from('.weBelive-node3', {
    x: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.weBelive-node3',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.from('.weBelive-node4', {
    x: -100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.weBelive-node4',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});

gsap.to('.impres-header h2', {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
        trigger: '.impres-header',
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    }
});


let impressiveCards = document.querySelectorAll(".impressiveCard");
impressiveCards.forEach(impressiveCard => {

    gsap.set(impressiveCard, { opacity: 0 });
    gsap.to(impressiveCard, {
        opacity: 1,
        y: -20,
        stagger: 0.4,
        delay: .3,
        scrollTrigger: {
            trigger: impressiveCard,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
        }
    });
})









