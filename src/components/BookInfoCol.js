import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import infoCss from './info.module.css';
import { removeBook } from '../redux/books/booksSlice';

const BookInfo = ({ bookId }) => {
  const book = useSelector((state) => state.books.find((book) => book.item_id === bookId));
  const dispatch = useDispatch();
  const deleteBook = (id) => {
    dispatch(removeBook({ item_id: id }));
  };

  return (
    <>
      <p className={infoCss.category}>{book.category}</p>
      <h3 className={infoCss.title}>{book.title}</h3>
      <p className={infoCss.author}>{book.author}</p>
      <p className={infoCss.footer}>
        Comments
        <span>|</span>
        {' '}
        <button type="button" className={infoCss.delete} onClick={() => deleteBook(bookId)}>Delete</button>
        <span>|</span>
        {' '}
        Edit
      </p>
    </>
  );
};

BookInfo.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default BookInfo;
