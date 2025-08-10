import React from "react";

export default function Aurora() {
  return (
    <div className="aurora absolute inset-0 -z-10 overflow-hidden">
      <div className="aurora-layer a1" />
      <div className="aurora-layer a2" />
      <div className="aurora-layer a3" />
      <style jsx>{`
        .aurora { pointer-events: none; }
        .aurora-layer { position: absolute; width: 120vmax; height: 120vmax; filter: blur(60px); opacity: 0.35; transform: translate(-10%, -10%); }
        .aurora-layer.a1 { background: radial-gradient(circle at 30% 30%, rgba(59,130,246,.5), transparent 60%); animation: drift1 22s ease-in-out infinite; top: -20vmax; left: -10vmax; }
        .aurora-layer.a2 { background: radial-gradient(circle at 70% 40%, rgba(99,102,241,.5), transparent 60%); animation: drift2 28s ease-in-out infinite; bottom: -25vmax; right: -15vmax; }
        .aurora-layer.a3 { background: radial-gradient(circle at 50% 70%, rgba(34,197,94,.4), transparent 60%); animation: drift3 26s ease-in-out infinite; top: 10vmax; right: 5vmax; }
        @keyframes drift1 { 0%,100% { transform: translate(-10%, -10%) } 50% { transform: translate(-6%, -14%) } }
        @keyframes drift2 { 0%,100% { transform: translate(6%, 8%) } 50% { transform: translate(10%, 4%) } }
        @keyframes drift3 { 0%,100% { transform: translate(0%, 0%) } 50% { transform: translate(-4%, 2%) } }
      `}</style>
    </div>
  );
}