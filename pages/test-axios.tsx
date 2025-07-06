import { useEffect } from "react";
import axios from "axios";

declare global {
  interface Window {
    axios: typeof axios;
  }
}

export default function TestAxios() {
  useEffect(() => {
    (window as any).axios = axios;
    // Try a simple request to see if it works
    axios.get("/api/health").then(console.log).catch(console.error);
  }, []);
  return <div>Axios Test Page</div>;
} 