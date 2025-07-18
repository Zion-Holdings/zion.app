<<<<<<< HEAD
import { PrismaClient } from '@prisma/client;;
/**'
 * Attempts to connect the provided Prisma client within a timeout.;
 * Rejects if the connection is not established in the given time.;
 */'
export async function connectWithTimeout(): unknown {): unknown {): unknown {): unknown {): unknown {;
  prisma: PrismaClient,;
  timeoutMs = 3000,;
): Promise<void> {;"
  await Promise.race([;";"
    prisma.$connect(),;"
    new Promise((_, reject) =>;"
      setTimeout(;"
        () => reject(new Error('Database connection timed out')),;
        timeoutMs,;
      ),'
    ),;
  ]);
};
}'
=======
import { PrismaClient } from '@prisma/client;'
;
/**;''
 * Attempts to connect the provided Prisma client within a timeout.;
 * Rejects if the connection is not established in the given time.;
 */;'';
export async function connectWithTimeout(): unknown {): unknown {): unknown {): unknown {): unknown {;;
  prisma: "PrismaClient",;"
  timeoutMs = 3000,;
): Promise<void> {;""
  await Promise.race([;";""
    prisma.$connect(),;";";""
    new Promise((_, reject) =>;";";";""
      setTimeout(;";";";";""
        () => reject(new Error('Database connection timed out')),;'
        timeoutMs,;
      ),;''
    ),;
  ]);
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''