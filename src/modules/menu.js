export default function menu() {
    const priceText = "S - €9.99 / M - €12.99 / L - €15.99";
    const tabContentDiv = document.querySelector(".tab_content");
    tabContentDiv.textContent = "";
    tabContentDiv.classList.add("display_content");

    for (let i = 1; i <= 4; i++) {
        const newImg = document.createElement("img");
        const menuDescription = document.createElement("p");
        const pricePara = document.createElement("p");
        pricePara.setAttribute("style", "font-size: 1.5rem");

        if (i === 1) {
            menuDescription.textContent = "The Basil & Tomato Pizza Pie";

            newImg.classList.add("menu_img");
            newImg.src = `images/image${i}.jpg`;
            newImg.alt = "Menu item";
            pricePara.textContent = priceText;
        }

        if (i === 2) {
            menuDescription.textContent = "Pepperoni & Sausage Pizza Pie";
            newImg.classList.add("menu_img");
            newImg.src = `images/image${i}.jpg`;
            newImg.alt = "Menu item";
            pricePara.textContent = priceText;
        }

        if (i === 3) {
            menuDescription.textContent = "The Supreme Pizza Pie";
            newImg.classList.add("menu_img");
            newImg.src = `images/image${i}.jpg`;
            newImg.alt = "Menu item";
            pricePara.textContent = priceText;
        }

        if (i === 4) {
            menuDescription.textContent =
                "The... Burger? How'd that get in there? Nobody told me we were selling juicy burgers.";
            newImg.classList.add("menu_img");
            newImg.src = `images/image${i}.jpg`;
            newImg.alt = "Menu item";
            pricePara.textContent =
                "I guess we'll give these out for... free.99!";
        }

        tabContentDiv.appendChild(menuDescription);
        tabContentDiv.appendChild(newImg);
        tabContentDiv.appendChild(pricePara);
    }
}
