import Hero from './Hero';
import CurrentNeeds from './CurrentNeeds';
import HowYouCanHelp from './HowYouCanHelp';
import BankTransfer from './BankTransfer';
import Support from './Support';
import SomeStats from './SomeStats';
import SuccesStories from './SuccesStoies';
function Landing() {
    return (
        <div>
            <Hero />
            <CurrentNeeds />
            <HowYouCanHelp />
            <BankTransfer />
            <Support />
            <SomeStats />
            <SuccesStories />
        </div>
    );
}
export default Landing;