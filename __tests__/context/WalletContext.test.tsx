import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// --- START OF MOCK SETUP ---

// Define valid mock Ethereum addresses
const MOCK_ADDRESS_1 = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
const MOCK_ADDRESS_2 = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
const MOCK_ADDRESS_3 = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC';

// Advanced type for mock AppKit to ensure Jest mock properties are available
type MockableAppKit = {
  open: jest.Mock;
  close: jest.Mock;
  disconnect: jest.Mock;
  getState: jest.Mock;
  getAddress: jest.Mock;
  getChainId: jest.Mock;
  subscribeProvider: jest.Mock;
  on: jest.Mock;
  off: jest.Mock;
  getWalletProvider: jest.Mock;
};

// Forward declaration for TestMockAppKit type
type TestMockAppKitInstance = Partial<MockableAppKit> & {
    _triggerSubscriptionCallback: (providerVal?: any) => Promise<void>;
    _triggerOnProviderChangedCallback: () => Promise<void>;
    _clearSubscriptionCallbacks: () => void;
    _clearOnProviderChangedCallbacks: () => void;
    _associatedMockEip1193Provider?: any;
};


// Helper function to create a new mock AppKit object for each test.
const makeMockAppKit = (config: Partial<MockableAppKit> = {}): TestMockAppKitInstance => {
  const subscriptionCallbacksStorage: (((provider?: any) => void) | ((provider?: any) => Promise<void>))[] = [];
  const onProviderChangedCallbacksStorage: ((() => void) | (() => Promise<void>))[] = [];

  // eslint-disable-next-line prefer-const
  let selfReferentialMock: TestMockAppKitInstance;

  const associatedMockEip1193Provider = {
    request: jest.fn(async (args: { method: string; params?: any[] }) => {
      // console.log(`AssociatedMockProvider received request: ${args.method}`, args.params);
      switch (args.method) {
        case 'eth_chainId': {
          const chainId = selfReferentialMock.getChainId?.() as (number | string | null | undefined);
          return chainId != null ? `0x${Number(chainId).toString(16)}` : '0x1';
        }
        case 'net_version': {
           const netVersion = selfReferentialMock.getChainId?.() as (number | string | null | undefined);
           return netVersion != null ? Number(netVersion).toString() : '1';
        }
        case 'eth_requestAccounts':
        case 'eth_accounts': {
          const addr = selfReferentialMock.getAddress?.();
          return addr ? [addr] : [];
        }
        case 'eth_blockNumber':
            return Promise.resolve('0x1');
        case 'eth_estimateGas':
            return Promise.resolve('0x5208');
        case 'eth_gasPrice':
            return Promise.resolve('0x4a817c800');
        default:
          // console.warn(`Unhandled method in associatedMockEip1193Provider: ${args.method}`);
          return Promise.resolve(undefined);
      }
    }),
    on: jest.fn(),
    removeListener: jest.fn(),
  };

  const baseMockPart: Omit<MockableAppKit, 'getWalletProvider'> = {
    open: jest.fn().mockResolvedValue(undefined) as jest.Mock,
    close: jest.fn().mockResolvedValue(undefined) as jest.Mock,
    disconnect: jest.fn().mockResolvedValue(undefined) as jest.Mock,
    getState: jest.fn().mockReturnValue({ isConnected: false }) as jest.Mock,
    getAddress: jest.fn().mockReturnValue(null) as jest.Mock,
    getChainId: jest.fn().mockReturnValue(null) as jest.Mock,
    subscribeProvider: jest.fn((callback: ((provider?: any) => void) | ((provider?: any) => Promise<void>)) => {
      subscriptionCallbacksStorage.push(callback);
      return jest.fn(() => {
        const index = subscriptionCallbacksStorage.indexOf(callback);
        if (index > -1) subscriptionCallbacksStorage.splice(index, 1);
      });
    }) as jest.Mock,
    on: jest.fn((event: string, callback: (() => void) | (() => Promise<void>)) => {
      if (event === 'providerChanged') {
        onProviderChangedCallbacksStorage.push(callback);
      }
    }) as jest.Mock,
    off: jest.fn((event: string, callback: (...args: any[]) => void) => {
      if (event === 'providerChanged') {
        const index = onProviderChangedCallbacksStorage.indexOf(callback as () => void);
        if (index > -1) onProviderChangedCallbacksStorage.splice(index, 1);
      }
    }) as jest.Mock,
  };

  selfReferentialMock = {
    ...baseMockPart,
    getWalletProvider: jest.fn().mockReturnValue(associatedMockEip1193Provider) as jest.Mock,
    ...config,
    _triggerSubscriptionCallback: async (providerVal?: any) => {
      for (const cb of subscriptionCallbacksStorage) {
        await cb(providerVal);
      }
    },
    _triggerOnProviderChangedCallback: async () => {
      for (const cb of onProviderChangedCallbacksStorage) {
        await cb();
      }
    },
    _clearSubscriptionCallbacks: () => { subscriptionCallbacksStorage.length = 0; },
    _clearOnProviderChangedCallbacks: () => { onProviderChangedCallbacksStorage.length = 0; },
    _associatedMockEip1193Provider: associatedMockEip1193Provider,
  };
  return selfReferentialMock;
};

