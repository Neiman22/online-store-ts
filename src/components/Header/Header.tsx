import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import styles from '../../styles/Header.module.css';

import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/avatar.jpg';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { toggleForm } from '../../features/user/userSlice';
import { useEffect, useState } from 'react';
import { useGetSearchProductsQuery } from '../../features/services/fakeApi';
import { IUser } from '../../features/types/types';

const Header = () => {
  const { cart, favourites } = useAppSelector(({ user }) => user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const [values, setValues] = useState<Partial<IUser>>({ name: "Guest", avatar: AVATAR });
  const [searchValue, setSearchValue] = useState('');

  const { currentUser } = useAppSelector(({ user }) => user);

  useEffect(() => {
    if(!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);
  
  const handleClick = () => {
    if(!currentUser) {
      dispatch(toggleForm(true))
    } else {
      navigate(ROUTES.PROFILE);
    }
  }

  const { data, isLoading } = useGetSearchProductsQuery({ title: searchValue});

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  }
  
  console.log(favourites);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div 
            className={styles.avatar} 
            style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className={styles.username}>{values.name}</div>
        </div>

        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input 
              type='search' 
              name='search' 
              placeholder='Search for anything...'
              autoComplete='off'
              onChange={handleSearch}
              value={searchValue}
            />
          </div>

          {searchValue && (
            <div className={styles.box}>
              {isLoading
                ? "Loading"
                : !data?.length
                ? "No results"
                : data.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => setSearchValue("")}
                        className={styles.item}
                        to={`/products/${id}`}
                      >
                        <div
                          className={styles.image}
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className={styles.title}>{title}</div>
                      </Link>
                    );
                  })}
            </div>
          )}
        </form>

        <div className={styles.account}>
          <Link to={ROUTES.FAVORITES} className={styles.favourites}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
            <span className={styles.count}>{favourites.length}</span>
          </Link>

          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            {!!cart.length && <span className={styles.count}>{cart.length}</span>}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header