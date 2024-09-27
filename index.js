const anime = document.getElementById('listAnime')
let template = document.getElementById('data')

fetch('https://api.jikan.moe/v4/top/anime')
.then(respone => {
    if (!respone.ok){
        throw new Error('Network response not work')
    }
    return respone.json()
})
.then(res => {
    const dataAnime = res.data
    
    dataAnime.forEach(Anime => {
        const { images , title } = Anime;
        
        const getData = document.importNode(template.content, true);

        getData.querySelector('img').src =images.jpg.image_url
        getData.querySelector('img').alt = title;
        getData.querySelector('h3').textContent = Anime.title
        getData.querySelector('h4').textContent ="episode " + Anime.episodes

    
        anime.appendChild(getData)
    })
}).catch((error) => {
    console.log('Error Fetching data', error);
}) 
