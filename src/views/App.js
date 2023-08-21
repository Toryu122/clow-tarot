// import logo from '~/logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import routeList from '~/routes';
import './App.scss';
import Home from './Home/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            routeList.map((route, index) => {
              let Element = route.component
              return (
                <Route key={index} path={route.path} element={<Element />} />
              )
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
