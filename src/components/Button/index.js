import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  RoundedBorder5: "rounded-radius5",
};
const variants = {
  FillPurpleA700: "bg-purple_A700 text-white_A700",
  FillTeal300: "bg-teal_300 text-white_A700",
};
const sizes = {
  sm: "lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] p-[6px]",
  md: "p-[10px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px]",
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
  shape: PropTypes.oneOf(["RoundedBorder10", "RoundedBorder5"]),
  variant: PropTypes.oneOf(["FillPurpleA700", "FillTeal300"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder10",
  variant: "FillPurpleA700",
  size: "md",
};

export { Button };
