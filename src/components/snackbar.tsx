"use client"
import useStore from '@/store/store';
import clsx from 'clsx';

export function Snakbar() {
  const snackbarInfo = useStore((state) => state?.snackbarInfo);
  const closeSnackbar = useStore((state) => state?.closeSnackbar);

  if (snackbarInfo.open) {
    setTimeout(() => {
      closeSnackbar();
    }, snackbarInfo?.duration * 1000 || 5000);
  }

  return (
    <>
      {snackbarInfo.open ? (
        <div className="fixed bottom-10 w-full  left-0 align-middle z-50">
          <div className="flex w-full justify-center">
            <div
              className={clsx(' px-3  py-1 rounded-md', {
                'bg-[#ff6464]': snackbarInfo.severity === 'error',
                'bg-[#2ad616]': snackbarInfo.severity === 'success',
              })}
            >
              <span className="text-[14px] text-white">
                {snackbarInfo.message}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
