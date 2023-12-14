// import { useEffect } from "react";
// import { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import "./login.scss";
import { useEffect } from "react";
import { Application } from "@splinetool/runtime";

// import { useNavigate } from "react-router-dom";
// import { Application } from "@splinetool/runtime";

// import axios from "axios";
// import { useGoogleLogin } from "@react-oauth/google";

const LoginComponent = () => {
  const localLogin = () => {
    localStorage.setItem("user77", "user77");

    if (localStorage.getItem("user77")) {
      location.reload();
    }
  };
  useEffect(() => {
    const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
    const app = new Application(canvas);
    app.load("https://prod.spline.design/KrE4T6htfYgbRN-C/scene.splinecode");
  }, []);

  // document.addEventListener(".containerLogin", function () {
  //   const canvas = document.querySelector(
  //     ".containerLogin"
  //   ) as HTMLCanvasElement;
  //   const app = new Application(canvas);
  //   app.load("https://prod.spline.design/XFYrzYwj0MS1il-f/scene.splinecode");
  // });

  // const github_login = console.log("github log");

  // let google api handle call request at their backend
  // res: get res from GOOOGLE if succeded

  // -------------- res1: send google token to localstorage for local caching

  // -------------- res2: send google token/ data to mongodb for signup or login.

  // console.log("raw from locals" + localStorage.getItem("user"));
  // const storedUser = localStorage.getItem("user") as string;
  // const parsedUser = JSON.parse(storedUser);
  // console.log(`"parsed user:" ${parsedUser.data.email}`);

  //PROBELM THEN TO CAPTURE AND SENDING TO MONGODB AFTER RETRIEVING FROM LOCALSTORAGE
  // SOLVED, TQ CHATGPT!! TQ AXIOS!!

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     const parsedUser = JSON.parse(storedUser); //convert localstore to readable JS. Object

  //     const signUp = async () => {
  //       try {
  //         await axios.post("http://localhost:8800/user/signup", {
  //           email: parsedUser.data.email,
  //           name: parsedUser.data.name,
  //           picture: parsedUser.data.picture,
  //         });
  //         console.log("Sign up successful");
  //       } catch (error) {
  //         console.error("Error signing up:", error);
  //       }
  //     };

  //     signUp();
  //   }
  // }, []);

  return (
    <>
      <Stack
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        height={"100vh"}
        alignItems={"center"}
      >
        <Typography fontSize={"15px"} color={"#b3b6c2"} letterSpacing={"2px"}>
          INTRODUCE
        </Typography>
        <Typography fontSize={"35px"} color={"white"} fontWeight={600}>
          API RENAISSANCE
        </Typography>
        <Button onClick={localLogin} sx={{ marginTop: "7px" }}>
          CHECK THE CONSOLE
        </Button>
        <div style={{ height: "600px", width: "600px" }}>
          <canvas id="canvas3d" />{" "}
        </div>
      </Stack>
    </>
  );
};

export default LoginComponent;

// (window.location.href = "/")
