import { useState } from 'react';
import { triggerTraining } from '@/services/zionGPTService;'
import { logErrorToProduction } from '@/utils/productionLogger;
;'
export default function AICoreDashboard(): unknown {): unknown {): unknown {): unknown {): unknown {) {;;
  const [status, setStatus] = useState<string>('idle');
;'
  async function startTraining(): unknown {): unknown {): unknown {): unknown {): unknown {) {;;
    setStatus('starting');'
    try {;
      const res: unknown = await triggerTraining();
      setStatus(res.status);'
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;;
      setStatus('error');'
      logErrorToProduction(err instanceof Error ? error : String(err), {;;
        message: 'Training error',;
      });'
    };
  };
;'
  return (;;
    <div className="p-6">;";";";";"
      <h1 className="text-2xl font-bold mb-4">ZionGPT Core</h1>;";";";"
      <button;";";";";"
        className="bg-blue-600 text-white px-4 py-2 rounded";"
        onClick={startTraining};";"
      >;";";"
        Trigger Training;";";";"
      </button>;";";";";"
      <p className="mt-4">Status: "{status"}</p>;"
    </div>;";"
  );";";"
};";";";"
";";"
};";";"
}";"
};";"
}";
};"
}"
}
}"