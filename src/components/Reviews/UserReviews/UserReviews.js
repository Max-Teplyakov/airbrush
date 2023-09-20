import reviewsImg from "../../../images/aero-3.jpg";

function UserReviews() {
  return (
    <section className="user-reviews">
      <img className="review__img" src={reviewsImg} alt="" />
      <div className="review__block">
        <p className="review__text">
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet, consectetur adiplorem ipsum dolor sit amet, consectetur
          adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit
          amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip
        </p>
        <p className="review__name"></p>
      </div>
    </section>
  );
}

export default UserReviews;
