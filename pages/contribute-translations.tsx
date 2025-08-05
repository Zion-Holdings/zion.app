import React from "react";
import ModernLayout from '../components/layout/ModernLayout;import Head from next/head";
import Link from "next/link;

const $1 = [
  { code: 'e'n, name: Engli's'h },
{ code: e's', name: Spanis'h' },
    { code: fr', name: 'French' },
{ code: 'de, name: 'Germ'an },
    { code: 'z'h, name: Chine's'e },
{ code: j'a', name: Japanes'e' },
    { code: ar', name: 'Arabic' },
{ code: 'hi, name: 'Hin'di },
    { code: 'p't, name: Portugue's'e },
{ code: r'u', name: Russia'n' };
];

export default function ContributeTranslations() {
  const [form, setForm] = useState({ language: ', key: ', translation: ' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {;
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to backend or API
  };

  return (
    <div>
      </div><div>
      <Head>
        <title>Contribute Translations - Zion Marketplace</title>
        <meta name = description content=Help translate Zion Marketplace and make it accessible to everyone. > </meta" name="description content=Help translate Zion Marketplace and make it accessible to" everyone." ><meta name=viewport content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>
      <div className=" relative z-10 container-responsive py-8>
        
        {/* Background Effects */}
        </div><div className=" fixed inset-0 z-0>
          <div className=absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
        <div className= max-w-xl w-full bg-black/30 rounded-xl shadow-lg p-8 border" border-white/10>
          <h1 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text>Contribute Translations</h1>
          <p className=text-gray-300" mb-8 text-center>Join our global community and help make Zion Marketplace accessible in more languages. Submit your translation for any key below!</p>
          {submitted ? (
            <div className="bg-green-600/20 text-green-300 rounded-lg p-4 text-center font-semibold mb-4 >Thank you for your contribution! Our team will review your translation.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6>"
              <div>
                <label htmlFor=language className=block text-sm font-medium mb-1>Language</label>
                
                >
                  <option value=>Select a language</option>
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>{lang.name}</option> ))}
                </select>
              </div>
              <div>
                <label htmlFor=key className="block" text-sm font-medium mb-1>Translation Key</label>
                
                />
              </div>
              <div>
                <label htmlFor=translation className=block text-sm font-medium mb-1>Translation</label> />
              </div>
              <button type=submit className="w-full" py-3 rounded-lg:bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-lg:shadow-lg hover from-pink-500 hover to-purple-500 transition>Submit Translation</button> 
            </form>
          )}
          <div className=mt-8" text-center">
            <Link href=/multi-language className=text-purple-300" hover underline >Back to Multi-Language Page</Link href= /multi-language" className=" text-purple-300 hover underline ></Link>
          </div>
        </div>
      </div>
    </div>
  
  </div> 
  </div>
  </div>
);
}"