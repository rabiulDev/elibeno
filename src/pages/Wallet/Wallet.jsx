import CommonHeader from '../../components/CommonHeader/CommonHeader'
import ExploreBtn from '../../components/ExploreBtn/ExploreBtn'
import walletData from '../../fakeDB/json/wallet.json'
import WalletItems from './WalletItems'
const Wallet = () => {
    return (

        <div>
            <CommonHeader />
            <div className='container mx-auto py-[120px]'>

                <div className='py-[120px]'>

                    <ul className='space-y-6'>
                        {
                            walletData.map(item => <WalletItems key={item.id} item={item} />)
                        }
                    </ul>

                    <ExploreBtn />
                </div>

            </div>
        </div>
    )
}

export default Wallet