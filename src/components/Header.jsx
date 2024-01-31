import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { updatePage } from '../slices/pageSlice';

const Header = () => {
  const dispatch = useDispatch();
  const currPage = useSelector((state) => state.pages.currPage);
  const allCatsClass = () =>
    cn('btn', {
      'btn-pressed': currPage === 'allCats',
    });

  const favCatsClass = () =>
    cn('btn', {
      'btn-pressed': currPage === 'favCats',
    });

  const changePage = (newPage) => {
    if (newPage === currPage) {
      return;
    }
    return dispatch(updatePage(newPage));
  };

  return (
    <header className="container header">
      <div className="header-container">
        <button className={allCatsClass()} onClick={() => changePage('allCats')}>
          Все котики
        </button>
        <button className={favCatsClass()} onClick={() => changePage('favCats')}>
          Любимые котики
        </button>
      </div>
    </header>
  );
};

export default Header;
