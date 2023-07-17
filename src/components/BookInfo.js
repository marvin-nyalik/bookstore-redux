import infoCss from './info.module.css';
import BookInfoCol from './BookInfoCol';
import ChapterInfo from './Chapter';
import Progress from './progressBar';

const bookInfo = ({ bookId }) => (
  <div className={infoCss.cover}>
    <div className={infoCss.cont}>
      <BookInfoCol bookId={bookId} />
    </div>
    <div className={infoCss.progress}>
      <Progress />
    </div>
    <div className={infoCss.chapter}>
      <ChapterInfo />
    </div>
  </div>
);

export default bookInfo;
