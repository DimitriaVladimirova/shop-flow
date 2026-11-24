import { useQuery } from '@tanstack/react-query';
import { catalogKeys, fetchGroups } from './api';

export function useGroups() {
  return useQuery({
    queryKey: catalogKeys.groups(),
    queryFn: () => fetchGroups(),
  });
}
