import { useState } from "react";
import styles from "../../styles/User.module.css";
import { IUser } from "../../features/types/types";
import { useAppDispatch } from "../../hooks/hooks";
import { TypesForm, createUser } from "../../features/user/userSlice";

interface UserSignupFormProps {
  closeForm: () => void;
  toggleCurrentFormType: (type: TypesForm) => void; 
}

const UserSignupForm = ({ closeForm, toggleCurrentFormType }: UserSignupFormProps) => {
  const dispatch = useAppDispatch();
  const [values, setValues] = useState<IUser>({
    email: '',
    name: '',
    password: '',
    avatar: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    
    dispatch(createUser(values));
    closeForm();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>

      <div className={styles.title}>Sign Up</div>

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
            type="text"
            placeholder="Your name"
            name="name"
            value={values.name}
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

        <div className={styles.group}>
          <input
            type="text"
            placeholder="Your avatar"
            name="avatar"
            value={values.avatar}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div
          className={styles.link}
          onClick={() => toggleCurrentFormType(TypesForm.login)}
        >
          I already have an account
        </div>

        <button type="submit" className={styles.submit}>
          Create an account
        </button>
      </form>
    </div>
  );
};

export default UserSignupForm;
