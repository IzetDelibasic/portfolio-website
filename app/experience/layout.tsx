import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
