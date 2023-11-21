interface SkeletonProps {
  style: React.ComponentProps<"div">["className"];
  classStyle?: React.CSSProperties;
}

export function Skeleton(props: SkeletonProps) {
  const { style, classStyle } = props;

  return (
    <div
      style={classStyle}
      className={`${style} bg-gray-200 min-h-[10px] dark:bg-gray-700 rounded-sm animate-pulse`}
    ></div>
  );
}
