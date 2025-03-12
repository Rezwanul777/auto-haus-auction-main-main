
import { useState } from "react";
import { PriceSection } from "../image-sections/PriceSection";
//import { PriceSection } from "./image-sections/PriceSection";

export const PriceTab = () => {
  const [price, setPrice] = useState("");
  const [includesVAT, setIncludesVAT] = useState(true);

  return (
    <div>
      <PriceSection 
        price={price}
        onPriceChange={setPrice}
        includesVAT={includesVAT}
        onVATChange={setIncludesVAT}
      />
    </div>
  );
};
