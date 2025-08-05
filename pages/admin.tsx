import type { NextPage } from 'next";
import Head from "next/head";

const AdminPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Admin Dashboard - Zion Tech Group</title>
        <meta name="description" content="Admin dashboard for Zion Tech Group" />
      </Head>
      
      <div className="relative z-10 container-responsive py-8">
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        {/* Main Content */}
        <main className="flex-1">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-44 lg:py-32">
              <div className="text-center">
                <div className="mb-8">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      Admin Dashboard
                    </span>
                  </h1>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Manage your Zion Tech Group platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;