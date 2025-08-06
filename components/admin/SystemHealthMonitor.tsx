import React, { useState, useEffect } from ';react';
;
interface SystemHealthMonitorProps {;
  className?: string;
};
const SystemHealthMonitor: React.FC<SystemHealthMonitorProps> = ({ className="""" }) => {;
  const [isHealthy, setIsHealthy] = useState(true);
  const [lastCheck, setLastCheck] = useState(new Date());
;
  useEffect(() => {;
    const interval = setInterval(() => {;
      setIsHealthy(Math.random() > 0.1);
      setLastCheck(new Date());
    }, 5000);
;
    return () => clearInterval(interval);
  }, []);
;
  return (;
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>;
      <h2 className=""""text-xl font-semibold text-gray-900 mb-4">System Health Monitor</h2>
      "
      <div className=""""flex items-center space-x-3 mb-4">
        <div className={`w-4 h-4 rounded-full ${isHealthy ? 'bg-green-500' : 'bg-red-500'}`}></div>"
        <span className=""""text-sm font-medium">;
          Status: {isHealthy ? 'Healthy' : 'Warning'};
        </span>;
      </div>
      "
      <div className=""""text-sm text-gray-600">;
        Last check: {lastCheck.toLocaleTimeString()};
      </div>;
    </div>;
  );
};

export default SystemHealthMonitor; "