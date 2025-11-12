import { createFileRoute } from '@tanstack/react-router';
import Menu1 from '@/pages/menu1';
import { PAGE_ROUTER_PATH } from '.';

export const Route = createFileRoute(PAGE_ROUTER_PATH.Menu1)({
  component: Menu1,
});
