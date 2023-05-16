import { getReviews } from '../../services/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadReviews = async id => {
      try {
        setIsLoading(true);
        const comments = await getReviews(id);
        setReviews(comments);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadReviews(movieId);
  }, [movieId]);

  const isShowNoRecords = reviews.length === 0 && !isLoading;
  const isShowReviews = reviews.length > 0 && !isLoading;

  return (
    <>
      {isLoading && <Loader />}
      {isShowReviews && (
        <ul className={css.list}>
          {reviews.map(({ id, content, author }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {isShowNoRecords && <p>We don't have any reviews for this movie</p>}
    </>
  );
};

export default Reviews;
