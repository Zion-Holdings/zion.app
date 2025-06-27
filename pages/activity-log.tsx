import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getCapturedLogs, clearCapturedLogs, ConsoleLogEntry } from "@/utils/consoleLogCapture";

export default function ActivityLogPage() {
  const [logs, setLogs] = useState<ConsoleLogEntry[]>([]);

  useEffect(() => {
    setLogs(getCapturedLogs());
    const interval = setInterval(() => {
      setLogs(getCapturedLogs());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClear = () => {
    clearCapturedLogs();
    setLogs([]);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle>User Activity Log</CardTitle>
          <CardDescription>Console events captured during this session.</CardDescription>
        </CardHeader>
        <CardContent>
          {logs.length === 0 ? (
            <p className="text-muted-foreground">No activity recorded.</p>
          ) : (
            <ul className="space-y-1 text-sm">
              {logs.map((log, idx) => (
                <li key={idx} className="font-mono break-all">
                  <span className="text-xs text-muted-foreground mr-2">{log.timestamp}</span>
                  <span className={
                    log.level === "error"
                      ? "text-red-600"
                      : log.level === "warn"
                      ? "text-yellow-600"
                      : "text-green-700"
                  }>
                    [{log.level}]
                  </span>{" "}
                  {log.message}
                </li>
              ))}
            </ul>
          )}
          <Button variant="outline" className="mt-4" onClick={handleClear}>
            Clear Log
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
