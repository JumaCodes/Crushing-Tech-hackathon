
const menu = document.getElementById('profile__menu');
const dropDown = document.getElementById('drop__down');
const infoHeaders = document.querySelectorAll('.sections');
const infoBodies = document.querySelectorAll('.section__hide');
const infoImage = document.querySelectorAll('.sectionRight__image');
const openAll = document.querySelector('.setup__innerWrapper');
const dropAll = document.querySelector('.dropdown__section');
const plans = document.querySelector('.plans__wrapper');
const cancelPlans = document.querySelector('.plans__close');

const state = {
  curentStep: 0,
  completedSteps: [],
}

document.addEventListener('load', ()=>{
  
})

document.addEventListener("DOMContentLoaded", function () {
  const profileMenu = document.querySelector('.profile__image');
  const notification = document.querySelector('.notification');
  dropAll.innerHTML = createBody()

  console.log(createBody())

  profileMenu.addEventListener('click', function () {
    notification.style.display = (notification.style.display === 'none' || notification.style.display === '') ? 'inline-flex' : 'none';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const profileMenu = document.querySelector('.profile__image');
  const notification = document.querySelector('.notification');

  menu.addEventListener('click', function () {
    dropDown.style.display = (dropDown.style.display === 'none' || dropDown.style.display === '') ? 'inline-flex' : 'none';
  });
});


// Event listener to remove the plans options
cancelPlans.addEventListener('click', () => {

  setTimeout(() => {
    plans.style.display = 'none';
  }, 500); // Adjust the delay time as needed
});

// Function to close all info bodies and images and change background color
const closeAllInfo = () => {
  infoBodies.forEach((body, index) => {
    body.style.display = 'none';
    infoHeaders[index].style.backgroundColor = '#ffffff'; // Closed background color
  });

  infoImage.forEach((image) => {
    image.style.display = 'none';
  });
};

// Initially close all info bodies and images
closeAllInfo();

document.addEventListener('DOMContentLoaded', function () {
  const titleImage = document.querySelector('.title__image');
  // const displayImage = titleImage.querySelectorAll('.display__image');

  const infoHeaders = document.querySelectorAll('.title__ind');

  infoHeaders.forEach((header, index) => {
    header.addEventListener('click', () => {
      // changeSVG();
      // const isBodyOpen = infoBodies[index].style.display === 'block';
      // const isImageOpen = infoImage[index].style.display === 'block';


      closeAllInfo();

      state.currentStep = index;
      console.log(state)



      
        infoBodies[state.currentStep].style.display = 'block';
        infoImage[state.currentStep].style.display = 'block';
        infoHeaders[state.currentStep].style.backgroundColor = '#F3F3F3'; // Open background color
    });
  });
});

openAll.addEventListener('click', () => {
  const isOpen = dropAll.style.display === 'block';

  if (isOpen) {
    dropAll.style.display = 'none';
  } else {
    dropAll.style.display = 'block';
  }
});

function completedState(svg) {
  svg.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#303030"></circle>
      <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
      ></path>
    </svg>
      `;


  rotating = false;

}

function rotatingState(svg) {
  rotating = true;
  // Your rotating SVG code
  svg.classList.add('rotate');
  svg.innerHTML = `
        
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 28 28" fill="none">
    <path
      d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
      stroke="#8A8A8A"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
      `;


}

function revertingState(svg) {
  rotating = false;
  // Revert back to the initial SVG
  svg.innerHTML = `
      // <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 32 32" fill="none">
      //   <!-- Your initial SVG code -->
      //   <circle cx="16" cy="16" r="12" stroke="#8A8A8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
      // </svg>
      Hello
    `;
}

let rotating = false;
let timer;

function toggleImage(element, currentStep) {
  console.log(element, currentStep)
  const svg = element.querySelector('svg');
  if (state.completedSteps.includes(currentStep)) {
    state.currentStep = currentStep;
    state.completedSteps = state.completedSteps.filter((e) => e !== currentStep)
    revertingState(svg)
  } else {
    state.currentStep = currentStep++;
    state.completedSteps.push(currentStep);
    rotatingState(svg)
    completedState(svg)
  }


}

function createBody() {
  return [{
    title: 'Customize your online store',
    info: 'Choose a theme and add your logo, colors, and images to reflect your brand.',
    buttons: ['Customize theme'],
    image: "https://crushingit.tech/hackathon-assets/customise-store.png"
  },
  {
    title: 'Add your first product',
    info: 'Choose Write a description, add photos, and set pricing for the products you plan to sell.',
    buttons: ['Add product', 'Import product'],
    image: "https://crushingit.tech/hackathon-assets/product.png"
  },
  {
    title: 'Customize your online store',
    info: 'Choose a theme and add your logo, colors, and images to reflect your brand.',
    buttons: ['Customize theme'],
    image: "https://crushingit.tech/hackathon-assets/customise-store.png"
  },
  {
    title: 'Customize your online store',
    info: 'Choose a theme and add your logo, colors, and images to reflect your brand.',
    buttons: ['Customize theme'],
    image: "https://crushingit.tech/hackathon-assets/customise-store.png"
  },
  {
    title: 'Customize your online store',
    info: 'Choose a theme and add your logo, colors, and images to reflect your brand.',
    buttons: ['Customize theme'],
    image: "https://crushingit.tech/hackathon-assets/customise-store.png"
  }].map((section, idx) => {
    return (
      `<div class="sections" key=${idx}>
              <div class="column">
                <div class="title__row">
                  <div class="title__image" onclick="toggleImage(this, ${idx})">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="24"
                         height="24"
                         viewBox="0 0 32 32"
                         fill="none">
                      <circle cx="16"
                              cy="16"
                              r="12"
                              stroke="#8A8A8A"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-dasharray="4 6"
                              class="display__image" />
                    </svg>
                  </div>
                  <div class="title__ind">${section.title}</div>
                </div>

                <div class="section__hide">
                  <p class="section__hideInfo">
                  ${section.info}
                  </p>
                  <button class="primary__btn">Learn more</button>
                  <div class="row__btn">
                  ${section.buttons.map((btn, index) => {
        const classes = index == 0 ? "customize__themeBtn" : "import__btn";
        console.log(classes, "classes")
        return `<button class="${classes}">
          <span>${btn}</span>
        </button>`
      }).join("")}
      </div>
                  
                </div>

              </div>

              <div class="sectionRight__image">
                <img src="${section.image}"
                     alt="Asset">
              </div>
            </div>
      `
    )
  }).join("")
}