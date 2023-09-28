export const ImageGalleryItem = ({ src, alt, id }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={src} alt={alt} key={id} />
    </li>
  );
};
