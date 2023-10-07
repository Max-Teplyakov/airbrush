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
          <div className="review__text">
            <p className="review__subtitle">
              Уважаемые клиенты, нам очень важно знать ваше мнение об аэрографии
              автомобилей, мотоциклов и других объектов. Мы собрали для вас
              самые искренние отзывы от людей, которые уже воспользовались
              нашими услугами по аэрографии. Они честно рассказывают о своем
              опыте и впечатлениях от росписи автомобилей, мотоциклов, шлемов.
              Эти откровенные отзывы помогут составить представление о качестве
              нашей аэрографии и принять решение о сотрудничестве.
            </p>
            <p className="review__subtitle">
              Отзывы также позволяют анализировать уровень обслуживания и
              улучшать качество услуг аэрографии. После получения наших услуг
              обязательно поделитесь оценкой. Ваше мнение очень ценно и поможет
              нам становиться лучше!
            </p>
          </div>
          <button className="review__btn" onClick={onOpen}>
            Написать отзыв
          </button>
        </div>
        <img
          className="review__img"
          src={reviewsImg}
          alt="красная машина на фоне разрисованных стен"
        />
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
