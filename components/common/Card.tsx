import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, imageSrc, description, onClick }) => (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-md transition" onClick={onClick}>
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            {description && <p className="text-gray-600 mt-2">{description}</p>}
        </div>
    </div>
);

export default Card;
