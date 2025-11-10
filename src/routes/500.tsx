import { createFileRoute } from '@tanstack/react-router';
import ServerError from '@/components/common/error/server-error';

export const Route = createFileRoute('/500')({
  component: ServerError,
});
