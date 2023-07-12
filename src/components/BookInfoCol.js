import infoCss from './info.module.css';

const bookInfo = ({ book }) => (
  <>
    <p className={infoCss.category}>{book.category}</p>
    <h3 className={infoCss.title}>{book.title}</h3>
    <p className={infoCss.author}>{book.author}</p>
    <p className={infoCss.footer}>
      Comments
      <span>|</span>
      {' '}
      Remove
      <span>|</span>
      {' '}
      Edit
    </p>
  </>
);

export default bookInfo;
