'use strict'

function criarImagem(imagem){
    const galeria = document.getElementById('galeria')
    const img = document.createElement('img')
    const personagem = document.createElement('p')
    img.src = imagem.url
    personagem.textContent = imagem.nome

    galeria.appendChild(img)

    document.documentElement.style.setProperty('--personagem', galeria.appendChild(personagem))
}

function carregarImagens(){
    const imagens = [
        {
            nome: 'Star Platinium',
            url: './img/star-platinium.png'
        },
        {
            nome: 'The World',
            url: './img/the-world.png'
        },
        {
            nome: 'Magican Red',
            url: './img/magican-red.png'
        },
        {
            nome: 'Crazy Diamond',
            url: './img/crazy-diamond.png'
        },
        {
            nome: 'Gold Experience',
            url: './img/gold-experience.png'
        },
        {
            nome: 'Hermit Purple',
            url: './img/hermit-purple.png'
        },
        {
            nome: 'Hierophant Green',
            url: './img/hierophant-green.png'
        },
        {
            nome: 'Killer Queen',
            url: './img/killer-queen.png'
        },
        {
            nome: 'King Crimson',
            url: './img/king-crimson.png'
        },
        {
            nome: 'Silver Chariot',
            url: './img/silver-chariot.png'
        },


    ]

    imagens.forEach(criarImagem)

}

carregarImagens() 