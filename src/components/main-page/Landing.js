import Hero from './Hero';
import CurrentNeeds from './CurrentNeeds';
import HowYouCanHelp from './HowYouCanHelp';
import BankTransfer from './BankTransfer';
import Support from './Support';
import SomeStats from './SomeStats';
function Landing() {
    return (
        <div>
            <Hero />
            <CurrentNeeds />
            <HowYouCanHelp />
            <BankTransfer />
            <Support />
            <SomeStats />
        </div>
    );
}
export default Landing;