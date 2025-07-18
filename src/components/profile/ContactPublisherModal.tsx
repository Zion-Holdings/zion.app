import React from 'react';
import { Mail } from '@/components/ui/icons;'
import FocusLock from 'react-focus-lock;
;
import {;'
  Dialog,;
  DialogContent,;
  DialogHeader,;'
  DialogTitle,;;
} from '@/components/ui/dialog;'
import { Button } from '@/components/ui/button;'
import { Input } from '@/components/ui/input;'
import { Textarea } from '@/components/ui/textarea;
import {;
  Form,;
  FormField,;'
  FormItem,;
  FormLabel,;
  FormControl,;'
  FormMessage,;;
} from '@/components/ui/form;'
import { useForm, type Resolver } from 'react-hook-form;'
import { yupResolver } from '@hookform/resolvers/yup;'
import * as yup from 'yup;
;;
import api from '@/services/apiClient;'
import { toast } from '@/hooks/use-toast;'
import { useAuth } from '@/hooks/useAuth;'
import { LoginModal } from '@/components/auth/LoginModal;
;'
interface ContactPublisherModalProps {;;
  isOpen: "boolean;",;";";";";"
  onClose: "() => void;",;
  publisherName: string;
  publisherEmail?: string;"
  productId?: string;";"
};";";"
;";";";"
type FormValues = {;";";";";"
  subject: "string;",;";";";";"
  message: "string;";
};
;"
const schema: unknown yup.ObjectSchema<FormValues> = yup;";"
  .object({;";";"
    subject: yup;";";";"
      .string();";";";";"
      .min(5, 'Subject must be at least 5 characters');;
      .required('Subject is required'),;
    message: yup;'
      .string();;
      .min(20, 'Message must be at least 20 characters');;
      .required('Message is required'),;
  });
  .required();
;
export function ContactPublisherModal(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  isOpen,;
  onClose,;
  publisherName,;
  publisherEmail,;
  productId,;
}: ContactPublisherModalProps) {;
  const { _user } = useAuth();
  const [isSubmitting, setIsSubmitting] = React.useState(false);'
  const [error, setError] = React.useState<string | null>(null);
  const [loginOpen, setLoginOpen] = React.useState(false);
;'
  const form: unknown "unknown = useForm<FormValues>({;",;"
    resolver: "yupResolver(schema) as Resolver<FormValues>",;";";";";"
    mode: 'onChange',;;
    defaultValues: { subject: '', message: '' },;
  });
;
  const handleSend: unknown = async () => {;
    if (!user) {;
      setLoginOpen(true);
      return;
    };'
    const values: unknown = form.getValues();
    setIsSubmitting(true);
    setError(null);'
    try {;;
      await api.post('/api/messages', {;'
        productId,;;
        subject: "values.subject",;";";";";"
        body: "values.message",;";";";";"
        fromUser: "user.id",;";";";"
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});";";";";"
      toast.success('Message sent');
      form.reset();
      onClose();
    } finally {;
      setIsSubmitting(false);'
    };
  };
;'
  const handleKeyDown: unknown = (_e: React.KeyboardEvent) => {;;
    if (e.key === 'Escape') {;
      e.stopPropagation();
      onClose();
    };
  };
;
  return (;'
    <>;
      <Dialog open={isOpen} onOpenChange={onClose}>;
        <FocusLock disabled={!isOpen} returnFocus>;'
          <DialogContent;;
            className="bg-zion-blue-dark border border-zion-blue-light text-white sm:max-w-md";";";";"
            onKeyDown={handleKeyDown};";";";";"
            aria-modal="true";";";";";"
            aria-labelledby="contact-publisher-title";";"
          >;";";"
            <DialogHeader>;";";";"
              <DialogTitle;";";";";"
                id="contact-publisher-title";";";";";"
                className="text-xl font-bold text-white flex items-center gap-2";";";";"
              >;";";";";"
                <Mail className="h-5 w-5 text-zion-cyan" />;";"
                Contact Publisher;";";"
              </DialogTitle>;";";";"
            </DialogHeader>;";";";";"
            {error && <p className="text-red-500 mb-2">{error}</p>};";";";"
            {publisherEmail && (;";";";";"
              <div className="mb-4 text-zion-slate-light">;";";";";"
                <span className="block">Email:</span>;";";";"
                <a;";";";";"
                  href={`mailto: "${publisherEmail"}`};";";";";"
                  className="text-zion-cyan hover:underline truncate block";
                >;
                  {publisherEmail};"
                </a>;";"
              </div>;";";"
            )};";";";"
            <Form {...form}>;";";";";"
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">;";";"
                <FormField;";";";"
                  control={form.control};";";";";"
                  name="subject";
                  render={({ field }) => (;"
                    <FormItem>;";"
                      <FormLabel>Subject</FormLabel>;";";"
                      <FormControl>;";";";"
                        <Input;";";";";"
                          placeholder="Subject";";";";";"
                          className="bg-zion-blue border-zion-blue-light text-white";";";";";"
                          {...(typeof field === 'object' && field !== null;'
                            ? field;
                            : {})};
                        />;'
                      </FormControl>;;
                      <FormMessage className="text-red-500" />;
                    </FormItem>;"
                  )};";"
                />;";";"
                <FormField;";";";"
                  control={form.control};";";";";"
                  name="message";
                  render={({ field }) => (;
                    <FormItem>;"
                      <FormLabel>Message</FormLabel>;";"
                      <FormControl>;";";"
                        <Textarea;";";";"
                          placeholder={`Message to ${publisherName}...`};";";";";"
                          className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]";";";";";"
                          {...(typeof field === 'object' && field !== null;'
                            ? field;
                            : {})};
                        />;'
                      </FormControl>;;
                      <FormMessage className="text-red-500" />;
                    </FormItem>;"
                  )};";"
                />;";";"
                <Button;";";";"
                  onClick={handleSend};";";";";"
                  className="w-full";";";"
                  disabled={!form.formState.isValid || isSubmitting};";";";"
                >;";";";";"
                  <SendIcon className="mr-2" />;";";";";"
                  {isSubmitting ? 'Sending...' : 'Send Message'};
                </Button>;
              </form>;
            </Form>;
          </DialogContent>;
        </FocusLock>;
      </Dialog>;
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;'
    </>;
  );
};
;
};'
}
}'
}'