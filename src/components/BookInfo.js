import infoCss from './info.module.css';
import BookInfoCol from './BookInfoCol';
import ChapterInfo from './Chapter';
import Progress from './progressBar';

const bookInfo = ({ book, setBooks }) => (
  <div className={infoCss.cover}>
    <div className={infoCss.cont}>
      <BookInfoCol book={book} setBooks={setBooks} />
    </div>
    <div className={infoCss.progress}>
      <Progress book={book} />
    </div>
    <div className={infoCss.chapter}>
      <ChapterInfo book={book} />
    </div>
  </div>
);

export default bookInfo;
