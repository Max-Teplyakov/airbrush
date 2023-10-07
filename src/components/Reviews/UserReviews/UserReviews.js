import { useLocation } from "react-router-dom";
import reviewsImg1 from "../../../images/reviews/review1.jpeg";
import reviewsImg2 from "../../../images/reviews/review2.jpeg";
import reviewsImg3 from "../../../images/reviews/review3.jpeg";
import reviewsImg4 from "../../../images/reviews/review4.jpeg";

function UserReviews() {
  const loaction = useLocation();
  const titleClass =
    loaction.pathname === "/" ? "" : "user-reviews__title_active";

  return (
    <section className="user-reviews">
      <h2 className={`user-review__title ${titleClass}`}>Отзывы</h2>
      <div className="user-review__section">
        <div className="user-reviews__container">
          <img className="user-review__img" src={reviewsImg1} alt="аэрография на машине" />
          <div className="user-review__block">
            <p className="user-review__text">
              Я давно мечтал сделать свою тачку по-настоящему стильной. Рисунок
              на капоте получился ярким и фирменным. Теперь машина точно
              выделяется на фоне других. Рекомендую этих ребят, настоящие профи!
            </p>
            <p className="user-review__name">Майкл</p>
          </div>
        </div>
        <div className="user-reviews__container">
          <img className="user-review__img" src={reviewsImg2} alt="шлем с аэрографией" />
          <div className="user-review__block">
            <p className="user-review__text">
              Я гонщик-любитель и решил расписать свой шлем, чтобы выделяться на
              трассе. Мне очень понравился результат! Аэрография получилась
              яркой, буду обращаться к этим мастерам ещё.
            </p>
            <p className="user-review__name">Павел Бойко</p>
          </div>
        </div>
        <div className="user-reviews__container">
          <img className="user-review__img" src={reviewsImg3} alt="ноутбук с аэрографией" />
          <div className="user-review__block">
            <p className="user-review__text">
              Заказывала индивидуальный дизайн для своего ноутбука. Мне воплотили
              очень креативную идею! Теперь ноут выглядит как настоящий
              эксклюзив. Порекомендую этих художников друзьям.
            </p>
            <p className="user-review__name">Александра</p>
          </div>
        </div>
        <div className="user-reviews__container">
          <img className="user-review__img" src={reviewsImg4} alt="мотоцикл с аэрографией" />
          <div className="user-review__block">
            <p className="user-review__text">
              Ребята расписали мой байк в стиле кастом, получилось очень круто!
              Теперь с удовольствием катаюсь на такой красотке. Спасибо за то,
              что воплотили все мои пожелания.
            </p>
            <p className="user-review__name">Максим Олегович</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserReviews;
