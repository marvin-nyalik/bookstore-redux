import PropTypes from 'prop-types';
import add from './addBook.module.css';

const AddBook = ({ addNewBook }) => (
  <div className={add.cover}>
    <h3 className={add.heading}>ADD NEW BOOK</h3>
    <form className={add.form}>
      <input type="text" placeholder="Book Title" className={add.input} />
      <input type="text" placeholder="Author" className={add.input} />
      <button type="submit" className={add.submit} onClick={addNewBook}>ADD BOOK</button>
    </form>
  </div>
);

AddBook.propTypes = {
  addNewBook: PropTypes.func.isRequired,
};

export default AddBook;
