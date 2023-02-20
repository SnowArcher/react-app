import React, {useState} from "react";
import BankRow from "./BankRow";
//document.getElementById("banklist").scrollIntoView() // window.scrollBy(0, 200)
function BankTransfer() {
    const [open, setOpen] = useState(false);
    return (
        <div className="bank-transfer">
            <div className="bank-transfer__line">
                <p>Bank Transfer</p>
                <button className="btnTransfer" onClick={()=>{setOpen(!open); window.scrollBy(0, open? -300 : 300)}}>
                    <img src="../img/chevron-up.svg" className={`arrow-bank ${open? 'active' : ''}`} alt='bank'/>
                </button>
            </div>
            <div className={`bank-transfer__content ${open? 'active' : ''}`}>
                <div className="bank-list_ua" id = "banklist">
                    <h1>UAH</h1>
                    <BankRow />
                    <BankRow />
                    <BankRow />
                    <BankRow />
                    <BankRow />
                    <BankRow />
                    <BankRow />
                    <button className="btnCopyAll">
                        <span>Copy all data</span>
                        <img src="../img/copy-button.svg" alt="copy"/>
                    </button>
                </div>
            </div>
        </div>
        );
}
export default BankTransfer;