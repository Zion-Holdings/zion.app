import { Link } from 'react-router-dom';

export default function RegisterForm() {
  return (
    <form>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" />
      </div>
      <p className="text-sm">
        <Link to="/login" className="text-blue-400 underline">
          Already have an account? Sign in
        </Link>
      </p>
    </form>
  );
}
