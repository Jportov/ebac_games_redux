import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import { configuraStore } from "./store";
import { GlobalStyle } from "./styles";
import Rotas from "./router";
import Footer from "./components/Footer";


function App() {
  return (
    <Provider store={configuraStore()}>
      <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Rotas/>
      <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
