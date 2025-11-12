import { createFileRoute } from '@tanstack/react-router';
import Menu4 from '@/pages/menu4';
import { PAGE_ROUTER_PATH } from '.';

export const Route = createFileRoute(PAGE_ROUTER_PATH.Menu4)({
  component: Menu4,
});
