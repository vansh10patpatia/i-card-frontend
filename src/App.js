import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './Reducers';
import { BrowserRouter } from 'react-router-dom';


let store = createStore(RootReducer);


function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <BrowserRouter>
              <Navigation />
          </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
