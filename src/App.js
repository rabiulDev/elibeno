import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import Ranking from "./pages/Ranking/Ranking";
import Activity from "./pages/Activity/Activity";
import LiveAuction from "./pages/LiveAuction/LiveAuction";
import Wallet from "./pages/Wallet/Wallet";
import Collection from "./pages/Collection/Collection";
import NotFound from "./pages/NotFound/NotFound";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import CreateItems from "./pages/CreateItems/CreateItems";
import ItemDetails from "./pages/ItemDetails/ItemDetails";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/explore/liveauction" element={<LiveAuction />} />
        <Route path="/explore/wallet" element={<Wallet />} />
        <Route path="/pages/collection" element={<Collection />} />
        <Route path="/pages/leaderboard" element={<Leaderboard />} />
        <Route path="/pages/create-items" element={<CreateItems />} />
        <Route path="/explore/item-details/:id" element={<ItemDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
