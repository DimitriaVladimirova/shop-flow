import { NavLink } from 'react-router';
import { useGroups } from './useGroups';

function chipClasses({ isActive }: { isActive: boolean }) {
  const base = 'inline-block rounded-full px-5 py-2.5 text-h6 font-bold';

  return isActive
    ? `${base} bg-primary text-white`
    : `${base} border border-light-gray-2 text-second-text hover:border-primary hover:text-primary`;
}

export function CategoryNav() {
  const groups = useGroups();

  return (
    <nav aria-label="Categories">
      <ul className="flex flex-wrap gap-3">
        <li>
          <NavLink to="/shop" end className={chipClasses}>
            All products
          </NavLink>
        </li>
        {groups.data?.map((group) => (
          <li key={group.id}>
            <NavLink to={`/c/${group.slug}`} className={chipClasses}>
              {group.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
