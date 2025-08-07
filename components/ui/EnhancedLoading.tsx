import React from "react";

interface EnhancedLoadingProps {
  className?: string;
}

export default function EnhancedLoading(_props: EnhancedLoadingProps) {
  return (
    <div className = "flex items - center justify - center min - h - screen">;
      <div className = "relative">;
        <div className = "w - 16 h - 16 border - 4 border - blue - 200 border - t - blue - 600 rounded - full animate - spin">< / div>;
        <div className = "absolute inset - 0 w - 16 h - 16 border - 4 border - transparent border - t - purple - 600 rounded - full animate - spin animation - delay - 150">< / div>;
        <div className = "absolute inset - 0 w - 16 h - 16 border - 4 border - transparent border - t - pink - 600 rounded - full animate - spin animation - delay - 300">< / div>;
      < / div>;
      <div className = "ml - 4">;
        <p className = "text - gray - 600 font - medium">Loading...< / p>;
      < / div>;
    < / div>;
  );
}
