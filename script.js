const backgroundImage = document.getElementById('backgroundDiv')
const characterImage = document.getElementById('characterImage')
const selectBackground = document.getElementById('backgroundSelect')
const selectCharacter = document.getElementById('characterSelect')

backgroundImage.style.backgroundImage = 'url(images/background_images/landscape1.jpg)'

selectBackground.addEventListener('change', function() {
    backgroundImage.style.backgroundImage = `url(images/background_images/${selectBackground.value}.jpg)`
})

selectCharacter.addEventListener('change', function() {
    linkToCharImage = `images/character_images/${selectCharacter.value}.png`
    characterImage.src = linkToCharImage
})
