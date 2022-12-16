export default function gallery() {
    const tabContentDiv = document.querySelector(".tab_content");
    const directoryGallery = "images/gallery/image";

    for (let i = 1; i <= 5; i++) {
        const galleryImg = document.createElement("img");

        if (i === 0) {
            galleryImg.src = `${directoryGallery}${i}.jpg`;
            galleryImg.alt = "Gallery item";
            galleryImg.classList.add("gallery_img");
        }

        if (i === 1) {
            galleryImg.src = `${directoryGallery}${i}.jpg`;
            galleryImg.alt = "Gallery item";
            galleryImg.classList.add("gallery_img");
        }

        if (i === 2) {
            galleryImg.src = `${directoryGallery}${i}.jpg`;
            galleryImg.alt = "Gallery item";
            galleryImg.classList.add("gallery_img");
        }

        if (i === 3) {
            galleryImg.src = `${directoryGallery}${i}.jpg`;
            galleryImg.alt = "Gallery item";
            galleryImg.classList.add("gallery_img");
        }

        if (i === 4) {
            galleryImg.src = `${directoryGallery}${i}.jpg`;
            galleryImg.alt = "Gallery item";
            galleryImg.classList.add("gallery_img");
        }

        tabContentDiv.appendChild(galleryImg);
    }
}
