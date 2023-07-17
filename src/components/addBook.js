import add from './addBook.module.css';

const AddBook = () => (

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

export default AddBook;
