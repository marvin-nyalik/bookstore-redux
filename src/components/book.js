import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
import BookInfo from './BookInfo';
import AddBook from './addBook';

const Books = () => {
  const { loading, data, error } = useSelector((state) => state.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return (<>Loading</>);
  }
  if (error) {
    return (<>Error</>);
  }
  return (
    <>
      <ul>
        {Object.entries(data).map(([itemId, books]) => (
          <div key={itemId}>
            {books.map((book) => (
              <BookInfo key={book.title} bookId={itemId} />
            ))}
          </div>
        ))}
      </ul>

      <AddBook />
    </>
  );
};

export default Books;
