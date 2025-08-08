export default function AuthPage() {
  return (
    <div className="py-8 space-y-3">
      <h1 className="text-xl font-semibold">Sign In</h1>
      <p className="text-gray-600 dark:text-gray-300">Auth provider not wired yet. For testing, set cookies via the helper API:</p>
      <ul className="list-disc pl-6 text-sm">
        <li><code>/api/auth/set-role?role=admin</code> (admin)</li>
        <li><code>/api/auth/set-role?role=talent&talent=ava-chen</code> (talent)</li>
      </ul>
    </div>
  );
}