type TabProps = {
  title: string;
};
function HeaderTab({ title }: TabProps) {
  return <div className="text-body1 text-text-primary">{title}</div>;
}

export default function Header() {
  return (
    <header className="w-full h-20 flex items-center pl-40 gap-[400px]">
      <h1 className="text-title1 text-text-primary">CERTICOS BOOKS</h1>
      <nav className="flex gap-[56px]">
        <HeaderTab title="도서 검색" />
        <HeaderTab title="내가 찜한 책" />
      </nav>
    </header>
  );
}
