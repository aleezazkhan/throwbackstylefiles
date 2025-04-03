function randomizeImage(imageElement) {
    // Define the available outfit images
    const outfitImages = [
        "img/Outfit-Stickers_0000.png",
        "img/Outfit-Stickers_0001.png",
        "img/Outfit-Stickers_0002.png",
        "img/Outfit-Stickers_0003.png",
        "img/Outfit-Stickers_0004.png",
        "img/Outfit-Stickers_0005.png",
        "img/Outfit-Stickers_0006.png",
        "img/Outfit-Stickers_0007.png",
    ];

    // Generate a random index
    let randomIndex = Math.floor(Math.random() * outfitImages.length);

    // Set new image source
    imageElement.src = outfitImages[randomIndex];
}
