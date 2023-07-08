import { Component } from 'react';
import { Button, Form, Header, Input, Label } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';

export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  // Записуємо в стейт значення інпута
  handleChangeSearchQuery = e => {
    const searchQuery = e.currentTarget.value.toLowerCase();

    this.setState({ searchQuery });
  };

  // Передаємо в App значення searchQuery і очищуємо форму
  handleSubmit = e => {
    e.preventDefault();

    const { searchQuery } = this.state;
    const { onSubmit } = this.props;

    if (searchQuery.trim() === '') {
      return;
    }

    onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <Label>
              <BsSearch />
            </Label>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handleChangeSearchQuery}
          />
        </Form>
      </Header>
    );
  }
}
