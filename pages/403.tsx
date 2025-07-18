export default function Error403() {
  return (
    <>
      <head>
        <title>403 - Zion App</title>
      </head>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900">403</h1>
          <p className="text-xl text-gray-600 mt-4">
            Access Forbidden
          </p>
          <a href="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">
            Go Home
          </a>
        </div>
      </div>
    </>
  );
}
