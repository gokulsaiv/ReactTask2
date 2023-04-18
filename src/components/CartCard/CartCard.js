
export default function CartCard(props){
    return(
        <>
        <div className="card">
          <div className="pic"></div>
          <div className="content">
            <h3>{props.title}</h3>
            <p>
              {props.price}
            </p>
            
          </div>
        </div>
      </>
    )
}
   