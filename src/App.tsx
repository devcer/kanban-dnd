import "./styles.css";
import QuoteApp from "./quote-app";

import { getQuotes } from "./data";

const generateQuoteMap = () => ({
  alpha: getQuotes(7),
  beta: getQuotes(3),
  gamma: getQuotes(7),
  delta: getQuotes(2),
  epsilon: getQuotes(10),
  zeta: getQuotes(5),
  eta: getQuotes(5),
  theta: getQuotes(5),
  iota: getQuotes(20),
  kappa: getQuotes(5),
});

export default function App() {
  return (
    <div className="App">
      <QuoteApp initial={generateQuoteMap()} />
    </div>
  );
}
