import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/**
 * Header 제외 content UI wrapper
 * @param children Wrapper 내부 컴포넌트
 */
export default function ContentLayout({ children }: Props) {
  return <main className="w-full px-[480px] py-20">{children}</main>;
}
