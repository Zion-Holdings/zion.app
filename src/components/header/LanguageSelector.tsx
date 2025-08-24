import React from 'react';

export function LanguageSelector() {
  return (
    <select className="bg-transparent text-white border border-gray-600 rounded px-2 py-1 text-sm">
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="fr">FR</option>
    </select>
  );
}