import { Navigate } from "react-router-dom";
import Button from "../components/Button"
import axios from "axios";

const HomePages = () => {

  const logout = () => {
    axios.get("http://localhost:5000/logout", { withCredentials : true})
.then(() => window.location.href = "/login")
.catch(err => console.log(err))
  }

  return (
    <div>
      <h1>ini home</h1>
            <Button type="button" size={"p-2 border w-64"} onClick={logout}>
        logout
      </Button>
    </div>
  );
};

export default HomePages;
