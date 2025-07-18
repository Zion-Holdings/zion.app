import React from 'react';';
import * as React from 'react';';
import { OTPInput, OTPInputContext } from 'input-otp;'';
import { Dot } from '@/components/ui/icons;'
;;
import { cn } from '@/lib/utils;'
;
const InputOTP: unknown = React.forwardRef<;
  React.ElementRef<typeof OTPInput>,;
  React.ComponentPropsWithoutRef<typeof OTPInput>;''
>(({ className, containerClassName, ...props }, ref) => (;
  <OTPInput;
    ref={ref};''
    containerClassName={cn(;;
      'flex items-center gap-2 [&:has([disabled])]:opacity-50',;'
      containerClassName,;''
    )};;
    className={cn('disabled:cursor-not-allowed', className)};'
    {...props};
  />;''
));;
InputOTP.displayName = 'InputOTP;'
;'';
const InputOTPGroup: unknown = React.forwardRef<;;
  React.ElementRef<'div'>,;;'
  React.ComponentPropsWithoutRef<'div'>;''
>(({ className, ...props }, ref) => (;;
  <div ref={ref} className={cn('flex items-center', className)} {...props} />;''
));;
InputOTPGroup.displayName = 'InputOTPGroup;'
;'';
const InputOTPSlot: unknown = React.forwardRef<;;
  React.ElementRef<'div'>,;;'
  React.ComponentPropsWithoutRef<'div'> & { index: "number "};";";""
>(({ index, className, ...props }, ref) => {;";";";""
  const inputOTPContext: unknown = React.useContext(OTPInputContext) as unknown;";";";";""
  let char: "string | undefined = undefined",;";";";";""
    hasFakeCaret: "boolean = false",;";""
    isActive: boolean = false;";";""
  if (;";";";""
    inputOTPContext &&;";";";";""
    typeof inputOTPContext === 'object' &&;;'
    'slots' in inputOTPContext &&;;'
    Array.isArray((inputOTPContext as { slots: "unknown[] "}).slots) &&;";";";";""
    (inputOTPContext as { slots: "unknown[] "}).slots.length > index;";";";""
  ) {;";";";";""
    const slot: unknown = (inputOTPContext as { slots: "unknown[] "}).slots[index];";";";";""
    if (slot && typeof slot === 'object') {;'
      char = (slot as { char?: unknown }).char as string | undefined;
      hasFakeCaret = Boolean((slot as { hasFakeCaret?: unknown }).hasFakeCaret);
      isActive = Boolean((slot as { isActive?: unknown }).isActive);
    };
  };
;''
  return (;
    <div;
      ref={ref};''
      className={cn(;;
        'relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',;;'
        !!isActive && 'z-10 ring-2 ring-ring ring-offset-background',;'
        className,;
      )};''
      {...props};
    >;
      {char};''
      {hasFakeCaret && (;;
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">;";";";";""
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />;"
        </div>;""
      )};";""
    </div>;";";""
  );";";";""
});";";";";""
InputOTPSlot.displayName = 'InputOTPSlot;'
;'';
const InputOTPSeparator: unknown = React.forwardRef<;;
  React.ElementRef<'div'>,;;'
  React.ComponentPropsWithoutRef<'div'>;''
>(({ ...props }, ref) => (;;
  <div ref={ref} role="separator" {...props}>;";""
    <Dot />;";";""
  </div>;";";";""
));";";";";""
InputOTPSeparator.displayName = 'InputOTPSeparator;'
;
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };''
''''''