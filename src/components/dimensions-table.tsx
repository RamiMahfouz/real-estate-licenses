import { tableRowDimensions } from "@/app/dashboard/licenses/[license]/constants";
import { TextInput } from "./text-input";

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

export function DimensionsTable() {
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
            {tableRowDimensions.map((row: any, rowIndex: number) => (
              <tr
                key={rowIndex}
                className=" p-2 border-b-[1px] border-[#eae9e9]"
              >
                <th className="bg-[#eae9e9] text-right pr-2 ">{row.title}</th>
                <>
                  {row.values?.map((item: any, index: number) => (
                    <td
                      key={index}
                      className="p-[0.3rem] min-w-[150px] text-center"
                    >
                      <TextInput name={item.name} type={item.type} />
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
