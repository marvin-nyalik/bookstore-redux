import { useSelector } from 'react-redux';
import BookInfo from './BookInfo';
import AddBook from './addBook';

const Books = () => {
  const reduxBooks = useSelector((state) => state.books);

  // const [allBooks, setBooks] = useState([
  //   {
  //     category: 'Action',
  //     title: 'Authentic Vibes',
  //     author: 'Marvin Vegas',
  //     chapter: 18,
  //     progress: 65,
  //   },
  //   {
  //     category: 'Sci-Fi',
  //     title: 'Potatoes and Yam',
  //     author: 'Skelina Vante',
  //     chapter: 7,
  //     progress: 50,
  //   },
  //   {
  //     category: 'Economy',
  //     title: 'Rich Dad, Poor Dad',
  //     author: 'Robert Nashikima',
  //     chapter: 13,
  //     progress: 72,
  //   },
  //   {
  //     category: 'Computing',
  //     title: 'Code With Linters',
  //     author: 'Arnold Nekemiah',
  //     chapter: 22,
  //     progress: 40,
  //   },
  // ]);

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
