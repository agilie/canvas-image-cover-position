interface CoverSize {
  width: number;
  height: number;
  offsetLeft: number;
  offsetTop: number;
}

type getCoverSize = (
  contentWidth: number,
  contentHeight: number,
  containerWidth: number,
  containerHeight: number,
  offsetLeft?: number,
  offsetTop?: number,
) => CoverSize;

declare module '@agilie/canvas-image-cover-position' {
  const f: getCoverSize;
  export default f;
}
