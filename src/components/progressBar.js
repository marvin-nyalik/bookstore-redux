import { CircularProgressbar } from 'react-circular-progressbar';
import css from './info.module.css';
import 'react-circular-progressbar/dist/styles.css';

const progress = () => {
  const value = 65;
  return (
    <div className={css.progressContainer}>
      <CircularProgressbar value={value} className={css.circle} />
      <div className={css.p}>
        65%
        <div className={css.lead}>Complete </div>
      </div>
    </div>
  );
};

export default progress;
