import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/Api';
import { toast } from 'react-toastify';
import css from './Cast.module.css';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadCast = async id => {
      try {
        setIsLoading(true);
        const castList = await getCast(id);
        setCast(castList);
      } catch (error) {
        toast.error(' Sorry, there is no cast');
      } finally {
        setIsLoading(false);
      }
    };
    loadCast(movieId);
  }, [movieId]);

  const isShowCast = cast.length > 0 && !isLoading;

  return (
    <>
      {isLoading && <Loader />}
      {isShowCast && (
        <ul className={css.list}>
          {cast &&
            cast.map(({ id, character, profile, name }) => (
              <li key={id} className={css.item}>
                <img src={profile} alt={name} width="140" height="175" />
                <div className={css.description}>
                  <h3>{name}</h3>
                  <p>Character: {character}</p>
                </div>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
