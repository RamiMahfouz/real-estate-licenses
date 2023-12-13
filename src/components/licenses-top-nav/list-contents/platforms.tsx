import { ContentList } from "../drop-down";

const listsData = [
  {
    title: "بوابة الفرص الاستثمارية",
    list: [],
    hasLink: true,
  },
  {
    title: "المنصات التفاعلية",
    list: [],
    hasLink: true,
  },
];

export function Platforms() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-10 ">
        {listsData.map((item,index) => (
          <div key={index}>
            <ContentList
              title={item.title}
              list={item.list}
              hasLink={item?.hasLink}
            />
          </div>
        ))}
      </div>
    </>
  );
}
