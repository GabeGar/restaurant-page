import launchHomePage, { storyTab } from "./modules/homepage";
import menu from "./modules/menu";
import contact from "./modules/contact";
import gallery from "./modules/gallery";

launchHomePage();

const tabs = document.querySelectorAll("li");

function changeTab(e) {
    const currentTab = document.querySelector(".tab_content");
    currentTab.classList.remove("gallery");
    currentTab.textContent = "";

    if (e.target.textContent === "Menu") {
        menu();
    }

    if (e.target.textContent === "Story") {
        storyTab();
    }

    if (e.target.textContent === "Contact") {
        contact();
    }

    if (e.target.textContent === "Gallery") {
        currentTab.classList.remove("display_content");
        currentTab.classList.add("gallery");
        gallery();
    }

    if (e.target.textContent === "Order Online") {
        location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}

tabs.forEach((tab) => tab.addEventListener("click", changeTab));
