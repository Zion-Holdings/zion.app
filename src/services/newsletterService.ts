<<<<<<< HEAD
import { mailchimpService } from '@/integrations/mailchimp'
import { sendEmailWithSendGrid } from '@/lib/email'
import { logWarn, logErrorToProduction } from '@/utils/productionLogger;;
'
export async function subscribeToNewsletter(): unknown {): unknown {): unknown {): unknown {): unknown {email: string): Promise<void> {;
  if (mailchimpService) {;
    await mailchimpService.addSubscriber({'
      email,;
      mergeFields: {
        SOURCE: 'website_footer',;
        SIGNUP_DATE: new Date().toISOString(),;"
      },;"
    });"
  } else {;"
    logWarn('Mailchimp not configured - skipping list subscription');
  };
'
  const templateId = process.env.SENDGRID_NEWSLETTER_TEMPLATE_ID;
  if (templateId) {;
    try {'
      await sendEmailWithSendGrid({;
        to: email,;"
        templateId,;"
        dynamicTemplateData: "{"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},;"
      });"
    } catch {;"
      logErrorToProduction('Failed to send SendGrid welcome email:', {;
        data: error,;
      });"
    };";"
  };"
};"
"
}"
}";"
}"
}"
=======
import { mailchimpService } from '@/integrations/mailchimp;'';
import { sendEmailWithSendGrid } from '@/lib/email;'';
import { logWarn, logErrorToProduction } from '@/utils/productionLogger;'
;'';
export async function subscribeToNewsletter(): unknown {): unknown {): unknown {): unknown {): unknown {email: string): Promise<void> {;
  if (mailchimpService) {;
    await mailchimpService.addSubscriber({;''
      email,;;
      mergeFields: "{;",;";";";";""
        SOURCE: 'website_footer',;;'
        SIGNUP_DATE: "new Date().toISOString()",;";""
      },;";";""
    });";";";""
  } else {;";";";";""
    logWarn('Mailchimp not configured - skipping list subscription');'
  };
;''
  const templateId: unknown = process.env.SENDGRID_NEWSLETTER_TEMPLATE_ID;
  if (templateId) {;
    try {;''
      await sendEmailWithSendGrid({;;
        to: "email",;";";";""
        templateId,;";";";";""
        dynamicTemplateData: "{"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},;";";""
      });";";";""
    } catch {;";";";";""
      logErrorToProduction('Failed to send SendGrid welcome email:', {;;'
        data: "error",;"
      });""
    };";""
  };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
