import { toast } from "react-toastify";

export const notify = (msg, type) => {
  toast(msg, { type: type });
};
