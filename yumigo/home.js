function filterBoxes(category) {
    const boxes = document.querySelectorAll('.box2');
    const container = document.querySelector('.container2');
    container.innerHTML = '';

    const fragment = document.createDocumentFragment();

    const filteredBoxes = [];

    boxes.forEach(box => {
  
        if (category === 'all' || box.classList.contains(category)) {
            filteredBoxes.push(box.cloneNode(true)); 
        }
    });

    filteredBoxes.forEach(box => {
        box.style.margin = '10px'; 
        fragment.appendChild(box);
    });

    container.appendChild(fragment);
    container.style.height = max-content; 

    container.style.justifyContent = 'flex-start';
}

const text=document.querySelector('.container div');
window.onload=function(){
    text.classList.add('open');
};