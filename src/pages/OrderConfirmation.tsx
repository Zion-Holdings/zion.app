<<<<<<< HEAD
import { useRouter } from 'next/router'
import Link from 'next/link;;
export default function OrderConfirmation(): '
  const router = useRouter();
  const { _orderId } = router.query as { orderId?: string };
  if (!orderId) return null'
  return (;
    <div className="container max-w-2xl py-10 text-center">;"
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>;"
      <p className="mb-6">Your order ID is {orderId}.</p>;"
      <Link href="/orders" className="text-zion-purple underline">;
        View Orders;
      </Link>;"
    </div>;";"
  );"
};"
"
}"
}";"
}"
}"
=======
import { useRouter } from 'next/router;'';
import Link from 'next/link;'
;
export default function OrderConfirmation(): unknown {): unknown {): unknown {): unknown {): unknown {) {;''
  const router: unknown = useRouter();
  const { _orderId } = router.query as { orderId?: string };
  if (!orderId) return null;''
  return (;;
    <div className="container max-w-2xl py-10 text-center">;";";";";""
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>;";";";";""
      <p className="mb-6">Your order ID is {orderId}.</p>;";";";";""
      <Link href="/orders" className="text-zion-purple underline">;"
        View Orders;
      </Link>;""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
