import "../styles/globals.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "../context/reducers/index";

function MyApp({ Component, pageProps }) {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
