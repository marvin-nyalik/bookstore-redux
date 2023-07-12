import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const progress = ({ book }) => {
  const value = book.progress;
  return (
    <>
      <CircularProgressbar value={value} text={`${value}%`} />
    </>
  );
};

export default progress;
