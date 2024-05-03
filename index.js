// document.addEventListener("DOMContentLoaded", (event) => {


  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav_container')
    if(window.pageYOffset > 0) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled');
    }
})

const appearBtn = document.querySelectorAll('.filter');
const aboutBtn = document.querySelector('.container_2_btn_1')
const about = document.querySelector('#container_3_sub_section_1');
const experience = document.querySelector('#container_3_sub_section_1-1');
const education = document.querySelector('#container_3_sub_section_1-1');
const skills = document.querySelector('#container_3_sub_section_1');
appearBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(btn.innerHTML)
        if(e.target.innerHTML === 'ABOUT') {
            about.style.display ='flex';
            education.style.display = 'none';
            experience.style.display = 'none';
            skills.style.display = 'none';
        } 
        else if(e.target.innerHTML === 'EXPERIENCE') {
            about.style.display ='none';
            education.style.display = 'none';
            experience.style.display = 'flex';
            skills.style.display = 'none';
            // aboutBtn.style.backgroundColor = '#1d1d1d'
        } 
        else if(e.target.innerHTML === 'EDUCATION') {
            about.style.display ='none';
            education.style.display = 'flex';
            experience.style.display = 'none';
            skills.style.display = 'none';
            // aboutBtn.style.backgroundColor = '#1d1d1d'
        } 
        else if(e.target.innerHTML === 'SKILLS') {
            about.style.display ='none';
            education.style.display = 'none';
            experience.style.display = 'none';
            skills.style.display = 'flex';
            aboutBtn.style.backgroundColor = '#1d1d1d'
    aboutBtn.style.color = 'white'

        } else {
            return
        }
        
    })
})

window.addEventListener('load', ()=> {
    aboutBtn.style.backgroundColor = '#c9f31d'
    aboutBtn.style.color = '#1d1d1d'

    about.style.display = 'flex'
})


function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }








// });








// const appearBtn = document.querySelectorAll('.filter');
// const about = document.querySelector('#percon');
// const experience = document.querySelector('#expcon');
// const education = document.querySelector('#educon');
// const skills = document.querySelector('#skillcon');
// // Assuming you have a collection of elements with the class 'filter'

// // Function to handle the click event
// function handleClick() {
//     // Remove 'active' class from all elements
//     appearBtn.forEach(function(btn) {
//         btn.classList.remove("active");
//         if(btn.classList.innercontent = 'ABOUT'){
//             console.log('yes')
//         }
//     });
//     // Add 'active' class to the clicked element
//     this.classList.add("active");
// }

// // Add event listener to each button
// appearBtn.forEach(function(btn) {
//     btn.addEventListener('click', handleClick);
// });


// // window.addEventListener('load', ()=> {
// //     aboutBtn.style.backgroundColor = '#c9f31d'
// //     aboutBtn.style.color = '#1d1d1d'

// //     // about.style.display = 'flex'
// // })
// // });


