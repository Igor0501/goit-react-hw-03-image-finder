import { Component } from 'react';
import { SearchBar } from './Gallery/Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { ImageGallery } from './Gallery/ImageGallery/ImageGallery';
import fetchImages from './Gallery/API/api';
import { LoadMore } from './Gallery/Button/Button';
import { Container } from 'components/App.styled';
import { ModalOverlay } from './Gallery/Modal/Modal';
import { Loader } from './Gallery/Loader/Loader';
import scrollOnLoad from '../utils/scrollLoadBtn';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    largeImage: '',
    error: null,
    isModalOpen: false,
    isLoading: false,
  };

  // If searchQuery or page is updated, fetch new images
  componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.getDataImages();
    }
  }

  // Handle search query submission
  handleSubmitSearchQuery = searchQuery => {
    if (searchQuery !== this.state.searchQuery) {
      this.setState({ images: [], searchQuery, page: 1 });
    }
  };

  // Fetch images from the API and update the state
  getDataImages = async () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const response = await fetchImages(searchQuery, page);

      if (response.hits.length === 0) {
        this.setState({ error: 'Oops. Sorry, but there isn`t anything for this request! Try to find something different!' });
        this.setState({ isLoading: false, isLoadMoreEnable: false });
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          isLoadMoreEnable: true,
        }));
      }

      if (page !== 1) {
        scrollOnLoad();
      }
    } catch (error) {
      this.setState({ error: 'Oops something went wrong...' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // Get the large image on click and open the modal
  getLargeImage = largeImage => {
    this.setState({ largeImage, isModalOpen: true });
  };

  // Toggle the modal
  toggleShowModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const {
      images,
      largeImage,
      isModalOpen,
      isLoading,
      error,
      isLoadMoreEnable,
    } = this.state;
    const lengthImages = images.length >= 12;

    return (
      <Container>
        <SearchBar onSubmit={this.handleSubmitSearchQuery} />
        {error}
        <ImageGallery items={images} getItemClick={this.getLargeImage} />
        {isLoading && <Loader />}
        {lengthImages && isLoadMoreEnable && (
          <LoadMore onLoadMore={() => this.setState(prevState => ({ page: prevState.page + 1 }))} />
        )}
        {isModalOpen && (
          <ModalOverlay
            largeImageURL={largeImage}
            onClick={this.toggleShowModal}
          />
        )}
        <GlobalStyle />
      </Container>
    );
  }
}
