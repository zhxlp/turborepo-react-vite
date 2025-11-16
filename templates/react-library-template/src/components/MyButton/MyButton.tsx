import clsx from "clsx";
import styles from "./MyButton.module.scss";

interface MyButtonProps extends React.ComponentProps<"button"> {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
}

export const MyButton: React.FC<MyButtonProps> = ({
  primary = false,
  size = "medium",
  label,
  ...props
}) => {
  const style = clsx(styles.button, {
    [styles["button--primary"]]: primary,
    [styles[`button--${size}`]]: size,
  });

  return (
    <button type="button" className={style} {...props}>
      {label}
    </button>
  );
};
