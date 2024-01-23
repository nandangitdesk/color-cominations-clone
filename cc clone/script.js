 

 function timelineOne() {
    

const tl = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        scrub:1,
        start:"top 0",
        
        pin:true,
        end:"bottom -250%"
    }
})

.to(".circle .btm img",{
    scale:1,
    rotate:"-180deg",
    duration:1,
    stagger:0.1,
    ease: Power1
    
},"<")

.to(".circle .top img",{
    scale:1,
    
    duration:1,
    stagger:0.1,
    ease: Power1
},"<")

.to(".cimage img",{
    scale:0,
    
    duration:1,
    stagger:0.1,
    ease: Power1
},"<")

.to(".centerimg h5",{
    opacity:0,
    
    duration:1,
    stagger:0.1,
    ease: Power1
},"<")

.to(".btm-text1",{
    bottom:"-50%",
    ease: Power1,
    
},"<")
.to(".nav h1",{
    color:"#fff",
    ease: Power1
},"textflag")

.to(".shade1",{
   backgroundColor:"rgba(255, 255, 255, 0.16)",
    ease: Power1
},"textflag")
.to(".shade2",{
    backgroundColor:"rgba(255, 255, 255, 0.27)",
    ease: Power1
},"textflag")
.to(".shade3",{

    backgroundColor:"rgba(255, 255, 255, 0.4)",
    ease: Power1
},"textflag")
.to(".shade4",{
    backgroundColor:"rgba(255, 255, 255, 0.55)",
    ease: Power1
},"textflag")
.to(".shade5",{
    
    backgroundColor:"rgba(255, 255, 255, 0.75)",
    ease: Power1
},"textflag")
.to(".shade6",{
    backgroundColor:"#fff",
    ease: Power1
},"textflag")
.to("#black img",{
    opacity:0,
    ease: Power1
},"textflag")
.to("#white img",{
    opacity:1,
    ease: Power1
},"textflag")

.to(".circle",{
    
    scale:0.6,
    
    
    ease: Power1
},"<")


.to(".moving-circle",{
    top:"50%",
    ease: Power1,
    duration:1,
    scale:2
    
},"<")


.to(".small-circle",{
    scale:0,
    duration:2,
    ease: Power1
},"flag")

.to(".circle",{
    scale:0,
    duration:2,
    ease: Power1
},"flag")
.to(".moving-circle",{
    opacity:0,
    duration:2,
    ease: Power1
    
})

.to(".btm-text2",{
    bottom:"2%",
    ease: Power1,
    rotate:0
    
})
.to(".moving-box",{
    top:"0%",
    ease: Power1,
    duration:5
   
    
})
.to(".moving-box",{
    top:"-30%",
    ease: Power1,
    duration:3
   
    
})
 
}


function timelineTwo() {
    const tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".second",
            scrub:1,
            start:"top 0",
          
            pin:true,
            end:"bottom -150%"
        }
    })
    tl2
    .to(".circles",{
        top:"50%",
        stagger:0.1,
        ease:Power1,
        duration:2
    })
    .to(".circles",{
        left:"50%",
        stagger:0.1,
        ease:Power1,
        duration:2
    })
    .to(".purple",{
        opacity:0,
       
        ease:Power1
    })
    .to(".pink",{
        scale:10,
       
        ease:Power1
    })
    .to(".sec-btm .p1",{
        opacity:0,
        ease:Power1,
        duration:3
    })
    .to(".sec-top h1",{
        left:"-150%",
        ease:Power1,
        duration:8
    },"a")
    .to(".sec-btm .p2",{
        opacity:1,
        ease:Power1,
        duration:3
    },"a")
    
    .to(".shape1",{
        top:"0%",
        ease:Power1,
        duration:1
    })
    .to(".shape2",{
        top:"0%",
        ease:Power1,
        duration:1
    })
    .to(".shape3",{
        top:"0%",
        ease:Power1,
        duration:1
    })
    .to(".shape4",{
        top:"0%",
        ease:Power1,
        duration:1
    })
    .to(".shape5",{
        top:"0%",
        ease:Power1,
        duration:1
    })
}

timelineOne()
timelineTwo()

