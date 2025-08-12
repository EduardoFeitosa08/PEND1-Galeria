'use strict'

function criarImagem(urlImagem){
    const galeria = document.getElementById('galeria')
    const img = document.createElement('img')
    img.src = urlImagem.url

    galeria.appendChild(img)

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

        // './img/star-platinium.png',
        // './img/the-world.png',
        // './img/magican-red.png',
        // './img/crazy-diamond.png',
        // './img/gold-experience.png',
        // './img/hermit-purple.png',
        // './img/hierophant-green.png',
        // './img/killer-queen.png',
        // './img/king-crimson.png',
        // './img/silver-chariot.png'
    ]

    imagens.forEach(criarImagem)

}

carregarImagens() 