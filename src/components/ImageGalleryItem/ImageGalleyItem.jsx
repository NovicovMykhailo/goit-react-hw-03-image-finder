import css from './ImageGalleyItem.module.css'
const ImageGalleyItem = () => {
  return (
    <li classNmae={css.ImageGalleryItem}>
      <img src={this.props.scr} alt={this.props.alt} />
    </li>
  );
};
export default ImageGalleyItem;
