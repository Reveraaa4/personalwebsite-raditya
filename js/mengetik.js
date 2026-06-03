var i = 0;
var text = "I Putu Raditya Prana";
var sedangMenghapus = false; 

function mengetik() {
    var target = document.getElementById("name");
    
    if (!sedangMenghapus) {
        
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(mengetik, 100); 
        } else {
            sedangMenghapus = true;
            setTimeout(mengetik, 3000); 
        }
    } else {
        if (i > 0) {
            target.innerHTML = text.substring(0, i - 1);
            i--;
            setTimeout(mengetik, 50); 
        } else {

            sedangMenghapus = false;
            setTimeout(mengetik, 1000);
        }
    }
}

window.onload = function() {
    mengetik();
}