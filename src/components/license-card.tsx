"use client";

import { licensesService } from "@/services/licenses-service";
import useStore from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import deleteIcon from "../assets/icons/remove-license.svg";

interface LicenseCardProps {
  values: any;
  fetchLicenses: any;
}

export function LicenseCard(props: LicenseCardProps) {
  const { values, fetchLicenses } = props;
  const setLoading = useStore((state) => state.loadingHandler);
  const setSnackbarInfo = useStore((state) => state.setSnackbarInfo);

  const closeWarningDialog = useStore(
    (state) => state.closeWarningDialogHandler
  );

  const setWarningDialogHandler = useStore(
    (state) => state.setWarningDialogHandler
  );

  function removeLicense() {
    setWarningDialogHandler({
      open: true,
      title: "حذف الترخيص",
      body: "هل انت متأكد من حذف هذا الترخيص؟",
      onAcceptDispatch: async () => {
        try {
          setLoading(true);
          await licensesService.deleteLicenses(values?.id);
          fetchLicenses();
          setLoading(false);
          closeWarningDialog();
          setSnackbarInfo({
            open: true,
            message:"تم حذف الرخصة بنجاح",
            severity: 'success',
          });
        } catch (error) {
          setLoading(false);
        }
      },
    });
  }

  return (
    <>
      <div className="flex flex-col  w-full sm:w-[400px] sm:h-[200px] bg-white rounded-lg shadow-lg">
        <div className="w-full h-[30px] bg-[#08706d] rounded-t-lg p-1 flex justify-end">
          <Image
            onClick={removeLicense}
            className="cursor-pointer"
            src={deleteIcon}
            width={20}
            height={20}
            alt="delete"
          ></Image>
        </div>
        <Link href={`/dashboard/licenses/${values?.id}`}>
          <div className="flex w-full overflow-hidden flex-col sm:flex-row items-center h-full py-1 sm:px-4">
            <img src={values?.qrcode_url} alt="QR-CODE"></img>

            <hr className="sm:w-[1px] w-[240px] my-3 sm:mx-3 h-[1px] sm:h-[140px] border bg-slate-400" />

            <div className="flex flex-col gap-4">
              <div className="flex gap-2   whitespace-nowrap overflow-hidden max-w-[200px] ">
                <span className="text-[14px]  text-gray-500">
                  {"رقم الرخصة"}:
                </span>
                <span className="text-[13px] overflow-hidden whitespace-nowrap text-ellipsis " dir="rtl">
                  {values?.main_data?.license_number}
                </span>
              </div>

              <div className="flex gap-2">
                <span className="text-[14px] text-gray-500">
                  {"نوع الرخصة"}:
                </span>
                <span className="text-[13px] overflow-hidden whitespace-nowrap text-ellipsis " dir="rtl">
                  {values?.main_data?.license_type}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-[14px] text-gray-500">
                  {"تاريخ بداية الرخصة"}:
                </span>
                <span className="text-[13px] overflow-hidden whitespace-nowrap text-ellipsis " dir="rtl">
                  {values?.main_data?.license_start_date}
                </span>
              </div>

              <div className="flex gap-2">
                <span className="text-[14px] text-gray-500">
                  {"تاريخ نهاية الرخصة"}:
                </span>
                <span className="text-[13px] overflow-hidden whitespace-nowrap text-ellipsis " dir="rtl">
                  {values?.main_data?.license_end_date}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
