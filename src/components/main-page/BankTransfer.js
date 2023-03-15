import React, {useState} from "react";
import BankRow from "./BankRow";
import Data from './data.json';
import { useClipboard } from 'use-clipboard-copy';

function BankTransfer() {
    const [open, setOpen] = useState(false);
    const clipboardUah = useClipboard();
    const clipboardEur = useClipboard();
    const clipboardUsd = useClipboard();
    let uahText = ``;
    let eurText = ``;
    let usdText = ``;
    Data["bank"].uah.map((value) => {
        return (uahText += value.key + ' : ' + value.content + '; \n');
    })
    Data["bank"].eur.map((value) => {
        return (eurText += value.key + ' : ' + value.content + '; \n');
    })
    Data["bank"].usd.map((value) => {
        return (usdText += value.key + ' : ' + value.content + '; \n');
    })
    return (
        <div className="bank-transfer">
            <div className="bank-transfer__line">
                <p>Bank Transfer</p>
                <button className="btnTransfer" onClick={()=>{setOpen(!open); window.scrollBy(0, open? -300 : 300)}}>
                    <img src="../img/chevron-up.svg" className={`arrow-bank ${open? 'active' : ''}`} alt='bank'/>
                </button>
            </div>
            <div className={`bank-transfer__content ${open? 'active' : ''}`} id = "banklist">
                <div className="bank-list_ua" >
                    <input ref={clipboardUah.target} value={uahText} readOnly />
                    <h1>UAH</h1>
                    {Data["bank"].uah.map((value, index) => {
                            return <BankRow key={index}
                            title={value.key}
                            content={value.content}
                        />
                    })}
                    <button className="btnCopyAll"  onClick={clipboardUah.copy}>
                        <span>Скопіювати все</span>
                        <img src="../img/copy-button.svg" alt="copy"/>
                    </button>
                </div>
                <div className="bank-list_eur">
                    <input ref={clipboardEur.target} value={eurText} readOnly />
                    <h1>EUR</h1>
                    {Data["bank"].eur.map((value, index) => {
                            return <BankRow key={index}
                            title={value.key}
                            content={value.content}
                        />
                    })}
                    <button className="btnCopyAll"  onClick={clipboardEur.copy}>
                        <span>Скопіювати все</span>
                        <img src="../img/copy-button.svg" alt="copy"/>
                    </button>
                </div>
                <div className="bank-list_usd">
                    <input ref={clipboardUsd.target} value={usdText} readOnly />
                    <h1>USD</h1>
                    {Data["bank"].usd.map((value, index) => {
                            return <BankRow key={index}
                            title={value.key}
                            content={value.content}
                        />
                    })}
                    <button className="btnCopyAll"  onClick={clipboardUsd.copy}>
                        <span>Скопіювати все</span>
                        <img src="../img/copy-button.svg" alt="copy"/>
                    </button>
                </div>
            </div>
        </div>
        );
}
export default BankTransfer;