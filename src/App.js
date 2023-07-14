import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/book';
import Categories from './components/categories';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <Layout>
              {' '}
              <Books />
              {' '}
            </Layout>
)}
        />
        <Route
          exact
          path="/categories"
          element={(
            <Layout>
              {' '}
              <Categories />
              {' '}
            </Layout>
)}
        />
      </Routes>
    </Router>
  );
}

export default App;
