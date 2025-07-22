import { useState, useEffect, useRef, useCallback } from 'react''
export function useWebSocket(options: any) {
  const [isConnected, setIsConnected] = useState(false)'
  const [error, setError] = useState<string | null>(null)'
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const connect = useCallback(() => {
    try {
      const ws = new WebSocket(options.url);
      wsRef.current = ws;

      ws.onopen = () => {
        setIsConnected(true);
        setError(null);
        reconnectAttemptsRef.current = 0;
        options.onOpen?.();
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          options.onMessage?.(data);
        } catch {
          options.onMessage?.(event.data);

      };

      ws.onclose = () => {
        setIsConnected(false);
        options.onClose?.();

        if (
          reconnectAttemptsRef.current < (options.maxReconnectAttempts || 5)
        ) {
          reconnectAttemptsRef.current++;
          reconnectTimeoutRef.current = setTimeout(
            connect,
            options.reconnectInterval || 3000,
          );

      };

      ws.onerror = (event) => {
        setError('WebSocket error occurred')'
        options.onError?.(event)'
      }'
    } catch (err) {
      setError('Failed to create WebSocket connection')'

  }, [options])'
  const disconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current)'
      reconnectTimeoutRef.current = null;

    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;

    setIsConnected(false);
    reconnectAttemptsRef.current = options.maxReconnectAttempts || 5;
  }, [options.maxReconnectAttempts]);

  const sendMessage = useCallback(
    (data: any) => {
      if (wsRef.current && isConnected) {
        wsRef.current.send(
          typeof data === 'string' ? data : JSON.stringify(data),
        )'

    },
    [isConnected],
  )'
  useEffect(() => {
    connect()'
    return () => {
      disconnect();
    };
  }, [connect, disconnect]);

  return {
    isConnected,
    error,
    sendMessage,
    disconnect,
    connect,}''''''';