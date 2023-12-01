
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import styles from "../../styles/Product.module.css";
import { IProduct } from "../../store/types";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/services/userApi";

const SIZES = [48, 50, 52, 54, 56];

const Product: React.FC<{ item: IProduct }> = ({ item }) => {
  const { title, price, images, description } = item;

  const dispatch = useDispatch();
  const addToCart = () => {
    const res = dispatch(addItemToCart(item));
    console.log(res);
  };
  
  const [currentImage, setCurrentImage] = useState<string | undefined>();
  const [currentSize, setCurrentSize] = useState<number | undefined>();

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);


  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={styles["images-list"]}>
          {images.map((image, i) => (
            <div
              key={i}
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.color}>
          <span>Color:</span> Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>

          <div className={styles.list}>
            {SIZES.map((size) => (
              <div
                onClick={() => setCurrentSize(size)}
                className={`${styles.size} ${
                  currentSize === size ? styles.active : ""
                }`}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <button
            onClick={addToCart}
            className={styles.add}
            disabled={!currentSize}
          >
            Add to cart
          </button>
          <button className={styles.favourite}>Add to favourites</button>
        </div>

        <div className={styles.bottom}>
          <div className={styles.purchase}>19 people purchased</div>

          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;