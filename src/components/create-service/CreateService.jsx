import { useNavigate } from "react-router-dom";
import "./CreateService.css";
import { useState } from "react";

const CreateService = () => {

    //State для валидации формы
    const [formData, setFormData] = useState({
        name: "",
        paymentOptions: {
            agreement: false,
            hourly: false,
            volume: false,
        },
        paymentValues: {
            agreementValue: "",
            hourlyValue: "",
            volumeValue: "",
        },
        isActive: false,
    });


    //State для отображения ошибок
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        // Валидация имени услуги: только буквы, до 250 символов (для проверки наименования использую регулярное выражение, которое гарантирует ввод только букв)

        if (name === "name" && (/[^a-zA-Zа-яА-Я\s]/.test(value) || value.length > 250)) {
            return;
        }
        
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    const handleCheckboxChange = (option) => {
        setFormData((prev) => ({
            ...prev,
            paymentOptions: {
                ...prev.paymentOptions,
                [option]: !prev.paymentOptions[option],
            },
        }));
    };
    
    const handleClickButtonCancel = () => {
        
    }

    return ( 
        <section className="createServices-section">
            <div className="createServices-content">
                    <div className="createServices-title">
                        Создание услуги
                    </div>

                    <div className="nameService-content">
                        <label className="nameService-label">
                            Наименование услуги*
                            <select className="nameService-select" name="">
                                <option value="Монтажные работы">Монтажные работы</option>
                                <option value="Строительство дома">Строительство дома</option>
                            </select>
                        </label>
                    </div> 
                    
                    
                    <div className="typeAndSumm-content">
                        <label className="typeAndSumm-title">
                            Тип и сумма услуги*
                            <div className="typeAndSumm-labels">
                                
                                <label className="typeAndSumm-label">
                                    <div className="typeAndSumm-checkbox__border">
                                        <input type="checkbox" className="typeAndSumm-checkbox checkbox2">
                                        </input>
                                    </div>
                                    По договоренности
                                </label>
                                <label className="typeAndSumm-label">
                                    <div className="typeAndSumm-checkbox__border">
                                        <input type="checkbox" className="typeAndSumm-checkbox checkbox2">
                                        </input>
                                    </div>
                                    Почасовая оплата
                                </label>

                                <label className="typeAndSumm-label">
                                    <div className="typeAndSumm-checkbox__border">
                                        <input type="checkbox" className="typeAndSumm-checkbox checkbox3">
                                        </input>
                                    </div>
                                    Оплата по объему работ
                                </label>
                            </div>
                        </label>
                    </div>
                    

                    <div className="beActive-content">
                        <label className="beActive-title">
                        Активность
                            <div className="switch">
                                <input type="checkbox" id="switch" />
                                <span className="slider"></span>
                            </div>
                        </label>
                    </div>

                    <div className="createService-btns">
                        <div className="createService-btnsArea">
                            <div className="btn-cancel__border">
                                <button className="createService-btn cancel">
                                    Отмена
                                </button>
                            </div>
                            <div className="btn-save__border">
                                <button className="createService-btn save">
                                    Сохранить
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
     );
}
 
export default CreateService;