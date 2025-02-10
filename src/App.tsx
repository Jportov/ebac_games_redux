import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Categorias from "./Pages/Categorias";
import Embreve from "./Pages/Embreve";
import Home from "./Pages/Home";
import Promocoes from "./Pages/Promocoes";
import { configuraStore } from "./store";
import { GlobalStyle } from "./styles";



const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/promocao",
    element: <Promocoes/>
  },
  {
    path: "/categorias",
    element: <Categorias/>
  },
  {
    path: "/embreve",
    element: <Embreve/>
  }
]);

function App() {
  return (
    <Provider store={configuraStore()}>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </Provider>
  );
}

export default App;
