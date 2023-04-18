import "./BookCard.css";
export default function BookCard(props) {
  const description = props.description;
  const title=props.title;

  return (
    <>
      <div className="card">
        <div className="pic"></div>
        <div className="content">
          <h3>{title.length>15?`${description.substring(0,20 )}...`
              : title}</h3>
          <p>
            {description.length > 46
              ? `${description.substring(0, 40)}...`
              : description}
          </p>
          <div className="div-btn">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
