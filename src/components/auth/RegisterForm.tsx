import { Link } from 'react-router-dom';

export default function RegisterForm() {
  return (
    <div>
      {/* Registration form elements would go here */}
      <p className="text-sm">
        <Link to="/login" className="text-blue-400 underline">
          Already have an account? Sign in
        </Link>
      </p>
    </div>
  );
}
