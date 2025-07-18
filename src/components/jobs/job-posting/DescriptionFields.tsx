<<<<<<< HEAD
import React from 'react';';
import type { ControllerRenderProps } from 'react-hook-form;'';
import type { Control } from 'react-hook-form;';
import {;
  FormField,;
  FormItem,;''
  FormLabel,;
  FormControl,;
  FormDescription,;''
  FormMessage,;;
} from '@/components/ui/form;'';
import { Textarea } from '@/components/ui/textarea;'';
import type { JobSchemaType } from './validation;'
;''
interface DescriptionFieldsProps {;;
  control: "Control<JobSchemaType>;",;";";";";""
  handleEditorChange: "(content: string) => void;",;";";";";""
  editorContent: "string;";"
};
;
=======
import React from 'react'
import type { ControllerRenderProps } from 'react-hook-form'
import type { Control } from 'react-hook-form'
import {;
  FormField,;
  FormItem,'
  FormLabel,'
  FormControl,
  FormDescription,'
  FormMessage,'
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import type { JobSchemaType } from './validation'
'
interface DescriptionFieldsProps {'
  control: "Control<JobSchemaType>,"
  handleEditorChange: (content: string) => void,""
  editorContent: string""

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export function DescriptionFields(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  control,;
  handleEditorChange,;
  editorContent,;
<<<<<<< HEAD
}: DescriptionFieldsProps) {;""
  return (;";""
    <>;";";""
      <FormField;";";";""
        control={control};";";";";""
        name="description";";""
        render={({;";";""
          field,;";";";""
        }: {;";";";";""
          field: "ControllerRenderProps<JobSchemaType", 'description'>;'
=======
}: DescriptionFieldsProps) {
  return (;"
    <>;";
      <FormField";";
        control={control}"
        name="description;"
        render={({";
          field,;"";
        }: {;""
          field: "ControllerRenderProps<JobSchemaType, 'description'>'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
        }) => (;
          <FormItem>;
            <FormLabel>Job Description</FormLabel>;
            <FormControl>;
              <Textarea;
<<<<<<< HEAD
                value={editorContent};''
                onChange={(e) => {;
                  handleEditorChange(e.target.value);
                  field.onChange(e.target.value);''
                }};;
                className="min-h-[200px]";";";";";""
                placeholder="Enter a detailed description of the job role";"
=======
                value={editorContent}'
                onChange={(e) => {'
                  handleEditorChange(e.target.value);
                  field.onChange(e.target.value)'
                }}'
                className=min-h-[200px]"""
                placeholder=Enter a detailed description of the job role"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
              />;
            </FormControl>;
            <FormDescription>;
              Detailed description of the job role.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
<<<<<<< HEAD
        )};""
      />;";""
;";";""
      <FormField;";";";""
        control={control};";";";";""
        name="responsibilities";";""
        render={({;";";""
          field,;";";";""
        }: {;";";";";""
          field: "ControllerRenderProps<JobSchemaType", 'responsibilities'>;'
        }) => (;''
          <FormItem>;
            <FormLabel>Responsibilities (Optional)</FormLabel>;
            <FormControl>;''
              <Textarea;;
                placeholder="List the main responsibilities of this job";";";";";""
                className="resize-none min-h-[100px]";"
=======
        )}"
      />;"";
      <FormField;"";
        control={control};"";
        name="responsibilities";
        render={({";"
          field,;";"
        }: {;";";
          field: ControllerRenderProps<JobSchemaType, 'responsibilities'>'
        }) => ('
          <FormItem>'
            <FormLabel>Responsibilities (Optional)</FormLabel>;
            <FormControl>'
              <Textarea'
                placeholder=List the main responsibilities of this job"
                className="resize-none min-h-[100px]
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                {...field};
              />;
            </FormControl>;
            <FormDescription>;
              List the main responsibilities of this job.;
            </FormDescription>;
            <FormMessage />;
<<<<<<< HEAD
          </FormItem>;
        )};""
      />;";""
;";";""
      <FormField;";";";""
        control={control};";";";";""
        name="qualifications";";""
        render={({;";";""
          field,;";";";""
        }: {;";";";";""
          field: "ControllerRenderProps<JobSchemaType", 'qualifications'>;'
        }) => (;''
          <FormItem>;
            <FormLabel>Qualifications (Optional)</FormLabel>;
            <FormControl>;''
              <Textarea;;
                placeholder="List the required qualifications for this job";";";";";""
                className="resize-none min-h-[100px]";"
=======
          </FormItem>;"
        )}"
      />;"
;";"
      <FormField;";"
        control={control};";"
        name=qualifications"";
        render={({;""
          field,;""
        }: {;"";
          field: ControllerRenderProps<JobSchemaType", 'qualifications'>'
        }) => ('
          <FormItem>'
            <FormLabel>Qualifications (Optional)</FormLabel>;
            <FormControl>'
              <Textarea'
                placeholder="List the required qualifications for this job;"";
                className="resize-none min-h-[100px]"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                {...field};
              />;
            </FormControl>;
            <FormDescription>;
              List the required qualifications for this job.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
<<<<<<< HEAD
        )};""
      />;";""
;";";""
      <FormField;";";";""
        control={control};";";";";""
        name="benefits";";""
        render={({;";";""
          field,;";";";""
        }: {;";";";";""
          field: "ControllerRenderProps<JobSchemaType", 'benefits'>;'
        }) => (;''
          <FormItem>;
            <FormLabel>Benefits (Optional)</FormLabel>;
            <FormControl>;''
              <Textarea;;
                placeholder="List the benefits offered for this job";";";";";""
                className="resize-none min-h-[100px]";"
=======
        )}
      />;""
;"
      <FormField";"
        control={control}";""
        name=benefits";"
        render={({;"
          field,;";"
        }: {;"
          field: ControllerRenderProps<JobSchemaType, 'benefits'>'
        }) => ('
          <FormItem>'
            <FormLabel>Benefits (Optional)</FormLabel>;
            <FormControl>'
              <Textarea'
                placeholder="List the benefits offered for this job"
                className=resize-none min-h-[100px]""
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                {...field};
              />;
            </FormControl>;
            <FormDescription>;
              List the benefits offered for this job.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
<<<<<<< HEAD
        )};""
      />;";""
;";";""
      <FormField;";";";""
        control={control};";";";";""
        name="application_instructions";"
        render={({;""
          field,;";""
        }: {;";";""
          field: ControllerRenderProps<;";";";""
            JobSchemaType,;";";";";""
            'application_instructions;'
          >;
        }) => (;''
          <FormItem>;
            <FormLabel>Application Instructions (Optional)</FormLabel>;
            <FormControl>;''
              <Textarea;;
                placeholder="Provide instructions on how to apply for this job";";";";";""
                className="resize-none min-h-[100px]";"
=======
        )}
      />;"
;";
      <FormField";";
        control={control}"
        name="application_instructions"
        render={({"
          field,;"
        }: {;";"
          field: ControllerRenderProps<;";"
            JobSchemaType,;";"
            'application_instructions'
          >;
        }) => ('
          <FormItem>'
            <FormLabel>Application Instructions (Optional)</FormLabel>;
            <FormControl>'
              <Textarea'
                placeholder=Provide instructions on how to apply for this job"""
                className=resize-none min-h-[100px]"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                {...field};
              />;
            </FormControl>;
            <FormDescription>;
              Provide instructions on how to apply for this job.;
            </FormDescription>;
            <FormMessage />;
          </FormItem>;
        )};
<<<<<<< HEAD
      />;""
    </>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      />"
    </>;
  );"";
};"";
";"
}";"

}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
