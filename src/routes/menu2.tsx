import { createFileRoute } from '@tanstack/react-router';
import Menu2 from '@/pages/menu2';
import { PAGE_ROUTER_PATH } from '.';

export const Route = createFileRoute(PAGE_ROUTER_PATH.Menu2)({
  component: Menu2,
});
