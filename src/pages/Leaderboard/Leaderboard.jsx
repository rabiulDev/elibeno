import CommonHeader from "../../components/CommonHeader/CommonHeader"
import leaderBoard from "../../fakeDB/json/leader.json"
import LeaderboardListItem from "./LeaderboardListItem"
const Leaderboard = () => {
    return (
        <div>
            <CommonHeader />
            <div className='container mx-auto py-[120px]'>
                <ul className="space-y-6">
                    {
                        leaderBoard.map(item => <LeaderboardListItem key={item.id} item={item} />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Leaderboard