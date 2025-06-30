// src/utils/correlationManager.ts

let currentCorrelationId: string | null = null;
let lastSetTime: number | null = null;

const CORRELATION_ID_TTL = 5 * 60 * 1000; // 5 minutes TTL for the correlation ID

/**
 * Sets the current correlation ID.
 * It will automatically expire after a set TTL.
 */
export function setCorrelationId(id: string): void {
  currentCorrelationId = id;
  lastSetTime = Date.now();
}

/**
 * Gets the current correlation ID if it hasn't expired.
 * Returns null if no ID is set or if it has expired.
 */
export function getCorrelationId(): string | null {
  if (currentCorrelationId && lastSetTime) {
    if (Date.now() - lastSetTime < CORRELATION_ID_TTL) {
      return currentCorrelationId;
    } else {
      // ID has expired
      currentCorrelationId = null;
      lastSetTime = null;
      return null;
    }
  }
  return null;
}

/**
 * Clears the current correlation ID.
 */
export function clearCorrelationId(): void {
  currentCorrelationId = null;
  lastSetTime = null;
}
