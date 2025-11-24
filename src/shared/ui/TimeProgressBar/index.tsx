"use client";

import { Bar, Fill, Header, Wrapper } from "./index.styled";

interface ITimeProgressBar {
  label: string;
  current: number;
  max: number;
}

export default function TimeProgressBar({ label, current, max }: ITimeProgressBar) {
  const percentage = Math.min((current / max) * 100, 100);

  return (
    <Wrapper>
      <Header>
        <span>{label}</span>
        <span>
          {current} / {max}
        </span>
      </Header>
      <Bar>
        <Fill style={{ width: `${percentage}%` }} />
      </Bar>
    </Wrapper>
  );
}
