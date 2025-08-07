import React from "react";

interface AnimatedBackgroundProps {
  className?: string;
}

export default function AnimatedBackground(_props: AnimatedBackgroundProps) {
  return (
    <div className = "fixed inset - 0 - z - 10 overflow - hidden">;
      <div className = "absolute inset - 0 bg - gradient - to - br from - blue - 50 to - indigo - 100 animate - pulse">< / div>;
      <div className = "absolute inset - 0 bg - grid - pattern opacity - 5">< / div>;
      <div className = "absolute top - 0 left - 0 w - full h - full">;
        <div className = "absolute top - 1 / 4 left - 1 / 4 w - 64 h - 64 bg - blue - 200 rounded - full mix - blend - multiply filter blur - xl opacity - 70 animate - blob">< / div>;
        <div className = "absolute top - 1 / 3 right - 1 / 4 w - 64 h - 64 bg - purple - 200 rounded - full mix - blend - multiply filter blur - xl opacity - 70 animate - blob animation - delay - 2000">< / div>;
        <div className = "absolute bottom - 1 / 4 left - 1 / 3 w - 64 h - 64 bg - pink - 200 rounded - full mix - blend - multiply filter blur - xl opacity - 70 animate - blob animation - delay - 4000">< / div>;
      < / div>;
    < / div>;
  );
}
