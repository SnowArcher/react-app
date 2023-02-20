import Hero from './Hero';
import CurrentNeeds from './CurrentNeeds';
import HowYouCanHelp from './HowYouCanHelp';
import BankTransfer from './BankTransfer';
import Support from './Support';
function Landing() {
    return (
        <div>
            <Hero />
            <CurrentNeeds />
            <HowYouCanHelp />
            <BankTransfer />
            <Support />
        </div>
    );
}
export default Landing;