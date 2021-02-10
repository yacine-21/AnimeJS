let btn = document.querySelector(".button");

// btn.addEventListener("mouseover", mouseOverAnimation)
// btn.addEventListener("mouseout", mouseOutAnimation)
btn.addEventListener("click", move)


// function mouseOverAnimation() {
//     anime({
//         targets: btn,
//         width: "100vw",
//         scale: {
//             delay: 800,
//             value:2
//         },
//         duration: 2000
//     })
// }


// function mouseOutAnimation() {
//     anime({
//         targets: btn,
//         width: "50%",
//         scale: {
//             delay: 800,
//             value:1
//         },
//         duration: 2000
//     })
// }


// function move (){
//     anime({
//         targets: btn,
//         keyframes: [
//           {translateY: 80},
//           {translateX: 250},
//           {translateY: 40},
//           {translateX: 0},
//           {translateY: 0}
//         ],
//         duration: 2000,
//         easing: 'easeOutElastic(1, 4)',
//         loop: true
//       });
// }

function move (){
    anime({
        targets: btn,
        translateX: [
          { value: 800, duration: 1000, delay: 500 },
          { value: 0, duration: 1000, delay: 500 }
        ],
        translateY: [
          { value: 800, duration: 500 },
          { value: 0, duration: 500, delay: 1000 },
          { value: 0, duration: 500, delay: 1000 }
        ],
        scaleX: [
          { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
          { value: 1, duration: 900 },
          { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
          { value: 1, duration: 900 }
        ],
        scaleY: [
          { value: [1.75, 1], duration: 500 },
          { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
          { value: 1, duration: 450 },
          { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
          { value: 1, duration: 450 }
        ],
        easing: 'easeOutElastic(1, .8)',
        loop: true
      });
}