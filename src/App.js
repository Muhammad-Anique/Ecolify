import { Outlet ,Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <div>
       <nav>
          <ul>
            <li>
              <Link to={`contact`}>Contact</Link>
            </li>
            <li>
              <Link to={`about`}>About</Link>
            </li>
          </ul>
        </nav>
      <h1>This Ecommerce Website</h1>
      <div>
      <Outlet />
      </div>
    </div>
    </>

  );
}

export default App;
