import { useState } from 'react';
const PageHeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-20 flex justify-between items-center pl-24 pr-20 border-gray-200 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)] bg-white">
      <div className="w-[198px] h-[28px] bg-blue-400">logo</div>
      <button className="text-[14px] font-medium px-4 py-2 rounded-[15px] text-white bg-[#006AEB]">
        로그인 / 회원가입
      </button>
    </header>
  );
};

export default PageHeaderSection;
