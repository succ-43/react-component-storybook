import React from "react";
import classNames from "classnames";

import styles from "./styles.module.css";

interface ButtonProps {
  /** The button variant (default is "dark"). Determines the button's color. */
  variant?: "dark" | "green";
  /** Specifies whether the button is outlined. Defaults to "false" (solid button). */
  outlined?: boolean;
  /** The text to be displayed inside the button. */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "dark",
  outlined = false,
  label,
  onClick,
}) => {
  const buttonClasses = classNames(
    styles.button,
    styles[variant],
    outlined && styles.outlined,
  );

  return (
    <button
      className={buttonClasses}
      aria-label={label}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
