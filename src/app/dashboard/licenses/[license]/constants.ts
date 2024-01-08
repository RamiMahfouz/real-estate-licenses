export const mainData = [
  {
    name: "license_number_secretariat",
    type: "text",
    label: "رقم الرخصه الصادر من الأمانه",
  },
  {
    name: "license_number",
    type: "text",
    label: "رقم الرخصة",
  },
  {
    name: "request_number",
    type: "text",
    label: "رقم الطلب",
  },
  {
    name: "license_start_date",
    type: "text",
    label: "تاريخ بداية الرخصة",
  },
  {
    name: "license_end_date",
    type: "text",
    label: "تاريخ نهاية الرخصة",
  },
  {
    name: "license_type",
    type: "text",
    label: "نوع الرخصة",
  },
  {
    name: "building_type",
    type: "text",
    label: "نوع المبنى",
  },
  {
    name: "buildings_number",
    type: "text",
    label: "عدد المباني",
  },
  {
    name: "license_separated_another_license",
    type: "text",
    label: "هل الرخصة مفروزة من رخصة أخرى ؟",
  },
  {
    name: "main_use",
    type: "text",
    label: "الاستخدام الرئيسي",
  },
  {
    name: "sub_use",
    type: "text",
    label: "الاستخدام الفرعي",
  },
  {
    name: "total_land_area",
    type: "text",
    label: "مساحة الارض الإجمالية",
  },
  {
    name: "building_description",
    type: "text",
    label: "وصف المبنى",
  },
];

export const applicantData = [
  {
    name: "applicant_characteristics",
    type: "text",
    label: "صفة مقدم الطلب",
  },
  {
    name: "applicant_id",
    type: "text",
    label: "رقم هوية مقدم الطلب",
  },
  {
    name: "applicant_name",
    type: "text",
    label: "إسم مقدم الطلب",
  },
  {
    name: "phone",
    type: "text",
    label: "الجوال",
  },
  {
    name: "email",
    type: "text",
    label: "البريد الالكتروني",
  },
];

export const ownershipData = [
  {
    name: "ownership_type",
    type: "text",
    label: "نوع وثيقة الملكية",
  },
  {
    name: "ownership_number",
    type: "text",
    label: "رقم وثيقة الملكية",
  },
  {
    name: "ownership_date",
    type: "text",
    label: "تاريخ وثيقة الملكية",
  },
  {
    name: "scheme_number",
    type: "text",
    label: "رقم المخطط حسب الصك",
  },
  {
    name: "plot_number",
    type: "text",
    label: "رقم قطعة الارض حسب الصك",
  },
];

export const surveyDecisionData = [
  {
    name: "survey_decision_number",
    type: "text",
    label: "رقم القرار المساحي",
  },
  {
    name: "survey_decision_date",
    type: "text",
    label: "تاريخ القرار المساحي",
  },
];
export const geolocationData = [
  {
    name: "honesty",
    type: "text",
    label: "الامانة",
  },
  {
    name: "municipal",
    type: "text",
    label: "البلدية",
  },
  {
    name: "district",
    type: "text",
    label: "الحي",
  },
  {
    name: "planned_number",
    type: "text",
    label: "رقم المخطط",
  },
  {
    name: "block_number",
    type: "text",
    label: "رقم البلوك",
  },
];

export const midpointCoordinates = [
  {
    name: "abscissa",
    type: "text",
    label: "الإحداثي السيني",
  },
  {
    name: "y_coordinate",
    type: "text",
    label: "الإحداثي الصادي",
  },
];

export const contractingData = [
  {
    name: "supervising_engineering_office",
    type: "text",
    label: "المكتب الهندسي المشرف",
  },
  {
    name: "designer_engineering_office",
    type: "text",
    label: "المكتب الهندسي المصمم",
  },
];

export const insulationData = [
  {
    name: "glass_type",
    type: "text",
    label: "نوع الزجاج",
  },
  {
    name: "glass_type_value",
    type: "text",
    label: "قيمة نوع الزجاج",
  },
  {
    name: "roof_type",
    type: "text",
    label: "نوع السقف",
  },
  {
    name: "roof_type_value",
    type: "text",
    label: "قيمة نوع السقف",
  },
  {
    name: "walls_type",
    type: "text",
    label: "نوع الجدران",
  },
  {
    name: "walls_type_value",
    type: "text",
    label: "قيمة نوع الجدران",
  },
];

export const tableHeadDataOwnerData = [
  {
    title: "#",
    key: "inde",
  },
  {
    title: "اسم المالك",
    key: "owner_name",
  },
  {
    title: "رقم الهوية",
    key: "id_number",
  },
];
export const tableHeadDataBuildingComponents = [
  {
    title: "مكون البناء",
    key: "building_component",
  },
  {
    title: "مساحة الدور",
    key: "floor_area",
  },
  {
    title: "عدد الادوار",
    key: "floors_number",
  },
  {
    title: "عدد الوحدات",
    key: "units_number",
  },
  {
    title: "استخدام المكون",
    key: "component_usage",
  },
  {
    title: "نسبة البناء",
    key: "construction_ratio",
  },
];

