import { Link } from "react-router-dom";

function Item({ product, id, key }) {
  return (
    <div
      className="itemCard card col-12 col-md-5 col-lg-3"
      key={"ItemKey" + key}
      id={"Item" + id}
    >
      <div className="cntnr">
        <img src={product.thumbnail} className="card-img-top image" alt="..." />
        <div className="middle">
          <Link to={"/producto/" + product.id}>
            <button className="btn btn-primary text">Ver detalle</button>
          </Link>
        </div>
      </div>
      <div>
        <h4 className="card-title">{product.title}</h4>
      </div>
    </div>
  );
}

export default Item;
