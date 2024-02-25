document.addEventListener('DOMContentLoaded', function() {
    const artworksContainer = document.querySelector('.artworks');

    // Dummy artwork data (replace with actual data from backend)
    const artworks = [
        { title: 'Artwork 1', imageUrl: 'img.jpg' },
        { title: 'Artwork 2', imageUrl: 'img4.jpg' },
        { title: 'Artwork 3', imageUrl: 'img3.jpg' },
        { title: 'Artwork 4', imageUrl: 'img1.jpg' },
        { title: 'Artwork 5', imageUrl: 'img5.jpg' },
        { title: 'Artwork 6', imageUrl: 'img2.jpg' },
    ];

    // Function to generate artwork cards
    function generateArtworkCards() {
        artworks.forEach(artwork => {
            const artworkCard = document.createElement('div');
            artworkCard.classList.add('artwork');

            const img = document.createElement('img');
            img.src = artwork.imageUrl;
            img.alt = artwork.title;

            artworkCard.appendChild(img);
            artworksContainer.appendChild(artworkCard);
        });
    }

    // Generate artwork cards on page load
    generateArtworkCards();
});
