import styled from "@emotion/styled";
import { Backdrop } from "@mui/material";
import React from "react";

export const LoadingMatch = ({ isLoading }) => {
  const Wrapper = styled.div`
    overflow: hidden;
    height: 100%;

    h1 {
      position: absolute;
      font-weight: 600;
      font-size: 12px;
      text-transform: uppercase;
      left: 50%;
      top: 58%;
      transform: translateX(-50%);
    }

    .loading {
      position: absolute;
      top: 50%;
      margin-left: -75px;
      left: 50%;
      animation: speeder 1s linear infinite;

      > span {
        height: 5px;
        width: 35px;
        background: #794de8;
        position: absolute;
        top: -19px;
        left: 60px;
        border-radius: 2px 10px 1px 0;
      }
    }

    .base {
      span {
        position: absolute;
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-right: 100px solid #794de8;
        border-bottom: 6px solid transparent;

        &:before {
          content: "";
          height: 22px;
          width: 22px;
          border-radius: 50%;
          background: #794de8;
          position: absolute;
          right: -110px;
          top: -16px;
        }

        &:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-top: 0 solid transparent;
          border-right: 55px solid #794de8;
          border-bottom: 16px solid transparent;
          top: -16px;
          right: -98px;
        }
      }
    }

    .face {
      position: absolute;
      height: 12px;
      width: 20px;
      background: #794de8;
      border-radius: 20px 20px 0 0;
      transform: rotate(-40deg);
      right: -125px;
      top: -15px;

      &:after {
        content: "";
        height: 12px;
        width: 12px;
        background: #794de8;
        right: 4px;
        top: 7px;
        position: absolute;
        transform: rotate(40deg);
        transform-origin: 50% 50%;
        border-radius: 0 0 0 2px;
      }
    }

    .body > span > span:nth-of-type(1),
    .body > span > span:nth-of-type(2),
    .body > span > span:nth-of-type(3),
    .body > span > span:nth-of-type(4) {
      width: 30px;
      height: 1px;
      background: #794de8;
      position: absolute;
      animation: fazer1 0.2s linear infinite;
    }

    .body > span > span:nth-of-type(2) {
      top: 3px;
      animation: fazer2 0.4s linear infinite;
    }

    .body > span > span:nth-of-type(3) {
      top: 1px;
      animation: fazer3 0.4s linear infinite;
      animation-delay: -1s;
    }

    .body > span > span:nth-of-type(4) {
      top: 4px;
      animation: fazer4 1s linear infinite;
      animation-delay: -1s;
    }

    @keyframes fazer1 {
      0% {
        left: 0;
      }
      100% {
        left: -80px;
        opacity: 0;
      }
    }

    @keyframes fazer2 {
      0% {
        left: 0;
      }
      100% {
        left: -100px;
        opacity: 0;
      }
    }

    @keyframes fazer3 {
      0% {
        left: 0;
      }
      100% {
        left: -50px;
        opacity: 0;
      }
    }

    @keyframes fazer4 {
      0% {
        left: 0;
      }
      100% {
        left: -150px;
        opacity: 0;
      }
    }

    @keyframes speeder {
      0% {
        transform: translate(2px, 1px) rotate(0deg);
      }
      10% {
        transform: translate(-1px, -3px) rotate(-1deg);
      }
      20% {
        transform: translate(-2px, 0px) rotate(1deg);
      }
      30% {
        transform: translate(1px, 2px) rotate(0deg);
      }
      40% {
        transform: translate(1px, -1px) rotate(1deg);
      }
      50% {
        transform: translate(-1px, 3px) rotate(-1deg);
      }
      60% {
        transform: translate(-1px, 1px) rotate(0deg);
      }
      70% {
        transform: translate(3px, 1px) rotate(-1deg);
      }
      80% {
        transform: translate(-2px, -1px) rotate(1deg);
      }
      90% {
        transform: translate(2px, 1px) rotate(0deg);
      }
      100% {
        transform: translate(1px, -2px) rotate(-1deg);
      }
    }

    .longfazers {
      position: absolute;
      width: 100%;
      height: 100%;

      span {
        position: absolute;
        height: 2px;
        width: 20%;
        background: #794de8;

        &:nth-of-type(1) {
          top: 20%;
          animation: lf 0.6s linear infinite;
          animation-delay: -5s;
        }

        &:nth-of-type(2) {
          top: 40%;
          animation: lf2 0.8s linear infinite;
          animation-delay: -1s;
        }

        &:nth-of-type(3) {
          top: 60%;
          animation: lf3 0.6s linear infinite;
        }

        &:nth-of-type(4) {
          top: 80%;
          animation: lf4 0.5s linear infinite;
          animation-delay: -3s;
        }
      }
    }

    @keyframes lf {
      0% {
        left: 200%;
      }
      100% {
        left: -200%;
        opacity: 0;
      }
    }
    @keyframes lf2 {
      0% {
        left: 200%;
      }
      100% {
        left: -200%;
        opacity: 0;
      }
    }
    @keyframes lf3 {
      0% {
        left: 200%;
      }
      100% {
        left: -100%;
        opacity: 0;
      }
    }
    @keyframes lf4 {
      0% {
        left: 200%;
      }
      100% {
        left: -100%;
        opacity: 0;
      }
    }
  `;
  return (
    <Backdrop
      open={isLoading}
      sx={{
        color: (theme) => theme.palette.primary.main,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backdropFilter: "blur(5px)",
        backgroundColor: "#FFFFFF10",
      }}
    >
      <Wrapper>
        <div className="loading">
          <span>
            <span />
            <span />
            <span />
            <span />
          </span>
          <div className="base">
            <span />
            <div className="face" />
          </div>
        </div>
        <div className="longfazers">
          <span />
          <span />
          <span />
          <span />
        </div>
        <h1>BUSCANDO A TU MENTOR IDEAL</h1>
      </Wrapper>
    </Backdrop>
  );
};