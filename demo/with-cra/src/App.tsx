import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import CurrencyPage from './pages/CurrencyPage';
import UserPropertyPage from './pages/UserPropertyPage';
import Route from './router/Route';
import {Global, css} from '@emotion/react';

function App() {
  return (
    <div className="App">
      <Global styles={globalStyle}></Global>
      <NavBar />
      <Route path="/">
        <MainPage />
      </Route>
      <Route path="/products">
        <ProductsPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/set-currency">
        <CurrencyPage />
      </Route>
      <Route path="/set-user-property">
        <UserPropertyPage />
      </Route>
    </div>
  );
}

export default App;

const globalStyle = css`
  body {
    background: #f5f5f5;
    color: #4d4d4d;
    font-size: 14px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  button {
    padding: 0;
    font: inherit;
    color: inherit;
    border: 0;
    border-radius: 0;
    background: none;
    appearance: none;
    box-shadow: none;
    overflow: visible;
    cursor: pointer;
  }
`;
