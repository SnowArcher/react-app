export default function ProgrammsCard({ caption, subscription }) {
    return (
            <div className="programs_table_card">
                <img src="../img/mission-story/Image.png" alt=""/>
                <div className="programs_table_card_caption">{caption}</div>
                <div className="programs_table_card_subscription">{subscription}</div>
            </div>
    
    );
};