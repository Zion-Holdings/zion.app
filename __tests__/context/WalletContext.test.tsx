import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi, describe, test, expect, beforeEach, type MockInstance, type Mocked } from 'vitest';

// --- START OF MOCK SETUP ---

const MOCK_ADDRESS_1 = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
const MOCK_ADDRESS_2 = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
const MOCK_ADDRESS_3 = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC';

type MockableAppKit = {
  open: MockInstance<[], Promise<void>>;
  close: MockInstance<[], Promise<void>>;
  disconnect: MockInstance<[], Promise<void>>;
  getState: MockInstance<[], { isConnected: boolean }>;
  getAddress: MockInstance<[], string | null>;
  getChainId: MockInstance<[], number | string | null>;
  subscribeProvider: MockInstance<[callback: (provider?: any) => void | Promise<void>], () => void>;
  on: MockInstance<[event: string, callback: () => void | Promise<void>], void>;
  off: MockInstance<[event: string, callback: (...args: any[]) => void], void>;
  getWalletProvider: MockInstance<[], any>;
};

type TestMockAppKitInstance = Partial<MockableAppKit> & {
    _triggerSubscriptionCallback: (providerVal?: any) => Promise<void>;
    _triggerOnProviderChangedCallback: () => Promise<void>;
    _clearSubscriptionCallbacks: () => void;
    _clearOnProviderChangedCallbacks: () => void;
    _associatedMockEip1193Provider?: any;
};

const makeMockAppKit = (config: Partial<MockableAppKit> = {}): TestMockAppKitInstance => {
  const subscriptionCallbacksStorage: (((provider?: any) => void) | ((provider?: any) => Promise<void>))[] = [];
  const onProviderChangedCallbacksStorage: ((() => void) | (() => Promise<void>))[] = [];
  let selfReferentialMock: TestMockAppKitInstance;

  const associatedMockEip1193Provider = {
    request: vi.fn(async (args: { method: string; params?: any[] }) => {
      switch (args.method) {
        case 'eth_chainId': {
          const chainId = selfReferentialMock.getChainId?.() as (number | string | null | undefined);
          return chainId != null ? `0x${Number(chainId).toString(16)}` : '0x1';
        }
        case 'net_version': {
           const netVersion = selfReferentialMock.getChainId?.() as (number | string | null | undefined);
           return netVersion != null ? Number(netVersion).toString() : '1';
        }
        case 'eth_requestAccounts': case 'eth_accounts': {
          const addr = selfReferentialMock.getAddress?.();
          return addr ? [addr] : [];
        }
        case 'eth_blockNumber': return Promise.resolve('0x1');
        case 'eth_estimateGas': return Promise.resolve('0x5208');
        case 'eth_gasPrice': return Promise.resolve('0x4a817c800');
        default: return Promise.resolve(undefined);
      }
    }),
    on: vi.fn(),
    removeListener: vi.fn(),
  };

  const baseMockPart: Omit<MockableAppKit, 'getWalletProvider'> = {
    open: vi.fn().mockResolvedValue(undefined),
    close: vi.fn().mockResolvedValue(undefined),
    disconnect: vi.fn().mockResolvedValue(undefined),
    getState: vi.fn().mockReturnValue({ isConnected: false }),
    getAddress: vi.fn().mockReturnValue(null),
    getChainId: vi.fn().mockReturnValue(null),
    subscribeProvider: vi.fn((callback) => {
      subscriptionCallbacksStorage.push(callback);
      return vi.fn(() => {
        const index = subscriptionCallbacksStorage.indexOf(callback);
        if (index > -1) subscriptionCallbacksStorage.splice(index, 1);
      });
    }),
    on: vi.fn((event, callback) => {
      if (event === 'providerChanged') {
        onProviderChangedCallbacksStorage.push(callback);
      }
    }),
    off: vi.fn((event, callback) => {
      if (event === 'providerChanged') {
        const index = onProviderChangedCallbacksStorage.indexOf(callback as () => void);
        if (index > -1) onProviderChangedCallbacksStorage.splice(index, 1);
      }
    }),
  };

  selfReferentialMock = {
    ...baseMockPart,
    getWalletProvider: vi.fn().mockReturnValue(associatedMockEip1193Provider),
    ...config,
    _triggerSubscriptionCallback: async (providerVal?: any) => {
      for (const cb of subscriptionCallbacksStorage) { await cb(providerVal); }
    },
    _triggerOnProviderChangedCallback: async () => {
      for (const cb of onProviderChangedCallbacksStorage) { await cb(); }
    },
    _clearSubscriptionCallbacks: () => { subscriptionCallbacksStorage.length = 0; },
    _clearOnProviderChangedCallbacks: () => { onProviderChangedCallbacksStorage.length = 0; },
    _associatedMockEip1193Provider: associatedMockEip1193Provider,
  };
  return selfReferentialMock;
};

