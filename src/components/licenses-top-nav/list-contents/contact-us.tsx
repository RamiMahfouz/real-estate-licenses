import { ContentList } from "../drop-down";

const listsData = [
  {
    title: "اتصل بنا",
    list: [],
    hasLink: true,
  },
  {
    title: "بلاغ عن فساد",
    list: [],
    hasLink: true,
  },
  {
    title: "الأسئلة الشائعة",
    list: [],
    hasLink: true,
  },
  {
    title: "الدعم الفني بلغة الإشارة",
    list: [],
    hasLink: true,
  },
  {
    title: "دليل الأمانات",
    list: [],
    hasLink: true,
  },
  {
    title: "وسائل التواصل الإجتماعي",
    list: [],
    hasLink: true,
  },
  {
    title: "حجز موعد إلكتروني",
    list: [],
    hasLink: true,
  },
];
export function ContactUs() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-10 ">
        {listsData.map((item) => (
          <div>
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
