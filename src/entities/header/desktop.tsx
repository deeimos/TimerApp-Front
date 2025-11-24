import { DesktopWrapper, HeaderLink } from "@/shared/ui/Header";
import Image from "next/image";
import { UserProfile } from "../../features/header/UserProfile";

export const DesktopHeader = () => {
  return (
    <DesktopWrapper>
      <HeaderLink href="/">
        <Image src={"/logo.svg"} alt="logo" width={32} height={32}></Image> TimerApp
      </HeaderLink>
      <UserProfile />
    </DesktopWrapper>
  );
};
