import styles from './LogButton.module.css'

const LoginButton = ({ text, onClick }) => {
  return (
  <div className={styles.container}>
    <button className={styles.loginButton} onClick={onClick}>{text}</button>
  </div>)
}

export default LoginButton;