// MCP 2025-06-18: Elicitation support - server-initiated requests for user information
export interface ElicitationRequest {
  type: "elicitation";
  prompt: string;
  schema?: Record<string, any>; // JSON Schema for expected response format
  title?: string;
  description?: string;
}

export interface ElicitationResponse {
  data: Record<string, any>;
}

export interface ElicitationCapability {
  /**
   * Whether the client supports elicitation requests from servers
   */
  elicitation?: {
    /**
     * Supported elicitation types (text, form, file, etc.)
     */
    types?: string[];
  };
}

/**
 * Create elicitation request helper
 */
export function createElicitationRequest(
  prompt: string,
  schema?: Record<string, any>,
  title?: string,
  description?: string
): ElicitationRequest {
  return {
    type: "elicitation",
    prompt,
    schema,
    title,
    description,
  };
}
