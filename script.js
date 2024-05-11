const stickySections = [...document.querySelectorAll('.sticky')]

const images = [
  'https://www.motortrend.com/uploads/2023/09/002-2024-BMW-i5-front-three-quarters-in-action.jpg?w=768&width=768&q=75&format=webp',
  'https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X7/10571/1689673096346/front-left-side-47.jpg?impolicy=resize&imwidth=480',
  'https://hips.hearstapps.com/hmg-prod/images/2024-bmw-i7-m70-119-643d69e564b2a.jpg?crop=0.558xw:0.627xh;0.325xw,0.325xh&resize=768:*',
  'https://d2m3nfprmhqjvd.cloudfront.net/blog/20230522183738/BMW-M340i-1160x653.webp'
]

images.forEach((img) => {
  stickySections.forEach((section) => {
    let image = document.createElement('img')
    image.src = img
    section.querySelector('.scroll-section').appendChild(image)
  })
})

window.addEventListener('scroll', (e) => {
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i])
  }
})

function transform(section) {
  const offsetTop = section.parentElement.offsetTop
  const scrollSection = section.querySelector('.scroll-section')
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100
  percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage
  scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`
}
