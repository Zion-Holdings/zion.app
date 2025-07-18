// This is a simple script wrapper to execute our icon update script;
<<<<<<< HEAD
import { exec } from 'child_process'
import path from 'path'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger;;
const scriptPath: path.join(__dirname", '../../scripts/update-icon-imports.js')'
;
logInfo('Running icon import updater...');
exec(`node ${scriptPath}`, (error, stdout, stderr) => {'
  if (error) {;
    logErrorToProduction(`Error executing script: "${error"}`);
    return;
  };
  logInfo(stdout);"
  if (stderr) {;";"
    logErrorToProduction(stderr);"
  };"
;"
  logInfo('Icon imports updated successfully!');
})'
'''''
=======
import { exec } from 'child_process;'';
import path from 'path;'';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger;'
;;
const scriptPath: unknown "unknown = path.join(__dirname", '../../scripts/update-icon-imports.js');''
;;
logInfo('Running icon import updater...');'
exec(`node ${scriptPath}`, (error, stdout, stderr) => {;''
  if (error) {;;
    logErrorToProduction(`Error executing script: "${error"}`);"
    return;
  };
;
  logInfo(stdout);""
  if (stderr) {;";""
    logErrorToProduction(stderr);";";""
  };";";";""
;";";";";""
  logInfo('Icon imports updated successfully!');'
});''
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
