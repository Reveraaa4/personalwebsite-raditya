const container = document.getElementById('bintang-all');
const jumlahbintang = 300;

for (let i = 0; i < jumlahbintang; i++) {
    const star = document.createElement('div');
    star.className = 'bintang';

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 2 + 1;
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 5;

    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.setProperty('--duration', `${duration}s`);
    star.style.setProperty('--delay', `${delay}s`);

    container.appendChild(star);
}