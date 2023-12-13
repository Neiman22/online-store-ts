import { useAppSelector } from "../../hooks/redux";
import UserSignupForm from "./UserSignupForm";

import styles from "../../styles/User.module.css";
import { useActions } from "../../hooks/actions";

const UserForm = () => {
  const { showForm } = useAppSelector(state => state.user);
  const { toggleForm } = useActions();
  
  const closeForm = () => toggleForm(false);

  return (
    showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm} />
      <UserSignupForm closeForm={closeForm}/>
    </>
    ) : (<></>)
  )
}

export default UserForm