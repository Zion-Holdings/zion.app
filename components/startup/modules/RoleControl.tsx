import React, { useState } from 'react';

const roles = ['CTO', 'Ops', 'Legal', 'Advisor', 'Contractor'];

export default function RoleControl() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(roles[0]);
  const [team, setTeam] = useState<Array<{ email: string; role: string }>>([]);

  function invite() {
    if (!email) return;
    setTeam((prev) => [...prev, { email, role }]);
    setEmail('');
  }

  return (
    <div id="roles" className="enhanced-card">
      <h2 className="text-lg font-semibold mb-4">Role Control</h2>
      <div className="flex gap-2 mb-3">
        <input className="border rounded px-3 py-2 flex-1 bg-white dark:bg-black" placeholder="email@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <select className="border rounded px-3 py-2 bg-white dark:bg-black" value={role} onChange={(e) => setRole(e.target.value)}>
          {roles.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
        <button onClick={invite} className="px-3 py-2 rounded bg-blue-600 text-white">Invite</button>
      </div>
      <ul className="text-sm divide-y divide-gray-200 dark:divide-gray-800">
        {team.map((member, idx) => (
          <li key={idx} className="py-2 flex items-center justify-between">
            <span>{member.email}</span>
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-900">{member.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}