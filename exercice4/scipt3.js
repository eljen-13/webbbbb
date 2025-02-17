console.log("Le script est chargé !");

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('#colorful-list li');
    console.log("List items:", listItems); // Vérifie que les éléments sont bien sélectionnés

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            const newColor = getRandomColor();
            console.log("Couleur changée:", newColor); // Vérifie la couleur générée
            item.style.backgroundColor = newColor;
        });
    });
});