import { forwardRef, ReactElement } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

type MainButtonProps = {
  text: string;
  form?: string;
  isLoading?: boolean;
  action?: () => void;
  isSubmitable?: boolean;
  disabled?: boolean;
  width?: "full_width" | string;
  dataLoadingText?: string;
  variant?: "primary" | "secondary";
  classes?: string;
  iconRoute?: string;
  rightIconRoute?: string;
  rightIconClass?: string;
  iconComponent?: ReactElement;
  size?: "small" | "normal" | "large";
  isGradient?: boolean;
};

const MainButton = forwardRef<HTMLButtonElement, MainButtonProps>(
  (
    {
      text,
      isLoading = false,
      form,
      action,
      disabled = false,
      isSubmitable = false,
      width = "w-[6.375rem]",
      dataLoadingText = "Please wait ...",
      variant = "primary",
      classes = "",
      iconRoute,
      rightIconRoute,
      rightIconClass = "w-[24px] h-[24px]",
      iconComponent,
      size = "normal",
      isGradient = false,
    },
    ref
  ) => {
    const propWidth = width === "full_width" ? "w-full" : width;

    const sizeHeight =
      size === "small"
        ? "h-[2.256rem]"
        : size === "large"
        ? "h-[2.625rem]"
        : "h-[2.256rem]";

    const variantClasses =
      variant === "primary" ? "bg-primary hover:opacity-90" : "bg-secondary hover:opacity-90";

    const gradientClass = isGradient ? "red-gradient" : "";

    const buttonClasses = `
      ${variantClasses}
      ${propWidth}
      ${sizeHeight}
      select-none
      rounded-[0.625rem]
      text-white
      shadow-xl
      ${gradientClass}
      ${classes}
    `;

    if (isLoading) {
      return (
        <Button
          className={`bg-primary text-white ${propWidth} ${sizeHeight} cursor-not-allowed rounded-[0.625rem] ${classes}`}
          ref={ref}
          disabled
          aria-busy="true"
        >
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {dataLoadingText}
        </Button>
      );
    }

    return (
      <Button
        form={form}
        className={buttonClasses}
        onClick={!disabled ? action : undefined}
        type={isSubmitable ? "submit" : "button"}
        ref={ref}
        disabled={disabled}
      >
        {iconRoute && (
          <Image
            src={iconRoute}
            alt="left button icon"
            className="w-[24px] h-[24px]"
          />
        )}
        {iconRoute && <span>&nbsp;</span>}
        {iconComponent}
        {iconComponent && <span>&nbsp;</span>}
        {text}
        {rightIconRoute && <span>&nbsp;</span>}
        {rightIconRoute && (
          <Image
            src={rightIconRoute}
            alt="right button icon"
            className={rightIconClass}
          />
        )}
      </Button>
    );
  }
);

MainButton.displayName = "MainButton";

export default MainButton;
