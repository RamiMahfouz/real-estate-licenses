import Image from "next/image";
import { ContentList } from "../drop-down";
import arrowLeftIcon from "../../../assets/icons/arrow-left.svg";

const listsData = [
  {
    title: "الاستعلامات العامة",
    list: [
      "الاستعلام عن المخالفة للإجراءات الاحترازية",
      "حاسبة الرسوم المعلوماتية",
      "الاستعلام عن المكاتب الهندسية",
      "الاستعلام عن عقود النظافة",
      "أسواق المتاجر المتنقلة",
      "الاستعلام عن الإيقافات",
      "الاستعلام عن المخالفات",
    ],
  },
  {
    title: "الأراضي والبناء",
    list: [
      "استعلام عن رخصة بناء",
      "اشتراطات إيصال الخدمات الكهربائية",
      "المستكشف الجغرافي",
      "مستكشف التغطية لخدمات البنية التحتية",
      "الاستعلام عن قرار مساحي",
    ],
  },
  {
    title: "الاستعلامات التجارية",
    list: [
      "استعلام عن رخصة نشاط تجاري",
      "الأنشطة التجارية والاشتراطات البلدية",
      "الاستعلام عن مسارات العربات المتجولة",
    ],
  },
  {
    title: "خدمات إكرام الموتى",
    list: [
      "الاستعلام عن مقدمي خدمات نقل وتجهيز الموتى (الجهات الخيرية)",
      "الاستعلام عن قبر متوفي",
      "طباعة شهادة دفن",
      "الاستعلام عن المقابر",
    ],
  },
];
export function Inquiries() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-10 ">
      {listsData.map((item) => (
        <div>
          <ContentList title={item.title} list={item.list} />
        </div>
      ))}
      <div
        onClick={() => window.open("https://balady.gov.sa/")}
        className="flex gap-2 text-right cursor-pointer"
      >
        <div className="mt-1">
          {" "}
          <Image src={arrowLeftIcon} alt="list" width={15} height={15} />
        </div>
        <span className="text-[.95rem] text-[#08706d] font-bold">
          {"الدليل التنظيمي للوحات التجارية"}
        </span>
      </div>
    </div>
  );
}
