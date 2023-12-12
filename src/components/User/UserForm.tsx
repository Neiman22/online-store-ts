import { useAppSelector } from "../../hooks/redux";
import UserSignupForm from "./UserSignupForm";

import styles from "../../styles/User.module.css";

const UserForm = () => {
  const { showForm } = useAppSelector(state => state.user);
  
  return (
    showForm ? (
    <>
      <div className={styles.overlay} />
      <UserSignupForm />
    </>
    ) : (<></>)
  )
}

export default UserForm