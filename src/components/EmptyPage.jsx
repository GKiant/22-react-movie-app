import filmIcon from "../images/film-icon.png";

const EmptyPage = ({ text }) => {
  return (
    <div className="empty-page">
      <img src={filmIcon} alt="" aria-hidden={true} />
      <h3 className="empty-page--text">{text}</h3>
    </div>
  );
};

export default EmptyPage;
