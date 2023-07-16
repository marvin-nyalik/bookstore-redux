import infoCss from './info.module.css';

const bookInfo = ({ book, setBooks }) => {
  const handleClick = (book) => {
    setBooks((previousState) => {
      const newBooks = previousState.filter((mybook) => mybook.title !== book.title);
      return newBooks;
    });
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
        <button type="button" onClick={() => handleClick(book)} className={infoCss.delete}>Delete</button>
        <span>|</span>
        {' '}
        Edit
      </p>
    </>
  );
};

export default bookInfo;
