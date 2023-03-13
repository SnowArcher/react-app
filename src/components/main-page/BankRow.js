import { useClipboard } from 'use-clipboard-copy';

function BankRow({title, content}) {
    const clipboard = useClipboard();
    return (
        <ul className="transfer-line">
            <li className="colum1">{title}</li>
            <li className="colum2"><input ref={clipboard.target} value={`${title + ' : ' + content}`} readOnly />{content}</li>
            <li>
                <button className="btnCopy" onClick={clipboard.copy}>
                    <img src="../img/copy-button.svg" alt="copy"/>
                </button>
            </li>    
        </ul>
    );
}

export default BankRow;