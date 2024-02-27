import { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const generateRandomImageUrl = () => {
      return `https://source.unsplash.com/random/400x300?sig=${Math.floor(Math.random() * 1000)}`;
    };

    const generateRandomImages = () => {
      const newImages = [];
      for (let i = 0; i < 3; i++) {
        const imageUrl = generateRandomImageUrl();
        newImages.push({ id: i, thumbnail: imageUrl, fullSize: imageUrl });
      }
      return newImages;
    };

    setImages(generateRandomImages());
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    console.log('Selected image:', image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.id} className="image-item" onClick={() => openModal(image)}>
          <img src={image.thumbnail} alt={`Thumbnail ${image.id}`} />
        </div>
      ))}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage.fullSize} alt={`Full-size ${selectedImage.id}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
