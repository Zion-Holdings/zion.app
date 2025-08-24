import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

const EPISODES_PATH = path.join(process.cwd(), 'data', 'podcast', 'episodes.json');
const PUBLIC_DIR = path.join(process.cwd(), 'public', 'podcast');

function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();

  const { episodeId } = req.body || {};
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const idx = episodes.findIndex((e) => e.id === episodeId);
  if (idx === -1) return res.status(404).json({ error: 'Episode not found' });

  const episode = episodes[idx];
  const text = episode.transcript as string;

  const elevenKey = process.env.ELEVENLABS_API_KEY;
  const playhtKey = process.env.PLAYHT_API_KEY;

  const baseFilename = `${episode.id}-${Date.now()}`;
  const mp3Path = path.join(PUBLIC_DIR, `${baseFilename}.mp3`);
  const wavPath = path.join(PUBLIC_DIR, `${baseFilename}.wav`);
  const mp4Path = path.join(PUBLIC_DIR, `${baseFilename}.mp4`);

  let mp3Created = false;

  try {
    if (elevenKey) {
      const voiceId = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM';
      const resp = await axios.post(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
        { text, model_id: process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2' },
        { responseType: 'arraybuffer', headers: { 'xi-api-key': elevenKey, 'Content-Type': 'application/json' } }
      );
      fs.writeFileSync(mp3Path, Buffer.from(resp.data));
      mp3Created = true;
    } else if (playhtKey) {
      const resp = await axios.post(
        'https://api.play.ht/api/v2/tts',
        { text, voice: process.env.PLAYHT_VOICE || 'en-US-MichelleNeural' },
        { responseType: 'arraybuffer', headers: { Authorization: `Bearer ${playhtKey}`, 'Content-Type': 'application/json' } }
      );
      fs.writeFileSync(mp3Path, Buffer.from(resp.data));
      mp3Created = true;
    } else {
      // Stub silent mp3 if no provider configured
      fs.writeFileSync(mp3Path, Buffer.alloc(0));
      mp3Created = true;
    }

    if (mp3Created) {
      // Simple placeholders for WAV/MP4; real conversion would use ffmpeg
      fs.writeFileSync(wavPath, fs.readFileSync(mp3Path));
      fs.writeFileSync(mp4Path, fs.readFileSync(mp3Path));
    }

    const publicBase = '/podcast/' + baseFilename;
    episode.audio = {
      mp3Url: publicBase + '.mp3',
      wavUrl: publicBase + '.wav',
      mp4Url: publicBase + '.mp4',
    };

    episodes[idx] = episode;
    fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');

    return res.status(200).json({ episode });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error?.message || 'Synthesis failed' });
  }
}