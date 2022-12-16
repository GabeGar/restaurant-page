import launchHomePage, { storyTab } from "./modules/homepage";
import menu from "./modules/menu";
import contact from "./modules/contact";

launchHomePage();

const tabs = document.querySelectorAll("li");

function changeTab(e) {
    const currentTab = document.querySelector(".tab_content");
    changeTab.textContent = "";

    if (e.target.textContent === "Menu") {
        menu();
    }

    if (e.target.textContent === "Story") {
        storyTab();
    }

    if (e.target.textContent === "Contact") {
        contact();
    }

    if (e.target.textContent === "Order Online") {
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }

    // Add Gallery, Contact and Order Online Functionality
}

tabs.forEach((tab) => tab.addEventListener("click", changeTab));
