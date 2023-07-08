import PropTypes from 'prop-types';
import { GalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ items, getItemClick }) => {
  return (
    <List>
      {items.map(item => (
        <GalleryItem key={item.id} item={item} getItemClick={getItemClick} />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  getItemClick: PropTypes.func.isRequired,
};
