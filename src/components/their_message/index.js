import * as React from "react";
import "./style.css";

export const TheirMessage = ({ date, endTime, messageHash, startTime }) => (
  <div className="message-wrapper message-wrapper--their">
    <div className="message">
      <span className="text">
        DPMK, a.s.
        <br />
        SMS prestupny CL 1,10 EUR
        <br />
        Platnost od <span className="underline">{date}</span>
        <br />
        <span className="underline">{startTime}</span> do{" "}
        <span className="underline">{endTime}</span> hod.
        <br />
        {messageHash}
      </span>
    </div>
  </div>
);
