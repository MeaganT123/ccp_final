// .addEventListener("hover", function(this){
//     alert("wow")
// })

const menu = document.querySelector(".menu")
const home = document.querySelector(".home")
const pets = document.querySelector(".pets")
const recipes = document.querySelector(".recipes")
const travel = document.querySelector(".travel")

// This handler will be executed every time the cursor
// is moved over a different list item
pets.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
        event.target.style.color = "orange";
        event.target.style.fontWeight = "bold";
        pets.classList.add('rotate');
    //   alert('wow')

        // reset the color after a short delay
        setTimeout(() => {
        event.target.style.color = "";
        event.target.style.fontWeight = "";
        pets.classList.remove('rotate');
      }, 500);
    },
    false,
);


home.addEventListener(
    "mouseover",
    (event) => {
        // highlight the mouseover target
        event.target.style.color = "orange";
        event.target.style.fontWeight = "bold";
        home.classList.add('rotate');
    //   alert('wow')

        // reset the color after a short delay
        setTimeout(() => {
            event.target.style.color = "";
            event.target.style.fontWeight = "";
            home.classList.remove('rotate');
          }, 500);
    },
    false,
);


recipes.addEventListener(
    "mouseover",
    (event) => {
        // highlight the mouseover target
        event.target.style.color = "orange";
        event.target.style.fontWeight = "bold";
        recipes.classList.add('rotate');
    //   alert('wow')

        // reset the color after a short delay
        setTimeout(() => {
        event.target.style.color = "";
        event.target.style.fontWeight = "";
        recipes.classList.remove('rotate');
        }, 500);
    },
    false,
);


travel.addEventListener(
    "mouseover",
    (event) => {
        // highlight the mouseover target
        event.target.style.color = "orange";
        event.target.style.fontWeight = "bold";
        travel.classList.add('rotate');
    //   alert('wow')

        // reset the color after a short delay
        setTimeout(() => {
        event.target.style.color = "";
        event.target.style.fontWeight = "";
        travel.classList.remove('rotate');
        }, 500);
    },
    false,
);

// const nav = [pets, home, travel, recipes]
// let i = 0;

// while (i < nav.length) {
//     // console.log(scores[i]);
//     nav[i].addEventListener(
//         "mouseover",
//         (event) => {
//             // highlight the mouseover target
//             event.target.style.color = "orange";
//             event.target.style.fontWeight = "bold";
//             nav[i].classList.add('rotate');
//         //   alert('wow')
    
//             // reset the color after a short delay
//             setTimeout(() => {
//             event.target.style.color = "";
//             event.target.style.fontWeight = "";
//             nav[i].classList.remove('rotate');
//             }, 500);
//         },
//         false,
//     );
//     i++;
// }