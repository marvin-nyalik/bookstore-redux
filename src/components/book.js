import { useSelector } from 'react-redux';
import BookInfo from './BookInfo';
import AddBook from './addBook';

const Books = () => {
  const reduxBooks = useSelector((state) => state.books);

  return (
    <>
      <ul>
        {reduxBooks.map((book) => (
          <div key={book.item_id}>
            {' '}
            <BookInfo key={book.item_id} bookId={book.item_id} />
            {' '}
          </div>
        ))}
      </ul>
      <AddBook />
    </>
  );
};

export default Books;
