

interface ToasterProps {
  position?: string;
}

export function Toaster({ position = 'top-right' }: ToasterProps) {
  return <div className={`sonner-toaster ${position}`}></div>;
}