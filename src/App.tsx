import axiosConfig from './services/axios/axiosConfig';
import Router from './Router';
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./providers/StoreProvider";

axiosConfig();

const App = () => {

  return (
    <BrowserRouter>
      <StoreProvider>
        <Router />
      </StoreProvider >
    </BrowserRouter>
  )
}

export default App;