document.addEventListener("DOMContentLoaded", () => {
    const elemenAnimasi = document.querySelectorAll(".scroll-animasi");

    const opsiObserver = {
        root: null,
        threshold: 0.15, 
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                entry.target.classList.add("muncul");
            } else {
               
                entry.target.classList.remove("muncul");
            }
        });
    }, opsiObserver);

    elemenAnimasi.forEach(elemen => {
        observer.observe(elemen);
    });
});