import "./OrderCard.css";
export default function OrderCard(props) {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // months are zero-indexed
  const year = today.getFullYear().toString();

  const presentDate = `${day} ${month} ${year}`;

  return (
    <>
      <div className="Ordercard">
        <div className="orderNav">
          <span>Order Placed {presentDate}</span>
          <span>status:Delivered</span>
        </div>
        <div className="orderContent">
          <div className="orderpic"></div>
          <div className="ordercontent">
            <h2>{props.title}</h2>
            <p>{props.author}</p>
            <p>{props.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
