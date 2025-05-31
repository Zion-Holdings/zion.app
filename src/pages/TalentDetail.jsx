import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '@/services/apiClient';
import NotFound from '@/components/NotFound';
import Spinner from '@/components/Spinner';
import TalentProfile from '@/components/TalentProfile';

export default function TalentDetail() {
  const { id } = useParams();
  const { data, isLoading } = useQuery(
    ['talent', id],
    () => api.get(`/talent/${id}`).then((r) => r.data),
    { enabled: !!id }
  );

  if (isLoading) return <Spinner />;

  if (!data) {
    return <NotFound />;
  }

  return <TalentProfile {...data} />;
}
