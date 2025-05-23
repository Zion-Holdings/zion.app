declare module 'react-router-dom' {
  export function useParams<Params extends Record<string, string | undefined> = {}>(): Partial<Params>;
  export function Link(props: any): any;
  export function useNavigate(): (to: string) => void;
  export function Routes(props: any): any;
  export function Route(props: any): any;
}
