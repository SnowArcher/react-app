function DocsReports () {
    return (
        <div className="docs">
            <h2>Документація та звітність</h2>
            <div className="docs__statute">
                <div>
                    <h3>Статут</h3>
                </div>
                <div>
                    <h3>Структура власності</h3>
                </div>
            </div>
            <div className="docs__report-wrapper">
                <div className="docs__report">
                   <img src="./../img/img_docs/award.png" alt="award"/>
                </div>
                <div className="docs__card">
                    <div className="docs__title">
                        <h3>Довідка про відкриття рахунку</h3>
                    </div>
                    <div className="docs__title">
                        <h3>Довідка присвоєння ознаки неприбутковості</h3> 
                    </div>
                </div>
            </div>
            <div>
                <h3>Виписка з державного реєстру</h3>
            </div>
            <div className="docs__report">
                    <h4>Звіт за 2022 рік </h4>
                    <p>Lorem ipsum dolor sit amet, cum sapientem honestatis ea, verear labores feugait sea in, cu justo suscipiantur mel.</p>
                    <span>Nov 22, 2022</span>
            </div>
            <div className="docs__request">
                <p>Didn't find the information you needed?</p>
                <div className="docs__request_btn">
                    <a href="/"> 
                        <p>Request more info</p>
                        <img src="../img/Vector1.svg" alt="vector"/>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default DocsReports;