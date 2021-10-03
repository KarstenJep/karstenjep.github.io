const sun = document.getElementById('sun')
const cloudOne = document.getElementById('cloud-one')
const cloudTwo = document.getElementById('cloud-two')
const cloudThree = document.getElementById('cloud-three')
const cloudFour = document.getElementById('cloud-four')
const cloudFive = document.getElementById('cloud-five')
const cloudSix = document.getElementById('cloud-six')
const stars = document.getElementById('stars')
const starstwo = document.getElementById('stars-two')
const birds = document.getElementById('birds')
const moose = document.getElementById('moose')
const rocket = document.getElementById('rocket')
const airplane = document.getElementById('airplane')
const pg = document.getElementById('pg')
const html = document.getElementById('html')
const css = document.getElementById('css')
const javascript = document.getElementById('javascript')
const react = document.getElementById('react')
const node = document.getElementById('node')
const postgresql = document.getElementById('postgresql')
const python = document.getElementById('python')
const git = document.getElementById('git')


function move() {
  const incrementer = window.scrollY

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
  birds.style.bottom = 10 + incrementer * 0.1 + '%'
  birds.style.left = 10 + incrementer * 0.33 + '%'
  moon.style.bottom = 92 + incrementer * 0.2 + '%'
  moon.style.left = 0 + incrementer * -0.36 + '%'
  stars.style.bottom = 80 + incrementer * 0.2 + '%'
  stars.style.left = 0 + incrementer * -0.36 + '%'
  starstwo.style.bottom = 80 + incrementer * 0.2 + '%'
  starstwo.style.left = 90 + incrementer * 0.36 + '%'
  moose.style.left = 03 + incrementer * -0.05 + '%'
  elephant.style.bottom = 20 + incrementer * -.025 + '%'
  elephant.style.left = -60 + incrementer * 0.15 + '%'
  rocket.style.bottom = 20 + incrementer * .25 + '%'
  rocket.style.left = 80 + incrementer * 0.05 + '%'
  airplane.style.bottom = 50 + incrementer * .00 + '%'
  airplane.style.left = -30 + incrementer * 0.3 + '%'
  pg.style.bottom = 45 + incrementer * -.05 + '%'
  pg.style.left = 73 + incrementer * -0.3 + '%'
  html.style.left = 10 + incrementer * -.25 + '%'
  // html.style.bottom = 5 + incrementer * 0.1 + '%'
  css.style.left = 19 + incrementer * -.25 + '%'
  // css.style.bottom = 4 + incrementer * 0.15 + '%'
  javascript.style.left = 31 + incrementer * -.25 + '%'
  // javascript.style.bottom = 5 + incrementer * 0.2 + '%'
  react.style.left = 42 + incrementer * -.25 + '%'
  // react.style.bottom = 5 + incrementer * 0.25 + '%'
  node.style.left = 53 + incrementer * .25 + '%'
  // node.style.bottom = 5 + incrementer * 0.25 + '%'
  postgresql.style.left = 64 + incrementer * .25 + '%'
  // postgresql.style.bottom = 5 + incrementer * 0.2 + '%'
  python.style.left = 75 + incrementer * .25 + '%'
  // python.style.bottom = 5 + incrementer * 0.15 + '%'
  git.style.left = 86 + incrementer * .25 + '%'
  // git.style.bottom = 5 + incrementer * 0.1 + '%'
}

window.addEventListener('scroll', move)