import React from 'react';

export const LanguageSelector: React.FC = () => {
  return (
    <select className="bg-zion-slate-dark border border-zion-cyan/20 text-white px-3 py-1 rounded-lg focus:border-zion-cyan focus:outline-none">
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
    </select>
  );
};