import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import { Auth } from "../context/Auth";

function MyApp({ Component, pageProps }) {
  return (
    <Auth>
      <Component {...pageProps} />;
    </Auth>
  );
}

export default MyApp;
