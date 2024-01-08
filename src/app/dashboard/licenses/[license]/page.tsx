"use client";

import { LicenseTable } from "@/components/table";
import { TextInput } from "@/components/text-input";
import {
  applicantData,
  contractingData,
  geolocationData,
  insulationData,
  mainData,
  midpointCoordinates,
  ownershipData,
  surveyDecisionData,
  tableHeadDataOwnerData,
} from "@/app/dashboard/licenses/[license]/constants";
import {
  LicenseInitialValues,
  LicenseValidationSchema,
} from "@/app/dashboard/licenses/[license]/license-validation";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { OwnerDataDialog } from "../../../../sections/owner-data/components/owner-data-dialog/owner-data-dialog";
import Image from "next/image";
import useStore from "@/store/store";
import { OwnerDataSection } from "@/sections/owner-data/owner-data";
import { LandDataSection } from "@/sections/land-data/land-data";
import { BuldingComponentsSection } from "@/sections/building-components/buliding-components";
import { CoordinatesSection } from "@/sections/coordinates/coordinates";
import { PledgesSection } from "@/sections/pledges/pledges";
import { DimensionsTable } from "@/components/dimensions-table";
import { DimensionsTableView } from "@/components/dimensions-table-view";
import { licensesService } from "@/services/licenses-service";
import { LoadingButton } from "@/components/button";
import { useParams, useRouter } from "next/navigation";

export default function EditLicense() {
  const [formValues, setFormValues] = useState<any>(LicenseInitialValues);
  const setLoading = useStore((state) => state.loadingHandler);
  const setSnackbarInfo = useStore((state) => state.setSnackbarInfo);

  const route = useRouter();
  const params = useParams();
  const { license } = params;
  async function openModeHandler() {
    if (license === "add") {
      setFormValues(LicenseInitialValues);
    }
    if (license !== "add") {
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
            licenseData?.dimensions_boundaries?.nature_limit
              ?.north_nature_limit,
          east_nature_limit:
            licenseData?.dimensions_boundaries?.nature_limit?.east_nature_limit,
          south_nature_limit:
            licenseData?.dimensions_boundaries?.nature_limit
              ?.south_nature_limit,
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
            licenseData?.dimensions_boundaries?.nature_length
              ?.east_nature_length,
          south_nature_length:
            licenseData?.dimensions_boundaries?.nature_length
              ?.south_nature_length,
          west_nature_length:
            licenseData?.dimensions_boundaries?.nature_length
              ?.west_nature_length,
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
          glass_type: licenseData?.insulation_data?.glass_type,
          glass_type_value: licenseData?.insulation_data?.glass_type_value,
          roof_type: licenseData?.insulation_data?.roof_type,
          roof_type_value: licenseData?.insulation_data?.roof_type_value,
          walls_type: licenseData?.insulation_data?.walls_type,
          walls_type_value: licenseData?.insulation_data?.walls_type_value,
        });
      } catch (error: any) {
        setSnackbarInfo({
          open: true,
          message: error?.response?.data?.message,
          severity: "error",
        });
      }
    }
  }

  useEffect(() => {
    openModeHandler();
  }, [license]);

  async function handleSubmitClick(values: any) {
    if (license === "add") {
      try {
        setLoading(true);
        await licensesService.addLicenses(values);
        setLoading(false);
        route.push("/dashboard");
        setSnackbarInfo({
          open: true,
          message: "تم إضافة الرخصة بنجاح",
          severity: "success",
        });
      } catch (error: any) {
        setLoading(false);
        setSnackbarInfo({
          open: true,
          message: error?.response?.data?.message,
          severity: "error",
        });
        console.log(error);
      }
    } else {
      try {
        setLoading(true);
        await licensesService.editLicenses(values);
        setLoading(false);
        setSnackbarInfo({
          open: true,
          message: "تم تعديل الرخصة بنجاح",
          severity: "success",
        });
      } catch (error: any) {
        setSnackbarInfo({
          open: true,
          message: error?.response?.data?.message,
          severity: "error",
        });
        setLoading(false);
        console.log(error);
      }

      route.push("/dashboard");
    }
  }

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
              {license !== "add" ? (
                <div className="flex justify-center w-full">
                  <img
                    src={formValues?.qr_code}
                    className="w-36 h-36"
                    alt="QR-CODE"
                  ></img>
                </div>
              ) : null}

              <div className="flex flex-col w-full">
                <span className="md:text-[30px] sm:text-[24px] text-[20px] font-bold">
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
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-full">
                <span className="font-bold md:text-[30px] sm:text-[24px] text-[20px]">
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
                      />
                    </div>
                  ))}
                </div>
              </div>
              <OwnerDataSection
                formValues={formik.values}
                setFormValues={setFormValues}
              />

              <div className="flex flex-col w-full">
                <span className="md:text-[30px] sm:text-[24px] text-[20px] font-bold">
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
                      />
                    </div>
                  ))}
                </div>
              </div>

              <BuldingComponentsSection
                formValues={formik.values}
                setFormValues={setFormValues}
              />

              <div className="flex flex-col w-full ">
                <span className="md:text-[30px] sm:text-[24px] text-[20px] font-bold">
                  {"الأبعاد والحدود"}
                </span>
                <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
                <DimensionsTable />
              </div>

              <div className="flex flex-col w-full">
                <span className="md:text-[30px] sm:text-[24px] text-[20px] font-bold">
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
                      />
                    </div>
                  ))}
                </div>
              </div>
              <LandDataSection
                formValues={formik.values}
                setFormValues={setFormValues}
              />

              <div className="flex flex-col w-full">
                <span className="md:text-[30px] sm:text-[24px] text-[20px] font-bold">
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
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-full">
                <span className="md:text-[30px] sm:text-[24px] text-[20px] font-bold">
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
                      />
                    </div>
                  ))}
                </div>
              </div>

              <CoordinatesSection
                formValues={formik.values}
                setFormValues={setFormValues}
              />

              <div className="flex flex-col w-full">
                <span className="md:text-[30px] sm:text-[24px] text-[20px] font-bold">
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
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-full">
                <span className="md:text-[30px] sm:text-[24px] text-[20px] font-bold">
                  {"بيانات العزل الحراري"}
                </span>
                <div className="w-[40px] my-6 h-[6px] bg-[#85bd48]"></div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  {insulationData.map((item) => (
                    <div key={item.label} className="min-w-full">
                      <TextInput
                        name={item.name}
                        type={item.type}
                        label={item.label}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <PledgesSection
                formValues={formik.values}
                setFormValues={setFormValues}
              />

              <LoadingButton onClick={formik.submitForm}>{"حفظ"}</LoadingButton>
            </>
          )}
        </Formik>
      </div>
    </>
  );
}
