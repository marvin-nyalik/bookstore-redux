import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const progress = () => {
  const value = 65;
  return (
    <>
      <CircularProgressbar value={value} text={`${value}%`} />
    </>
  );
};

export default progress;
