import { createStore } from "redux";
import { Provider } from "react-redux";
import './App.css';
import storeReducers from "./redux/reducers";
import { Routing } from "./Routing";

const currencyStore = createStore(
  storeReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={currencyStore}>
      <Routing />
    </Provider>
  );
}

export default App;
