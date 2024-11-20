import React, { useState } from "react";
import "./ServicePreview.css";

// Компонент для модального окна
const Modal = ({ onConfirm, onCancel }) => (
    <div className="modal-overlay">
        <div className="modal-content">
            <div className="modal-content__wrap">
                <div className="modal-img__background">
                    <div className="modal-img">
                    </div>
                </div>
                <div className="modal-title__wrap">
                    <h3 className="modal-title">Удалить</h3>
                    <p className="modal-subtitle">Вы действительно хотите удалить услугу?</p>
                </div>
            </div>
                <div className="modal-actions">
                    <button className="modal-button cancel" onClick={onCancel}>Отмена</button>
                    <button className="modal-button delete" onClick={onConfirm}>Удалить</button>
                </div>
            
        </div>
    </div>
);

const ServicePreview = () => {
    // Состояние для отображения модального окна
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Открытие модального окна
    const handleDeleteClick = () => {
        setIsModalOpen(true);
    };

    // Закрытие модального окна
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // Подтверждение удаления
    const handleConfirmDelete = () => {
        setIsModalOpen(false);
       
        console.log("Услуга удалена!");
    };

    return (
        <div className="servicePreview-section">
            <div className="servicePreview-content">
                <div className="servicePreview-content__wrap">
                    <div className="servicePreview-content__left">
                        <div className="service-name">Общий ремонтОбщий
                        </div>
                        <div className="service-status">
                            <div className="service-status__text">Неактивно</div>
                        </div>
                    </div>

                    <div className="service-price__wrap">
                        <div className="service-price">12500$</div>
                    </div>
                </div>

                <div className="service-btn__area">
                    <div className="service-status__media-wrap">
                        <div className="service-status__media">Неактивно</div>
                    </div>
                    <div className="service-btn__wrap">
                        <button className="service-btn__edit"></button>
                        <button className="service-btn__delete" onClick={handleDeleteClick}></button>
                    </div>
                </div>
            </div>

            {/* Показываем модальное окно, если оно открыто */}
            {isModalOpen && <Modal onConfirm={handleConfirmDelete} onCancel={handleCancel} />}
        </div>
    );
};

export default ServicePreview;
