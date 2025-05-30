import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('/api/auth/register', { email, password });
    navigate('/marketplace');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border px-2 py-1 w-full"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border px-2 py-1 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Sign Up
      </button>
    </form>
  );
}
