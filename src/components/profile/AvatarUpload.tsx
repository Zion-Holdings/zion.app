import { useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';

type Props = {
  value?: string;
  onChange?: (url: string) => void;
};

export function AvatarUpload({ value, onChange }: Props) {
  const [url, setUrl] = useState(value);
  const handleUpload = (result: any) => {
    const secure = result?.info?.secure_url as string | undefined;
    if (secure) {
      setUrl(secure);
      onChange?.(secure);
    }
  };

  return (
    <div className="space-y-2">
      {url && <img src={url} alt="avatar" className="h-20 w-20 rounded-full" />}
      <CldUploadButton uploadPreset="avatar_preset" onUpload={handleUpload}>
        Upload Avatar
      </CldUploadButton>
    </div>
  );
}
