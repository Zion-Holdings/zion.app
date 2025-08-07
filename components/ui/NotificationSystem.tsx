import React, { useState } from "react";

interface NotificationSystemProps {
  className?: string;
}

export default function NotificationSystem(_props: NotificationSystemProps) {
  const [notifications, setNotifications] = useState([;
    { id: 1, message: "System update completed", type: "success", time: "2 minutes ago" }, ;
    { id: 2, message: "New feature available", type: "info", time: "5 minutes ago" }, ;
    { id: 3, message: "Maintenance scheduled", type: "warning", time: "1 hour ago" }, ;
  ]);

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "success": ;
        return "bg - green - 100 border - green - 400 text - green - 800";
      case "warning": ;
        return "bg - yellow - 100 border - yellow - 400 text - yellow - 800";
      case "error": ;
        return "bg - red - 100 border - red - 400 text - red - 800";
      default: ;
        return "bg - blue - 100 border - blue - 400 text - blue - 800";
    }
  };

  return (
    <div className = "fixed top - 4 right - 4 z - 50 space - y - 2">;
      {notifications.map((notification) => (
        <div;
          key = {notification.id}
          className = {`max - w - sm w - full border - l - 4 p - 4 rounded - r - lg shadow - lg ${getTypeStyles(notification.type)}`}
        >;
          <div className = "flex justify - between items - start">;
            <div className = "flex - 1">;
              <p className = "text - sm font - medium">{notification.message}< / p>;
              <p className = "text - xs opacity - 75 mt - 1">{notification.time}< / p>;
            </div>;
            <button;
              onClick = {() => removeNotification(notification.id)}
              className = "ml - 4 text - sm opacity - 75 hover: opacity - 100";
            >;
              ×;
            </button>;
          </div>;
        </div>;
      ))}
    </div>;
  );
}
