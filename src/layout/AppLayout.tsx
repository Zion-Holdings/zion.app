
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";

interface AppLayoutProps {
  children?: React.ReactNode;
  hideFooter?: boolean;
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {children ?? <Outlet />}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}
