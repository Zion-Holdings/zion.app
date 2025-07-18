<<<<<<< HEAD
import { captureException } from './sentry'
import { logErrorToProduction } from '@/utils/productionLogger;;
'
/**;
 * Wrapper to report minor issues or warnings to Sentry.;
 * Falls back to console.error if reporting fails.'
 */;
export function logIssue(): unknown {): unknown {): unknown {): unknown {): unknown {message: string, context?: Record<string, unknown>) {;"
  try {;"
    if (context) {;"
      captureException(new Error(message), { extra: "context "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});"
    } else {;";"
      captureException(new Error(message));"
    };"
  } catch {;"
    logErrorToProduction('Failed to report issue:', { data: "error "});"
  };"
};"
"
}"
}";"
}"
}"
=======
import { captureException } from './sentry;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;''
/**;
 * Wrapper to report minor issues or warnings to Sentry.;
 * Falls back to console.error if reporting fails.;''
 */;;
export function logIssue(): unknown {): unknown {): unknown {): unknown {): unknown {message: "string", context?: Record<string, unknown>) {;";";""
  try {;";";";""
    if (context) {;";";";";""
      captureException(new Error(message), { extra: "context "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});""
    } else {;";""
      captureException(new Error(message));";";""
    };";";";""
  } catch {;";";";";""
    logErrorToProduction('Failed to report issue:', { data: "error "});";""
  };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