export const tableHeadDataLandData = [
  {
    title: "#",
    key: "index",
  },
  {
    title: "رقم القطعة",
    key: "piece_number",
  },
  {
    title: "مساحة الارض",
    key: "land_area",
  },
  {
    title: "مساحة الارض حسب المخطط",
    key: "land_area_plan",
  },
];

export const tableHeadDataCoordinates = [
  {
    title: "رقم الإحداثي",
    key: "coordinate_number",
  },
  {
    title: "الإحداثي السيني",
    key: "abscissa",
  },
  {
    title: "الإحداثي الصادي",
    key: "y_coordinate",
  },
];

export const pledges = [
  {
    title:
      "يتعهد المكتب الهندسي المصمم بصحة كامل البيانات والمعلومات في نماذج ومخططات المشروع ، وفي حال تقديم المكتب لمعلومات غير صحيحة أو مخططات مخالفة للإشتراطات والأنظمة فأن (للوزارة / الأمانة) إتخاذ الإجراءات التي تراها مناسبة ضد المكتب وتطبيق ما تقتضي به الأنظمة المرعية، ومنها لائحة تصنيف مخالفات كود البناء السعودي، ولائحة الغرامات والجزاءات عن المخالفات البلدية الصادرة بقرار مجلس الوزراء رقم 218 وتاريخ 6/8/1422هـ ونظام مكافحة التزوير، والغرامات المالية، وتعويض المتضرر من المخالفة وإيقاف العمل بالمشروع",
  },
  {
    title:
      "يتعهد المكتب الهندسي المصمم بصحة كامل البيانات والمعلومات في نماذج ومخططات المشروع ، وفي حال تقديم المكتب لمعلومات غير صحيحة أو مخططات مخالفة للإشتراطات والأنظمة فأن (للوزارة / الأمانة) إتخاذ الإجراءات التي تراها مناسبة ضد المكتب وتطبيق ما تقتضي به الأنظمة المرعية، ومنها لائحة تصنيف مخالفات كود البناء السعودي، ولائحة الغرامات والجزاءات عن المخالفات البلدية الصادرة بقرار مجلس الوزراء رقم 218 وتاريخ 6/8/1422هـ ونظام مكافحة التزوير، والغرامات المالية، وتعويض المتضرر من المخالفة وإيقاف العمل بالمشروع",
  },
  {
    title:
      "يتعهد المكتب الهندسي المصمم بصحة كامل البيانات والمعلومات في نماذج ومخططات المشروع ، وفي حال تقديم المكتب لمعلومات غير صحيحة أو مخططات مخالفة للإشتراطات والأنظمة فأن (للوزارة / الأمانة) إتخاذ الإجراءات التي تراها مناسبة ضد المكتب وتطبيق ما تقتضي به الأنظمة المرعية، ومنها لائحة تصنيف مخالفات كود البناء السعودي، ولائحة الغرامات والجزاءات عن المخالفات البلدية الصادرة بقرار مجلس الوزراء رقم 218 وتاريخ 6/8/1422هـ ونظام مكافحة التزوير، والغرامات المالية، وتعويض المتضرر من المخالفة وإيقاف العمل بالمشروع",
  },
];

export const tableRowDimensions = [
  {
    title: "حد حسب السك",
    values: [
      {
        name: "north_instrument_limit",
        type: "text",
      },
      {
        name: "east_instrument_limit",
        type: "text",
      },
      {
        name: "south_instrument_limit",
        type: "text",
      },
      {
        name: "west_instrument_limit",
        type: "text",
      },
    ],
  },
  {
    title: "الحد حسب الطبيعة",
    values: [
      {
        name: "north_nature_limit",
        type: "text",
      },
      {
        name: "east_nature_limit",
        type: "text",
      },
      {
        name: "south_nature_limit",
        type: "text",
      },
      {
        name: "west_nature_limit",
        type: "text",
      },
    ],
  },
  {
    title: "الطول حسب الصك",
    values: [
      {
        name: "north_instrument_length",
        type: "text",
      },
      {
        name: "east_instrument_length",
        type: "text",
      },
      {
        name: "south_instrument_length",
        type: "text",
      },
      {
        name: "west_instrument_length",
        type: "text",
      },
    ],
  },
  {
    title: "الطول حسب الطبيعة",
    values: [
      {
        name: "north_nature_length",
        type: "text",
      },
      {
        name: "east_nature_length",
        type: "text",
      },
      {
        name: "south_nature_length",
        type: "text",
      },
      {
        name: "west_nature_length",
        type: "text",
      },
    ],
  },
  {
    title: "الإرتداد",
    values: [
      {
        name: "north_bouncing",
        type: "text",
      },
      {
        name: "east_bouncing",
        type: "text",
      },
      {
        name: "south_bouncing",
        type: "text",
      },
      {
        name: "west_bouncing",
        type: "text",
      },
    ],
  },

  {
    title: "البروز",
    values: [
      {
        name: "north_prominence",
        type: "text",
      },
      {
        name: "east_prominence",
        type: "text",
      },
      {
        name: "south_prominence",
        type: "text",
      },
      {
        name: "west_prominence",
        type: "text",
      },
    ],
  },
];
