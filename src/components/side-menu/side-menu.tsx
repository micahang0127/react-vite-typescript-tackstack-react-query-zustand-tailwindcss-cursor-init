import { useEffect, useState } from 'react';
import { useRouter, Link } from '@tanstack/react-router';
import { icons } from '@/assets/icons';
import { PAGE_ROUTER_PATH } from '@/routes';

const SideMenu = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    if (router.state.location.pathname)
      setCurrentPath(router.state.location.pathname);
  }, []);

  return (
    <aside>
      <ul className="mt-8 mr-2.5 mb-8 ml-20">
        {menus.map((menu) => {
          const currented = currentPath === menu.link;
          return (
            <Link key={menu.id} to={menu.link}>
              <li
                className={`group flex rounded-2xl py-4 pr-20 pl-7 mb-5 text-center transition-colors ${
                  currented
                    ? 'text-[#006AEB] bg-[#F5F8FB]'
                    : 'text-[#A0A0A0] hover:text-[#006AEB] hover:bg-[#F5F8FB]'
                }`}
              >
                <span
                  aria-hidden
                  className="mr-5 inline-flex h-6 w-6 items-center justify-center"
                  style={{ color: 'inherit' }}
                  dangerouslySetInnerHTML={{ __html: menu.icon }}
                />
                <span className="text-base">{menu.label}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideMenu;

const menus = [
  {
    id: 1,
    label: 'Menu1',
    icon: icons.iconLocation,
    link: PAGE_ROUTER_PATH.Menu1,
  },
  {
    id: 2,
    label: 'Menu2',
    icon: icons.iconCompany,
    link: PAGE_ROUTER_PATH.Menu2,
  },
  {
    id: 3,
    label: 'Menu3',
    icon: icons.iconCoins,
    link: PAGE_ROUTER_PATH.Menu3,
  },
  {
    id: 4,
    label: 'Menu4',
    icon: icons.iconHome,
    link: PAGE_ROUTER_PATH.Menu4,
  },
];
