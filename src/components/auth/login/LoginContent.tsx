import { LoginCard } from "./LoginCard";

export function LoginContent() {
  return (
    <div className="flex min-h-screen bg-zion-blue mt-16">
      <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <LoginCard />
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-purple-light opacity-80">
          <div className="flex flex-col justify-center items-center h-full px-8">
            <div className="max-w-md text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Join the Zion Community</h3>
              <p className="text-lg text-white/80">
                Connect with thousands of AI professionals, discover new opportunities, and showcase your services to a global audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
