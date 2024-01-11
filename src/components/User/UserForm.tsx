import UserSignupForm from "./UserSignupForm";

import styles from "../../styles/User.module.css";
import { useAppSelector } from "../../hooks/hooks";
import { useDispatch } from "react-redux";
import { toggleForm, toggleFormType } from "../../features/user/userSlice";
import UserLoginForm from "./UserLoginForm";

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useAppSelector(({ user }) => user);

  const closeForm = () => dispatch(toggleForm(false));
  const toggleCurrentFormType = (type: string) => dispatch(toggleFormType(type));

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm} />
      {formType === 'signup' ? (
        <UserSignupForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
      ) : (
        <UserLoginForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
      )}
    </>
  ) : (
    <></>
  );
};

export default UserForm;