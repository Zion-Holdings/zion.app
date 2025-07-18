}
;
export const getServerSideProps: GetServerSideProps<LogsPageProps> = async () => {
  try {
    // This would normally fetch logs from your logging system
    // For now, return mock data
    const mockLogs: LogEntry[] = [
      {
        id: '1','
        timestamp: new Date().toISOString(),
        level: 'info','
        message: 'Application started successfully','
        category: 'system','
        url: '/admin/logs''
      },
      {
        id: '2','
        timestamp: new Date(Date.now() - 60000).toISOString(),
        level: 'warn','
        message: 'Database connection slow','
        category: 'database','
        url: '/api/users''
      }