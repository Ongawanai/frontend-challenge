import { useEffect, useState } from 'react';
import axios from 'axios';
import HeartButton from './HeartButton';

const AllCats = () => {
  const key = process.env.REACT_APP_CAT_API_KEY;
  const url = `https://api.thecatapi.com/v1/images/search?limit=15`;
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      axios
        .get(url, {
          params: {
            api_key: key,
          },
        })
        .then((response) => {
          setCats([...cats, ...response.data]);
        })
        .finally(() => setLoading(false));
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
        {cats.map((cat) => (
          <div className="cat-container" key={cat.id}>
            <img className="img" src={cat.url} />
            <HeartButton imgSrc={cat.url} />
          </div>
        ))}
        {window.innerHeight === document.documentElement.scrollHeight && (
          <div className="load-more">
            <button className="load-btn" onClick={() => setLoading(true)}>
              Загрузить ещё котиков!
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AllCats;
