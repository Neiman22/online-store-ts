import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import styles from "../../styles/Product.module.css";

import { IProduct } from "../../features/types/types";
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addProductToCart, addProductToFavourites } from "../../features/user/userSlice";

const SIZES = [48, 50, 52, 54, 56];

const Product = (item: IProduct) => {
  const dispatch = useAppDispatch();
  const { favourites } = useAppSelector(({ user }) => user);

  const { title, price, images, description, id } = item;
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentSize, setCurrentSize] = useState<number | undefined>(undefined);
  const inFav = favourites.find(item => item.id === id);

  useEffect(() => {
    setCurrentImage(item.images[0]);
    setCurrentSize(undefined);
  }, [item])

  const addToCart = () => dispatch(addProductToCart(item));
  const addToFavourites = () => dispatch(addProductToFavourites(item));
  
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
          <button
            onClick={addToFavourites}
            className={styles.add}
            disabled={!!inFav}
          >
            Add to favourites
          </button>
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
