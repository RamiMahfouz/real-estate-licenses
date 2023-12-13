import { ContentList } from "../drop-down";

const aboutList = [
  "من نحن",
  "الهيكل التنظيمي",
  "الهيكل الإستراتيجي للوزارة",
  "السياسات والاستراتيجيات",
  "أهداف التنمية المستدامة",
  "الشركاء",
  "الوظائف",
  "تواصل معنا",
];
const electronicParticipationList = [
  "الاستشارات",
  "البيانات المفتوحة",
  "التغذية الراجعة",
  "التطوير المشترك والأفكار",
  "وسائل التواصل الاجتماعي",
];
const newsAndEventsList = ["الأخبار", "الفعاليات"];
const competitionsAndBudget = ["المنافسات والمشتريات", "الميزانية والإنفاق"];

const listsData = [
  {
    title: "من نحن",
    list: aboutList,
  },
  {
    title: "المشاركة الإلكترونية",
    list: electronicParticipationList,
    hasLink: true,
  },
  {
    title: "الأخبار والفعاليات",
    list: newsAndEventsList,
  },
  {
    title: "المنافسات والميزانية",
    list: competitionsAndBudget,
  },
];

export function AboutBalady() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-10 ">
        {listsData.map((item) => (
          <div>
            <ContentList
              title={item.title}
              list={item.list}
              hasLink={item.hasLink}
            />
          </div>
        ))}
      </div>
    </>
  );
}
