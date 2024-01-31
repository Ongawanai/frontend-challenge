import { useSelector } from 'react-redux';
import AllCats from './components/AllCats';
import FavCats from './components/FavCats';
import Header from './components/Header';
import './index.css';

const ShowSection = () => {
  const currPage = useSelector((state) => state.pages.currPage);
  return currPage === 'allCats' ? <AllCats /> : <FavCats />;
};

const App = () => {
  return (
    <>
      <Header />
      <ShowSection />
    </>
  );
};

export default App;
