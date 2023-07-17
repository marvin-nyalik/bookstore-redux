import add from './addBook.module.css';

const AddBook = () => (
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');

  //   const handleTitleChange = (event) => {
  //     setTitle(event.target.value);
  //   };
  //   const handleAuthorChange = (event) => {
  //     setAuthor(event.target.value);
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if (title !== '' && author !== '') {
  //   const book = {
  //     category: 'Computing',
  //     title,
  //     author,
  //   };

  //   setBooks((previousState) => [...previousState, book]);
  //       setAuthor('');
  //       setTitle('');
  //     }
  //   };
  <div className={add.cover}>
    <h3 className={add.heading}>ADD NEW BOOK</h3>
    <form className={add.form}>
      <input
        type="text"
        placeholder="Book Title"
        className={add.input}
        value="title"
      />
      <input
        type="text"
        placeholder="Author"
        className={add.input}
        value="author"
      />
      <button type="submit" className={add.submit}>ADD BOOK</button>
    </form>
  </div>
);
// AddBook.propTypes = {
//   setBooks: PropTypes.func.isRequired,
// };

export default AddBook;
