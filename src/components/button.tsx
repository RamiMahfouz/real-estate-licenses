import useStore from "@/store/store";
import clsx from "clsx";
import { ReactNode } from "react";
import { TailSpin } from "react-loader-spinner";

interface LoadingButtonProps {
  children?: ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "reset" | "submit" | undefined;
}

export function LoadingButton(props: LoadingButtonProps) {
  const { children, style, disabled, onClick, type } = props;
  const loading = useStore((state) => state.loading);

  return (
    <>
      <button
        type="submit"
        onClick={onClick}
        disabled={loading || disabled}
        style={{
          ...style,
        }}
        className={clsx(
          "bg-[#08706d] flex outline-none items-center justify-center font-bold rounded-lg px-10 py-2 text-white",

          {
            "opacity-70": loading,
          }
        )}
      >
        {children}
        {loading ? (
          <div className=" rtl:mr-4 ltr:ml-4">
            <TailSpin color="#00BFFF" height={23} width={23} />
          </div>
        ) : null}
      </button>
    </>
  );
}
