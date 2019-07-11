import axios from "axios";

export const login = user => {
  return axios
    .post("http://localhost:9000/users/login", {
      email: user.email,
      password: user.password
    })
    .then(res => {
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const addJob = () => {
  return axios
    .get("http://localhost:9000/jobs")
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};
