<<<<<<< HEAD
import { Button } from '@/components/ui/button;'';
import { FileText, ShieldCheck } from '@/components/ui/icons;';
import {;
  Card,;
  CardContent,;''
  CardDescription,;
  CardFooter,;
  CardHeader,;''
  CardTitle,;;
} from '@/components/ui/card;'
;''
interface ContractTypeCardsProps {;;
  onStandardClick: "() => void;",;";";";";""
  onSmartClick: "() => void;";"
};
;
export function ContractTypeCards(): unknown {): unknown {): unknown {): unknown {): unknown {{;""
  onStandardClick,;";""
  onSmartClick,;";";""
}: ContractTypeCardsProps) {;";";";""
  return (;";";";";""
    <div className="grid md:grid-cols-2 gap-6 mb-10">;";";""
      <Card>;";";";""
        <CardHeader>;";";";";""
          <CardTitle className="flex items-center gap-2">;";";";";""
            <FileText className="h-5 w-5" />;"
            Standard Contracts;
          </CardTitle>;
          <CardDescription>;""
            Generate traditional legal agreements for your projects;";""
          </CardDescription>;";";""
        </CardHeader>;";";";""
        <CardContent>;";";";";""
          <ul className="space-y-2">;";";";";""
            <li className="text-sm"> Legally binding templates</li>;";";";";""
            <li className="text-sm"> Milestone-based payment terms</li>;";";";";""
            <li className="text-sm"> IP rights and confidentiality clauses</li>;";";";";""
            <li className="text-sm"> DocuSign integration</li>;";""
          </ul>;";";""
        </CardContent>;";";";""
        <CardFooter>;";";";";""
          <Button variant="outline" onClick={onStandardClick}>;"
            Create Standard Contract;
          </Button>;""
        </CardFooter>;";""
      </Card>;";";""
;";";";""
      <Card>;";";";";""
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">;";";";";""
          <div className="flex justify-between items-center">;";";";";""
            <CardTitle className="flex items-center gap-2">;";";";";""
              <ShieldCheck className="h-5 w-5 text-primary" />;";";""
              Smart Contracts;";";";""
            </CardTitle>;";";";";""
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">;"
              Blockchain Powered;
            </span>;
          </div>;
          <CardDescription>;""
            Deploy agreements on Ethereum or Polygon with escrow capabilities;";""
          </CardDescription>;";";""
        </CardHeader>;";";";""
        <CardContent>;";";";";""
          <ul className="space-y-2">;";";";";""
            <li className="text-sm"> All standard contract features</li>;";";";";""
            <li className="text-sm"> Automatic escrow payment release</li>;";";";";""
            <li className="text-sm"> Transaction verification</li>;";";";";""
            <li className="text-sm"> Permanent on-chain record</li>;";";";";""
            <li className="text-sm"> Multi-signature approval flow</li>;""
          </ul>;";""
        </CardContent>;";";""
        <CardFooter>;";";";""
          <Button;";";";";""
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600";"
=======
import { Button } from '@/components/ui/button'
import { FileText, ShieldCheck } from '@/components/ui/icons'
import {;
  Card,;
  CardContent,'
  CardDescription,'
  CardFooter,
  CardHeader,'
  CardTitle,'
} from '@/components/ui/card'
'
interface ContractTypeCardsProps {'
  onStandardClick: "() => void,"
  onSmartClick: "() => void"

export function ContractTypeCards(): unknown {): unknown {): unknown {): unknown {): unknown {{
  onStandardClick,;""
  onSmartClick,;"
}: ContractTypeCardsProps) {";"
  return (";""
    <div className=grid md:grid-cols-2 gap-6 mb-10>";"
      <Card>;";"
        <CardHeader>;";";
          <CardTitle className="flex items-center gap-2">;"
            <FileText className=h-5 w-5" />"
            Standard Contracts;
          </CardTitle>;
          <CardDescription>
            Generate traditional legal agreements for your projects;"
          </CardDescription>;";
        </CardHeader>";";
        <CardContent>"
          <ul className="space-y-2>;"";
            <li className="text-sm">✓ Legally binding templates</li>;"
            <li className=text-sm">✓ Milestone-based payment terms</li>""
            <li className=text-sm>✓ IP rights and confidentiality clauses</li>"
            <li className="text-sm>✓ DocuSign integration</li>;"
          </ul>";
        </CardContent>;"";
        <CardFooter>;""
          <Button variant="outline onClick={onStandardClick}>
            Create Standard Contract;"
          </Button>"
        </CardFooter>;"
      </Card>;";"
;";"
      <Card>;";"
        <CardHeader className=bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">""
          <div className=flex justify-between items-center>"
            <CardTitle className="flex items-center gap-2>;"";
              <ShieldCheck className="h-5 w-5 text-primary" />;"
              Smart Contracts;";"
            </CardTitle>;"
            <span className=px-2 py-1 bg-primary/10 text-primary text-xs rounded-full>"
              Blockchain Powered;
            </span>;
          </div>;
          <CardDescription>"
            Deploy agreements on Ethereum or Polygon with escrow capabilities;
          </CardDescription>;"";
        </CardHeader>;"";
        <CardContent>;"";
          <ul className="space-y-2">;"
            <li className=text-sm">✓ All standard contract features</li>""
            <li className=text-sm>✓ Automatic escrow payment release</li>"
            <li className="text-sm>✓ Transaction verification</li>;"";
            <li className="text-sm">✓ Permanent on-chain record</li>;"
            <li className=text-sm">✓ Multi-signature approval flow</li>"
          </ul>;
        </CardContent>;"";
        <CardFooter>;"";
          <Button;"";
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
            onClick={onSmartClick};
          >;
            Create Smart Contract;
          </Button>;
        </CardFooter>;
<<<<<<< HEAD
      </Card>;""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      </Card>
    </div>;""
  );"
}";"
";"
}";
}""
}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
