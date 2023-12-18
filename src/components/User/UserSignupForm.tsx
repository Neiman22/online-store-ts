import { useCreateUserMutation } from "../../store/services/userApi";
import styles from "../../styles/User.module.css";
import { ChangeEvent, useState } from "react";

const UserSignupForm = ({ closeForm } : {closeForm: () => void}) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [createUser] = useCreateUserMutation();

  function handleChange (event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value});
  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    console.log(values);
    event?.preventDefault()

    const isNotEmpty = Object.values(values).every((val) => val)
    
    if (!isNotEmpty) return;

    createUser(values);
    closeForm();
    console.log(values);
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
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="avatar"
            placeholder="Your avatar"
            name="avatar"
            value={values.avatar}
            autoComplete="off"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div
          className={styles.link}
          onClick={() => {}}
        >
          I already have an account
        </div>

        <button type="submit" className={styles.submit}>
          Create an account
        </button>
      </form>
    </div>
  )
}

export default UserSignupForm;