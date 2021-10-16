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
const fishing = document.getElementById('fishing')
const bicycle = document.getElementById('bicycle')


function move() {
  const incrementer = window.scrollY
  // Sky Images
  sun.style.bottom = 45 + incrementer * 0.1 + '%'
  sun.style.left = 28 + incrementer * -0.03 + '%'
  cloudOne.style.bottom = 64 + incrementer * 0.12 + '%'
  cloudOne.style.left = 75 + incrementer * 0.1 + '%'
  cloudTwo.style.bottom = 80 + incrementer * 0.14 + '%'
  cloudTwo.style.left = 75 + incrementer * 0.15 + '%'
  cloudThree.style.bottom = 65 + incrementer * 0.1 + '%'
  cloudThree.style.left = 0 + incrementer * -0.12 + '%'
  cloudFour.style.bottom = 80 + incrementer * 0.16 + '%'
  cloudFour.style.left = 6 + incrementer * -0.15 + '%'
  cloudFive.style.bottom = 70 + incrementer * 0.2 + '%'
  cloudFive.style.left = 45 + incrementer * 0.16 + '%'
  cloudSix.style.bottom = 85 + incrementer * 0.2 + '%'
  cloudSix.style.left = 2 + incrementer * -0.16 + '%'
  moon.style.bottom = 96 + incrementer * 0.2 + '%'
  moon.style.left = 0 + incrementer * -0.36 + '%'
  stars.style.bottom = 90 + incrementer * 0.2 + '%'
  stars.style.left = -2 + incrementer * -0.36 + '%'
  starstwo.style.bottom = 90 + incrementer * 0.2 + '%'
  starstwo.style.left = 90 + incrementer * 0.36 + '%'
  // Animals and vehicles
  birds.style.bottom = 40 + incrementer * 0.05 + '%'
  birds.style.left = -20 + incrementer * 0.33 + '%'
  moose.style.left = 18 + incrementer * -0.05 + '%'
  bicycle.style.bottom = 53 + incrementer * -.015 + '%'
  bicycle.style.left = -60 + incrementer * 0.15 + '%'
  rocket.style.bottom = 20 + incrementer * .2 + '%'
  rocket.style.left = 80 + incrementer * 0.04 + '%'
  airplane.style.bottom = 75 + incrementer * .00 + '%'
  airplane.style.left = -30 + incrementer * 0.3 + '%'
  pg.style.bottom = 75 + incrementer * -.05 + '%'
  pg.style.left = 72 + incrementer * -0.3 + '%'
  // Tech
  html.style.left = 10 + incrementer * -.02 + '%'
  html.style.bottom = 57 + incrementer * -0.02 + '%'
  css.style.left = 19 + incrementer * -.03 + '%'
  css.style.bottom = 56 + incrementer * -0.03 + '%'
  javascript.style.left = 31 + incrementer * -.04 + '%'
  javascript.style.bottom = 57 + incrementer * -0.04 + '%'
  react.style.left = 42 + incrementer * -.05 + '%'
  react.style.bottom = 57 + incrementer * -0.05 + '%'
  node.style.left = 53 + incrementer * .05 + '%'
  node.style.bottom = 57 + incrementer * -0.05 + '%'
  postgresql.style.left = 64 + incrementer * .04 + '%'
  postgresql.style.bottom = 57 + incrementer * -0.04 + '%'
  python.style.left = 75 + incrementer * .03 + '%'
  python.style.bottom = 57 + incrementer * -0.03 + '%'
  git.style.left = 86 + incrementer * .02 + '%'
  git.style.bottom = 57 + incrementer * -0.02 + '%'
  // fishing.style.left = 90 + incrementer * .25 + '%'
  // fishing.style.bottom = 08 + incrementer * 0.1 + '%'
}

window.addEventListener('scroll', move)