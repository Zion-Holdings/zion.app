export type MessageCallback = (message: unknown) => void;

export const messageChannelHandler = {
  sendMessage: (_message: unknown): void => {
    // No-op placeholder. Implement transport in the future if needed.
  },
  receiveMessage: (_callback: MessageCallback): void => {
    // No-op placeholder registration. Store or wire to transport when available.
  },
};
