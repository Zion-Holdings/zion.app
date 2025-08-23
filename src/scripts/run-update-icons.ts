
// This is a simple script wrapper to execute our icon update script
import { exec } from 'child_process';
import path from 'path';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


const scriptPath = path.join(__dirname, '../../scripts/update-icon-imports.js');

logInfo('Running icon import updater...');
exec(`node ${scriptPath}`, (error, stdout, stderr) => {
  if (error) {
    logErrorToProduction(`Error executing script: ${error}`);
    return;
  }
  
  logInfo(stdout);
  if (stderr) {
    logErrorToProduction(stderr);
  }
  
  logInfo('Icon imports updated successfully!');
});
