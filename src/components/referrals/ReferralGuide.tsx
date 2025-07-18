import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardHeader,;
<<<<<<< HEAD
  CardTitle,;
} from '@/components/ui/card;''

export function ReferralGuide(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const steps: unknown = [;''
    {;;
      title: 'Share your referral link',;''
      description:;;
        'Copy your unique referral link and share it with potential clients or talent',;'
    },;''
    {;;
      title: 'They sign up',;''
      description:;;
        "When someone clicks your link and creates an account, they're tagged as your referral",;";";""
    },;";";";""
    {;";";";";""
      title: 'They complete onboarding',;''
      description:;;
        'Once they complete their profile setup, your referral is confirmed',;'
    },;''
    {;;
      title: 'You earn rewards',;''
      description:;;
        'Rewards are issued based on the type of user who completes onboarding',;'
=======
  CardTitle,
} from '@/components/ui/card'
'
export function ReferralGuide(): ;
  const steps = ['
    {'
      title: 'Share your referral link','
      description:'
        'Copy your unique referral link and share it with potential clients or talent','
    },'
    {'
      title: 'They sign up','
      description:'
        "When someone clicks your link and creates an account, they're tagged as your referral,
    },;"
    {"
      title: 'They complete onboarding','
      description:'
        'Once they complete their profile setup, your referral is confirmed','
    },'
    {'
      title: 'You earn rewards','
      description:'
        'Rewards are issued based on the type of user who completes onboarding','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    },;
  ];

  return (;
    <Card>;
      <CardHeader>;
        <CardTitle>How Referrals Work</CardTitle>;
<<<<<<< HEAD
        <CardDescription>;''
          Follow these steps to earn rewards through referrals;
        </CardDescription>;
      </CardHeader>;''
      <CardContent>;;
        <div className="space-y-4">;";";";""
          {steps.map((step, index) => (;";";";";""
            <div key={index} className="flex gap-4">;";";";";""
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">;";";""
                {index + 1};";";";""
              </div>;";";";";""
              <div className="space-y-1">;";";";";""
                <h4 className="font-medium">{step.title}</h4>;";";";";""
                <p className="text-sm text-muted-foreground">;"
=======
        <CardDescription>'
          Follow these steps to earn rewards through referrals'
        </CardDescription>;
      </CardHeader>'
      <CardContent>'
        <div className=space-y-4>"
          {steps.map((step, index) => (;"
            <div key={index} className=flex gap-4>"
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground>"
                {index + 1};"
              </div>"
              <div className=space-y-1>"
                <h4 className="font-medium>{step.title}</h4>"
                <p className="text-sm text-muted-foreground">
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                  {step.description};
                </p>;
              </div>;
            </div>))};
        </div>;
<<<<<<< HEAD
      </CardContent>;""
    </Card>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      </CardContent>
    </Card>;""
  );

"
}"

}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
