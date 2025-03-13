import React from 'react';

interface ServicesSectionProps {
    services: any[]; // Adjust the type as needed
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
    return (
        <div>
            {/* Render services here */}
            {services.map((service, index) => (
                <div key={index}>{service}</div>
            ))}
        </div>
    );
};

export default ServicesSection;
