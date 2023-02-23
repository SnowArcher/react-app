
import {needs} from "./NeedsList.js"
import NeedItem from "./NeedItem";


const CurrentNeeds = () => {

    return (
    <>

    <div className="needs">
        <h2> Поточні потреби</h2>
        <ul className="needs__cards">
        {needs.map((need, id)=>{
                    return <NeedItem  key={id}
                                title={need.title}
                                src={need.src}
                                target={need.target} 
                                description={need.description}
                                srcBig={need.srcBig} />
                }) 
            }
        </ul>
        </div> 
  
    </>
    );
}
export default CurrentNeeds;