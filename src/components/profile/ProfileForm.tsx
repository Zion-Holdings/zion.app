import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { AvatarUpload } from './AvatarUpload';

export interface ProfileValues {
  name: string;
  bio: string;
  avatarUrl: string;
}

interface Props {
  defaultValues: ProfileValues;
  onSubmit: (values: ProfileValues) => void;
}

export function ProfileForm({ defaultValues, onSubmit }: Props) {
  const { register, handleSubmit, setValue, watch } = useForm<ProfileValues>({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <AvatarUpload value={watch('avatarUrl')} onChange={(url) => setValue('avatarUrl', url)} />
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register('name')} />
      </div>
      <div>
        <Label htmlFor="bio">Bio</Label>
        <Input id="bio" {...register('bio')} />
      </div>
      <Button type="submit">Save</Button>
    </form>
  );
}
