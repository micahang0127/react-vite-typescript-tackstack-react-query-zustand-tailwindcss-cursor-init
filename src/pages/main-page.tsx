import { useQuery } from '@tanstack/react-query';
import PageLayOut from '@/components/common/page-layout';
import { userApi } from '@/apis/user';

const MainPage = () => {
  const {
    data: userInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['userInfo'],
    queryFn: userApi.getUserInfo,
  });

  return (
    <PageLayOut.Container>
      <PageLayOut.HeaderSection />
      <PageLayOut.BodySection>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">사용자 정보</h1>
          {isLoading && <p>로딩 중...</p>}
          {error && (
            <p className="text-red-500">
              오류: {error instanceof Error ? error.message : '알 수 없는 오류'}
            </p>
          )}
          {userInfo && (
            <div className="space-y-2">
              <p>ID: {userInfo.id}</p>
              <p>이름: {userInfo.name}</p>
              <p>이메일: {userInfo.email}</p>
            </div>
          )}
        </div>
      </PageLayOut.BodySection>
      <PageLayOut.FooterSection />
    </PageLayOut.Container>
  );
};

export default MainPage;
