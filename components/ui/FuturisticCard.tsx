import React from "react";

interface FuturisticCardProps {
  className?: string;
}

export default function FuturisticCard(_props: FuturisticCardProps) {
  return (
    <div className = "relative bg - gradient - to - br from - gray - 900 via - purple - 900 to - violet - 900 rounded - xl p - 8 text - white overflow - hidden">;
      <div className = "absolute inset - 0 bg - gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20">< / div>;
      <div className = "relative z - 10">;
        <div className = "flex items - center justify - between mb - 6">;
          <h3 className = "text - 2xl font - bold">Futuristic Card< / h3>;
          <div className = "w - 12 h - 12 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - full flex items - center justify - center">;
            <svg className = "w - 6 h - 6" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24">;
              <path strokeLinecap = "round" strokeLinejoin = "round" strokeWidth = {2} d = "M13 10V3L4 14h7v7l9 - 11h - 7z" / >;
            < / svg>;
          < / div>;
        < / div>;
        <p className = "text - gray - 300 mb - 6">;
          Experience the future with our cutting - edge technology solutions and innovative design.;
        < / p>;
        <div className = "flex space - x - 4">;
          <button className = "bg - gradient - to - r from - blue - 500 to - purple - 500 text - white px - 6 py - 2 rounded - lg hover: from - blue - 600 hover: to - purple - 600 transition - all duration - 300">;
            Explore;
          < / button>;
          <button className = "border border - gray - 600 text - gray - 300 px - 6 py - 2 rounded - lg hover: border - gray - 500 hover: text - white transition - all duration - 300">;
            Learn More;
          < / button>;
        < / div>;
      < / div>;
    < / div>;
  );
}
