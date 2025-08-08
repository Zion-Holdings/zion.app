export default function AuthIndex() {
  function simulateLogin() {
    try {
      localStorage.setItem('authUser', JSON.stringify({ name: 'Recruiter Jane', email: 'jane@example.com' }));
      alert('Logged in as Recruiter Jane');
    } catch {}
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">Sign In</h1>
      <p className="text-gray-600 dark:text-gray-300">Stub auth for demo. Click to sign in.</p>
      <button onClick={simulateLogin} className="enhanced-button enhanced-button-primary mt-3">Sign In</button>
    </div>
  );
}