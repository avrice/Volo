import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  RoundedBorder10: "rounded-radius10",
};
const variants = {
  FillTeal300: "bg-teal_300 text-white_A700",
  FillPurpleA700: "bg-purple_A700 text-white_A700",
};
const sizes = {
  sm: "p-[4px]",
  md: "p-[10px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px]",
  lg: "xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] p-[17px] lg:p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder5", "RoundedBorder10"]),
  variant: PropTypes.oneOf(["FillTeal300", "FillPurpleA700"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder5",
  variant: "FillTeal300",
  size: "sm",
};

export { Button };
