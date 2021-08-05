import "./Card.scss";
const Card = (props: any) => {
  return <div className="card-container">{props.children}</div>;
};

export default Card;
