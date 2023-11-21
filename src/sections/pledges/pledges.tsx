import { LicenseTable } from "@/components/table";
import useStore from "@/store/store";
import Image from "next/image";
import { useState } from "react";
import AddIcon from "../../assets/icons/circle-plus.svg";
import { PledgesDialog } from "./components/pledges-dialog";
import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/trash.svg";
interface PledgesSectionProps {
  formValues: any;
  setFormValues: any;
}

export function PledgesSection(props: PledgesSectionProps) {
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
      title: "حذف التعهدات",
      body: "هل انت متأكد من حذف هذا التعهد؟",
      onAcceptDispatch: () => {
        setFormValues({
          ...formValues,
          pledges: formValues.pledges.filter(
            (item: any, index: number) => index !== rowIndex
          ),
        });
        closeWarningDialog();
      },
    });
  }

  return (
    <>
      <PledgesDialog
        open={openDialog}
        onClose={closeDialogHandler}
        openMode={openMode}
        currentItem={currentItem}
        licenseData={formValues}
        setLicenseData={setFormValues}
      />

      <div className="flex flex-col w-full">
        <span className="md:text-[32px] sm:text-[24px] text-[20px] font-bold">
          {"التعهدات"}
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
        <div className="w-full border-[1px] border-[#d2dbee] bg-[#fafafa] py-6 px-5 rounded-md">
          {!formValues.pledges.length ? (
            <div className="flex justify-center">
              <span className="font-bold text-[#616161]">
                {"لا يوجد تعهدات"}
              </span>
            </div>
          ) : (
            <ul dir="rtl" className="gap-3 flex flex-col text-right">
              {formValues.pledges.map((item: any, index: number) => (
                <div key={index} className="flex ">
                  <li
                    className="before:content-['•'] before:ml-2 before:text-[22px]  text-[#3c3c3b]"
                    key={index}
                  >
                    {item.pledge}
                  </li>
                  <div className=" flex items-center gap-3  mx-4">
                    <Image
                      onClick={() => openEditDialogHandler(item, index)}
                      src={editIcon}
                      width={16}
                      height={16}
                      alt="edit"
                      className="cursor-pointer"
                    ></Image>
                    <Image
                      onClick={() => deleteHandler(item, index)}
                      className="cursor-pointer"
                      src={deleteIcon}
                      width={20}
                      height={20}
                      alt="delete"
                    ></Image>
                  </div>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
