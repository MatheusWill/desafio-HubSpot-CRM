import * as yup from "yup";

export const createDefaultSchema = yup.object().shape({
  spread_sheet_id: yup.string().min(3).required(),
  sheet_name: yup.string().min(3).required(),
});
