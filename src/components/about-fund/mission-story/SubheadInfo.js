export default function SubheadInfo({ title, description }) {
    return (
        <div className="subhead-info">
            <div className="subhead-info_title">{title}</div>
            <div className="subhead-info_description">{description}</div>
        </div>
    );
};