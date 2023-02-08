
import { number } from "prop-types";
import { useState, useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setConins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setConins(json);
      setLoading(false);
    });
  }, []);
  const [selectedVal, setSelectedVal] = useState("not"); // 선택값
  const [dollars, setDollars] = useState(0); // 사용자 돈
  const [symbol, setSymbol] = useState(); // 선택한 코인 symbol
  const [price, setPrice] = useState(0); // 선택한 코인 price
  const onChange = (event) => {
    setDollars(event.target.value);
  }

  const onSelect = (event) => {
    setSelectedVal(event.target.value);
  }
  useEffect(() => {
    if (selectedVal !== "not") {
      const values = selectedVal.split(",");
      setSymbol(values[0]);
      setPrice(values[1]);
    } else {
      setPrice(0);
      setDollars(0);
    }
  }, [selectedVal]);

  return (
    <div>
      {/* 백틱(`)을 이용하여 작성 가능 (ES6, 템플릿 리터럴..) */}
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading....</strong> : (
        <div>
          <select onChange={onSelect}>
            <option value="not">선택</option>
            {coins.map((coin) => (
              <option key={coin.id} value={[coin.symbol,coin.quotes.USD.price]}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </option>
            ))}
          </select><br/>
          {selectedVal !== "not" ? (
            <div>
              <h4>money to coin</h4>
              <label htmlFor="dollar">$</label>
              <input onChange={onChange} id='dollar' type='number'/><br/>
              <label>({symbol})</label>
              <input 
                value={selectedVal === "not" ? "0" : `${dollars / price}`}
                disabled='disabled'/>
            </div>
          ) : null}
          
        </div>
      )}
    </div>
  );
}

export default App;
