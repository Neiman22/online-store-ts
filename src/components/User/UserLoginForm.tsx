import React, { useState } from "react";

import { TypesForm, loginUser } from "../../features/user/userSlice";

import styles from "../../styles/User.module.css";
import { useAppDispatch } from "../../hooks/hooks";

interface UserLoginFormProps {
  closeForm: () => void;
  toggleCurrentFormType: (type: TypesForm) => void; 
}

const UserLoginForm = ({ closeForm, toggleCurrentFormType }: UserLoginFormProps) => {
  const dispatch = useAppDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(loginUser(values));
    closeForm();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>

      <div className={styles.title}>Log In</div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div
          onClick={() => toggleCurrentFormType(TypesForm.signup)}
          className={styles.link}
        >
          Create an account
        </div>

        <button type="submit" className={styles.submit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLoginForm;
