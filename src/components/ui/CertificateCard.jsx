// components/CertificateCard.jsx
import React from 'react';

const CertificateCard = ({ certificate, onCardClick }) => {
  return (
    <div
      onClick={() => onCardClick(certificate.image)}
      className="group relative h-100 w-full overflow-hidden shadow-lg transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-[1.02] border border-gray-200 "
    >
      {/* 1. Full Card Image */}
      <img
        src={certificate.image}
        alt={certificate.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* 2. Faded Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* 3. Text Content (Positioned at bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md line-clamp-2">
          {certificate.title}
        </h3>
        <p className="text-sm text-gray-200 font-medium drop-shadow-sm">
          {certificate.issuer}
        </p>
      </div>
    </div>
  );
};

export default CertificateCard;