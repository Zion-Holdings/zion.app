<<<<<<< HEAD
import { useFetchResume } from './useFetchResume'
import  { useResumeActions }  from './useResumeActions;
export function useResumeBasic(): ;
  const fetchResumeOperations = useFetchResume()'
  const resumeActions = useResumeActions()'
  return {'
    // From useFetchResume'
    isLoading: "fetchResumeOperations.isLoading || resumeActions.isLoading
    error: fetchResumeOperations.error || resumeActions.error"
    resume: "fetchResumeOperations.resume
    fetchResume: fetchResumeOperations.fetchResume,
;"
    // From useResumeActions"
    createResume: resumeActions.createResume
    updateBasicInfo: "resumeActions.updateBasicInfo"
    setActiveResume: resumeActions.setActiveResume,
  };
}"
"
}
}"
}"
}"
=======
import { useFetchResume } from './useFetchResume;'';
import { useResumeActions } from './useResumeActions;'
;
export function useResumeBasic(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const fetchResumeOperations: unknown = useFetchResume();''
  const resumeActions: unknown = useResumeActions();
;
  return {;''
    // From useFetchResume;;
    isLoading: "fetchResumeOperations.isLoading || resumeActions.isLoading",;";";";";""
    error: "fetchResumeOperations.error || resumeActions.error",;";";";";""
    resume: "fetchResumeOperations.resume",;";";";";""
    fetchResume: "fetchResumeOperations.fetchResume",;";";""
;";";";""
    // From useResumeActions;";";";";""
    createResume: "resumeActions.createResume",;";";";";""
    updateBasicInfo: "resumeActions.updateBasicInfo",;";";";";""
    setActiveResume: "resumeActions.setActiveResume",;";""
  };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
