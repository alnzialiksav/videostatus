require("dotenv").config()

const appConfig = {
  appUrl: "http://localhost:9000",
  token: localStorage.getItem("token") || "",
  authToken: () => localStorage.getItem("token") || ""
};

export default appConfig
