export default function contact() {
    const tabContentDiv = document.querySelector(".tab_content");
    tabContentDiv.classList.add("display_content");

    const contactHeader = document.createElement("p");
    contactHeader.textContent = "Contact Information";

    tabContentDiv.appendChild(contactHeader);

    const listInfo = document.createElement("ul");

    for (let i = 0; i < 4; i++) {
        const li = document.createElement("li");
        li.style.listStyle = "none";

        if (i === 0) {
            li.textContent = "Owner: Augustus Caesar The XV";
        }
        if (i === 1) {
            li.textContent = "Phone: 7-777-7777-77777";
        }

        if (i === 2) {
            li.textContent = "Email: fakeEmail@fakeEmails.com";
        }

        if (i === 3) {
            li.textContent = "Location: Rome, Italy";
        }
        listInfo.appendChild(li);
    }

    tabContentDiv.appendChild(listInfo);

    const contactFooter = document.createElement("p");
    contactFooter.textContent =
        "We're open 24/7, 365 days a year! Every minute of everyday, making pizzas (and burgers, apparently) for you to enjoy; Come on down.";

    tabContentDiv.appendChild(contactFooter);
}
