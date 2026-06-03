const semuaKartu = document.querySelectorAll('.card-projek');
const tombolPrev = document.getElementById('btn-prev');
const tombolNext = document.getElementById('btn-next');
const wadahDots = document.getElementById('carousel-dots');

let indexSekarang = 0;

semuaKartu.forEach((_, index) => {
    const lingkaran = document.createElement('div');
    lingkaran.classList.add('dot');
    if (index === 0) lingkaran.classList.add('aktif');
    
    lingkaran.addEventListener('click', () => {
        gantiKeIndex(index);
    });
    
    wadahDots.appendChild(lingkaran);
});

const semuaDots = document.querySelectorAll('.dot');

function gantiKeIndex(indexBaru) {
    semuaKartu[indexSekarang].classList.remove('aktif');
    semuaDots[indexSekarang].classList.remove('aktif');
    
    indexSekarang = indexBaru;
    
    semuaKartu[indexSekarang].classList.add('aktif');
    semuaDots[indexSekarang].classList.add('aktif');
}

tombolNext.addEventListener('click', () => {
    let targetIndex = indexSekarang + 1;
    if (targetIndex >= semuaKartu.length) {
        targetIndex = 0;
    }
    gantiKeIndex(targetIndex);
});

tombolPrev.addEventListener('click', () => {
    let targetIndex = indexSekarang - 1;
    if (targetIndex < 0) {
        targetIndex = semuaKartu.length - 1;
    }
    gantiKeIndex(targetIndex);
});

setInterval(() => {
    let targetIndex = indexSekarang + 1;
    if (targetIndex >= semuaKartu.length) targetIndex = 0;
    gantiKeIndex(targetIndex);
}, 5000);