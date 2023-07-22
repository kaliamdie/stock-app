
import { useStockContext } from "./StockProvider";
import Utils from "./Utils";

export default function MyStocks() {
  const { myStock, setMyStock } = useStockContext();
  console.log(myStock);
  return <Utils stocksData={myStock} pageName={"Followed Stocks"} />;
}