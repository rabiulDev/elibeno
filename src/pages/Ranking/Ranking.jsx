import rankings from "../../fakeDB/json/rank.json";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import ExploreBtn from "../../components/ExploreBtn/ExploreBtn";
import RankItem from "./RankItem";

const Ranking = () => {
  return (
    <div>
      <CommonHeader />
      <div className="container mx-auto py-[120px] overflow-x-scroll xl:overflow-x-visible">
        <table className="table-auto w-full rounded-lg border-collapse overflow-hidden">
          <thead>
            <tr className="bg-pink font-syne font-bold text-base text-white text-left">
              <th className="p-4">Rank</th>
              <th className="p-4">Collection</th>
              <th className="p-4">Volume</th>
              <th className="p-4">24h %</th>
              <th className="p-4">7d %</th>
              <th className="p-4">Floor Price</th>
              <th className="p-4">Owners</th>
              <th className="p-4">Assets</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((item) => (
              <RankItem key={item.rank} item={item} />
            ))}
          </tbody>
        </table>

        <ExploreBtn />
      </div>
    </div>
  );
};

export default Ranking;
