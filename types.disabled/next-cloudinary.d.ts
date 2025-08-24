import * as React from react';interface UploadProps { children?: React.ReactNode; onUpload?: (result: unknown) => void; uploadPreset?: string; };
declare const CldUploadButton: React.FC<UploadProps>;
declare const CldUploadWidget: React.FC<UploadProps>;
