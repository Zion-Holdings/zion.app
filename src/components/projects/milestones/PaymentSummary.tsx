<<<<<<< HEAD
import React from 'react';';
import { CreditCard } from '@/components/ui/icons;'';
import type { Milestone } from '@/hooks/useMilestones;'';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card;'
;''
interface PaymentSummaryProps {;;
  milestones: "Milestone[];",;";";";";""
  paymentTerms: "string | null;";"
};
;
=======
import React from 'react'
import { CreditCard } from '@/components/ui/icons'
import type { Milestone } from '@/hooks/useMilestones'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
'
interface PaymentSummaryProps {'
  milestones: "Milestone[]
  paymentTerms: string | null""

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export const _PaymentSummary: unknown React.FC<PaymentSummaryProps> = ({;
  milestones,;
  paymentTerms,;
}) => {;
<<<<<<< HEAD
  const totalPayment: unknown = milestones;""
    .reduce((sum, m) => sum + parseFloat(m.amount.toString()), 0);";""
    .toFixed(2);";";""
;";";";""
  const paidAmount: unknown = milestones;";";";";""
    .filter((m) => m.status === 'paid');''
    .reduce((sum, m) => sum + parseFloat(m.amount.toString()), 0);
    .toFixed(2);
;''
  return (;;
    <Card className="mb-8 bg-muted/30">;";";";";""
      <CardHeader className="pb-3">;";";";";""
        <CardTitle className="text-lg flex items-center">;";";";";""
          <CreditCard className="h-5 w-5 mr-2 text-primary" /> Payment Summary;";""
        </CardTitle>;";";""
      </CardHeader>;";";";""
      <CardContent>;";";";";""
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;";";";""
          <div>;";";";";""
            <p className="text-sm text-muted-foreground mb-1">Total Payment</p>;";";";";""
            <p className="text-2xl font-semibold">${totalPayment}</p>;";""
          </div>;";";""
;";";";""
          <div>;";";";";""
            <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>;";";";";""
            <p className="font-medium capitalize">;";";";";""
              {paymentTerms || 'Not specified'};''
            </p>;
          </div>;
;''
          <div>;;
            <p className="text-sm text-muted-foreground mb-1">Paid Amount</p>;";";";";""
            <p className="font-medium">${paidAmount}</p>;"
          </div>;
        </div>;
      </CardContent>;""
    </Card>;";""
  );";";""
};";";";""
""""""
=======
  const totalPayment = milestones
    .reduce((sum, m) => sum + parseFloat(m.amount.toString()), 0);"
    .toFixed(2);"

  const paidAmount = milestones;
    .filter((m) => m.status === 'paid')'
    .reduce((sum, m) => sum + parseFloat(m.amount.toString()), 0)'
    .toFixed(2);
'
  return ('
    <Card className="mb-8 bg-muted/30">
      <CardHeader className=pb-3">"
        <CardTitle className=text-lg flex items-center>"
          <CreditCard className="h-5 w-5 mr-2 text-primary /> Payment Summary"
        </CardTitle>;"
      </CardHeader>"
      <CardContent>;
        <div className=grid grid-cols-1 md:grid-cols-3 gap-6">"
          <div>;
            <p className=text-sm text-muted-foreground mb-1">Total Payment</p>"
            <p className=text-2xl font-semibold>${totalPayment}</p>"
          </div>;"

          <div>;
            <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>
            <p className=font-medium capitalize">"
              {paymentTerms || 'Not specified'}'
            </p>'
          </div>;
'
          <div>'
            <p className=text-sm text-muted-foreground mb-1>Paid Amount</p>"
            <p className="font-medium>${paidAmount}</p>
          </div>;
        </div>;"
      </CardContent>"
    </Card>;"
  );
}"
""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
