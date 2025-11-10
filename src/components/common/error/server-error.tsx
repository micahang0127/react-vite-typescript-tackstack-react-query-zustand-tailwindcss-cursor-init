import { useNavigate } from '@tanstack/react-router';

const ServerError = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-10">
      <h1>Error 500</h1>
    </div>
  );
};

export default ServerError;
