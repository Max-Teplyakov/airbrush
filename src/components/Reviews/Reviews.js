import reviewsImg from "../../images/reviews.jpg";
import UserReviews from "./UserReviews/UserReviews";
import Popup from "./Popup/Popup";
import { useState } from "react";

function Reviews() {
  const [isOpenPopupReviews, setIsOpenPopupReviews] = useState(false);

  const onOpen = () => {
    setIsOpenPopupReviews(true);
  };

  const onClose = () => {
    setIsOpenPopupReviews(false);
  };

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
            adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
            sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur
            adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor
            sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur
            adip
          </p>
          <button className="review__btn" onClick={onOpen}>
            Написать отзыв
          </button>
        </div>
        <img className="review__img" src={reviewsImg} alt="" />
      </div>
      <UserReviews />
      <Popup
        isOpenPopupReviews={isOpenPopupReviews}
        onClose={onClose}
        setIsOpenPopupReviews={setIsOpenPopupReviews}
      />
    </section>
  );
}

export default Reviews;
