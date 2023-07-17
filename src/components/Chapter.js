import infoCss from './info.module.css';

const chapterInfo = () => (
  <>
    <p className={infoCss.chapterTitle}>CURRENT CHAPTER</p>
    <p className={infoCss.chapterNo}>
      Chapter
      {' '}
      12
    </p>
    <button type="button" className={infoCss.update}>UPDATE CHAPTER</button>
  </>
);

export default chapterInfo;
