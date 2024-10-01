
import {Footer} from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export function App() {
  const date = new Date();
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Main date={date} />
        <Footer date={date} />
      </div>
    </div>
  );
}