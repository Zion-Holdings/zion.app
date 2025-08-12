import React from 'react';

// Helper function to generate IDs
const generateId = (label: string) => {
  return label.toLowerCase().replace(/[^\w]+/g, '-');
};

const GenesisPage: React.FC = () => {
  const autoDeployModules = [
    "/marketplace (Jobs, Talent, Quotes)",
    "/gpt (ZionGPT Core + Prompt Router)",
    "/academy (Courses, AI Tutors, Certification)",
    "/token (ZION$ economy, escrow, staking)",
    "/dao (Voting, Proposals, Governance Constitution)",
    "/nation-builder (Multiverse + Digital Country Creator)",
    "/launch-kit (Media, Press, Legal)",
    "/book-builder (Founder Story + System Manifesto)",
    "/roadmap + /whitepaper (Public docs)",
    "/api-docs + /wiki (Public & partner dev guides)",
    "/zion-brain (Auto-agent monitor + reflex logic)"
  ];

  const bonusModules = [
    "/global-map (Multiverse visualizer)",
    "/franchise/onboarding (Zion OS white-label flow)",
    "/referral/ambassadors (Viral growth engine)",
    "/grant/portal (Zion Incubator funding deck)",
    "/trailer (Auto-script + AI voice prompt)",
    "/book-store (Zion hardcover print + linkable chapters)"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-purple-400">Zion OS Instance Deployment</h1>
        <p className="text-gray-200">Configure and deploy your Zion OS instances with ease.</p>
      </header>

      <main className="space-y-10">
        <section className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">Instance Configuration</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="instanceName" className="block text-sm font-medium text-gray-200">
                Instance Name
              </label>
              <input
                type="text"
                name="instanceName"
                id="instanceName"
                placeholder="e.g., MyZionInstance"
                className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="defaultLanguage" className="block text-sm font-medium text-gray-200">
                Default Language
              </label>
              <select
                name="defaultLanguage"
                id="defaultLanguage"
                className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
                <option>Custom</option>
              </select>
            </div>

            <div>
              <label htmlFor="deploymentRegion" className="block text-sm font-medium text-gray-200">
                Deployment Region
              </label>
              <select
                name="deploymentRegion"
                id="deploymentRegion"
                className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              >
                <option>US-East</option>
                <option>US-West</option>
                <option>EU-Central</option>
                <option>Asia-Pacific</option>
                <option>Custom</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-200">Token Activation</span>
              <label htmlFor="tokenActivation" className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" id="tokenActivation" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>

            <div>
              <label htmlFor="governanceMode" className="block text-sm font-medium text-gray-200">
                Governance Mode
              </label>
              <select
                name="governanceMode"
                id="governanceMode"
                className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              >
                <option>Admin</option>
                <option>DAO</option>
                <option>Hybrid</option>
              </select>
            </div>
          </form>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">Branding &amp; Customization</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="logoUpload" className="block text-sm font-medium text-gray-200">
                Logo Upload
              </label>
              <input
                type="file"
                name="logoUpload"
                id="logoUpload"
                className="mt-1 block w-full text-sm text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 bg-gray-700 border-gray-600 rounded-md cursor-pointer"
              />
            </div>

            <div>
              <label htmlFor="colorPaletteUpload" className="block text-sm font-medium text-gray-200">
                Color Palette Upload (JSON)
              </label>
              <input
                type="file"
                name="colorPaletteUpload"
                id="colorPaletteUpload"
                accept=".json"
                className="mt-1 block w-full text-sm text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 bg-gray-700 border-gray-600 rounded-md cursor-pointer"
              />
            </div>
            <div>
              <label htmlFor="subdomain" className="block text-sm font-medium text-gray-200">
                Subdomain
              </label>
              <input
                type="text"
                name="subdomain"
                id="subdomain"
                placeholder="your-instance.zion.is"
                className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>
          </form>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">Auto-Deploy Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {autoDeployModules.map((module) => {
              const moduleId = generateId(module);
              return (
                <div key={moduleId} className="flex items-center bg-gray-700 p-4 rounded-md">
                  <input
                    id={`module-${moduleId}`}
                    name={`module-${moduleId}`}
                    type="checkbox"
                    className="h-5 w-5 text-purple-600 bg-gray-600 border-gray-500 rounded focus:ring-purple-500"
                  />
                  <label
                    htmlFor={`module-${moduleId}`}
                    className="ml-3 block text-sm font-medium text-gray-200"
                  >
                    {module}
                  </label>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">Bonus Modules (Optional)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bonusModules.map((module) => {
              const moduleId = generateId(module);
              return (
                <div key={moduleId} className="flex items-center bg-gray-700 p-4 rounded-md">
                  <input
                    id={`module-${moduleId}`}
                    name={`module-${moduleId}`}
                    type="checkbox"
                    className="h-5 w-5 text-purple-600 bg-gray-600 border-gray-500 rounded focus:ring-purple-500"
                  />
                  <label
                    htmlFor={`module-${moduleId}`}
                    className="ml-3 block text-sm font-medium text-gray-200"
                  >
                    {module}
                  </label>
                </div>
              );
            })}
          </div>
        </section>

        <div className="flex justify-end pt-8">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Deploy Instance
          </button>
        </div>
      </main>

      <footer className="text-center text-gray-200 mt-12">
        <p>&copy; {new Date().getFullYear()} Zion Project. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GenesisPage;
