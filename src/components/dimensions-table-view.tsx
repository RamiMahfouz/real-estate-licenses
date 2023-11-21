"use client";

import { useEffect, useState } from "react";
import { PopoverInfo } from "./popover";
import InfoIcon from "../assets/icons/info-icon.svg";
import Image from "next/image";

const tableHead = [
  {
    title: "الشمال",
  },
  {
    title: "الشرق",
  },
  {
    title: "الجنوب",
  },
  {
    title: "الغرب",
  },
];

export function DimensionsTableView(values: any) {
  const [tableRows, setTableRows] = useState<any>();
  useEffect(() => {
    setTableRows([
      {
        title: "الحد حسب الصك",
        values: [
          {
            name: values?.data.north_instrument_limit,
          },
          {
            name: values?.data?.east_instrument_limit,
          },
          {
            name: values?.data?.south_instrument_limit,
          },
          {
            name: values?.data?.west_instrument_limit,
          },
        ],
      },
      {
        title: "الحد حسب الطبيعة",
        values: [
          {
            name: values?.data?.north_nature_limit,
          },
          {
            name: values?.data?.east_nature_limit,
          },
          {
            name: values?.data?.south_nature_limit,
          },
          {
            name: values?.data?.west_nature_limit,
          },
        ],
      },
      {
        title: "الطول حسب الصك",
        values: [
          {
            name: values?.data?.north_instrument_length,
          },
          {
            name: values?.data?.east_instrument_length,
          },
          {
            name: values?.data?.south_instrument_length,
          },
          {
            name: values?.data?.west_instrument_length,
          },
        ],
      },
      {
        title: "الطول حسب الطبيعة",
        values: [
          {
            name: values?.data?.north_nature_length,
          },
          {
            name: values?.data?.east_nature_length,
          },
          {
            name: values?.data?.south_nature_length,
          },
          {
            name: values?.data?.west_nature_length,
          },
        ],
      },
      {
        title: "الإرتداد",
        values: [
          {
            name: values?.data?.north_bouncing,
          },
          {
            name: values?.data?.east_bouncing,
          },
          {
            name: values?.data?.south_bouncing,
          },
          {
            name: values?.data?.west_bouncing,
          },
        ],
      },
      {
        title: "البروز",
        values: [
          {
            name: values?.data?.north_prominence,
          },
          {
            name: values?.data?.east_prominence,
          },
          {
            name: values?.data?.south_prominence,
          },
          {
            name: values?.data?.west_prominence,
          },
        ],
      },
    ]);
  }, [values?.data]);

  return (
    <>
      <div className="overflow-x-auto whitespace-nowrap">
        <table className="w-full overflow-x-auto whitespace-nowrap">
          <thead className="">
            <tr className="bg-[#08706d] w-full  ">
              <td></td>
              {tableHead.map((head: any, index: number) => (
                <td
                  key={index}
                  className="p-[0.3rem] text-center font-bold text-white text-[16px]"
                >
                  {head.title}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows?.map((row: any, rowIndex: number) => (
              <tr
                key={rowIndex}
                className=" p-2 border-b-[1px] border-[#eae9e9]"
              >
                <th className="bg-[#eae9e9] text-right pr-2 ">{row.title}</th>
                <>
                  {row.values?.map((item: any, index: number) => (
                    <td key={index} className="p-[0.3rem] py-3 text-center">
                      {rowIndex == 0 ? (
                        <div className="border py-2 flex gap-2 justify-center rounded-md  ">
                          <span className="text-ellipsis  block overflow-hidden whitespace-nowrap max-w-[120px]">
                            {item.name ?? "---"}
                          </span>
                          <PopoverInfo
                            popoverButton={
                              <Image
                                src={InfoIcon}
                                alt="info"
                                width={20}
                                height={20}
                              />
                            }
                          >
                            <span className="text-[14px] p-2">{item.name}</span>
                          </PopoverInfo>
                        </div>
                      ) : (
                        <span className="text-[15px]">
                          {item.name ?? "---"}
                        </span>
                      )}
                    </td>
                  ))}
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
