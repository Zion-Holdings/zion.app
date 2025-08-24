This script replaces console.log, console.warn, console.error statements
with production-ready logger calls from @/utils/productionLogger.

Usage:
  node scripts/replace-console-statements.cjs

Options:
  --help, -h    Show this help message

Examples:
  node scripts/replace-console-statements.cjs

The script will:
1. Scan all TypeScript/JavaScript files in src/, pages/, components/
2. Replace console statements with logInfo, logWarn, logError calls
3. Add appropriate import statements
4. Skip test files and configuration files
5. Provide a summary of changes made
`);
    process.exit(0);
  }

  replacer.processAllFiles().catch(error => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  });
}

module.exports = ConsoleReplacer;