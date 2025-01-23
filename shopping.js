document.addEventListener("DOMContentLoaded", () => {
    const itemContainer = document.querySelector(".item-container");

    // Create 30 sample items
    for (let i = 1; i <= 30; i++) {
        const item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `
            <img src="iphone${i % 3 + 14}.jpg" alt="iPhone ${i % 3 + 14}">
            <h3>iPhone ${i % 3 + 14}</h3>
            <p>From S$${400 + i * 50}</p>
            <p><span class="in-stock">${50 - i} in stock</span></p>
        `;
        itemContainer.appendChild(item);
    }
});
