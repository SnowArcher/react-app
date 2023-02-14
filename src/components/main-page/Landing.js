import Hero from './Hero';
import CurrentNeeds from './CurrentNeeds';
import HowYouCanHelp from './HowYouCanHelp';
import BankTransfer from './BankTransfer';
function Landing() {
    return (
        <div>
            <Hero />
            <CurrentNeeds />
            <HowYouCanHelp />
            <BankTransfer />
        </div>
    );
}
export default Landing;