import './App.css'
import RouteController from "./routes/index.jsx";
import {useLocation} from "react-router-dom";
import NotFound from "./routes/not-found/NotFound.jsx";

function App() {
    const { pathname } = useLocation();
  return (
    <div className="container">
        {pathname.includes("/home") ? <NotFound/> : <></>}
      <RouteController/>
    </div>
  )
}

export default App
