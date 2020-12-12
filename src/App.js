import React, { useState } from "react";
import "./styles.css";

const foodContainer = {
  Indian: [
    { name: "🍟 French fries", ratings: "🌟4.8/5" },
    { name: "🍛 Curry rice", ratings: "🌟4.7/5" },
    { name: "🍲 Papdi Chaat", ratings: "🌟4.5/5" },
    { name: "🍺 Malai Kofta", ratings: "🌟4.4/5" }
  ],

  Chinese: [
    { name: "🍝 Quick noodles", ratings: "🌟4.6/5" },
    { name: "🌯 Spring roles", ratings: "🌟4.4/5" },
    { name: "🥖 Honey chilli potato", ratings: "🌟4.2/5" },
    { name: "🍜 Chow Mein", ratings: "🌟4.3/5" }
  ],

  American: [
    { name: "🍣 Apple pie", ratings: "🌟4.3/5" },
    { name: "🍔 Hamberger", ratings: "🌟4.1/5" },
    { name: "🍕 Pizza", ratings: "🌟4/5" },
    { name: "🌭 Bagel and Lox", ratings: "🌟4.2/5" }
  ],

  German: [
    { name: "🌮 Glühwein", ratings: "🌟4.9/5" },
    { name: "🍩 Leberkäse", ratings: "🌟4.6/5" },
    { name: "🥙 Spätzle", ratings: "🌟4/3" },
    { name: "🥗 Fischbrötchen", ratings: "🌟4/5" }
  ]
};

var foodCollect = Object.keys(foodContainer);

export default function App() {
  const [fooditem, setfooditem] = useState("Indian");
  function onclickHandler(fooditem) {
    setfooditem(fooditem);
  }

  var foodmaterial = foodContainer[fooditem];

  return (
    <div className="App">
      <h1 className="heading">🍔 F😃odies World 🍔</h1>
      <p className="para">
        Most food has its origin in plants. Some food is obtained directly from
        plants; but even animals that are used as food sources are raised by
        feeding them food derived from plants
      </p>
      {foodCollect.map(function (fooditem) {
        return (
          <button className="btn" onClick={() => onclickHandler(fooditem)}>
            {fooditem}
          </button>
        );
      })}

      <ul>
        {foodmaterial.map(function (items) {
          return (
            <li className="listitems">
              <div>{items.name}</div>
              <div className="item-ratings">Rating: {items.ratings} </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
