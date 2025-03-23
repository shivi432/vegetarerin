function toggleDescription(imgElement) {
    const beschreibung = imgElement.nextElementSibling;
    beschreibung.classList.toggle('visible');

    // Optionale Animation
    imgElement.classList.add('animate');
    setTimeout(() => {
        imgElement.classList.remove('animate');
    }, 400);
}
