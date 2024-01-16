import UserSignupForm from "./UserSignupForm";

import styles from "../../styles/User.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { TypesForm, toggleForm, toggleFormType } from "../../features/user/userSlice";
import UserLoginForm from "./UserLoginForm";

const UserForm = () => {
  const dispatch = useAppDispatch();
  const { showForm, formType } = useAppSelector(({ user }) => user);

  const closeForm = () => dispatch(toggleForm(false));
  const toggleCurrentFormType = (type: TypesForm) => dispatch(toggleFormType(type));

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