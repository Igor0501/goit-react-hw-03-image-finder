import { Button } from './Button.styled';
// import PropTypes from 'prop-types';

// export const LoadMore = ({ onLoadMore }) => {
//   return (
//     <Button type="button" onClick={onLoadMore()}>
//       Load More
//     </Button>
//   );
// };
// LoadMore.propTypes = {
//   onLoadMore: PropTypes.func.isRequired,
// };

import PropTypes from 'prop-types';

export const LoadMore = ({ onLoadMore }) => {
  const handleClick = () => {
    onLoadMore(); // Викликати функцію `onLoadMore` при кліку
  };

  return (
    <Button type="button" onClick={handleClick}>
      Load More
    </Button>
  );
};

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default LoadMore;
