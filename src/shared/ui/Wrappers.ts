'use client'

import styled, { css } from 'styled-components'

type Variant = 'card' | 'glass' | 'surface'

interface IBox {
  flex?: boolean
  column?: boolean
  borderRadius?: number
  padding?: string
  width?: string
  margin?: string
  gap?: number
  border?: React.CSSProperties['border']
  backgroundColor?: React.CSSProperties['backgroundColor']
  justifyContent?: React.CSSProperties['justifyContent']
  alignItems?: React.CSSProperties['alignItems']
  boxShadow?: boolean
  variant?: Variant
  hoverable?: boolean
  clickable?: boolean
}

const variants = {
  card: css`
    background-color: ${({ theme }) => theme.bgColor};
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    padding: 16px;
  `,
  glass: css`
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    backdrop-filter: blur(12px);
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  `,
  surface: css`
    background-color: ${({ theme }) => theme.bgColor};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.textColor}22;
    padding: 12px;
  `,
}

export const Box = styled.div<IBox>`
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'initial'};
  align-items: ${({ alignItems }) => alignItems ?? 'initial'};
  padding: ${({ padding }) => padding ?? '0'};
  margin: ${({ margin }) => margin ?? '0'};
  width: ${({ width }) => width ?? 'auto'};
  gap: ${({ gap }) => gap ?? 0}px;
  border-radius: ${({ borderRadius }) => borderRadius ?? 0}px;
  border: ${({ border }) => border ?? 'none'};
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'transparent'};
  box-shadow: ${({ boxShadow }) => (boxShadow ? '0 3px 65px rgba(0, 0, 0, 0.05)' : 'none')};
  height: fit-content;
  box-sizing: border-box;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
  transition: box-shadow 0.2s ease, transform 0.1s ease;

  ${({ variant }) => variant && variants[variant]}

  ${({ hoverable }) =>
    hoverable &&
    css`
      &:hover {
        box-shadow: 0 6px 32px rgba(0, 0, 0, 0.1);
      }
    `}

  ${({ clickable }) =>
    clickable &&
    css`
      &:active {
        transform: scale(0.98);
      }
    `}
`
