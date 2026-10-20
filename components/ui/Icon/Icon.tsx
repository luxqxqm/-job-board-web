type IconsName =
  | "eye-off"
  | "eye"
  | "cross-small"
  | "check"
  | "star"
  | "search"
  | "chevron-down"
  | "angle-left"
  | "user"
  | "calendar"
  | "female"
  | "male"
  | "malefemale"
  | "heart"
  | "trash"
  | "edit"
  | "logo"
  | "menu";

interface IconProps {
  name: IconsName;
  width?: number;
  height?: number;
  className?: string;
}

export default function Icon({
  name,
  width = 24,
  height = 24,
  className,
}: IconProps) {
  return (
    <svg className={className} width={width} height={height} aria-hidden="true">
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
}
