"use client";
import { LicenseTable } from "@/components/table";
import useStore from "@/store/store";
import { useEffect, useState } from "react";
import { UsersDialog } from "./users-dialog/users-dilaog";
import Image from "next/image";
import AddIcon from "../../../assets/icons/circle-plus.svg";
import { usersService } from "@/services/users-service";
import { Pagination } from "@/components/pagination";
import UsersGuard from "@/guards/users-guard";

const tableHeadUsers = [
  {
    title: "الاسم",
    key: "user_name",
  },
  {
    title: "البريد الإلكتروني",
    key: "email",
  },
  {
    title: "الصلاحيات",
    key: "role",
  },
];

export default function UsersPage() {
  const [currentUser, setCurrentUser] = useState<any>({});
  const [openMode, setOpenMode] = useState("");
  const [users, setUsers] = useState<any>();
  const [usersCount, setUsersCount] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const recordsPerPage = 9;
  const setLoading = useStore((state) => state.loadingHandler);
  const setSnackbarInfo = useStore((state) => state.setSnackbarInfo);

  const closeWarningDialog = useStore(
    (state) => state.closeWarningDialogHandler
  );

  const setWarningDialogHandler = useStore(
    (state) => state.setWarningDialogHandler
  );
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  function closeDialogHandler() {
    setOpenDialog(false);
  }
  function addIsDisable(user: any) {
    if (user?.role === "admin") return { ...user, disable: true };
    else return user;
  }
  const userstableRows = users?.map(addIsDisable);
  function viewUser(user: any) {
    setCurrentUser(user);
    setOpenMode("edit");
    setOpenDialog(true);
  }
  function addUser() {
    setOpenMode("add");
    setOpenDialog(true);
  }
  function deleteUser(user: any) {
    setWarningDialogHandler({
      open: true,
      title: "حذف بيانات المستخدم",
      body: "هل انت متأكد من حذف بيانات هذا المستخدم",
      onAcceptDispatch: async () => {
        try {
          setLoading(true);
          await usersService.deleteUser(user?.id);
          fetchUsers();
          setLoading(false);
          closeWarningDialog();
          setSnackbarInfo({
            open: true,
            message: "تم حذف المستخدم بنجاح",
            severity: "success",
          });
        } catch (error) {
          setLoading(false);
        }
      },
    });
  }

  async function fetchUsers() {
    try {
      const data: any = await usersService.fetchUsers(
        currentPage,
        recordsPerPage
      );
      setUsers(data?.users);
      setUsersCount(data?.usersCount);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  return (
    <>
      <UsersDialog
        currentItem={currentUser}
        onClose={closeDialogHandler}
        open={openDialog}
        openMode={openMode}
        fetchUsers={fetchUsers}
      />
      <UsersGuard>
        <div className="w-full p-6 bg-white rounded-lg flex flex-col">
          <div className="w-full mb-10 gap-4 flex items-center justify-between">
            <div>
              <span className="font-bold text-[23px] ">{"المستخدمين"}</span>
            </div>
            <div>
              <button
                onClick={addUser}
                className="bg-[#08706d] whitespace-nowrap text-[14px] flex outline-none items-center justify-center font-bold rounded-lg px-8 py-2 text-white"
              >
                {"إضافة مستخدم"}
              </button>
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-between">
            <LicenseTable
              tableHead={tableHeadUsers}
              tableRows={userstableRows}
              hasViewIcon
              viewHandler={viewUser}
              deleteHandler={deleteUser}
            />
            <div className="flex justify-center">
              <Pagination
                itemsCount={usersCount}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                recordsPerPage={recordsPerPage}
              />
            </div>
          </div>
        </div>
      </UsersGuard>
    </>
  );
}
