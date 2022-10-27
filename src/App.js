import logo from './logo.svg';
import { Outlet ,Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <div>
       <nav>
          <ul>
            <li>
              <Link to={`contacts`}>Your Name</Link>
            </li>
          </ul>
        </nav>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>h2</h1>
      <div>
      <Outlet />
      </div>
    </div>
    </>

  );
}

export default App;
