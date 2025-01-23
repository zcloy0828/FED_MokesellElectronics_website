
document.querySelectorAll('.filters button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.textContent.toLowerCase();
        const products = document.querySelectorAll('.product-card');

        products.forEach(product => {
            if (filter === 'all' || product.textContent.toLowerCase().includes(filter)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});


document.querySelectorAll('.product-card img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = 1000;

        const fullImage = document.createElement('img');
        fullImage.src = img.src;
        fullImage.style.maxWidth = '90%';
        fullImage.style.maxHeight = '90%';
        modal.appendChild(fullImage);

        modal.addEventListener('click', () => modal.remove());
        document.body.appendChild(modal);
    });
})