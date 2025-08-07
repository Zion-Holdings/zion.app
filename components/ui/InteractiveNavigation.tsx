import React, { useState } from "react";
import Link from "next / link";

interface InteractiveNavigationProps {
  className?: string;
}

export default function InteractiveNavigation(_props: InteractiveNavigationProps) {
  const [activeItem, setActiveItem] = useState("home");

  const navItems = [;
    { id: "home", label: "Home", href: " / " }, ;
    { id: "services", label: "Services", href: " / services" }, ;
    { id: "products", label: "Products", href: " / products" }, ;
    { id: "talent", label: "Talent", href: " / talent" }, ;
    { id: "blog", label: "Blog", href: " / blog" }, ;
    { id: "contact", label: "Contact", href: " / contact" }, ;
  ];

  return (
    <nav className="bg - white shadow - lg">;
      <div className="max - w - 7xl mx - auto px - 4 sm: px - 6 lg: px - 8">;
        <div className="flex justify - between h - 16">;
          <div className="flex items - center">;
            <Link href = " / " className="text - xl font - bold text - gray - 900">;
              Zion Tech;
            </Link>;
          </div>;
          
          <div className="hidden md: flex items - center space - x - 1">;
            {navItems.map((item) => (
              <Link;
                key = {item.id}
                href = {item.href}
                onClick = {() => setActiveItem(item.id)}
                className = {`px - 4 py - 2 rounded - md text - sm font - medium transition - colors duration - 200 ${
                  activeItem === item.id;
                    ? "bg - blue - 100 text - blue - 700";: "text - gray - 700 hover: text - gray - 900 hover: bg - gray - 100";
                }`}
              >;
                {item.label}
              </Link>;
            ))}
          </div>;

          <div className="md: hidden flex items - center">;
            <button className="text - gray - 700 hover: text - gray - 900">;
              <svg className="h - 6 w - 6" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor">;
                <path strokeLinecap = "round" strokeLinejoin = "round" strokeWidth = {2} d = "M4 6h16M4 12h16M4 18h16" / >;
              </svg>;
            </button>;
          </div>;
        </div>;
      </div>;
    </nav>;
  );
}
