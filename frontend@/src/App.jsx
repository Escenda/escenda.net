import { Footer, Header } from './components/organisms';
import './styles/App.css';
import './styles/addons/neumorphism/main.style.css';

import 'highlight.js/styles/github-dark-dimmed.css';

import { BrowserRouter } from 'react-router-dom';
import PagesRoute from './Routes.jsx';

const App = () => {
  return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <PagesRoute />
          <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App;