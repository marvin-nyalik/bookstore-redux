import { useSelector } from 'react-redux';

const Categories = () => {
  const cat = useSelector((state) => state.categories.categories);
  const constr = cat.length !== 0 ? cat : 'Under construction';
  return (
    <div>
      <p>
        {constr}
      </p>
    </div>
  );
};

export default Categories;
