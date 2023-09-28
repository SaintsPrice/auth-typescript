import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./component/AppRoute";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <AppRoute>
        
      </AppRoute>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
