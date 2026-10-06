import { BrowserRouter } from "react-router";
import MyRoute from "./features/router/MyRoute";

const App = () => {
  return (
    <BrowserRouter>
      <MyRoute />
    </BrowserRouter>
  )
}

export default App
