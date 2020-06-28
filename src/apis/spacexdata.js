import axios from "axios";

//create api to fetch spacex data
export default axios.create({
  baseURL: "https://api.spacexdata.com/v3",
});
