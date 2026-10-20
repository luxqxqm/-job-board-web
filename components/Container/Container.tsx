import { ReactNode } from "react";
import css from "./Container.module.css";
interface ContainerProps {
  children: ReactNode;
  classname?: string;
}

export default function Container({ children, classname }: ContainerProps) {
  return (
    <div
      className={classname ? `${css.container} ${classname}` : css.container}
    >
      {children}
    </div>
  );
}
