import infoCss from './info.module.css';

const chapterInfo = ({ book }) => (
  <>
    <p className={infoCss.chapterTitle}>CURRENT CHAPTER</p>
    <p className={infoCss.chapterNo}>
      Chapter
      {' '}
      {book.chapter}
    </p>
    <button type="button" className={infoCss.update}>UPDATE CHAPTER</button>
  </>
);

export default chapterInfo;
