import { useState } from 'react';
import PropTypes from 'prop-types';
import add from './addBook.module.css';

const AddBook = ({ setBooks }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title !== '' && author !== '') {
      const book = {
        category: 'Computing',
        title,
        author,
        chapter: Math.floor(Math.random() * 10),
        progress: Math.ceil(Math.random() * 100),
      };

      setBooks((previousState) => [...previousState, book]);
      setAuthor('');
      setTitle('');
    }
  };

  return (
    <div className={add.cover}>
      <h3 className={add.heading}>ADD NEW BOOK</h3>
      <form className={add.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          className={add.input}
          onChange={handleTitleChange}
          value={title}
        />
        <input
          type="text"
          placeholder="Author"
          className={add.input}
          value={author}
          onChange={handleAuthorChange}
        />
        <button type="submit" className={add.submit}>ADD BOOK</button>
      </form>
    </div>
  );
};

AddBook.propTypes = {
  setBooks: PropTypes.func.isRequired,
};

export default AddBook;
