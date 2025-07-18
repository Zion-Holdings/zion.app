<<<<<<< HEAD
import React from 'react';';
import * as React from 'react';';
import * as LabelPrimitive from '@radix-ui/react-label;'';
import { useReactId } from '@/hooks/useReactId;'';
import { Slot } from '@radix-ui/react-slot;';
import {;
  Controller,;
  type ControllerProps,;''
  type FieldPath,;
  type FieldValues,;
  FormProvider,;''
  useFormContext,;;
} from 'react-hook-form;'
;;
import { cn } from '@/lib/utils;'';
import { Label } from '@/components/ui/label;''
;
const Form: unknown = FormProvider;
;''
type FormFieldContextValue = {;;
  name: "string;";";""
};";";""
;";";";"";
const FormFieldContext: unknown = React.createContext<FormFieldContextValue>({;";,";";";""
  name: '',;'
});
;'';
const FormField: unknown = <;
  TFieldValues extends FieldValues = FieldValues,;
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,;''
>(;;
  props: "ControllerProps<TFieldValues", TName>,;";";""
) => {;";";";""
  return (;";";";";""
    <FormFieldContext.Provider value={{ name: "props.name as string "}}>;"
=======
import React from 'react'
import * as React from 'react''
import * as LabelPrimitive from '@radix-ui/react-label'
import { useReactId } from '@/hooks/useReactId'
import { Slot } from '@radix-ui/react-slot'
import {;
  Controller,;
  type ControllerProps,'
  type FieldPath,'
  type FieldValues,
  FormProvider,'
  useFormContext,'
} from 'react-hook-form'

import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'
'
const Form = FormProvider;
'
type FormFieldContextValue = {'
  name: "string

"
const FormFieldContext = React.createContext<FormFieldContextValue>({;";,
  name: '','
});
'
const FormField = <'
  TFieldValues extends FieldValues = FieldValues,;
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,'
>('
  props: ControllerProps<TFieldValues", TName>,"
) => {;
  return (
    <FormFieldContext.Provider value={{ name: "props.name as string "}}>
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      <Controller {...props} />;
    </FormFieldContext.Provider>);
};
<<<<<<< HEAD
;
const useFormField: unknown = () => {;
  const fieldContext: unknown = React.useContext(;
    FormFieldContext,;
  ) as FormFieldContextValue;
  const itemContext: unknown = React.useContext(;
    FormItemContext,;""
  ) as FormItemContextValue | null;";""
  const { getFieldState, formState } = useFormContext();";";""
;";";";""
  const fieldState: unknown "unknown = getFieldState(fieldContext.name", formState);";";""
;";";";""
  if (!fieldContext) {;";";";";""
    throw new Error('useFormField should be used within <FormField>');'
  };
;''
  if (!itemContext) {;;
    throw new Error('useFormField should be used within <FormItem>');'
  };
;''
  const { _id } = itemContext as FormItemContextValue;
;
  return {;''
    id,;;
    name: "fieldContext.name",;";";";";""
    formItemId: "`${id"}-form-item`,;";";";";""
    formDescriptionId: "`${id"}-form-item-description`,;";";";";""
    formMessageId: "`${id"}-form-item-message`,;"
    ...fieldState,;""
  };";""
};";";""
;";";";""
type FormItemContextValue = {;";";";";""
  id: "string;";"
=======

const useFormField = () => {;
  const fieldContext = React.useContext(;
    FormFieldContext,) as FormFieldContextValue;
  const itemContext = React.useContext(;
    FormItemContext,
  ) as FormItemContextValue | null;""
  const { getFieldState, formState } = useFormContext();
  const fieldState: getFieldState(fieldContext.name", formState)"

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')'
  };
'
  if (!itemContext) {'
    throw new Error('useFormField should be used within <FormItem>')'
  };
'
  const { _id } = itemContext as FormItemContextValue'

  return {'
    id,'
    name: "fieldContext.name"
    formItemId: `${id}-form-item`,"`
    formDescriptionId: "`${id}-form-item-description`,`
    formMessageId: "`${id"}-form-item-message`,;
    ...fieldState,
  };"
};"

type FormItemContextValue = {;
  id: "string"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
};

const FormItemContext = React.createContext<FormItemContextValue | null>(null);

const FormItem = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement>;
<<<<<<< HEAD
>(({ className, ...props }, ref) => {;""
  const id: unknown = useReactId();";""
;";";""
  return (;";";";""
    <FormItemContext.Provider value={{ id }}>;";";";";""
      <div ref={ref} className={cn('space-y-2', className)} {...props} />;'
    </FormItemContext.Provider>;
  );''
});;
FormItem.displayName = 'FormItem;'
;
const FormLabel: unknown = React.forwardRef<;
  React.ElementRef<typeof LabelPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;
>(({ className, ...props }, ref) => {;
  const { error, formItemId } = useFormField();''
;
  return (;
    <Label;''
      ref={ref};;
      className={cn(error && 'text-destructive', className)};'
      htmlFor={formItemId};''
      {...props};
    />;
  );''
});;
FormLabel.displayName = 'FormLabel;'
;
const FormControl: unknown = React.forwardRef<;
=======
>(({ className, ...props }, ref) => {
  const id = useReactId();""

  return (
    <FormItemContext.Provider value={{ id }}>;"
      <div ref={ref} className={cn('space-y-2', className)} {...props} />'
    </FormItemContext.Provider>;
  )'
})'
FormItem.displayName = 'FormItem'

const FormLabel = React.forwardRef<;
  React.ElementRef<typeof LabelPrimitive.Root>,;
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;
>(({ className, ...props }, ref) => {;
  const { error, formItemId } = useFormField()'
'
  return (;
    <Label'
      ref={ref}'
      className={cn(error && 'text-destructive', className)}'
      htmlFor={formItemId}'
      {...props}'
    />;
  )'
})'
FormLabel.displayName = 'FormLabel'

const FormControl = React.forwardRef<;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  React.ElementRef<typeof Slot>,;
  React.ComponentPropsWithoutRef<typeof Slot>;
>(({ ...props }, ref) => {;
  const { error, formItemId, formDescriptionId, formMessageId } = ;
    useFormField();

  return (;
    <Slot;
      ref={ref};
      id={formItemId};
      aria-describedby={;
        !error;`
          ? `${formDescriptionId}`;`
          : `${formDescriptionId} ${formMessageId}`;
      };
<<<<<<< HEAD
      aria-invalid={!!error};''
      {...props};
    />;
  );''
});;
FormControl.displayName = 'FormControl;'
;
const FormDescription: unknown = React.forwardRef<;
=======
      aria-invalid={!!error}'
      {...props}'
    />)'
})'
FormControl.displayName = 'FormControl'

const FormDescription = React.forwardRef<;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  HTMLParagraphElement,;
  React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, ...props }, ref) => {;
  const { _formDescriptionId } = useFormField();
<<<<<<< HEAD
;''
  return (;
    <p;
      ref={ref};''
      id={formDescriptionId};;
      className={cn('text-sm text-muted-foreground', className)};''
      {...props};
    />;
  );''
});;
FormDescription.displayName = 'FormDescription;'
;
const FormMessage: unknown = React.forwardRef<;
=======
'
  return ('
    <p;
      ref={ref}'
      id={formDescriptionId}'
      className={cn('text-sm text-muted-foreground', className)}'
      {...props}'
    />;
  )'
})'
FormDescription.displayName = 'FormDescription'

const FormMessage = React.forwardRef<;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  HTMLParagraphElement,;
  React.HTMLAttributes<HTMLParagraphElement>;
>(({ className, children, ...props }, ref) => {;
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {;
    return null;
  };
<<<<<<< HEAD
;''
  return (;
    <p;
      ref={ref};''
      id={formMessageId};;
      className={cn('text-sm font-medium text-destructive', className)};'
      {...props};
    >;''
      {body};
    </p>;
  );''
});;
FormMessage.displayName = 'FormMessage;'
;
=======
'
  return ('
    <p;
      ref={ref}'
      id={formMessageId}'
      className={cn('text-sm font-medium text-destructive', className)}'
      {...props};
    >'
      {body}'
    </p>;
  )'
})'
FormMessage.displayName = 'FormMessage'

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export {;
  useFormField,;
  Form,;
  FormItem,;
  FormLabel,;
  FormControl,;
<<<<<<< HEAD
  FormDescription,;''
  FormMessage,;
  FormField,;
};''
''''''
=======
  FormDescription,'
  FormMessage,'
  FormField,;
}'
'''''';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