type TestMockAppKit = ReturnType<typeof makeMockAppKit>;

const mockUseAppKit = vi.fn();
const mockCreateAppKit = vi.fn();

const initialMockAppKitInstance = makeMockAppKit();
mockCreateAppKit.mockReturnValue(initialMockAppKitInstance);

vi.mock('@reown/appkit/react', () => ({
  createAppKit: mockCreateAppKit,
  useAppKit: mockUseAppKit,
}));

vi.mock('@/config/env', () => ({
  getAppKitProjectId: () => 'test_project_id_from_mock',
}));


import { WalletProvider, useWallet, WalletContextType } from '../../src/context/WalletContext';

const WalletConsumer: React.FC<{ onUpdate: (wallet: WalletContextType) => void }> = ({ onUpdate }) => {
  const wallet = useWallet();
  React.useEffect(() => {
    onUpdate(wallet);
  }, [wallet, onUpdate]);

  return (
    <div>
      <button onClick={() => wallet.connectWallet()}>Connect</button>
      <button onClick={() => wallet.disconnectWallet()}>Disconnect</button>
      <div data-testid="address">{wallet.address}</div>
      <div data-testid="displayAddress">{wallet.displayAddress}</div>
      <div data-testid="chainId">{wallet.chainId?.toString()}</div>
      <div data-testid="isConnected">{String(wallet.isConnected)}</div>
      <div data-testid="appKitAvailable">{String(!!wallet.appKit)}</div>
    </div>
  );
};

