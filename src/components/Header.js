import styles from './Header.module.css';
const Header = () => {
    return ( 
        <header className={styles.container}>
              <h1>Contact App</h1>
              <p>
                <a href="#" className={styles.action}>React.js</a>
                <span>| react.js Full Course</span>
              </p>
        </header>
     );
}
 
export default Header;
