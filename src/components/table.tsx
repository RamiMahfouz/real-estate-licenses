import Image from "next/image";
import editIcon from "../assets/icons/edit.svg";
import deleteIcon from "../assets/icons/trash.svg";
import clsx from "clsx";

interface TableProps {
  tableHead: any;
  tableRows: any;
  hasViewIcon?: boolean;
  viewHandler?: any;
  deleteHandler?: any;
}

export function LicenseTable(props: TableProps) {
  const { tableHead, tableRows, hasViewIcon, viewHandler, deleteHandler } =
    props;

  return (
    <>
      <div className="overflow-x-auto whitespace-nowrap">
        <table className="w-full overflow-x-auto whitespace-nowrap [&>tbody>*:nth-child(odd)]:bg-[#eae9e9]">
          <thead className="">
            <tr className="bg-[#08706d] w-full border-b-4 ">
              {tableHead.map((head: any, index: number) => (
                <td
                  key={head.title}
                  className="p-[0.3rem]  font-bold text-white text-[16px]"
                >
                  {head.title}
                </td>
              ))}
              {hasViewIcon ? <td key={"permission-row"}></td> : null}
            </tr>
          </thead>
          <tbody>
            {!tableRows?.length ? (
              <tr>
                <td
                  key={"no-doc"}
                  colSpan={10}
                  className="text-center p-3 font-bold text-[#616161]"
                >
                  {"لا توجد سجلات في هذا الجدول"}
                </td>
              </tr>
            ) : (
              tableRows.map((row: any, rowIndex: number) => (
                <tr key={rowIndex} className="p-2">
                  {tableHead.map((head: any, index: number) => (
                    
                      <td key={index} className="p-[0.3rem]">
                        {typeof head.key === "function"
                          ? head.key(row, index)
                          : row[head.key]}
                      </td>
                    
                  ))}
                  {hasViewIcon ? (
                    <>
                      <td  className="p-[0.3rem] flex justify-end min-w-[100px]">
                        <div className=" flex items-center gap-3  ml-4">
                          <Image
                            onClick={() => viewHandler(row, rowIndex)}
                            src={editIcon}
                            width={16}
                            height={16}
                            alt="edit"
                            className="cursor-pointer"
                          ></Image>
                          {row?.disable ? null : (
                            <Image
                              onClick={() => deleteHandler(row, rowIndex)}
                              className="cursor-pointer"
                              src={deleteIcon}
                              width={20}
                              height={20}
                              alt="delete"
                            ></Image>
                          )}
                        </div>
                      </td>
                    </>
                  ) : null}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
