import styles from './App.module.scss';
import { Details } from './Details';

const title = 'Other title';

const menu = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
];

const isAuth = false;
const role = 'admin';

export function App() {
  return (
    <div className={styles.layout}>
      <h1>First component!</h1>

      {/* {menu.map((item) => (
        <span key={item.link}>{item.name}</span>
      ))} */}

      {isAuth
        ? 'User is authorized'
        : role === 'admin'
        ? 'Admin'
        : 'User is not authorized'}

      <Details title={title} />
    </div>
  );
}
