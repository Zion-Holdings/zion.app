/**
 * Global TypeScript Definitions
 * 
 * This file provides comprehensive type definitions for:
 * - ES2024 features and APIs
 * - Modern browser APIs
 * - Web APIs and standards
 * - TypeScript 5.8+ features
 * - Next.js specific types
 * - Custom project types
 */

// ES2024 Features
declare global {
  // Array Grouping (ES2024)
  interface Array<T> {
    group<K extends string | number | symbol>(
      callbackfn: (value: T, index: number, array: T[]) => K
    ): Record<K, T[]>;
    
    groupToMap<K>(
      callbackfn: (value: T, index: number, array: T[]) => K
    ): Map<K, T[]>;
  }

  // Promise.withResolvers (ES2024)
  interface PromiseConstructor {
    withResolvers<T>(): {
      promise: Promise<T>;
      resolve: (value: T | PromiseLike<T>) => void;
      reject: (reason?: unknown) => void;
    };
  }

  // WeakRef and FinalizationRegistry (ES2021)
  interface WeakRef<T> {
    deref(): T | undefined;
  }

  interface FinalizationRegistry<T> {
    register(target: object, heldValue: T, unregisterToken?: object): void;
    unregister(unregisterToken: object): boolean;
  }

  // Web APIs
  interface Navigator {
    // Web Share API
    share?: (data?: ShareData) => Promise<void>;
    
    // Web Bluetooth API
    bluetooth?: Bluetooth;
    
    // Web USB API
    usb?: USB;
    
    // Web Serial API
    serial?: Serial;
    
    // Web HID API
    hid?: HID;
    
    // Web NFC API
    nfc?: NFC;
    
    // Web MIDI API
    requestMIDIAccess?: (options?: MIDIOptions) => Promise<MIDIAccess>;
    
    // Web Audio API
    mediaDevices?: MediaDevices;
    
    // Web Speech API
    speechSynthesis?: SpeechSynthesis;
    webkitSpeechSynthesis?: SpeechSynthesis;
    
    // Web Notifications API
    permissions?: Permissions;
    
    // Web Push API
    serviceWorker?: ServiceWorkerContainer;
    
    // Web App Manifest API
    standalone?: boolean;
    
    // Web Credentials API
    credentials?: CredentialsContainer;
    
    // Web Payment API
    payment?: PaymentRequest;
    
    // Web Contact Picker API
    contacts?: ContactsManager;
    
    // Web File System Access API
    showOpenFilePicker?: (options?: OpenFilePickerOptions) => Promise<FileSystemFileHandle[]>;
    showSaveFilePicker?: (options?: SaveFilePickerOptions) => Promise<FileSystemFileHandle>;
    showDirectoryPicker?: (options?: DirectoryPickerOptions) => Promise<FileSystemDirectoryHandle>;
    
    // Web Screen Capture API
    mediaDevices?: MediaDevices & {
      getDisplayMedia?: (constraints?: MediaStreamConstraints) => Promise<MediaStream>;
    };
    
    // Web Background Sync API
    serviceWorker?: ServiceWorkerContainer & {
      ready?: Promise<ServiceWorkerRegistration>;
    };
    
    // Web Background Fetch API
    backgroundFetch?: BackgroundFetchManager;
    
    // Web Periodic Background Sync API
    periodicBackgroundSync?: PeriodicBackgroundSyncManager;
    
    // Web Badging API
    setAppBadge?: (contents?: number) => Promise<void>;
    clearAppBadge?: () => Promise<void>;
    
    // Web App Install API
    beforeinstallprompt?: BeforeInstallPromptEvent;
    
    // Web Share Target API
    shareTarget?: ShareTarget;
    
    // Web File System API
    getInstalledRelatedApps?: () => Promise<RelatedApplication[]>;
    
    // Web App Manifest API
    getInstalledRelatedApps?: () => Promise<RelatedApplication[]>;
  }

  // Modern DOM APIs
  interface Element {
    // Intersection Observer API
    scrollIntoViewIfNeeded?: (centerIfNeeded?: boolean) => void;
    
    // Resize Observer API
    getBoundingClientRect(): DOMRect;
    
    // Mutation Observer API
    observe?: (target: Node, options?: MutationObserverInit) => void;
    
    // Performance Observer API
    performance?: Performance;
    
    // Web Animations API
    animate?: (keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions) => Animation;
    
    // Web Components API
    attachShadow?: (init: ShadowRootInit) => ShadowRoot;
    
    // Custom Elements API
    customElements?: CustomElementRegistry;
    
    // Shadow DOM API
    shadowRoot?: ShadowRoot | null;
    
    // HTML Template API
    template?: HTMLTemplateElement;
    
    // HTML Slot API
    slot?: string;
    
    // HTML Slot Assignment API
    assignedSlot?: HTMLSlotElement | null;
    
    // HTML Slot Change API
    slotchange?: Event;
    
    // HTML Slot Assignment API
    slotAssignment?: SlotAssignmentMode;
    
    // HTML Slot Assignment API
    slotAssignmentMode?: SlotAssignmentMode;
    
    // HTML Slot Assignment API
    slotAssignmentMode?: SlotAssignmentMode;
  }

  // Modern Fetch API
  interface RequestInit {
    // Fetch with AbortSignal
    signal?: AbortSignal;
    
    // Fetch with Keep-Alive
    keepalive?: boolean;
    
    // Fetch with Priority Hints
    priority?: 'high' | 'low' | 'auto';'    '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    // Fetch with Credentials
    credentials?: RequestCredentials;
    
    // Fetch with Mode
    mode?: RequestMode;
    
    // Fetch with Cache
    cache?: RequestCache;
    
    // Fetch with Redirect
    redirect?: RequestRedirect;
    
    // Fetch with Referrer
    referrer?: string;
    
    // Fetch with Referrer Policy
    referrerPolicy?: ReferrerPolicy;
    
    // Fetch with Integrity
    integrity?: string;
    
    // Fetch with Duplex
    duplex?: 'half' | 'full';'  }'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

  // Modern Web APIs
  interface Window {
    // Web Workers API
    Worker: typeof Worker;
    SharedWorker: typeof SharedWorker;
    ServiceWorker: typeof ServiceWorker;
    
    // Web Storage API
    localStorage: Storage;
    sessionStorage: Storage;
    
    // Web Database API
    indexedDB: IDBFactory;
    
    // Web Crypto API
    crypto: Crypto;
    
    // Web Performance API
    performance: Performance;
    
    // Web Timing API
    performance: Performance & {
      getEntriesByType(type: 'navigation'): PerformanceNavigationTiming[];'      getEntriesByType(type: 'resource'): PerformanceResourceTiming[];'      getEntriesByType(type: 'paint'): PerformancePaintTiming[];'      getEntriesByType(type: 'largest-contentful-paint'): LargestContentfulPaint[];'      getEntriesByType(type: 'first-input'): FirstInputDelay[];'      getEntriesByType(type: 'layout-shift'): LayoutShift[];'      getEntriesByType(type: 'longtask'): PerformanceLongTaskTiming[];'      getEntriesByType(type: 'element'): PerformanceElementTiming[];'      getEntriesByType(type: 'event'): PerformanceEventTiming[];'      getEntriesByType(type: 'measure'): PerformanceMeasure[];'      getEntriesByType(type: 'mark'): PerformanceMark[];'    };'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    
    // Web Beacon API
    navigator: Navigator & {
      sendBeacon?: (url: string, data?: BodyInit) => boolean;
    };
    
    // Web Push API
    PushManager: typeof PushManager;
    PushSubscription: typeof PushSubscription;
    PushSubscriptionOptions: typeof PushSubscriptionOptions;
    
    // Web Background Sync API
    BackgroundFetchManager: typeof BackgroundFetchManager;
    BackgroundFetchRecord: typeof BackgroundFetchRecord;
    BackgroundFetchRegistration: typeof BackgroundFetchRegistration;
    
    // Web Periodic Background Sync API
    PeriodicBackgroundSyncManager: typeof PeriodicBackgroundSyncManager;
    PeriodicBackgroundSyncRegistration: typeof PeriodicBackgroundSyncRegistration;
    
    // Web Badging API
    setAppBadge?: (contents?: number) => Promise<void>;
    clearAppBadge?: () => Promise<void>;
    
    // Web App Install API
    beforeinstallprompt?: BeforeInstallPromptEvent;
    
    // Web Share Target API
    shareTarget?: ShareTarget;
    
    // Web File System API
    getInstalledRelatedApps?: () => Promise<RelatedApplication[]>;
    
    // Web App Manifest API
    getInstalledRelatedApps?: () => Promise<RelatedApplication[]>;
    
    // Web Credentials API
    CredentialsContainer: typeof CredentialsContainer;
    Credential: typeof Credential;
    PasswordCredential: typeof PasswordCredential;
    FederatedCredential: typeof FederatedCredential;
    PublicKeyCredential: typeof PublicKeyCredential;
    
    // Web Payment API
    PaymentRequest: typeof PaymentRequest;
    PaymentResponse: typeof PaymentResponse;
    PaymentAddress: typeof PaymentAddress;
    PaymentMethodChangeEvent: typeof PaymentMethodChangeEvent;
    PaymentRequestUpdateEvent: typeof PaymentRequestUpdateEvent;
    
    // Web Contact Picker API
    ContactsManager: typeof ContactsManager;
    ContactInfo: typeof ContactInfo;
    ContactAddress: typeof ContactAddress;
    
    // Web File System Access API
    FileSystemHandle: typeof FileSystemHandle;
    FileSystemFileHandle: typeof FileSystemFileHandle;
    FileSystemDirectoryHandle: typeof FileSystemDirectoryHandle;
    FileSystemWritableFileStream: typeof FileSystemWritableFileStream;
    
    // Web Screen Capture API
    MediaDevices: typeof MediaDevices & {
      getDisplayMedia?: (constraints?: MediaStreamConstraints) => Promise<MediaStream>;
    };
    
    // Web Background Sync API
    ServiceWorkerContainer: typeof ServiceWorkerContainer & {
      ready?: Promise<ServiceWorkerRegistration>;
    };
    
    // Web Background Fetch API
    BackgroundFetchManager: typeof BackgroundFetchManager;
    BackgroundFetchRecord: typeof BackgroundFetchRecord;
    BackgroundFetchRegistration: typeof BackgroundFetchRegistration;
    
    // Web Periodic Background Sync API
    PeriodicBackgroundSyncManager: typeof PeriodicBackgroundSyncManager;
    PeriodicBackgroundSyncRegistration: typeof PeriodicBackgroundSyncRegistration;
    
    // Web Badging API
    setAppBadge?: (contents?: number) => Promise<void>;
    clearAppBadge?: () => Promise<void>;
    
    // Web App Install API
    beforeinstallprompt?: BeforeInstallPromptEvent;
    
    // Web Share Target API
    shareTarget?: ShareTarget;
    
    // Web File System API
    getInstalledRelatedApps?: () => Promise<RelatedApplication[]>;
    
    // Web App Manifest API
    getInstalledRelatedApps?: () => Promise<RelatedApplication[]>;
  }

  // TypeScript 5.8+ Features
  interface Array<T> {
    // Array Grouping (ES2024)
    group<K extends string | number | symbol>(
      callbackfn: (value: T, index: number, array: T[]) => K
    ): Record<K, T[]>;
    
    groupToMap<K>(
      callbackfn: (value: T, index: number, array: T[]) => K
    ): Map<K, T[]>;
  }

  interface PromiseConstructor {
    // Promise.withResolvers (ES2024)
    withResolvers<T>(): {
      promise: Promise<T>;
      resolve: (value: T | PromiseLike<T>) => void;
      reject: (reason?: unknown) => void;
    };
  }

  // WeakRef and FinalizationRegistry (ES2021)
  interface WeakRef<T> {
    deref(): T | undefined;
  }

  interface FinalizationRegistry<T> {
    register(target: object, heldValue: T, unregisterToken?: object): void;
    unregister(unregisterToken: object): boolean;
  }

  // Next.js specific types
  interface NextPageContext {
    // Next.js 13+ App Router
    params?: Record<string, string>;
    searchParams?: Record<string, string>;
  }

  // Custom project types
  interface ZionAppConfig {
    version: string;
    environment: 'development' | 'staging' | 'production';'    features: {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      auth: boolean;
      payments: boolean;
      analytics: boolean;
      monitoring: boolean;
    };
  }

  // Global utility types
  type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
  };

  type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

  type OptionalFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

  type NonNullableFields<T, K extends keyof T> = T & {
    [P in K]: NonNullable<T[P]>;
  };

  type AsyncReturnType<T extends (...args: unknown[]) => Promise<unknown>> = Awaited<ReturnType<T>>;

  type ComponentProps<T extends React.ComponentType<unknown>> = T extends React.ComponentType<infer P> ? P : never;

  type EventHandler<T extends Event = Event> = (event: T) => void;

  type FormEventHandler<T extends Element = Element> = (event: FormEvent<T>) => void;

  type ChangeEventHandler<T extends Element = Element> = (event: ChangeEvent<T>) => void;

  type KeyboardEventHandler<T extends Element = Element> = (event: KeyboardEvent<T>) => void;

  type MouseEventHandler<T extends Element = Element> = (event: MouseEvent<T>) => void;

  type TouchEventHandler<T extends Element = Element> = (event: TouchEvent<T>) => void;

  type WheelEventHandler<T extends Element = Element> = (event: WheelEvent<T>) => void;

  type DragEventHandler<T extends Element = Element> = (event: DragEvent<T>) => void;

  type FocusEventHandler<T extends Element = Element> = (event: FocusEvent<T>) => void;

  type CompositionEventHandler<T extends Element = Element> = (event: CompositionEvent<T>) => void;

  type ClipboardEventHandler<T extends Element = Element> = (event: ClipboardEvent<T>) => void;

  type PointerEventHandler<T extends Element = Element> = (event: PointerEvent<T>) => void;

  type TransitionEventHandler<T extends Element = Element> = (event: TransitionEvent<T>) => void;

  type AnimationEventHandler<T extends Element = Element> = (event: AnimationEvent<T>) => void;
}

// Export to make this a module;
export ;{}; 