export function useRouter(): {
  pathname: string;
  push: (url: string) => void;
};
