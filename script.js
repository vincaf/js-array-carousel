// Inizializzazione array contenente le immagini
const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];

// Associazione della variabile alla riga che dovrà contenere le immagini
const imgWrapper = document.querySelector('.carousel-wrapper');

for (let i = 0; i < 6; i++) {

    // creazione di un nuovo elemento 'img' nell'html
    const newImg = document.createElement('img');

    // aggiunta del contenuto nell'attributo
    newImg.setAttribute('src', images[i]);

    if(i===0){
        newImg.classList.add('ms_active');
    }

    // scrittura in pagina
    imgWrapper.append(newImg);
}

// Inizializzazione variabile per i figli del wrapper e per contatore active
const imgList = imgWrapper.children;
let activeElementIndex=0;

// aggiunta della classe active sull'elemento attuale
imgList[activeElementIndex].classList.add('ms_active');

// quando clicco sul buttone nascondere l'immagine attuale e mostrare la successiva
const btnNext = document.getElementById('next-button');
btnNext.addEventListener('click', function(){
    // rimuovi active a immagine attuale
    imgList[activeElementIndex].classList.remove('ms_active');
    // incrementa indice
    activeElementIndex++;
    // quando arrivi alla fine dell'array ricomincia dal primo elemento
    if(activeElementIndex === imgList.length){
        activeElementIndex = 0;
    }
    // aggiungi active all'immagine successiva
    imgList[activeElementIndex].classList.add('ms_active');
})

// quando clicco sul buttone nascondere l'immagine attuale e mostrare la precedente
const btnPrev = document.getElementById('prev-button');
btnPrev.addEventListener('click', function(){
    // rimuovi active a immagine attuale
    imgList[activeElementIndex].classList.remove('ms_active');
    // decrementa indice
    activeElementIndex--;
    // quando arrivi alla fine dell'array ricomincia dal primo elemento
    if(activeElementIndex < 0){
        activeElementIndex = imgList.length - 1;
    }
    // aggiungi active all'immagine successiva
    imgList[activeElementIndex].classList.add('ms_active');
})
