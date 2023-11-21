import { LicenseTable } from "@/components/table";
import useStore from "@/store/store";
import Image from "next/image";
import { useState } from "react";
import AddIcon from "../../assets/icons/circle-plus.svg";
import { CoordinatesDialog } from "./components/coordinates-dialog";
import { tableHeadDataCoordinates } from "@/app/dashboard/licenses/[license]/constants";

interface CoordinatesSectionProps {
  formValues: any;
  setFormValues: any;
}

export function CoordinatesSection(props: CoordinatesSectionProps) {
  const { formValues, setFormValues } = props;

  const [currentItem, setCurrentItem] = useState<any>({});
  const setWarningDialogHandler = useStore(
    (state) => state.setWarningDialogHandler
  );
  const closeWarningDialog = useStore(
    (state) => state.closeWarningDialogHandler
  );
  const [openMode, setOpenMode] = useState("");

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  function closeDialogHandler() {
    setOpenDialog(false);
  }

  function openEditDialogHandler(row: any, rowIndex: number) {
    setCurrentItem({ index: rowIndex, value: row });
    setOpenMode("edit");
    setOpenDialog(true);
  }
  function openAddDialogHandler() {
    setOpenMode("add");
    setOpenDialog(true);
  }

  function deleteHandler(row: any, rowIndex: any) {
    setWarningDialogHandler({
      open: true,
      title: "حذف الإحداثيات",
      body: "هل انت متأكد من حذف هذه الإحداثيات؟",
      onAcceptDispatch: () => {
        setFormValues({
          ...formValues,
          coordinates: formValues.coordinates.filter(
            (item: any, index: number) => index !== rowIndex
          ),
        });
        closeWarningDialog();
      },
    });
  }

  return (
    <>
      <CoordinatesDialog
        open={openDialog}
        onClose={closeDialogHandler}
        openMode={openMode}
        currentItem={currentItem}
        licenseData={formValues}
        setLicenseData={setFormValues}
      />

      <div className="flex flex-col w-full">
        <span className="md:text-[32px] sm:text-[24px] text-[20px] font-bold">
          {"الإحداثيات"}
        </span>
        <div className="w-full flex items-center justify-between">
          <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
          <Image
            onClick={openAddDialogHandler}
            src={AddIcon}
            className="ml-2 cursor-pointer"
            width={20}
            height={20}
            alt="add"
          ></Image>
        </div>
        <LicenseTable
          tableHead={tableHeadDataCoordinates}
          tableRows={formValues.coordinates}
          viewHandler={openEditDialogHandler}
          deleteHandler={deleteHandler}
          hasViewIcon={true}
        />
      </div>
    </>
  );
}
