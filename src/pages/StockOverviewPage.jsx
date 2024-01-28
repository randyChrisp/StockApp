import { AutoComplete } from "../components/AutoComplete"
import { StockList } from "../components/StockList"
import graph from "../images/graph.png"

export const StockOverviewPage = () => {
  return <div>
    <div>
      <img className="graph" src={graph} />
    </div>
    <AutoComplete />
    <StockList />
  </div>
}