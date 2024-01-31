import { useEffect, useState } from 'react';
import HeartButton from './HeartButton';

const FavCats = () => {
  const images = JSON.parse(localStorage.getItem('favCats')).toReversed();

  const [currPageImg, setCurrPageImg] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const maxPagesCount = Math.ceil((images.length + 1) / 15);

  useEffect(() => {
    if (loading && currPage < maxPagesCount) {
      const lastIndex = currPage * 15 + 15;
      const currImages = images.slice(0, lastIndex);
      setCurrPageImg(currImages);
      setCurrPage(currPage + 1);
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    const deleteListener = () => {
      document.removeEventListener('scroll', scrollHandler);
    };
    return deleteListener;
  }, []);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setLoading(true);
    }
  };

  return (
    <>
      <div className="cats">
        {currPageImg.map((img, index) => (
          <div className="cat-container" key={index}>
            <img className="img" src={img} />
            <HeartButton imgSrc={img} />
          </div>
        ))}
      </div>
      {window.innerHeight === document.documentElement.scrollHeight && (
        <div className="load-more">
          <button className="load-btn" onClick={() => setLoading(true)}>
            Загрузить ещё котиков!
          </button>
        </div>
      )}
    </>
  );
};

export default FavCats;
