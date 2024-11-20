import "./Services.css";
import ServicePreview from "../service-preview/ServicePreview";
import { Link } from "react-router-dom";

const Services = () => {
    return ( 
        <main className="services-section">
            <div className="services-content">
                <div className="services-title">
                    Услуги и условия оплаты
                </div>
                    <div className="services-btn-wrap__add">
                    <Link to="/create-services"><button className="services-btn__add"></button></Link>
                </div>
                <ServicePreview></ServicePreview>   
            </div>
        </main>
     );
}
 
export default Services;