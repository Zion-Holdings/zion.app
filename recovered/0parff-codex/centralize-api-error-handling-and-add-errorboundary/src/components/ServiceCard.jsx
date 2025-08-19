import React from "react";

export default function ServiceCard({ service, onSelect }) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(service.id);
    }
  };

  return (
    <div
      data-testid={`service-card-${service.id}`}
      onClick={handleClick}
      className="cursor-pointer p-4 border border-zion-blue-light rounded-lg bg-zion-blue-dark hover:border-zion-purple/50"
    >
      <h3 className="text-white font-medium">{service.title}</h3>
    </div>
  );
}
