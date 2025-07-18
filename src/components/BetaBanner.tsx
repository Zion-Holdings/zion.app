<<<<<<< HEAD
import { Alert, AlertDescription } from '@/components/ui/alert;
;;
export const _BetaBanner: unknown = () => {;''
  if (process.env.NEXT_PUBLIC_APP_ENV !== 'beta') return null;''
  return (;''
    <div className="fixed bottom-4 right-4 z-50 max-w-sm>"
      <Alert>;
        <AlertDescription>;
          You are using the Beta environment. Features may change.;
        </AlertDescription>;
      </Alert>""
    </div>;""
  );";""
};";""
""""
=======
import { Alert, AlertDescription } from '@/components/ui/alert'
'
export const _BetaBanner = () => {'
  if (process.env.NEXT_PUBLIC_APP_ENV !== 'beta') return null'
  return ('
    <div className="fixed bottom-4 right-4 z-50 max-w-sm>
      <Alert>;
        <AlertDescription>;
          You are using the Beta environment. Features may change.;
        </AlertDescription>;"
      </Alert>"
    </div>;"
  );";"
};";"
""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
