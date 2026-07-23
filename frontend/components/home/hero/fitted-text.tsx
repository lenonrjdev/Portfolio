type FittedTextProps = {
  text: string;
  viewBoxWidth: number;
  viewBoxHeight: number;
  fontSize: number;
  baseline: number;
  className?: string;
};

/**
 * Mantém apenas os textos que precisam seguir as proporções da composição
 * original. A função principal do projeto é Poppins.
 */
export function FittedText({
  text,
  viewBoxWidth,
  viewBoxHeight,
  fontSize,
  baseline,
  className = "",
}: FittedTextProps) {
  return (
    <svg
      className={`block h-full w-full overflow-visible ${className}`}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <text
        className="fill-current font-normal [font-family:var(--font-poppins)]"
        x="0"
        y={baseline}
        fontSize={fontSize}
        textLength={viewBoxWidth}
        lengthAdjust="spacingAndGlyphs"
      >
        {text}
      </text>
    </svg>
  );
}
