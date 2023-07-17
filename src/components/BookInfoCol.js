import { useSelector } from 'react-redux/es/hooks/useSelector';
import PropTypes from 'prop-types';
import infoCss from './info.module.css';

const BookInfo = ({ bookId }) => {
  const book = useSelector((state) => state.books.find((book) => book.item_id === bookId));

  // const handleClick = (book) => {
  //   setBooks((previousState) => {
  //     const newBooks = previousState.filter((mybook) => mybook.title !== book.title);
  //     return newBooks;
  //   });
  // };

  return (
    <>
      <p className={infoCss.category}>{book.category}</p>
      <h3 className={infoCss.title}>{book.title}</h3>
      <p className={infoCss.author}>{book.author}</p>
      <p className={infoCss.footer}>
        Comments
        <span>|</span>
        {' '}
        <button type="button" className={infoCss.delete}>Delete</button>
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
