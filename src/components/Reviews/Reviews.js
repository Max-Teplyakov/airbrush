import reviewsImg from "../../images/reviews.jpg";
import UserReviews from "./UserReviews/UserReviews";

function Reviews() {
  return (
    <section className="review">
      <h2 className="review__title">Отзывы о Аэрографии</h2>
      <div className="review__container">
        <div className="review__block">
          <p className="review__subtitle">
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur adiplorem ipsum dolor sit amet, consectetur
            adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor
            sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur
            adip
          </p>
          <btn className="review__btn">Написать отзыв</btn>
        </div>
        <img className="review__img" src={reviewsImg} alt="" />
      </div>
      <UserReviews />
    </section>
  );
}

export default Reviews;
