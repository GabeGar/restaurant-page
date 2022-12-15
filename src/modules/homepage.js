// content div
const mainContentDiv = document.querySelector("#content");

export default function launchHomePage() {
    createNavigation();
    storyTab();
}

function createNavigation() {
    const divList = [];

    const nav = document.createElement("nav");
    nav.classList.add("page_nav");

    const ul = document.createElement("ul");
    ul.classList.add("parent_nav");

    for (let i = 0; i < 3; i++) {
        const div = document.createElement("div");

        if (i === 0) {
            div.classList.add("left_link");
            div.textContent = "Pizzeria";
            divList.push(div);
        }

        if (i === 1) {
            div.classList.add("center_links");
            // Creates Li's for center div
            for (let i = 0; i < 4; i++) {
                const li = document.createElement("li");
                if (i === 0) {
                    const a = document.createElement("a");
                    a.textContent = "Story";
                    li.appendChild(a);
                }
                if (i === 1) {
                    const a = document.createElement("a");
                    a.textContent = "Menu";
                    li.appendChild(a);
                }
                if (i === 2) {
                    const a = document.createElement("a");
                    a.textContent = "Gallery";
                    li.appendChild(a);
                }
                if (i === 3) {
                    const a = document.createElement("a");
                    a.textContent = "Contact";
                    li.appendChild(a);
                }
                div.appendChild(li);
            }
            divList.push(div);
        }

        if (i === 2) {
            div.classList.add("right_link");
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = "Order Online";
            li.appendChild(a);
            div.appendChild(li);
            divList.push(div);
        }
    }

    for (let div of divList) {
        ul.appendChild(div);
    }

    nav.appendChild(ul);
    mainContentDiv.appendChild(nav);
}

export function storyTab() {
    const tabContent = document.createElement("div");
    tabContent.classList.add("tab_content");
    tabContent.textContent =
        "Here at Pizzeria, we strive to make only the FRESHEST PIZZAS, known to all of rome. We are a family run business, in operation since 1885! The Pizza here is SO good, in fact, Julius Caesar (from down the street) even gave us a thumbs up! Can you believe it?!";

    mainContentDiv.appendChild(tabContent);
}
