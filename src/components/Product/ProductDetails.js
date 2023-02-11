import "./ProductDetails.css";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleProduct,
  getProductsError,
  getProductsStatus,
  getSingleProduct,
} from "../../store/productSlice";
import { useEffect } from "react";
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const url = useParams();
  const productId = url.id;
  const product = useSelector((state) => getSingleProduct(state, productId));
  const status = useSelector(getProductsStatus);
  const error = useSelector(getProductsError);

  // useEffect(() => {
  //   if (error) {
  //     return error;
  //   }

  //   if (status === "idle") {
  //     dispatch(fetchSingleProduct(productId));
  //   }
  // }, [error, status, dispatch, productId]);

  console.log(product.images[0].url);

  if (!product) {
    return (
      <section>
        <h2>Product not Found!</h2>
      </section>
    );
  }

  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1}",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.rating,
    isHalf: true,
  };

  return (
    <>
      <div className="ProductDetails">
        <Carousel>
          {product.images &&
            product.images.map((item, i) => {
              return (
                <img
                  className="CarouselImage"
                  key={i}
                  src={item.url}
                  alt={`${i} slide`}
                ></img>
              );
            })}
        </Carousel>
      </div>
      <div>
        <div className="detailsBlock-1">
          <h2>{product.name}</h2>
        </div>
        <div className="detailsBlock-2">
          <ReactStars {...options} />
          <span>{product.numOfReviews} Reviews</span>
        </div>
        <div className="detailsBlock-3">
          <h1>{`₹${product.price}`}</h1>
          <div className="detailsBlock-3-1">
            <div className="detailsBlock-3-1-1">
              <button>-</button>
              <input value="1" type="number" />
              <button>+</button>
            </div>
            <button>Add to Cart</button>
          </div>
          <p>
            Status:
            <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
              {product.Stock < 1 ? "Out of Stock" : "InStock"}
            </b>
          </p>
        </div>
        <div className="detailsBlock-4">
          Description : <p>{product.description}</p>
        </div>
        <button className="submitReview">Submit Review</button>
      </div>
    </>
  );
};

export default ProductDetails;
