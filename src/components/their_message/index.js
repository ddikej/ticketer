import * as React from "react";
import "./style.css";

export const TheirMessage = ({ date, endTime, messageHash, startTime }) => (
    <div className="imessage">
      <p className="from-them">
        DPMK, a.s.
        <br />
        SMS prestupny CL 1,50 EUR
        <br />
        Platnost <u><span className="underline">od {date}</span>
        <br />
        <span className="underline">{startTime}</span> do{" "}
        <span className="underline">{endTime}</span></u> hod.
        <br />
        {messageHash}
      </p>
    </div>
);

