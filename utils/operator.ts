type OperatorEvent = {
  type: string;
  sessionId: string;
  payload?: any;
};

export async function logSupportEventToOperator(event: OperatorEvent): Promise<void> {
  // Placeholder for real Operator integration; could POST to external service
  // For now, we just no-op to avoid failures
  return Promise.resolve();
}

export async function tagOperatorSession(sessionId: string, tag: string): Promise<void> {
  return Promise.resolve();
}