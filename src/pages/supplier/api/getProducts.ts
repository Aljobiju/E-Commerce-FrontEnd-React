import { AxiosError, AxiosResponse } from "axios";
    import { GetProductsResponse } from "../types";
import axiosInstance from "../../../config/configAxios";
import { APIResponseHandler } from "../../../components/APIHandler/APIresponseHandler";
import { baseUrl } from "../../../config/configUrl";

export const getProductsForSupplier = async (
  supplierRegId: string,

): Promise<GetProductsResponse | void> => {
  return await axiosInstance
    .get(
      `${
        baseUrl.supplier
      }/getProductsSupplier?supplier_reg_id=${supplierRegId}`
    )
    .then((response: AxiosResponse<GetProductsResponse>) => response.data)
    .catch((err) => APIResponseHandler(err as AxiosError));
};
