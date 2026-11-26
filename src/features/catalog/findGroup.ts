import type { ProductGroup } from '../../shared/types/catalog';

export function findGroup(groups: ProductGroup[] | undefined, groupIds: string[]) {
  return groups?.find((g) => groupIds.includes(g.id));
}