type TestMockAppKit = ReturnType<typeof makeMockAppKit>;

const mockUseAppKit = jest.fn();
const mockCreateAppKit = jest.fn();

const initialMockAppKitInstance = makeMockAppKit();
mockCreateAppKit.mockReturnValue(initialMockAppKitInstance);

jest.mock('@reown/appkit/react', () => ({
  createAppKit: mockCreateAppKit,
  useAppKit: mockUseAppKit,
}));

jest.mock('@/config/env', () => ({
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
  const onUpdateMock = jest.fn((wallet) => {
    currentWalletState = wallet;
  });

  let activeUseAppKitMock: TestMockAppKit;
  let activeCreateAppKitMock: TestMockAppKit;

  beforeEach(() => {
    jest.clearAllMocks();
    onUpdateMock.mockClear();

    (initialMockAppKitInstance.getState as jest.Mock).mockReturnValue({ isConnected: false });

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
      (activeUseAppKitMock.getState as jest.Mock).mockReturnValue({ isConnected: true });
      (activeUseAppKitMock.getAddress as jest.Mock).mockReturnValue(MOCK_ADDRESS_1);
      (activeUseAppKitMock.getChainId as jest.Mock).mockReturnValue(1);
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
      (activeUseAppKitMock.getState as jest.Mock).mockReturnValue({ isConnected: true });
      (activeUseAppKitMock.getAddress as jest.Mock).mockReturnValue(MOCK_ADDRESS_1);
      (activeUseAppKitMock.getChainId as jest.Mock).mockReturnValue(1);
      await activeUseAppKitMock._triggerSubscriptionCallback();
    });
    expect(screen.getByTestId('address').textContent).toBe(MOCK_ADDRESS_1);

    await act(async () => {
      (activeUseAppKitMock.getAddress as jest.Mock).mockReturnValue(MOCK_ADDRESS_2);
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
      (activeUseAppKitMock.getState as jest.Mock).mockReturnValue({ isConnected: true });
      (activeUseAppKitMock.getAddress as jest.Mock).mockReturnValue(MOCK_ADDRESS_1);
      (activeUseAppKitMock.getChainId as jest.Mock).mockReturnValue(1);
      await activeUseAppKitMock._triggerSubscriptionCallback();
    });
    expect(screen.getByTestId('chainId').textContent).toBe('1');

    await act(async () => {
      (activeUseAppKitMock.getChainId as jest.Mock).mockReturnValue(5);
      await activeUseAppKitMock._triggerSubscriptionCallback();
    });
    expect(screen.getByTestId('chainId').textContent).toBe('5');
  });

  test('disconnectWallet calls appKit.disconnect and resets state', async () => {
    (activeCreateAppKitMock.getState as jest.Mock).mockReturnValue({ isConnected: true });

    render(
      <WalletProvider>
        <WalletConsumer onUpdate={onUpdateMock} />
      </WalletProvider>
    );

    await act(async () => {
      (activeUseAppKitMock.getState as jest.Mock).mockReturnValue({ isConnected: true });
      (activeUseAppKitMock.getAddress as jest.Mock).mockReturnValue(MOCK_ADDRESS_1);
      (activeUseAppKitMock.getChainId as jest.Mock).mockReturnValue(1);
      await activeUseAppKitMock._triggerSubscriptionCallback();
    });
    expect(screen.getByTestId('isConnected').textContent).toBe('true');

    await act(async () => {
      fireEvent.click(screen.getByText('Disconnect'));
    });

    expect(activeCreateAppKitMock.disconnect).toHaveBeenCalledTimes(1);

    await act(async () => {
      (activeCreateAppKitMock.getState as jest.Mock).mockReturnValue({ isConnected: false });
      (activeUseAppKitMock.getState as jest.Mock).mockReturnValue({ isConnected: false });
      (activeUseAppKitMock.getAddress as jest.Mock).mockReturnValue(null);
      (activeUseAppKitMock.getChainId as jest.Mock).mockReturnValue(null);
      (activeUseAppKitMock.getWalletProvider as jest.Mock).mockReturnValue(null);
      await activeUseAppKitMock._triggerSubscriptionCallback();
    });

    expect(screen.getByTestId('isConnected').textContent).toBe('false');
    expect(screen.getByTestId('address').textContent).toBe('');
  });

  test('connects and updates wallet state when appKit is available and subscribeProvider is present', async () => {
    // mockCreateAppKit is activeCreateAppKitMock via beforeEach
    // makeMockAppKit by default includes a jest.fn() for subscribeProvider

    render(
      <WalletProvider>
        <WalletConsumer onUpdate={onUpdateMock} />
      </WalletProvider>
    );

    // Allow initial effects to run (AppKit initialization, isWalletSystemAvailable set)
    await act(async () => {
      // No specific action needed here, just waiting for effects
      // console.log('Initial currentWalletState:', currentWalletState?.isWalletSystemAvailable);
    });

    // Verify wallet system is available after initial setup
    expect(currentWalletState.isWalletSystemAvailable).toBe(true);
    // Also check AppKit instance on WalletContext (via currentWalletState.appKit)
    expect(currentWalletState.appKit).toBe(activeCreateAppKitMock);


    // Simulate user clicking connect
    await act(async () => {
      fireEvent.click(screen.getByText('Connect'));
    });

    // Assert that appKit.open was called (connectWallet uses appKitRef.current which is activeCreateAppKitMock)
    expect(activeCreateAppKitMock.open).toHaveBeenCalledTimes(1);

    // Update mock AppKit instance to reflect successful connection
    await act(async () => {
      (activeCreateAppKitMock.getState as jest.Mock).mockReturnValue({ isConnected: true });
      (activeCreateAppKitMock.getAddress as jest.Mock).mockReturnValue(MOCK_ADDRESS_1);
      (activeCreateAppKitMock.getChainId as jest.Mock).mockReturnValue(1);
      // The getWalletProvider should return the mock EIP-1193 provider associated with the AppKit mock
      (activeCreateAppKitMock.getWalletProvider as jest.Mock).mockReturnValue(activeCreateAppKitMock._associatedMockEip1193Provider);
    });

    // Trigger the subscription callback to simulate wallet connection event
    await act(async () => {
      await activeCreateAppKitMock._triggerSubscriptionCallback();
    });

    // Assertions
    expect(screen.getByTestId('isConnected').textContent).toBe('true');
    expect(screen.getByTestId('address').textContent).toBe(MOCK_ADDRESS_1);
    expect(screen.getByTestId('chainId').textContent).toBe('1');
    expect(activeCreateAppKitMock.subscribeProvider).toHaveBeenCalled();

    // Check that provider and signer are set in the context's state
    expect(currentWalletState.provider).not.toBeNull();
    expect(currentWalletState.signer).not.toBeNull();

    // Additional check: Ensure the provider in context has a functioning getNetwork (ethers v6)
    // or equivalent check for signer resolution.
    // This implicitly tests that the BrowserProvider was created correctly.
    if (currentWalletState.provider) {
      const network = await currentWalletState.provider.getNetwork();
      expect(network.chainId).toBe(BigInt(1)); // Chain ID is 1
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
     (localActiveUseAppKitMock.on as jest.Mock).mockImplementation((event, callback) => {
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
      (localActiveUseAppKitMock.getState as jest.Mock).mockReturnValue({ isConnected: true });
      (localActiveUseAppKitMock.getAddress as jest.Mock).mockReturnValue(MOCK_ADDRESS_3);
      (localActiveUseAppKitMock.getChainId as jest.Mock).mockReturnValue(42);

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
            <WalletConsumer onUpdate={jest.fn()} />
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
