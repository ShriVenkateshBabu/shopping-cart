import { useState } from "react";
const Register = () => {
  let [regsiterInfo, setRegsiterInfo] = useState({
    fullName: "",
    userName: "",
    password: "",
    role: "",
  });

  
  function handleChange(eve) {
    setRegsiterInfo((preVal) => ({
      ...preVal,
      [eve.target.id]: eve.target.value,
    }));
  }

  async function handleSubmit() {
    console.log(regsiterInfo);
    setRegsiterInfo({
      fullName: "",
      userName: "",
      password: "",
      role: "Basic",
    });
    
  }
  return (
    <div className="grid grid-cols-12 m-10 p-5 gap-5 border border-blue-900">
      <div className="full-name col-span-8 col-start-2 border border-blue-500">
        <input
          type="text"
          id="fullName"
          required
          onChange={handleChange}
          value={regsiterInfo.fullName}
          placeholder="Enter your name"
        />
      </div>
      <div className="user-name col-span-8 col-start-2 border border-blue-500">
        <input
          type="text"
          id="userName"
          required
          onChange={handleChange}
          value={regsiterInfo.userName}
          placeholder="Enter user name"
        />
      </div>
      <div className="password col-span-8 col-start-2 border border-blue-500">
        <input
          type="text"
          id="password"
          required
          onChange={handleChange}
          value={regsiterInfo.password}
          placeholder="Enter your password"
        />
      </div>

      <div className="password col-span-8 col-start-2 border border-blue-500">
        <select onChange={handleChange} id="role" value={regsiterInfo.role}>
          <optgroup label ="role">
          <option>Basic</option>
          <option>Admin</option>
          </optgroup>
        </select>
      </div>

      <div className="register-action-btn col-span-8 col-start-2">
        <button
          onClick={handleSubmit}
          className="m-2 p-2 border border-yellow rounded-2xl bg-slate-400"
        >
          Register
        </button>
        <button className="m-2 p-2 border border-yellow rounded-2xl bg-slate-400">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Register;
