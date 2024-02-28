import { useState, useEffect } from 'react';
import { styled } from '@mui/system';

const ImageGalleryWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
});

const ImageItem = styled('div')({
  cursor: 'pointer',
  margin: '0.625rem',
});

const Image = styled('img')({
  width: '9.375rem',
  height: 'auto',
});

const ModalImage = styled('img')({
  width: 'auto',
  height: 'auto',
  maxWidth: '90%',
  maxHeight: '90%',
});

const Modal = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ModalContent = styled('div')({
  backgroundColor: 'white',
  padding: '1.25rem',
});

const CloseButton = styled('span')({
  cursor: 'pointer',
  float: 'right',
  fontSize: '1.25rem',
});

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
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const imageItems = images.map((image) => (
    <ImageItem key={image.id} onClick={() => openModal(image)}>
      <Image src={image.thumbnail} alt={`Thumbnail ${image.id}`} />
    </ImageItem>
  ));

  const modal = selectedImage ? (
    <Modal onClick={closeModal}>
      <ModalContent>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <ModalImage src={selectedImage.fullSize} alt={`Full-size ${selectedImage.id}`} />
      </ModalContent>
    </Modal>
  ) : null;

  return (
    <ImageGalleryWrapper>
      {imageItems}
      {modal}
    </ImageGalleryWrapper>
  );
};

export default ImageGallery;