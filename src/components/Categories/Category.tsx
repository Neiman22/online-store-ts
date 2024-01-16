import { useParams } from "react-router-dom";
import styles from "../../styles/Category.module.css";
import { useGetAllCategoriesQuery, useGetSearchProductsQuery } from "../../features/services/fakeApi";
import { useEffect, useState } from "react";
import Products from "../Products/Products";

const Category = () => {
  const { id } = useParams();
  const { data: categories } = useGetAllCategoriesQuery(null);

  const defaultValues = { title: '', price_min: 0, price_max: 0 };
  const defaultParams = { ...defaultValues, categoryId: id };

  const [cat, setCat] = useState('');
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);

  useEffect(() => {
    if(!id) return;
    setParams((prevParams) => ({ ...prevParams, categoryId: id }));
  }, [id]);

  useEffect(() => {
    if(!id || !categories?.length) return;
    const category = categories.find(item => item.id === Number(id));
    if(category) setCat(category.name);
  }, [categories, id])

  const { data, isLoading, isSuccess } = useGetSearchProductsQuery(params);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParams((prevParams) => ({ ...prevParams, ...values }));
  };

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
      !isSuccess || !data.length ? (
        <div className={styles.back}>
          <span>No Results</span>
          <button>Reset</button>
        </div>
      ) : (
        <Products  title={''}  products={data} amount={data.length} />
      )
    )}
    </section>
  )
}

export default Category