const sun = document.getElementById('sun')
const cloudOne = document.getElementById('cloud-one')
const cloudTwo = document.getElementById('cloud-two')
const cloudThree = document.getElementById('cloud-three')
const cloudFour = document.getElementById('cloud-four')
const cloudFive = document.getElementById('cloud-five')
const cloudSix = document.getElementById('cloud-six')
const birds = document.getElementById('birds')
const redbirds = document.getElementById('redbirds')

// const javascript = document.getElementById('javascript')
// const react = document.getElementById('react')
// const graphql = document.getElementById('graphql')


function move() {
  const incrementer = window.scrollY

  // the '10' refers to the height from the bottom of the sky section. We added this
  // in the css file. Feel free to move all styling to the JS file if you prefer to keep the
  // the '10' consistent.
  sun.style.bottom = 0 + incrementer * 0.1 + '%'
  sun.style.left = 28 + incrementer * -0.03 + '%'
  cloudOne.style.bottom = 30 + incrementer * 0.12 + '%'
  cloudOne.style.left = 75 + incrementer * 0.1 + '%'
  cloudTwo.style.bottom = 60 + incrementer * 0.14 + '%'
  cloudTwo.style.left = 75 + incrementer * 0.15 + '%'
  cloudThree.style.bottom = 35 + incrementer * 0.1 + '%'
  cloudThree.style.left = 0 + incrementer * -0.12 + '%'
  cloudFour.style.bottom = 40 + incrementer * 0.16 + '%'
  cloudFour.style.left = 15 + incrementer * -0.15 + '%'
  cloudFive.style.bottom = 40 + incrementer * 0.2 + '%'
  cloudFive.style.left = 45 + incrementer * 0.16 + '%'
  cloudSix.style.bottom = 55 + incrementer * 0.2 + '%'
  cloudSix.style.left = 14 + incrementer * -0.16 + '%'
  birds.style.bottom = 10 + incrementer * 0.2 + '%'
  birds.style.left = 10 + incrementer * 0.66 + '%'
  redbirds.style.bottom = 0 + incrementer * 0.2 + '%'
  redbirds.style.left = 65 + incrementer * -0.36 + '%'
//   javascript.style.left = 20 + incrementer * -2.2 + '%'
//   react.style.left = 26 + incrementer * -1.5 + '%'
//   graphql.style.left = 32 + incrementer * -1 + '%'
}

window.addEventListener('scroll', move)