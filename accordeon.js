const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}
items.forEach((item) => item.addEventListener('click', toggleAccordion));

function bouton1(){
    var text = document.querySelectorAll('.accordion-item');
    var i;

    for(i = 0; i < text.length; i++) {
        text[i].style.backgroundColor = "black";
        text[i].style.color = "white";
    }
}

function bouton2(){
    var text = document.querySelectorAll('.accordion-item');
    var i;

    for(i = 0; i < text.length; i++) {
        text[i].style.backgroundColor = "white";
        text[i].style.color = "black";
    }
}