import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Rating(props) {
  const { value, text } = props;
  const ratings = [];

  for (let i = 1; i <= 5; i++) {
    {
      value >= i
        ? ratings.push(<FaStar />)
        : value >= 1 - 0.5
        ? ratings.push(<FaStarHalfAlt />)
        : ratings.push(<FaRegStar />);
    }
  }
  return (
    <div className="rating">
      <span>{ratings}</span>
      <span className="rating-text">{text && text}</span>
    </div>
  );
}

export default Rating;
