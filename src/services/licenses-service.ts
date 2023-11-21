"use client";

import axios from "axios";
export const licensesService = {
  async fetchLicenses(currentPage: number, recordsPerPage: number) {
    const jwtToken = localStorage.getItem("licenseToken");

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/licenses`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        params: {
          page: currentPage,
          limit: recordsPerPage,
        },
      }
    );

    return response?.data ?? [];
  },
  async fetchLicensesById(licenseId: any) {
    const jwtToken = localStorage.getItem("licenseToken");
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/licenses/${licenseId}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    return response?.data ?? {};
  },
  async deleteLicenses(licenseId: any) {
    const jwtToken = localStorage.getItem("licenseToken");
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/licenses/${licenseId}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    return response;
  },
  async addLicenses(values: any) {
    const jwtToken = localStorage.getItem("licenseToken");
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/licenses`,
      {
        main_data: {
          license_number_secretariat: values?.license_number_secretariat,
          license_number: values?.license_number,
          request_number: values?.request_number,
          license_start_date: values?.license_start_date,
          license_end_date: values?.license_end_date,
          license_type: values?.license_type,
          building_type: values?.building_type,
          buildings_number: values?.buildings_number,
          license_separated_another_license:
            values?.license_separated_another_license,
          main_use: values?.main_use,
          sub_use: values?.sub_use,
          total_land_area: values?.total_land_area,
          building_description: values?.building_description,
        },
        applicant_data: {
          applicant_characteristics: values?.applicant_characteristics,
          applicant_id: values?.applicant_id,
          applicant_name: values?.applicant_name,
          phone: values?.phone,
          email: values?.email,
        },
        ownershipData: {
          ownership_type: values?.ownership_type,
          ownership_number: values?.ownership_number,
          ownership_date: values?.ownership_date,
          scheme_number: values?.scheme_number,
          plot_number: values?.plot_number,
        },
        surveyDecisionData: {
          survey_decision_number: values?.survey_decision_number,
          survey_decision_date: values?.survey_decision_date,
        },
        geolocationData: {
          honesty: values?.honesty,
          municipal: values?.municipal,
          district: values?.district,
          planned_number: values?.planned_number,
          block_number: values?.block_number,
        },
        midpointCoordinates: {
          abscissa: values?.abscissa,
          y_coordinate: values?.y_coordinate,
        },
        contractingData: {
          supervising_engineering_office:
            values?.supervising_engineering_office,
          designer_engineering_office: values?.designer_engineering_office,
        },
        ownerData: values?.ownerData,
        landData: values?.landData,
        buildingComponents: values?.buildingComponents,
        coordinates: values?.coordinates,
        pledges: values?.pledges,
        dimensions_boundaries: {
          instrument_limit: {
            north_instrument_limit: values?.north_instrument_limit,
            east_instrument_limit: values?.east_instrument_limit,
            south_instrument_limit: values?.south_instrument_limit,
            west_instrument_limit: values?.west_instrument_limit,
          },
          nature_limit: {
            north_nature_limit: values?.north_nature_limit,
            east_nature_limit: values?.east_nature_limit,
            south_nature_limit: values?.south_nature_limit,
            west_nature_limit: values?.west_nature_limit,
          },
          instrument_length: {
            north_instrument_length: values?.north_instrument_length,
            east_instrument_length: values?.east_instrument_length,
            south_instrument_length: values?.south_instrument_length,
            west_instrument_length: values?.west_instrument_length,
          },
          nature_length: {
            north_nature_length: values?.north_nature_length,
            east_nature_length: values?.east_nature_length,
            south_nature_length: values?.south_nature_length,
            west_nature_length: values?.west_nature_length,
          },
          bouncing: {
            north_bouncing: values?.north_bouncing,
            east_bouncing: values?.east_bouncing,
            south_bouncing: values?.south_bouncing,
            west_bouncing: values?.west_bouncing,
          },
          prominence: {
            north_prominence: values?.north_prominence,
            east_prominence: values?.east_prominence,
            south_prominence: values?.south_prominence,
            west_prominence: values?.west_prominence,
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    return response?.data;
  },
  async editLicenses(values: any) {
    const jwtToken = localStorage.getItem("licenseToken");
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/licenses/${values?.id}`,
      {
        main_data: {
          license_number_secretariat: values?.license_number_secretariat,
          license_number: values?.license_number,
          request_number: values?.request_number,
          license_start_date: values?.license_start_date,
          license_end_date: values?.license_end_date,
          license_type: values?.license_type,
          building_type: values?.building_type,
          buildings_number: values?.buildings_number,
          license_separated_another_license:
            values?.license_separated_another_license,
          main_use: values?.main_use,
          sub_use: values?.sub_use,
          total_land_area: values?.total_land_area,
          building_description: values?.building_description,
        },
        applicant_data: {
          applicant_characteristics: values?.applicant_characteristics,
          applicant_id: values?.applicant_id,
          applicant_name: values?.applicant_name,
          phone: values?.phone,
          email: values?.email,
        },
        ownershipData: {
          ownership_type: values?.ownership_type,
          ownership_number: values?.ownership_number,
          ownership_date: values?.ownership_date,
          scheme_number: values?.scheme_number,
          plot_number: values?.plot_number,
        },
        surveyDecisionData: {
          survey_decision_number: values?.survey_decision_number,
          survey_decision_date: values?.survey_decision_date,
        },
        geolocationData: {
          honesty: values?.honesty,
          municipal: values?.municipal,
          district: values?.district,
          planned_number: values?.planned_number,
          block_number: values?.block_number,
        },
        midpointCoordinates: {
          abscissa: values?.abscissa,
          y_coordinate: values?.y_coordinate,
        },
        contractingData: {
          supervising_engineering_office:
            values?.supervising_engineering_office,
          designer_engineering_office: values?.designer_engineering_office,
        },
        ownerData: values?.ownerData,
        landData: values?.landData,
        buildingComponents: values?.buildingComponents,
        coordinates: values?.coordinates,
        pledges: values?.pledges,
        dimensions_boundaries: {
          instrument_limit: {
            north_instrument_limit: values?.north_instrument_limit,
            east_instrument_limit: values?.east_instrument_limit,
            south_instrument_limit: values?.south_instrument_limit,
            west_instrument_limit: values?.west_instrument_limit,
          },
          nature_limit: {
            north_nature_limit: values?.north_nature_limit,
            east_nature_limit: values?.east_nature_limit,
            south_nature_limit: values?.south_nature_limit,
            west_nature_limit: values?.west_nature_limit,
          },
          instrument_length: {
            north_instrument_length: values?.north_instrument_length,
            east_instrument_length: values?.east_instrument_length,
            south_instrument_length: values?.south_instrument_length,
            west_instrument_length: values?.west_instrument_length,
          },
          nature_length: {
            north_nature_length: values?.north_nature_length,
            east_nature_length: values?.east_nature_length,
            south_nature_length: values?.south_nature_length,
            west_nature_length: values?.west_nature_length,
          },
          bouncing: {
            north_bouncing: values?.north_bouncing,
            east_bouncing: values?.east_bouncing,
            south_bouncing: values?.south_bouncing,
            west_bouncing: values?.west_bouncing,
          },
          prominence: {
            north_prominence: values?.north_prominence,
            east_prominence: values?.east_prominence,
            south_prominence: values?.south_prominence,
            west_prominence: values?.west_prominence,
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    return response?.data;
  },
};
