"use client";
import { LicenseCard } from "@/components/license-card";
import { Pagination } from "@/components/pagination";
import { Skeleton } from "@/components/skeleton";
import LoginGuard from "@/guards/login-guard";
import { licensesService } from "@/services/licenses-service";
import useStore from "@/store/store";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [licenses, setLicenses] = useState<any>();
  const [licensesCount, setLicensesCount] = useState<any>();
  const setSnackbarInfo = useStore((state) => state.setSnackbarInfo);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const recordsPerPage = 9;
  const loading = useStore((state) => state.loading);

  const setLoading = useStore((state) => state.loadingHandler);

  async function fetchLicenses() {
    try {
      setLoading(true);
      const licenses: any = await licensesService.fetchLicenses(
        currentPage,
        recordsPerPage
      );
      setLicenses(licenses?.licenses);
      setLicensesCount(licenses?.licensesCount);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setSnackbarInfo({
        open: true,
        message: error?.response?.data?.message,
        severity: "error",
      });
    }
  }

  useEffect(() => {
    fetchLicenses();
  }, [currentPage]);

  return (
    <>
      <div className="w-full p-6 bg-white rounded-lg flex flex-col">
        <div className="w-full mb-10 flex items-center justify-between">
          <div>
            <span className="font-bold text-[23px]">{"التراخيص"}</span>
          </div>
          <div>
            <button
              onClick={() => router.push("/dashboard/licenses/add")}
              className="bg-[#08706d] text-[14px] whitespace-nowrap flex outline-none items-center justify-center font-bold rounded-lg px-10 py-2 text-white"
            >
              {"إضافة ترخيص"}
            </button>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-between">
          <div className="w-full flex items-center flex-wrap gap-8 justify-center ">
            {loading ? (
              <>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Skeleton
                    key={item}
                    style="w-full sm:w-[400px] h-[300px] sm:h-[200px] rounded-lg "
                  />
                ))}
              </>
            ) : (
              <>
                {licenses?.length === 0 ? (
                  <div>
                    <span className="text-[25px] font-bold">
                      {"لا توجد تراخيص "}
                    </span>
                  </div>
                ) : (
                  licenses?.map((license: any, index: number) => (
                    <LicenseCard
                      key={index}
                      values={license}
                      fetchLicenses={fetchLicenses}
                    />
                  ))
                )}
              </>
            )}
          </div>
          <div className="flex justify-center">
            <Pagination
              itemsCount={licensesCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              recordsPerPage={recordsPerPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
