import clsx from "clsx";
import arrowButtonLeftIcon from "../assets/icons/arrow-button-left.svg";
import arrowButtonRightIcon from "../assets/icons/arrow-button-right.svg";
import Image from "next/image";

interface PaginationProps {
  currentPage: any;
  setCurrentPage: any;
  recordsPerPage: number;
  itemsCount: any;
}

export function Pagination(props: PaginationProps) {
  const { currentPage, setCurrentPage, recordsPerPage, itemsCount } = props;

  const nPages = Math.ceil(itemsCount / recordsPerPage);

  const pageNumbers = Array.from({ length: nPages }, (_, index) => index + 1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="flex items-center mt-1 flex-row-reverse">
        <Image
          onClick={prevPage}
          src={arrowButtonLeftIcon}
          className={clsx("w-[24px] h-[24px] cursor-pointer", {
            hidden: currentPage === 1,
          })}
          alt="search"
        />

        {pageNumbers.map((pN) => (
          <div
            key={pN}
            onClick={() => setCurrentPage(pN)}
            className={clsx(
              "mx-2  w-[24px] h-[24px] flex justify-center items-center cursor-pointer rounded-[4px]",
              {
                "bg-[#08706d]": currentPage === pN,
              }
            )}
          >
            <span
              className={clsx("text-[#6D7B9B] text-[16px]", {
                "text-[#fff]": currentPage === pN,
              })}
            >
              {pN}
            </span>
          </div>
        ))}

        <Image
          onClick={nextPage}
          src={arrowButtonRightIcon}
          className={clsx("w-[24px] h-[24px] cursor-pointer", {
            hidden: currentPage === nPages || itemsCount === 0,
          })}
          alt="search"
        />
      </div>
    </>
  );
}
