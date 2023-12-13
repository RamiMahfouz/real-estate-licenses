import { ContentList } from "../drop-down";

const initiativesAndPartnershipsList = [
  "المبادرات  ",
  "الشراكات",
  "منصة استطلاع",
  "منصة تفاعل",
];
const dataAndStatisticsList = [
  "البيانات المفتوحة",
  "الوثائق والتقارير",
  "إحصائيات ومؤشرات المنصة",
];

const listsData = [
  {
    title: "مبادرات وشراكات",
    list: initiativesAndPartnershipsList,
  },
  {
    title: "بيانات وإحصائيات",
    list: dataAndStatisticsList,
  },
];

export function KnowledgeCenter() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-10 ">
        {listsData.map((item,index) => (
          <div key={index}>
            <ContentList title={item.title} list={item.list} />
          </div>
        ))}
      </div>
    </>
  );
}
