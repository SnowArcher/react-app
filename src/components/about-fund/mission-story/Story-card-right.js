export default function StoryCardRight({ subscription }) {
    return (
        <div className="story-table_card">
            <img src="../img/mission-story/Image.png" alt=""/>
            <div className="story-table_card_subscription">{subscription}</div>
        </div>
    );
};

