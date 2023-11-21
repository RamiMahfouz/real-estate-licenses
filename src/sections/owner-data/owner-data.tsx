import { OwnerDataDialog } from "@/sections/owner-data/components/owner-data-dialog/owner-data-dialog";
import { LicenseTable } from "@/components/table";
import useStore from "@/store/store";
import Image from "next/image";
import { useState } from "react";
import AddIcon from "../../assets/icons/circle-plus.svg";
import { tableHeadDataOwnerData } from "@/app/dashboard/licenses/[license]/constants";

interface OwnerDataSectionProps {
  formValues: any;
  setFormValues: any;
}

export function OwnerDataSection(props: OwnerDataSectionProps) {
  const { formValues, setFormValues } = props;

  const [currentItem, setCurrentItem] = useState<any>({});
  const setWarningDialogHandler = useStore(
    (state) => state.setWarningDialogHandler
  );
  const closeWarningDialog = useStore(
    (state) => state.closeWarningDialogHandler
  );
  const [openMode, setOpenMode] = useState("");

  const [openOwnerDataDialog, setOpenOwnerDataDialog] =
    useState<boolean>(false);
  function closeOwnerDataDialogHandler() {
    setOpenOwnerDataDialog(false);
  }

  function openEditOwnerDataDialogHandler(row: any, rowIndex: number) {
    setCurrentItem({ index: rowIndex, value: row });
    setOpenMode("edit");
    setOpenOwnerDataDialog(true);
  }
  function openAddOwnerDataDialogHandler() {
    setOpenMode("add");
    setOpenOwnerDataDialog(true);
  }

  function deleteOwnerDataHandler(row: any, rowIndex: any) {
    setWarningDialogHandler({
      open: true,
      title: "حذف بيانات المالك",
      body: "هل انت متأكد من حذف بيانات هذا المالك",
      onAcceptDispatch: () => {
        setFormValues({
          ...formValues,
          ownerData: formValues.ownerData
            .filter((item: any, index: number) => index !== rowIndex)
            .map((item: any) =>
              item.index > row.index
                ? {
                    ...item,
                    index: item.index - 1,
                  }
                : item
            ),
        });
        closeWarningDialog();
      },
    });
  }

  return (
    <>
      <OwnerDataDialog
        open={openOwnerDataDialog}
        onClose={closeOwnerDataDialogHandler}
        openMode={openMode}
        currentItem={currentItem}
        licenseData={formValues}
        setLicenseData={setFormValues}
      />

      <div className="flex flex-col w-full">
        <span className="md:text-[32px] sm:text-[24px] text-[20px] font-bold">
          {"بيانات المالك"}
        </span>
        <div className="w-full flex items-center justify-between">
          <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
          <Image
            onClick={openAddOwnerDataDialogHandler}
            src={AddIcon}
            className="ml-2 cursor-pointer"
            width={20}
            height={20}
            alt="add"
          ></Image>
        </div>
        <LicenseTable
          tableHead={tableHeadDataOwnerData}
          tableRows={formValues.ownerData}
          viewHandler={openEditOwnerDataDialogHandler}
          deleteHandler={deleteOwnerDataHandler}
          hasViewIcon={true}
        />
      </div>
    </>
  );
}
