export default function EnhancedFooter() {
  return (
    <div className="border-t border-gray-200 dark:border-gray-800 text-sm py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Zion Tech Solutions</p>
        <div className="opacity-70 flex items-center gap-4">
          <a className="underline hover:no-underline" href="/constitution">Constitution</a>
          <span>All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}