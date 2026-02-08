import { cn } from "@/lib/utils";

function Container({
  childern,
  className,
}: {
  childern: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-6xl xl:max-w-7xl px-8", className)}>
      {childern}
    </div>
  );
}
export default Container;
