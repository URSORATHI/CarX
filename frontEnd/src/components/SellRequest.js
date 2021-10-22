import React from "react";
import "./sellrequest.css";
import background from "./background.svg";
import blob from "./blob (1).svg";

const Sellrequest = () => {
  return (
    <div style={{ backgroundColor: "#000000" }}>
      <div class="rowabc">
        <img src={background} />
        <div class="a">
          {" "}
          style={{ backgroundImage: { blob } }}
          <p>
            Inspection request for your car <br />
            has been placed successfully! <br /> We will get back to you soon{" "}
            <br />
            after verification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sellrequest;
