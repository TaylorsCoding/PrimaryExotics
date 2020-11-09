import { Route } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import InventoryPage from "../InventoryPage/InventoryPage";

import "./App.css";

export default function App() {
  return (
    <div>
      <header id="app-header">
        <Header />
      </header>
      <main id="app-content">
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/inventory"} component={InventoryPage} />
      </main>
      <footer id="app-footer">
        <Footer />
      </footer>
    </div>
  );
}
