import { Outlet} from "react-router-dom";
import './App.css';
import Navbaar from "./Components/Navbaar/Navbaar";
import Cart from "./Components/Cart/Cart";


function App() {
  return (
    <>
   
       {/* <nav>
          <ul>
            <li>
              <Link to={`contact`}>Contact</Link>
            </li>
            <li>
              <Link to={`about`}>About</Link>
            </li>
          </ul>
        </nav> */}


      <Navbaar/>
      <div>
      <div>
      <Outlet />
      </div>
    </div>
   
    </>

  );
}

export default App;
