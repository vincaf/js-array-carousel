// Inizializzazione array contenente le immagini
const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];

// creazione di un nuovo elemento 'img' nell'html
const newImg = document.createElement('img');

// Associazione della variabile alla riga che dovrà contenere le immagini
const imgWrapper = document.querySelector('.carousel-wrapper');

for (let i = 0; i < 6; i++) {
    const newImg = images[i];
    // aggiunta del contenuto nell'attributo
    newImg[0].setAttribute('src', 'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg');
    newImg[1].setAttribute('src', 'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg');
    newImg[2].setAttribute('src', 'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg');
    newImg[3].setAttribute('src', 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg');
    newImg[4].setAttribute('src', 'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg');
    newImg[5].setAttribute('src', 'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg');
    imgWrapper.append(newImg);
}