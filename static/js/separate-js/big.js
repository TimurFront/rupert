gsap.registerPlugin(ScrollTrigger);

// GSAP ANIMATIONS

function lineAnimation (el, ease) {
	gsap.to(el, {
		scrollTrigger: {
			trigger: ".about",
			start: "top 100%",
			end: "bottom bottom",
			scrub: 0.5,
			// markers: true
		},
		scaleY: 1,
		ease: ease,
	})
};
function scrollProgress () {
	gsap.to(".scroll", {
		scrollTrigger: {
			trigger: "main",
			start: "top top",
			end: "bottom bottom",
			scrub: 0.5,
			// markers: true
		},
		scaleX: 1,
		duration: 3
	})
}
function smoothScrollObjects (el, percentage) {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
            // markers: true
        },
        y: percentage,
        ease: "none"
    })
}
let musicLinesTimeLine = gsap.timeline({
    repeat: -1,
    yoyo: true,
    duration: 0.5

})
function musicPlayed (line, ease, duration, transform) {
    musicLinesTimeLine.to(line, {
        transform: transform,
        duration: duration,
        ease: ease
    }, '-=0.5')
}


// GSAP ANIMATION END

// GSAP LOAD ANIMATION
var loadAnimationTimeLine = gsap.timeline({repeat: 0})
let preloader = $('.preloader')
let accept = $('.accept')
let startVal = {
    value: 0
};
let prelCounter = document.querySelector(".preloader__counter");
let proto = {
    clipPath: "polygon(0 101%, 100% 101%, 100% -1%, 0 -1%)",
    duration: 1.5,
    ease: "expo.inOut",
    onComplete: function () {
        accept.remove()
    }
};
function animationLoad1 () {
    loadAnimationTimeLine.to(preloader, proto);
};
function animationLoad2 () {
    loadAnimationTimeLine.to(startVal, {
        value: 99,
        duration: 1,
        snap: {
            value: 1
        },
        onUpdate: function () {
            prelCounter.textContent = "".concat(String(startVal.value).padStart(2, "0"), "%");
        }
    });
};
function animationLoad3 () {
    loadAnimationTimeLine.to(startVal, {
        value: 100,
        duration: 0.5,
        snap: {
            value: 1
        },
        onUpdate: function () {
            prelCounter.textContent = "".concat(String(startVal.value).padStart(2, "0"), "%");
        }
    });
}
function animationLoad4 (music) {
    loadAnimationTimeLine.to(preloader, {
        clipPath: "polygon(0% 101%, 100% 101%, 100% 101%, 0% 101%)",
        duration: 1.5,
        ease: "expo.inOut",
        onComplete: function () {
            preloader.remove()
            $('html').removeClass('no-scroll')
            console.log('all work');
            music.play()
        }
    });
}

// GSAP LOAD ANIMATION END



$(document).ready(function () {
    $('.header__plus').click(function() {
        $(this).toggleClass('active')
        $('.header__plus-back').toggleClass('active')
        $('.header__plus-ul').toggleClass('active')
        $('html').toggleClass('nav-open')
    })
})


// LOAD ANIMATION
function loadScript(n) {
    return new Promise(function(resolve, reject) {
        var r = document.createElement("script");
        r.async = !0;
        r.type = "text/javascript";
        r.charset = "utf-8";
        r.src = n;
        r.onerror = reject;
        r.onload = resolve;
        document.getElementsByTagName("head")[0].appendChild(r);
    })
}

function runAnimation() {

    
	let d = 'static/js/separate-js/asscroll.min.js'
	let f = 'static/js/separate-js/anotherBigScriptTest.js'
	let k = 'static/js/separate-js/howler.js'

    
    Promise.all([loadScript(f), loadScript(d), loadScript(k)])
    .then(function() {
        const asscroll = new ASScroll({
            customScrollbar: false,
            scrollbarStyles: false,
            disableRaf: true,
            disableResize: true,
            limitLerpRate: true,
            touchScrollType: 'scrollTop'
        });
        
        gsap.ticker.add(asscroll.update)
        ScrollTrigger.defaults({
            scroller: asscroll.containerElement
        })
        
        ScrollTrigger.scrollerProxy(asscroll.containerElement, {
            scrollTop(value) {
                return arguments.length ? asscroll.currentPos = value : asscroll.currentPos;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
            }
        });
        
        asscroll.on("update", ScrollTrigger.update);
        ScrollTrigger.addEventListener("refresh", asscroll.resize);

        
        window.addEventListener('resize', () => {
            const width = window.innerWidth
            const height = window.innerHeight
            asscroll.resize({ width, height })
        })
        
        asscroll.enable();

        
        var musicBackground = new Howl({
            src: ['static/img/content/music.mp3'],
            loop: true,
            volume: 0.1
        });

        animationLoad1();
        animationLoad2();
        animationLoad3();
        animationLoad4(musicBackground);
        lineAnimation('#line1', 'expo.out');
        lineAnimation('#line2', 'power3.out');
        lineAnimation('#line3', 'power1.out');
        scrollProgress();
        smoothScrollObjects('.js-smooth-img1', '-10%');
        smoothScrollObjects('.js-smooth-img2', '-10%');
        smoothScrollObjects('.js-smooth-img3', '-10%');
        smoothScrollObjects('.js-smooth-img4', '25%');
        smoothScrollObjects('.js-smooth-img5', '-10%');

        
        musicPlayed('#sound-line1', 'bounce.in', 0.5, 'matrix(1,0,0,1,0,10)')
        musicPlayed('#sound-line2', 'bounce.inOut', 0.5, 'matrix(1,0,0,1,0,8)')
        musicPlayed('#sound-line3', 'bounce.out', 0.5, 'matrix(1,0,0,1,0,6)')
        musicPlayed('#sound-line4', 'bounce.in', 0.5, 'matrix(1,0,0,1,0,12)')

        $('.js-music-button').click(function() {
            if (musicBackground.playing()) {
                musicBackground.pause()
                musicLinesTimeLine.progress(0).pause()
            }
            else {
                musicBackground.play()
                musicLinesTimeLine.progress(0).play()
            }
        })
        
    })
    .catch(function() {
        console.log('problem');
    })
}

runAnimation()
// LOAD ANIMATION END