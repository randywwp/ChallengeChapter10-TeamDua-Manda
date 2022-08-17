import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import { Auth } from "../context/Auth";
import { Provider } from "react-redux";
import { store } from "../redux/store"
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Auth>
      <Component {...pageProps} />;
    </Auth>
    </Provider>
    
  );
}

export default MyApp;
