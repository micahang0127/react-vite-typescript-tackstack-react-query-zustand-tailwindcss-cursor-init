import { useNavigate } from '@tanstack/react-router';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-10">
      <h1>Error 404</h1>
    </div>
  );
};
export default NotFound;
