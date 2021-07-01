let pictureElements = [
    {"text": "deep earth",
    "picture": "https://github.com/codingkapur/loops-studio-page/blob/main/images/mobile/image-deep-earth.jpg?raw=true"},
    {"text": "night arcade",
    "picture":"https://github.com/codingkapur/loops-studio-page/blob/main/images/mobile/image-night-arcade.jpg?raw=true"},
    {"text": "soccer team vr",
    "picture":"https://github.com/codingkapur/loops-studio-page/blob/main/images/mobile/image-soccer-team.jpg?raw=true"}
]
const creationContainer = document.querySelector('#creations');

for(const element of pictureElements){
    const newCreation = document.createElement('div')
    const newImage = document.createElement('img')
    const newText = document.createElement('div')

    newCreation.style.position = "relative"
    newCreation.style.marginBottom = "20px"

    newImage.src = element.picture

    newText.innerText = element.text.toUpperCase()
    newText.style.color = "white"
    newText.style.fontSize = "32px"
    newText.style.position = "absolute"
    newText.style.top = "90px"
    newText.style.left = "30px"
    newText.style.fontFamily = "Josefin Sans", "sans-serif"
    newText.style.fontWeight = "700"

    newCreation.appendChild(newImage)
    newCreation.appendChild(newText)
    creationContainer.append(newCreation)
}

const hamburgerMenu = document.querySelector('.head-menu');
hamburgerMenu.addEventListener('click', function(){
    hamburgerMenu.classList.toggle('showNone')
})

