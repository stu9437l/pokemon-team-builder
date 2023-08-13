import { toast } from "react-toastify";

const SuccessALert = (message) => {
  toast.success(message);
};
const ErrorAlert = (message) => {
  toast.error(message);
};
const WarningSuccess = (message) => {
  toast.info(message);
};

export { SuccessALert, ErrorAlert, WarningSuccess };
