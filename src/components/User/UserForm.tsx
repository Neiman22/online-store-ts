import UserSignupForm from "./UserSignupForm";

import styles from "../../styles/User.module.css";
import { useAppSelector } from "../../hooks/hooks";
import { useDispatch } from "react-redux";
import { toggleForm } from "../../features/user/userSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm } = useAppSelector(({ user }) => user);

  const closeForm = () => dispatch(toggleForm(false));

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm} />
      <UserSignupForm closeForm={closeForm} />
    </>
  ) : (
    <></>
  );
};

export default UserForm;