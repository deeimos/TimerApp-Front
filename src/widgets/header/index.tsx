import { DesktopHeader } from "@/entities/header/desktop";
import { MobileHeader } from "@/entities/header/mobile";

export default function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}
