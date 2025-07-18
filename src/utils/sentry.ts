<<<<<<< HEAD
export function captureException(): unknown {): unknown {): unknown {): unknown {): unknown {error: unknown, context?: unknown): void {;"
  if (typeof window === 'undefined') {;
    import('@sentry/nextjs').then((Sentry) => {;
      if ('
        context &&;
        (typeof context === 'object' || typeof context === 'function');
=======
export function captureException(): unknown {): unknown {): unknown {): unknown {): unknown {error: "unknown", context?: unknown): void {;";";";";""
  if (typeof window === 'undefined') {;;'
    import('@sentry/nextjs').then((Sentry) => {;'
      if (;''
        context &&;;
        (typeof context === 'object' || typeof context === 'function');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      ) {;
        Sentry.captureException(error, context);
      } else {;
        Sentry.captureException(error);
<<<<<<< HEAD
      }'
    });
  };
};
}'
=======
      };''
    });
  };
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''