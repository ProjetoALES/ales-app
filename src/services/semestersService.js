import api from "./api";

const list = () => {
  return api.get("/semesters/");
};

export default {
  list
};
