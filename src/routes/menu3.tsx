import { createFileRoute } from '@tanstack/react-router';
import Menu3 from '@/pages/menu3';
import { PAGE_ROUTER_PATH } from '.';

export const Route = createFileRoute(PAGE_ROUTER_PATH.Menu3)({
  component: Menu3,
});
