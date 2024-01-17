import { useParams } from "react-router-dom";
import styles from "../../styles/Category.module.css";
import { useGetAllCategoriesQuery, useGetSearchProductsQuery } from "../../features/services/fakeApi";
import { useEffect, useState } from "react";
import Products from "../Products/Products";
import { IProduct } from "../../features/types/types";

const Category = () => {
  const { id } = useParams();
  const { data: categories } = useGetAllCategoriesQuery(null);

  const defaultValues = { title: '', price_min: 0, price_max: 0 };
  const defaultParams = { ...defaultValues, categoryId: id, limit: 5, offset: 0  };

  const [cat, setCat] = useState('');
  const [items, setItems] = useState<IProduct[]>([]);
  const [isEnd, setIsEnd] = useState(false);
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);
  const { data, isLoading, isSuccess } = useGetSearchProductsQuery(params);

  useEffect(() => {
    if (!id) return;

    setValues(defaultValues);
    setItems([]);
    setIsEnd(false);
    setParams({ ...defaultParams, categoryId: id });
  }, [id]);

  useEffect(() => {
    if (isLoading) return;

    if(!data?.length) return setIsEnd(true);

    setItems((prevItems) => [...prevItems, ...data])
  }, [data, isLoading]);

  useEffect(() => {
    if (id && categories?.length) {
      const category = categories.find(item => item.id === Number(id));
      if (category) setCat(category.name);
    }
  }, [categories, id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems([]);
    setIsEnd(false);
    setParams({ ...defaultParams, ...values });
  };

  const handleReset = () => {
    setValues(defaultValues);
    setParams(defaultParams);
    setIsEnd(false);
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{cat}</h2>

      <form className={styles.filters} onSubmit={handleSubmit}>
        <div className={styles.filter}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Product name"
            value={values.title}
          />
        </div>
        <div className={styles.filter}>
          <input
            type="number"
            name="price_min"
            onChange={handleChange}
            placeholder="0"
            value={values.price_min}
          />
          <span>Price from</span>
        </div>
        <div className={styles.filter}>
          <input
            type="number"
            name="price_max"
            onChange={handleChange}
            placeholder="0"
            value={values.price_max}
          />
          <span>Price to</span>
        </div>

        <button type="submit" hidden />
      </form>
    
    {isLoading ? (
      <div className='preloader'>Loading...</div>
    ) : (
      !isSuccess || !items.length ? (
        <div className={styles.back}>
          <span>No Results</span>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <Products  title={''}  products={items} amount={items.length} />
      )
    )}

    {!isEnd && (
      <div className={styles.more}>
        <button onClick={() => setParams({ ...params, offset: params.offset + params.limit})}>See more</button>
      </div>
    )}

    </section>
  )
}

export default Category