"use client";

import { Formik } from "formik";
import { TextInput } from "../../../components/text-input";
import { useState, useEffect } from "react";
import {
  LicenseInitialValues,
  LicenseValidationSchema,
} from "../../dashboard/licenses/[license]/license-validation";
import { LicenseTable } from "../../../components/table";
import axios from "axios";
import {
  applicantData,
  contractingData,
  geolocationData,
  mainData,
  midpointCoordinates,
  ownershipData,
  pledges,
  surveyDecisionData,
  tableHeadDataBuildingComponents,
  tableHeadDataCoordinates,
  tableHeadDataLandData,
  tableHeadDataOwnerData,
} from "../../dashboard/licenses/[license]/constants";
import { DimensionsTable } from "@/components/dimensions-table";
import { DimensionsTableView } from "@/components/dimensions-table-view";
import { useParams } from "next/navigation";
import { licensesService } from "@/services/licenses-service";
import useStore from "@/store/store";

export default function LicenseInfo() {
  const [formValues, setFormValues] = useState(LicenseInitialValues);
  const params = useParams();
  const { license } = params;
  function handleSubmitClick(values: any) {
    console.log(values);
  }
  const setSnackbarInfo = useStore((state) => state.setSnackbarInfo);

  async function fetchLicensesData() {
    try {
      const licenseData = await licensesService.fetchLicensesById(license);
      setFormValues({
        qr_code: licenseData?.qrcode_url,
        id: licenseData?.id,
        license_number_secretariat:
          licenseData?.main_data?.license_number_secretariat,
        license_number: licenseData?.main_data?.license_number,
        request_number: licenseData?.main_data?.request_number,
        license_start_date: licenseData?.main_data?.license_start_date,
        license_end_date: licenseData?.main_data?.license_end_date,
        license_type: licenseData?.main_data?.license_type,
        building_type: licenseData?.main_data?.building_type,
        buildings_number: licenseData?.main_data?.buildings_number,
        license_separated_another_license:
          licenseData?.main_data?.license_separated_another_license,
        main_use: licenseData?.main_data?.main_use,
        sub_use: licenseData?.main_data?.sub_use,
        total_land_area: licenseData?.main_data?.total_land_area,
        building_description: licenseData?.main_data?.building_description,
        applicant_characteristics:
          licenseData?.applicant_data?.applicant_characteristics,
        applicant_id: licenseData?.applicant_data?.applicant_id,
        applicant_name: licenseData?.applicant_data?.applicant_name,
        phone: licenseData?.applicant_data?.phone,
        email: licenseData?.applicant_data?.email,
        ownership_type: licenseData?.ownershipData?.ownership_type,
        ownership_number: licenseData?.ownershipData?.ownership_number,
        ownership_date: licenseData?.ownershipData?.ownership_date,
        scheme_number: licenseData?.ownershipData?.scheme_number,
        plot_number: licenseData?.ownershipData?.plot_number,
        survey_decision_number:
          licenseData?.surveyDecisionData?.survey_decision_number,
        survey_decision_date:
          licenseData?.surveyDecisionData?.survey_decision_date,
        honesty: licenseData?.geolocationData?.honesty,
        municipal: licenseData?.geolocationData?.municipal,
        district: licenseData?.geolocationData?.district,
        planned_number: licenseData?.geolocationData?.planned_number,
        block_number: licenseData?.geolocationData?.block_number,
        abscissa: licenseData?.midpointCoordinates?.abscissa,
        y_coordinate: licenseData?.midpointCoordinates?.y_coordinate,
        supervising_engineering_office:
          licenseData?.contractingData?.supervising_engineering_office,
        designer_engineering_office:
          licenseData?.contractingData?.designer_engineering_office,
        ownerData: licenseData?.ownerData,
        landData: licenseData?.landData,
        buildingComponents: licenseData?.buildingComponents,
        coordinates: licenseData?.coordinates,
        pledges: licenseData?.pledges,
        north_instrument_limit:
          licenseData?.dimensions_boundaries?.instrument_limit
            ?.north_instrument_limit,
        east_instrument_limit:
          licenseData?.dimensions_boundaries?.instrument_limit
            ?.east_instrument_limit,
        south_instrument_limit:
          licenseData?.dimensions_boundaries?.instrument_limit
            ?.south_instrument_limit,
        west_instrument_limit:
          licenseData?.dimensions_boundaries?.instrument_limit
            ?.west_instrument_limit,
        north_nature_limit:
          licenseData?.dimensions_boundaries?.nature_limit?.north_nature_limit,
        east_nature_limit:
          licenseData?.dimensions_boundaries?.nature_limit?.east_nature_limit,
        south_nature_limit:
          licenseData?.dimensions_boundaries?.nature_limit?.south_nature_limit,
        west_nature_limit:
          licenseData?.dimensions_boundaries?.nature_limit?.west_nature_limit,
        north_instrument_length:
          licenseData?.dimensions_boundaries?.instrument_length
            ?.north_instrument_length,
        east_instrument_length:
          licenseData?.dimensions_boundaries?.instrument_length
            ?.east_instrument_length,
        south_instrument_length:
          licenseData?.dimensions_boundaries?.instrument_length
            ?.south_instrument_length,
        west_instrument_length:
          licenseData?.dimensions_boundaries?.instrument_length
            ?.west_instrument_length,
        north_nature_length:
          licenseData?.dimensions_boundaries?.nature_length
            ?.north_nature_length,
        east_nature_length:
          licenseData?.dimensions_boundaries?.nature_length?.east_nature_length,
        south_nature_length:
          licenseData?.dimensions_boundaries?.nature_length
            ?.south_nature_length,
        west_nature_length:
          licenseData?.dimensions_boundaries?.nature_length?.west_nature_length,
        north_bouncing:
          licenseData?.dimensions_boundaries?.bouncing?.north_bouncing,
        east_bouncing:
          licenseData?.dimensions_boundaries?.bouncing?.east_bouncing,
        south_bouncing:
          licenseData?.dimensions_boundaries?.bouncing?.south_bouncing,
        west_bouncing:
          licenseData?.dimensions_boundaries?.bouncing?.west_bouncing,
        north_prominence:
          licenseData?.dimensions_boundaries?.prominence?.north_prominence,
        east_prominence:
          licenseData?.dimensions_boundaries?.prominence?.east_prominence,
        south_prominence:
          licenseData?.dimensions_boundaries?.prominence?.south_prominence,
        west_prominence:
          licenseData?.dimensions_boundaries?.prominence?.west_prominence,
      });
    } catch (error:any) {
      setSnackbarInfo({
        open: true,
        message: error?.response?.data?.message,
        severity: "error",
      });
      console.log(error);
    }
  }

  useEffect(() => {
    fetchLicensesData();
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden lg:mx-36 p-6 gap-10 rounded-md bg-white flex flex-col">
        <Formik
          onSubmit={handleSubmitClick}
          initialValues={formValues}
          validationSchema={LicenseValidationSchema}
          enableReinitialize
        >
          {(formik) => (
            <>
              <div className="flex flex-col w-full">
                <span className="md:text-[32px] sm:text-[24px] text-[20px] font-bold">
                  {"البيانات الرئيسية"}
                </span>
                <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mainData.map((item) => (
                    <div key={item.label} className="min-w-full">
                      <TextInput
                        name={item.name}
                        type={item.type}
                        label={item.label}
                        isDisabled
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-full">
                <span className="font-bold md:text-[32px] sm:text-[24px] text-[20px]">
                  {"بيانات مقدم الطلب"}
                </span>
                <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  {applicantData.map((item) => (
                    <div key={item.label} className="min-w-full">
                      <TextInput
                        name={item.name}
                        type={item.type}
                        label={item.label}
                        isDisabled
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-full">
                <span className="md:text-[32px] sm:text-[24px] text-[20px] font-bold">
                  {"بيانات المالك"}
                </span>
                <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
                <LicenseTable
                  tableHead={tableHeadDataOwnerData}
                  tableRows={formik.values.ownerData}
                />
              </div>

              <div className="flex flex-col w-full">
                <span className="md:text-[32px] sm:text-[24px] text-[20px] font-bold">
                  {"بيانات وثيقة الملكية"}
                </span>
                <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ownershipData.map((item) => (
                    <div key={item.label} className="min-w-full">
                      <TextInput
                        name={item.name}
                        type={item.type}
                        label={item.label}
                        isDisabled
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-full ">
                <span className="md:text-[32px] sm:text-[24px] text-[20px] font-bold">
                  {"مكونات البناء"}
                </span>
                <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
                <LicenseTable
                  tableHead={tableHeadDataBuildingComponents}
                  tableRows={formik.values.buildingComponents}
                />
              </div>

              <div className="flex flex-col w-full ">
                <span className="md:text-[32px] sm:text-[24px] text-[20px] font-bold">
                  {"الأبعاد والحدود"}
                </span>
                <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
                <DimensionsTableView data={formik.values} />
              </div>

              <div className="flex flex-col w-full">
                <span className="md:text-[32px] sm:text-[24px] text-[20px] font-bold">
                  {"بيانات القرار المساحي"}
                </span>
                <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  {surveyDecisionData.map((item) => (
                    <div key={item.label} className="min-w-full">
                      <TextInput
                        name={item.name}
                        type={item.type}
                        label={item.label}
                        isDisabled
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-full">
                <span className="md:text-[32px] sm:text-[24px] text-[20px] font-bold">
                  {"بيانات الاراضي"}
                </span>
                <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
                <LicenseTable
                  tableHead={tableHeadDataLandData}
                  tableRows={formik.values.landData}
                />
              </div>

              <div className="flex flex-col w-full">
                <span className="md:text-[32px] sm:text-[24px] text-[20px] font-bold">
                  {"بيانات الموقع الجغرافي"}
                </span>
                <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  {geolocationData.map((item) => (
                    <div key={item.label} className="min-w-full">
                      <TextInput
                        name={item.name}
                        type={item.type}
                        label={item.label}
                        isDisabled
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-full">
                <span className="md:text-[32px] sm:text-[24px] text-[20px] font-bold">
                  {"إحداثيات نقطة الوسط"}
                </span>
                <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  {midpointCoordinates.map((item) => (
                    <div key={item.label} className="min-w-full">
                      <TextInput
                        name={item.name}
                        type={item.type}
                        label={item.label}
                        isDisabled
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-full overflow-auto">
                <span className="md:text-[32px] sm:text-[24px] text-[20px] font-bold">
                  {"الإحداثيات"}
                </span>
                <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
                <LicenseTable
                  tableHead={tableHeadDataCoordinates}
                  tableRows={formik.values.coordinates}
                />
              </div>

              <div className="flex flex-col w-full">
                <span className="md:text-[32px] sm:text-[24px] text-[20px] font-bold">
                  {"بيانات التعاقد"}
                </span>
                <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  {contractingData.map((item) => (
                    <div key={item.label} className="min-w-full">
                      <TextInput
                        name={item.name}
                        type={item.type}
                        label={item.label}
                        isDisabled
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-full">
                <span className="md:text-[32px] sm:text-[24px] text-[20px] font-[500]">
                  {"التعهدات"}
                </span>
                <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
                <div className="w-full border-[1px] border-[#d2dbee] bg-[#fafafa] py-6 px-5 rounded-md">
                  <ul dir="rtl" className="gap-3 flex flex-col text-right">
                    {formik.values.pledges.map((item: any, index: number) => (
                      <li
                        className="before:content-['•'] before:ml-2 before:text-[22px] text-[#3c3c3b]"
                        key={index}
                      >
                        {item.pledge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </Formik>
      </div>
    </>
  );
}
