import * as React from 'react';
export interface UploadProps { children?: React.ReactNode; onUpload?: (result: unknown) => void; uploadPreset?: string; }
export declare const CldUploadButton: React.FC<UploadProps>;
export declare const CldUploadWidget: React.FC<UploadProps>;
