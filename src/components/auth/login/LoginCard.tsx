import Link from "next/link";
import { LoginForm } from "./LoginForm";
import { AuthButtons } from "@/components/AuthButtons";

export function LoginCard() {
  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Welcome back
        </h2>
        <div className="mt-2 text-sm text-zion-slate-light flex justify-center space-x-1">
          <span>Don't have an account?</span>
          <Link href="/signup">
            <a
              className="font-medium text-zion-cyan hover:text-zion-cyan-light"
              style={{ color: "#0af" }}
            >
              Create account
            </a>
          </Link>
        </div>
      </div>

      <div className="bg-zion-blue-dark rounded-lg p-6">
        <LoginForm />
        <AuthButtons />
      </div>
    </div>
  );
}
