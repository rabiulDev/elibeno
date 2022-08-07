import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import Ranking from "./pages/Ranking/Ranking";
import Activity from "./pages/Activity/Activity";
import LiveAuction from "./pages/LiveAuction/LiveAuction";
import Wallet from "./pages/Wallet/Wallet";

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
