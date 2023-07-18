import { useState } from 'react';
import { useDispatch } from 'react-redux';
import add from './addBook.module.css';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    const title = event.target.value;
    setTitle(title);
  };

  const handleAuthorChange = (event) => {
    const author = event.target.value;
    setAuthor(author);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const category = 'Code';
    await dispatch(addBook({
      title, author, category, itemId: `Item${Math.floor(Math.random() * 1000)}`,
    }));
    setAuthor('');
    setTitle('');
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
          onChange={handleAuthorChange}
          value={author}
        />
        <button type="submit" className={add.submit}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
