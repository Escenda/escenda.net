import { Footer, Header } from './components/organisms';
import './styles/App.css';
import './styles/addons/neumorphism/main.style.css';

import 'highlight.js/styles/github-dark-dimmed.css';

import { BrowserRouter } from 'react-router-dom';
import PagesRoute from './Routes.jsx';

import { Provider } from 'react-redux';
import store from './redux/store';


const App = () => {
  return (
      <div className="App">
        <Provider store={ store }>
          <BrowserRouter>
            <Header />
            <PagesRoute />
            <Footer />
          </BrowserRouter>
        </Provider>
      </div>
  )
}

export default App;