import { Component } from 'react';
import { Overlay, Modal } from './Modal.styled';
import PropTypes from 'prop-types';

export class ModalOverlay extends Component {
  // Вішаємо слухач на window по натисканню клавіші при монтуванні
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // Видаляємо слухача з window при розмонтуванні
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // Закриваємо модалку по клавіші Esc
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  // Закриваємо модалку по кліку
  handleClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleClick}>
        <Modal>
          <img src={this.props.largeImageURL} alt="" />
        </Modal>
      </Overlay>
    );
  }
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};