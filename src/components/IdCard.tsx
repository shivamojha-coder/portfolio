import "./styles/IdCard.css";

const IdCard = () => {
  return (
    <div className="idcard-wrapper">
      <div className="idcard-strap" />
      <div className="idcard-clip" />
      <div className="idcard">
        <div className="idcard-photo">
          {/* Using GitHub avatar as photo */}
          <img src="/images/shivam-photo.png" alt="Shivam Ojha" />
        </div>
      </div>
    </div>
  );
};

export default IdCard;
