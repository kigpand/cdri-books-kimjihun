import { useLocation, useNavigate } from "react-router-dom";
import { Path } from "../constants/path";

type TabProps = {
  title: string;
  isCurrentPath: boolean;
  handleTabClick: () => void;
};
function HeaderTab({ title, isCurrentPath, handleTabClick }: TabProps) {
  return (
    <div
      className={`text-body1 text-text-primary pb-2 ${
        isCurrentPath && "border-b border-[#4880ee]"
      }`}
      onClick={handleTabClick}
    >
      {title}
    </div>
  );
}

export default function Header() {
  const location = useLocation();
  const nav = useNavigate();

  return (
    <header className="w-full h-20 flex items-center pl-40 gap-[400px]">
      <h1 className="text-title1 text-text-primary">CERTICOS BOOKS</h1>
      <nav className="flex gap-[56px]">
        <HeaderTab
          title="도서 검색"
          isCurrentPath={location.pathname === Path.search}
          handleTabClick={() => nav(Path.search)}
        />
        <HeaderTab
          title="내가 찜한 책"
          isCurrentPath={location.pathname === Path.bookmark}
          handleTabClick={() => nav(Path.bookmark)}
        />
      </nav>
    </header>
  );
}
