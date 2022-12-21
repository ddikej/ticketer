import * as React from "react";
import "./style.css";

export const TheirMessage = ({ date, endTime, messageHash, startTime }) => (
    <div className="imessage">
      <p className="from-them">
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
      </p>
    </div>
);

