import styles from "./LoginInput.module.css";

const LoginInput = ({ title, type, setLogin }) => {
  return (
    <div className={styles.container}>
      {title}
      <input
        className={styles.loginInput}
        type={type}
        onChange={(e) => setLogin(e.target.value)}
      ></input>
    </div>
  );
};

export default LoginInput;
