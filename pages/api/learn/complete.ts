import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const usersPath = path.join(process.cwd(), 'data', 'learn', 'users.json');
const coursesPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');

function readJson(p: string) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

function writeJson(p: string, data: any) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { userId = 'demo-user', courseId, enableBoost } = req.body || {};
  if (!courseId) return res.status(400).json({ error: 'courseId required' });

  try {
    const users = readJson(usersPath);
    const courses = readJson(coursesPath);
    const course = courses.find((c: any) => c.id === courseId);
    if (!course) return res.status(404).json({ error: 'Course not found' });

    const user = users[userId] || { userId, name: userId, slug: userId, certifications: [], badges: [], boostInSearch: false, progress: {} };
    if (!user.certifications.includes(courseId)) user.certifications.push(courseId);
    if (!user.badges.includes(course.certificationBadge)) user.badges.push(course.certificationBadge);
    if (typeof enableBoost === 'boolean') user.boostInSearch = enableBoost;

    // Mark progress complete
    user.progress[courseId] = { completed: true, percent: 100, completedLessons: (course.lessons || []).map((l: any) => l.id) };

    users[userId] = user;
    writeJson(usersPath, users);
    return res.status(200).json({ ok: true, user });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Failed to complete course' });
  }
}