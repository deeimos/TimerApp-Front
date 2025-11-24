'use client'

import styled, { css } from 'styled-components'

type TextVariant =
  | 'title'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'link'
  | 'button'

interface IText {
  variant?: TextVariant
  display?: string
  font_size?: string
  font_weight?: React.CSSProperties['fontWeight']
  textAlign?: React.CSSProperties['textAlign']
  line_height?: string
  color?: React.CSSProperties['color']
  width?: string
  margin?: string
  alignself?: string
  line_clamp?: number
  max_width?: string
  justify_content?: string
  white_space?: React.CSSProperties['whiteSpace']
  overflow?: string
  word_break?: string
  cursor?: React.CSSProperties['cursor']
  opacity?: string | number
}

const variantStyles = {
  title: css`
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4;
  `,
  subtitle: css`
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
  `,
  body: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
  `,
  caption: css`
    font-size: 13px;
    font-weight: 400;
    line-height: 1.4;
  `,
  link: css`
    font-size: 16px;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
  `,
  button: css`
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
  `,
}

export const Text = styled.span<IText>`
  ${({ variant }) => variant && variantStyles[variant]}

  display: ${({ display }) => display};
  font-size: ${({ font_size }) => font_size};
  font-weight: ${({ font_weight }) => font_weight};
  text-align: ${({ textAlign }) => textAlign};
  align-self: ${({ alignself }) => alignself};
  line-height: ${({ line_height }) => line_height};
  color: ${({ color, theme }) => color ?? theme.textColor};
  margin: ${({ margin }) => margin ?? 0};
  cursor: ${({ cursor }) => cursor ?? 'inherit'};
  opacity: ${({ opacity }) => opacity};
  max-width: ${({ max_width }) => max_width};
  width: ${({ width }) => width};
  justify-content: ${({ justify_content }) => justify_content};
  white-space: ${({ white_space }) => white_space};
  word-break: ${({ word_break }) => word_break};
  overflow: ${({ overflow }) => overflow};

  ${({ line_clamp }) =>
    line_clamp &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${line_clamp};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`
