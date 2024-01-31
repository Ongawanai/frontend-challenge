import cn from 'classnames';
import { useState } from 'react';
import hoveredHeart from '../icons/hoveredHeart.svg';
import clickedHeart from '../icons/clickedHeart.svg';
import heartHollow from '../icons/heartHollow.svg';

const HeartButton = ({ imgSrc }) => {
  const favorites = JSON.parse(localStorage.getItem('favCats'));
  const isFav = favorites === null ? false : favorites.includes(imgSrc);
  const [fav, setFav] = useState(isFav);
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const workWithFav = () => {
    const currFavs = localStorage.getItem('favCats');
    if (!currFavs || currFavs === '[]') {
      const arr = [];
      arr.push(imgSrc);
      localStorage.setItem('favCats', JSON.stringify(arr));
      setFav(true);
      return;
    }

    const parsedFavs = JSON.parse(currFavs);
    if (parsedFavs.includes(imgSrc)) {
      const index = parsedFavs.indexOf(imgSrc);
      parsedFavs.splice(index, 1);
      localStorage.setItem('favCats', JSON.stringify(parsedFavs));
      setFav(false);
      return;
    }
    parsedFavs.push(imgSrc);
    localStorage.setItem('favCats', JSON.stringify(parsedFavs));
    setFav(true);
  };

  const btnClass = cn({
    'btn-fav': true,
    'fav-clicked': fav,
  });

  const chooseHeart = () => {
    if (fav) {
      return <img src={clickedHeart} alt="Liked" />;
    }
    return <img src={hover ? hoveredHeart : heartHollow} alt={hover ? 'Like' : 'Dislike'} />;
  };

  return (
    <button className={btnClass} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={() => workWithFav()}>
      {chooseHeart()}
    </button>
  );
};

export default HeartButton;
