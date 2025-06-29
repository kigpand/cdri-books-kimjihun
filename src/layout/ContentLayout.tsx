import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ContentLayout({ children }: Props) {
  return <main className="w-full px-[480px]">{children}</main>;
}
