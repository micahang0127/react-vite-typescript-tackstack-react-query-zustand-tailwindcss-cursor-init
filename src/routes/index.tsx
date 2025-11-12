import { createFileRoute, redirect } from '@tanstack/react-router';
import type { PageRouterPathRecord } from '@/types/page-router';

export type { PageRouterPath } from '@/types/page-router';

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({ to: PAGE_ROUTER_PATH.Menu1 });
  },
});

export const PAGE_ROUTER_PATH: PageRouterPathRecord = {
  Menu1: '/menu1',
  Menu2: '/menu2',
  Menu3: '/menu3',
  Menu4: '/menu4',
};
