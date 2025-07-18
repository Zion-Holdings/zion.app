import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
/**'
 * Hook that ensures router is ready before returning router data;
 * Prevents accessing router.query before it's populated;