import { IProduct } from "../../features/types/types";
import { removeProductFromFavourites } from "../../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import styles from "../../styles/Favourites.module.css";

const Favourites = () => {
  const { favourites } = useAppSelector(({ user }) => user);
  const dispatch = useAppDispatch();

  const removeProduct = (item: IProduct) => {
    dispatch(removeProductFromFavourites(item));
  }

  return (
    <section className={styles.favourites}>
      <h2 className={styles.title}>Your favourites</h2>

      {!favourites.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <>
          <div className={styles.list}>
            {favourites.map((item) => {
              const { title, category, images, price, id } = item;

              return (
                <div className={styles.item} key={id}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                    <div className={styles.category}>{category.name}</div>
                  </div>

                  <div className={styles.price}>{price}$</div>

                  <div
                    className={styles.close}
                    onClick={() => removeProduct(item)}
                  >
                    <svg className="icon">
                      <use
                        xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Favourites;