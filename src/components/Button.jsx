import clsx from "clsx";
import PropTypes from "prop-types";
import Marker from "./Marker";
// import React from "react";

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}) => {
  const Inner = () => (
    <>
      <span className="">
        <span>
          <Marker fill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            className="size-10 mr-5 object-contain z-10"
            alt="circle"
          />
        )}
        <span>{children}</span>
      </span>
    </>
  );

  return href ? (
    <a
      href={href}
      className={clsx(
        "relative, p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative, p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  containerClassName: PropTypes.string,
  onClick: PropTypes.func,
  markerFill: PropTypes.string,
};

export default Button;
