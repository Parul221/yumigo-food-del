function filterBoxes(category) {
    const boxes = document.querySelectorAll('.box2');
    const container = document.querySelector('.container2');

    // Clear the container
    container.innerHTML = '';

    // Create an array to hold filtered boxes
    const filteredBoxes = [];

    boxes.forEach(box => {
        // Check if the box matches the selected category
        if (category === 'all' || box.classList.contains(category)) {
            filteredBoxes.push(box.cloneNode(true)); // Clone the box
        }
    });

    // Append filtered boxes back to the container
    filteredBoxes.forEach(box => {
        // Set margin for spacing
        box.style.margin = '10px'; // Adjust the value as needed
        container.appendChild(box);
    });

    // Adjust the container height based on the number of boxes
    const boxCount = filteredBoxes.length;
    const boxHeight = 229; // Height of each box (adjust if necessary)
    const newHeight = boxCount > 0 ? boxCount : 200; // Minimum height to prevent collapsing
    container.style.height = `${newHeight}px`;
    
    // Set the container's justify-content to 'flex-start' to align boxes to the left
    container.style.justifyContent = 'flex-start';
}
const text=document.querySelector('.container div');
window.onload=function(){
    text.classList.add('open');
};

