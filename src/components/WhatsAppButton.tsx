import React from 'react';

const WhatsAppButton: React.FC = () => {
    const phoneNumber = '6285233447500';
    const message = 'Hello! I would like to know more about Milagros.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <button className="whatsapp-button">
                Contact Us on WhatsApp
            </button>
        </a>
    );
};

export default WhatsAppButton;