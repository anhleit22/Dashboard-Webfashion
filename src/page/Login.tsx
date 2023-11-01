import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import InputAdornment from "@mui/material/InputAdornment";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import { TextField } from "@mui/material";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { loginAPI } from "../services/UserServices";
import config from "../config";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassWord, setShowPassWord] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [turnIcon, setTurnIcon] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("TokenID");
    if (token) {
      navigate(config.Routes.dashboard);
    }
  }, [navigate]);
  const handleLogin = async () => {
    setTurnIcon(true);
    try {
      console.log(email, password);
      let res = await loginAPI({ email, password });
      if (res.data.token && res) {
        localStorage.setItem("TokenID", res.data.token);
        window.dispatchEvent(new Event("storage"));
        navigate(config.Routes.dashboard);
      }
    } catch (err: any) {
      alert("Tai Khoan MK Sai");
    }
    setTurnIcon(false);
  };
  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex justify-center items-center">
      <div className="w-[400px] bg-[white] p-[40px] h-fit rounded-xl drop-shadow-md relative">
        <h4 className="text-[24px] font-bold">
          Sign in to Yorka
          <div className="absolute right-8 top-8">
            <a href="/">
              <img
                className="w-[105px]"
                src="https://nouthemes.net/html/zorka/assets/images/logo.png"
                alt="Lehoanganh"
              ></img>
            </a>
          </div>
        </h4>
        <p className="mt-[46px] mb-[40px]">
          Don’t have an account?
          <a
            href="/"
            className="px-[5px] text-primary-100 underline decoration-1"
          >
            Get started
          </a>
        </p>
        <div className="flex justify-between">
          <button className="flex items-center h-[48px] text-[20px] px-[21px] py-[7px] border rounded-xl border-web-300">
            <FontAwesomeIcon
              className="w-[50px] text-center text-[red]"
              icon={faGoogle}
            />
          </button>
          <button className="flex items-center h-[48px] text-[20px] px-[21px] py-[7px] border rounded-xl border-web-300">
            <FontAwesomeIcon
              className="w-[50px] text-center text-[blue]"
              icon={faFacebookF}
            />
          </button>
          <button className="flex items-center h-[48px] text-[20px] px-[21px] py-[7px] border rounded-xl border-web-300">
            <FontAwesomeIcon
              className="w-[50px] text-center text-[blue]"
              icon={faTwitter}
            />
          </button>
        </div>
        <div className="my-[24px] text-center relative  before:w-full before:h-[1px] before:border before:absolute before:left-0 before:top-[50%] before:translate-y-[50%]">
          <span className="relative z-2 px-3 bg-[white]">Or</span>
        </div>
        <div>
          <div className="my-[25px]">
            <TextField
              className="w-full"
              label="Email address"
              variant="outlined"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <TextField
              type={showPassWord ? "text" : "password"}
              className="w-full relative "
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <button onClick={() => setShowPassWord(!showPassWord)}>
                      {showPassWord ? (
                        <FontAwesomeIcon className="" icon={faEyeSlash} />
                      ) : (
                        <FontAwesomeIcon className="" icon={faEye} />
                      )}
                    </button>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className="flex flex-row-reverse my-[24px]">
          <a className="text-primary-200" href="/">
            Forgot password?
          </a>
        </div>
        <div>
          <button
            onClick={handleLogin}
            className="flex justify-center font-bold items-center w-full h-[48px] px-[8px] py-[22px] bg-primary-100 rounded-xl text-[white] drop-shadow-xl"
          >
            {turnIcon && (
              <RotateRightIcon
                style={{ margin: "5px" }}
                className="animate-spin"
              />
            )}
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
