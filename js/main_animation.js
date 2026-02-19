const screenWidth = screen.width;
// let screenSize=MediaQueryList.matches;
console.log(screenWidth);

if(screenWidth >= '1024'){
    console.log("right");
    gsap.to("#page1_content #title",{
    // transform:"translateX(2048px)",
    z:100,
    duration:1,
    opacity:0,
    scale:10,
    scrollTrigger:{
        trigger:"#page1_content #title",
        scroller:"body",
        // markers:true,
        start:"top 25%",
        end:"top 5%",
        scrub:2,
    }
})
    gsap.to("#page1_content #sub_title",{
        duration:.5,
        opacity:0,
        scrollTrigger:{
            trigger:"#page1_content #sub_title",
            scroller:"body",
        // marker:true,
            start:"top 25%",
            end:"top 20%",
            scrub:2,
            }
    })

        gsap.to("#page2_content #overview",{
            transform:"translateX(-150 px)",
            opacity:1,
            scale:1,
            duration:2,
            scrollTrigger:{
                trigger:"#page2_content #overview",
                scrolller:"body",
                // markers:true,
                start:"top 57%",
                end:"top 45%",
                scrub:2,

            }
    })

}
else{
    console.log("wrong ,animation paused");
}