describe('WalletProvider', () => {
  let currentWalletState: WalletContextType;
  const onUpdateMock = vi.fn((wallet) => {
    currentWalletState = wallet;
  });

  let activeUseAppKitMock: TestMockAppKit;
  let activeCreateAppKitMock: TestMockAppKit;

  beforeEach(() => {
    vi.clearAllMocks();
    onUpdateMock.mockClear();

    (initialMockAppKitInstance.getState as MockInstance<any,any>).mockReturnValue({ isConnected: false });

    activeCreateAppKitMock = initialMockAppKitInstance;
    activeUseAppKitMock = makeMockAppKit();

    mockUseAppKit.mockReturnValue(activeUseAppKitMock);
    mockCreateAppKit.mockReturnValue(activeCreateAppKitMock);
  });

  test('initial state is correct', () => {
    render(
      <WalletProvider>
        <WalletConsumer onUpdate={onUpdateMock} />
      </WalletProvider>
    );
    expect(screen.getByTestId('address').textContent).toBe('');
    expect(screen.getByTestId('displayAddress').textContent).toBe('');
    expect(screen.getByTestId('chainId').textContent).toBe('');
    expect(screen.getByTestId('isConnected').textContent).toBe('false');
    expect(screen.getByTestId('appKitAvailable').textContent).toBe(String(!!activeCreateAppKitMock));
    expect(currentWalletState.provider).toBeNull();
    expect(currentWalletState.signer).toBeNull();
  });

  test('connectWallet calls appKit.open and subscribes via subscribeProvider', async () => {
    render(
      <WalletProvider>
        <WalletConsumer onUpdate={onUpdateMock} />
      </WalletProvider>
    );

    await act(async () => {
      fireEvent.click(screen.getByText('Connect'));
    });

    expect(activeUseAppKitMock.open).toHaveBeenCalledTimes(1);
    expect(activeUseAppKitMock.subscribeProvider).toHaveBeenCalled();

    await act(async () => {
      (activeUseAppKitMock.getState as MockInstance<any,any>).mockReturnValue({ isConnected: true });
      (activeUseAppKitMock.getAddress as MockInstance<any,any>).mockReturnValue(MOCK_ADDRESS_1);
      (activeUseAppKitMock.getChainId as MockInstance<any,any>).mockReturnValue(1);
      await activeUseAppKitMock._triggerSubscriptionCallback();
    });

    expect(screen.getByTestId('isConnected').textContent).toBe('true');
    expect(screen.getByTestId('address').textContent).toBe(MOCK_ADDRESS_1);
    expect(screen.getByTestId('displayAddress').textContent).toBe('0xf39F...2266');
    expect(screen.getByTestId('chainId').textContent).toBe('1');
  });

  test('handles accountsChanged event via subscribeProvider', async () => {
    render(
      <WalletProvider>
        <WalletConsumer onUpdate={onUpdateMock} />
      </WalletProvider>
    );

    await act(async () => {
      (activeUseAppKitMock.getState as MockInstance<any,any>).mockReturnValue({ isConnected: true });
      (activeUseAppKitMock.getAddress as MockInstance<any,any>).mockReturnValue(MOCK_ADDRESS_1);
      (activeUseAppKitMock.getChainId as MockInstance<any,any>).mockReturnValue(1);
      await activeUseAppKitMock._triggerSubscriptionCallback();
    });
    expect(screen.getByTestId('address').textContent).toBe(MOCK_ADDRESS_1);

    await act(async () => {
      (activeUseAppKitMock.getAddress as MockInstance<any,any>).mockReturnValue(MOCK_ADDRESS_2);
      await activeUseAppKitMock._triggerSubscriptionCallback();
    });
    expect(screen.getByTestId('address').textContent).toBe(MOCK_ADDRESS_2);
  });

  test('handles chainChanged event via subscribeProvider', async () => {
     render(
      <WalletProvider>
        <WalletConsumer onUpdate={onUpdateMock} />
      </WalletProvider>
    );

    await act(async () => {
      (activeUseAppKitMock.getState as MockInstance<any,any>).mockReturnValue({ isConnected: true });
      (activeUseAppKitMock.getAddress as MockInstance<any,any>).mockReturnValue(MOCK_ADDRESS_1);
      (activeUseAppKitMock.getChainId as MockInstance<any,any>).mockReturnValue(1);
      await activeUseAppKitMock._triggerSubscriptionCallback();
    });
    expect(screen.getByTestId('chainId').textContent).toBe('1');

    await act(async () => {
      (activeUseAppKitMock.getChainId as MockInstance<any,any>).mockReturnValue(5);
      await activeUseAppKitMock._triggerSubscriptionCallback();
    });
    expect(screen.getByTestId('chainId').textContent).toBe('5');
  });

  test('disconnectWallet calls appKit.disconnect and resets state', async () => {
    (activeCreateAppKitMock.getState as MockInstance<any,any>).mockReturnValue({ isConnected: true });

    render(
      <WalletProvider>
        <WalletConsumer onUpdate={onUpdateMock} />
      </WalletProvider>
    );

    await act(async () => {
      (activeUseAppKitMock.getState as MockInstance<any,any>).mockReturnValue({ isConnected: true });
      (activeUseAppKitMock.getAddress as MockInstance<any,any>).mockReturnValue(MOCK_ADDRESS_1);
      (activeUseAppKitMock.getChainId as MockInstance<any,any>).mockReturnValue(1);
      await activeUseAppKitMock._triggerSubscriptionCallback();
    });
    expect(screen.getByTestId('isConnected').textContent).toBe('true');

    await act(async () => {
      fireEvent.click(screen.getByText('Disconnect'));
    });

    expect(activeCreateAppKitMock.disconnect).toHaveBeenCalledTimes(1);

    await act(async () => {
      (activeCreateAppKitMock.getState as MockInstance<any,any>).mockReturnValue({ isConnected: false });
      (activeUseAppKitMock.getState as MockInstance<any,any>).mockReturnValue({ isConnected: false });
      (activeUseAppKitMock.getAddress as MockInstance<any,any>).mockReturnValue(null);
      (activeUseAppKitMock.getChainId as MockInstance<any,any>).mockReturnValue(null);
      (activeUseAppKitMock.getWalletProvider as MockInstance<any,any>).mockReturnValue(null);
      await activeUseAppKitMock._triggerSubscriptionCallback();
    });

    expect(screen.getByTestId('isConnected').textContent).toBe('false');
    expect(screen.getByTestId('address').textContent).toBe('');
  });

  test('connects and updates wallet state when appKit is available and subscribeProvider is present', async () => {
    render(
      <WalletProvider>
        <WalletConsumer onUpdate={onUpdateMock} />
      </WalletProvider>
    );

    await act(async () => {});

    expect(currentWalletState.isWalletSystemAvailable).toBe(true);
    expect(currentWalletState.appKit).toBe(activeCreateAppKitMock);

    await act(async () => {
      fireEvent.click(screen.getByText('Connect'));
    });

    expect(activeCreateAppKitMock.open).toHaveBeenCalledTimes(1);

    await act(async () => {
      (activeCreateAppKitMock.getState as MockInstance<any,any>).mockReturnValue({ isConnected: true });
      (activeCreateAppKitMock.getAddress as MockInstance<any,any>).mockReturnValue(MOCK_ADDRESS_1);
      (activeCreateAppKitMock.getChainId as MockInstance<any,any>).mockReturnValue(1);
      (activeCreateAppKitMock.getWalletProvider as MockInstance<any,any>).mockReturnValue(activeCreateAppKitMock._associatedMockEip1193Provider);
    });

    await act(async () => {
      await activeCreateAppKitMock._triggerSubscriptionCallback();
    });

    expect(screen.getByTestId('isConnected').textContent).toBe('true');
    expect(screen.getByTestId('address').textContent).toBe(MOCK_ADDRESS_1);
    expect(screen.getByTestId('chainId').textContent).toBe('1');
    expect(activeCreateAppKitMock.subscribeProvider).toHaveBeenCalled();

    expect(currentWalletState.provider).not.toBeNull();
    expect(currentWalletState.signer).not.toBeNull();

    if (currentWalletState.provider) {
      const network = await currentWalletState.provider.getNetwork();
      expect(network.chainId).toBe(BigInt(1));
    }
    if (currentWalletState.signer) {
        const signerAddress = await currentWalletState.signer.getAddress();
        expect(signerAddress).toBe(MOCK_ADDRESS_1);
    }
  });

  test('uses on/off for event handling if subscribeProvider is not available', async () => {
    const localActiveUseAppKitMock = makeMockAppKit({
        subscribeProvider: undefined as any,
    });
     (localActiveUseAppKitMock.on as MockInstance<any,any>).mockImplementation((event:any, callback:any) => {
        if (event === 'providerChanged') {
            (localActiveUseAppKitMock as any)._onProviderChangedCallbackSpecific = callback;
        }
    });

    mockUseAppKit.mockReturnValue(localActiveUseAppKitMock);

    const localActiveCreateAppKitMock = makeMockAppKit({ subscribeProvider: undefined as any });
    mockCreateAppKit.mockReturnValue(localActiveCreateAppKitMock);

    render(
      <WalletProvider>
        <WalletConsumer onUpdate={onUpdateMock} />
      </WalletProvider>
    );

    expect(localActiveUseAppKitMock.on).toHaveBeenCalledWith('providerChanged', expect.any(Function));

    await act(async () => {
      (localActiveUseAppKitMock.getState as MockInstance<any,any>).mockReturnValue({ isConnected: true });
      (localActiveUseAppKitMock.getAddress as MockInstance<any,any>).mockReturnValue(MOCK_ADDRESS_3);
      (localActiveUseAppKitMock.getChainId as MockInstance<any,any>).mockReturnValue(42);

      if ((localActiveUseAppKitMock as any)._onProviderChangedCallbackSpecific) {
        await (localActiveUseAppKitMock as any)._onProviderChangedCallbackSpecific();
      } else {
        await localActiveUseAppKitMock._triggerOnProviderChangedCallback();
      }
    });

    expect(screen.getByTestId('isConnected').textContent).toBe('true');
    expect(screen.getByTestId('address').textContent).toBe(MOCK_ADDRESS_3);
    expect(screen.getByTestId('chainId').textContent).toBe('42');

    const { unmount } = render(
        <WalletProvider>
            <WalletConsumer onUpdate={vi.fn()} />
        </WalletProvider>
    );
    unmount();
    expect(localActiveUseAppKitMock.off).toHaveBeenCalledWith('providerChanged', expect.any(Function));
  });

  test('renders without AppKit instance and does not throw', () => {
    mockUseAppKit.mockReturnValue(undefined as any);
    mockCreateAppKit.mockReturnValue(undefined as any);

    expect(() => {
      render(
        <WalletProvider>
          <WalletConsumer onUpdate={onUpdateMock} />
        </WalletProvider>
      );
    }).not.toThrow();
  });
});
