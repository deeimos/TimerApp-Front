"use client";

import styled from "styled-components";
import Link from "next/link";
import { device, sizes } from "../const/devices";
import { colors } from "../const/theme";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  z-index: 2;
  backdrop-filter: blur(8px);
  box-sizing: border-box;
`;

export const DesktopWrapper = styled(Wrapper)`
  height: 64px;
  padding: 0 24px;
  background-color: transparent;
  @media (max-width: ${sizes.mobile - 1}px) {
    display: none;
  }
`;

export const MobileWrapper = styled(Wrapper)`
  height: 56px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.bgColor};
  border-bottom: 1px solid ${({ theme }) => theme.textColor}20;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (min-width: ${sizes.mobile}px) {
    display: none;
  }
`;

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: inherit;
  text-decoration: none;
`;
