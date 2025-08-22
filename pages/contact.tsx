import React from 'react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
  };
  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <div className="container mx-auto px-4 pt-28 pb-20 text-white">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Contact Zion Tech Group</h1>
          <p className="text-gray-300 mt-3">We respond fast. Tell us about your goals and we’ll recommend the best solution.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-black/40 border border-gray-700/60 rounded-2xl">
            <div className="flex items-center gap-3 text-cyan-300"><Phone className="w-5 h-5" /><a href={`tel:${contact.mobile}`} className="hover:underline">{contact.mobile}</a></div>
            <div className="mt-3 flex items-center gap-3 text-purple-300"><Mail className="w-5 h-5" /><a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a></div>
            <div className="mt-3 flex items-center gap-3 text-pink-300"><MapPin className="w-5 h-5" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noreferrer" className="hover:underline text-sm">{contact.address}</a></div>
            <div className="mt-3 flex items-center gap-3 text-emerald-300"><Clock className="w-5 h-5" /><span>Mon–Fri: 9AM–6PM EST</span></div>
          </div>
          <form className="md:col-span-2 p-6 bg-black/40 border border-gray-700/60 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="bg-gray-900/60 border border-gray-700/60 rounded-lg px-4 py-3 outline-none focus:border-cyan-500/60" placeholder="Full name" />
            <input className="bg-gray-900/60 border border-gray-700/60 rounded-lg px-4 py-3 outline-none focus:border-cyan-500/60" placeholder="Company" />
            <input className="bg-gray-900/60 border border-gray-700/60 rounded-lg px-4 py-3 outline-none focus:border-cyan-500/60 md:col-span-2" placeholder="Email" />
            <textarea className="bg-gray-900/60 border border-gray-700/60 rounded-lg px-4 py-3 outline-none focus:border-cyan-500/60 md:col-span-2" rows={6} placeholder="Tell us about your project, timeline, and goals"></textarea>
            <button type="submit" className="md:col-span-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:from-cyan-600 hover:to-blue-700">Request a consultation</button>
          </form>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}