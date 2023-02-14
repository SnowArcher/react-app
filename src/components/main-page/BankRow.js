function BankRow() {
    return (
        <ul className="transfer-line">
            <li className="colum1">Назва компанії</li>
            <li className="colum2">БФ А-ХЕЛП УКРАЇНА БО</li>
            <li>
                <button className="btnCopy">
                    <img src="../img/copy-button.svg" alt="copy"/>
                </button>
            </li>    
        </ul>
    );
}

export default BankRow;