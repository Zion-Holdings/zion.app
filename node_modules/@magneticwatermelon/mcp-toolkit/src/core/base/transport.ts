import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import type { JSONRPCMessage } from "@modelcontextprotocol/sdk/types.js";

export interface BaseTransport extends Transport {
  onclose?: (() => void) | undefined;
  onerror?: ((error: Error) => void) | undefined;
  onmessage?: ((message: JSONRPCMessage) => void) | undefined;

  send(message: JSONRPCMessage): Promise<void>;
  close(): Promise<void>;
  start(): Promise<void>;

  readonly type: string;

  isRunning(): boolean;
}

export abstract class AbstractTransport implements BaseTransport {
  abstract readonly type: string;

  protected _onclose?: () => void;
  protected _onerror?: (error: Error) => void;
  protected _onmessage?: (message: JSONRPCMessage) => void;

  set onclose(handler: (() => void) | undefined) {
    this._onclose = handler;
  }

  set onerror(handler: ((error: Error) => void) | undefined) {
    this._onerror = handler;
  }

  set onmessage(handler: ((message: JSONRPCMessage) => void) | undefined) {
    this._onmessage = handler;
  }

  abstract start(): Promise<void>;
  abstract send(message: JSONRPCMessage): Promise<void>;
  abstract close(): Promise<void>;
  abstract isRunning(): boolean;
}
