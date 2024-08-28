import './FloatingCloud.css';

export default function CloudAnimation({ className }) {

    return (
        <div className={ className ? className : "cloud-content"}>
            <div className="cloud"></div>
            <div className="cloud x"></div>
        </div>
    )
}