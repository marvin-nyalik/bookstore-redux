import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/booksSlice';
import infoCss from './info.module.css';

const BookInfo = ({ bookId }) => {
  const dispatch = useDispatch();

  const book = useSelector((state) => Object.entries(state.books.data)
    .find((book) => bookId === book[0]));

  const deleteABook = async (bookId) => {
    await dispatch(deleteBook({ bookId }));
  };
  return (
    <>
      <p className={infoCss.category}>{book[1][0].category}</p>
      <h3 className={infoCss.title}>{book[1][0].title}</h3>
      <p className={infoCss.author}>{book[1][0].author}</p>
      <p className={infoCss.footer}>
        Comments
        <span>|</span>
        {' '}
        <button
          type="button"
          className={infoCss.delete}
          onClick={() => deleteABook(book[0])}
        >
          Remove
        </button>
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
