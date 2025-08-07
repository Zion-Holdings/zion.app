import React, { useState } from "react";

interface InteractiveSearchProps {
  className?: string;
}

export default function InteractiveSearch(_props: InteractiveSearchProps) {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) = > {
    e.preventDefault();
    setIsSearching(true); /  / Simulate search;
    setTimeout(() = > {
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className = "max - w - md mx - auto">;
      <form onSubmit = {handleSearch} className = "relative">;
        <input;
          type = "text";
          value = {query}
          onChange = {(e) = > setQuery(e.target.value)}
          placeholder = "Search for services, products, or solutions...";
          className = "w - full px - 4 py - 3 pl - 12 pr - 4 text - gray - 900 bg - white border border - gray - 300 rounded - lg focus: ring - 2 focus: ring - blue - 500 focus: border - transparent"; / >;
        <div className = "absolute inset - y - 0 left - 0 pl - 3 flex items - center pointer - events - none">;
          <svg className = "h - 5 w - 5 text - gray - 400" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24">;
            <path strokeLinecap = "round" strokeLinejoin = "round" strokeWidth = {2} d = "M21 21l - 6 - 6m2 - 5a7 7 0 11 - 14 0 7 7 0 0114 0z" / >;
          < / svg>;
        < / div>;
        <button;
          type = "submit";
          disabled = {isSearching}
          className = "absolute inset - y - 0 right - 0 px - 4 text - gray - 400 hover: text - gray - 600 disabled: opacity - 50";
        >;
          {isSearching ? (
            <div className = "animate - spin rounded - full h - 5 w - 5 border - b - 2 border - gray - 600">< / div>;
          ): (
            <svg className = "h - 5 w - 5" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24">;
              <path strokeLinecap = "round" strokeLinejoin = "round" strokeWidth = {2} d = "M9 5l7 7 - 7 7" / >;
            < / svg>;
          )}
        < / button>;
      < / form>;
    < / div>;
  );
}
