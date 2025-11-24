"use-client";
import { Text } from "@/shared/ui/Text";
import { Box } from "@/shared/ui/Wrappers";
import { Metadata } from "next";
import { TbDeviceDesktopCode } from "react-icons/tb";

export const metadata: Metadata = {
  title: "TimerApp",
  description: "Раздел в разработке",
};

export default function Summer() {
  return (
    <Box flex column alignItems="center" justifyContent="center" gap={4}>
      <TbDeviceDesktopCode size={256} />
      <Text>Раздел в разработке</Text>
    </Box>
  );
}
