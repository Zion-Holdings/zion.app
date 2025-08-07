import React, { useState } from "react";

interface UserEngagementSystemProps {
  className?: string;
}

export default function UserEngagementSystem(_props: UserEngagementSystemProps) {
  const [userStats, setUserStats] = useState({
    totalUsers: 1250, ;
    activeUsers: 892, ;
    newUsers: 45, ;
    engagementRate: 78.5, ;
  });

  const [recentActivity, setRecentActivity] = useState([;
    { id: 1, user: "John Doe", action: "Completed onboarding", time: "2 minutes ago" }, ;
    { id: 2, user: "Jane Smith", action: "Started new project", time: "5 minutes ago" }, ;
    { id: 3, user: "Mike Johnson", action: "Updated profile", time: "10 minutes ago" }, ;
  ]);

  return (
    <div className = "bg - white rounded - lg shadow - lg p - 6">;
      <h3 className = "text - xl font - semibold text - gray - 900 mb - 6">User Engagement< / h3>;
      
      <div className = "grid grid - cols - 2 md: grid - cols - 4 gap - 4 mb - 6">;
        <div className = "text - center">;
          <div className = "text - 2xl font - bold text - blue - 600">{userStats.totalUsers}< / div>;
          <div className = "text - sm text - gray - 600">Total Users< / div>;
        < / div>;
        <div className = "text - center">;
          <div className = "text - 2xl font - bold text - green - 600">{userStats.activeUsers}< / div>;
          <div className = "text - sm text - gray - 600">Active Users< / div>;
        < / div>;
        <div className = "text - center">;
          <div className = "text - 2xl font - bold text - purple - 600">{userStats.newUsers}< / div>;
          <div className = "text - sm text - gray - 600">New Users< / div>;
        < / div>;
        <div className = "text - center">;
          <div className = "text - 2xl font - bold text - orange - 600">{userStats.engagementRate}%< / div>;
          <div className = "text - sm text - gray - 600">Engagement Rate< / div>;
        < / div>;
      < / div>;

      <div>;
        <h4 className = "text - lg font - medium text - gray - 900 mb - 4">Recent Activity< / h4>;
        <div className = "space - y - 3">;
          {recentActivity.map((activity) = > (
            <div key = {activity.id} className = "flex items - center justify - between p - 3 bg - gray - 50 rounded - lg">;
              <div>;
                <p className = "font - medium text - gray - 900">{activity.user}< / p>;
                <p className = "text - sm text - gray - 600">{activity.action}< / p>;
              < / div>;
              <span className = "text - xs text - gray - 500">{activity.time}< / span>;
            < / div>;
          ))}
        < / div>;
      < / div>;
    < / div>;
  );
}
