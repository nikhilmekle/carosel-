import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BsSlashLg } from "react-icons/bs";
import { BiMessageSquare } from "react-icons/bi";
import { FaRegSquare } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";

export default function ProductCarousel() {
  const [isActive, setIsActive] = useState(false);

  const handleclick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div
        style={{
          width: "600px",
          height: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#35374B",
        }}
      >
        <div
          style={{
            width: "auto",
            height: "60px",
            border: "1px solid black",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              backgroundColor: isActive ? "green" : "#007bff", // Toggle between blue and green
              borderRadius: "10px",
              height: "50px",
              width: "50px",
              margin: "5px",
              padding: "2px",
            }}
          >
            <h3 style={{ padding: "5px" }}>
              <BsSend />
            </h3>
          </div>

          <div>
            <p style={{ padding: "10px" }}>
              <IoIosArrowDown />
            </p>
          </div>

          <div style={{ padding: "10px" }}>
            <h3>
              <FaRegSquare />
            </h3>
          </div>

          <div style={{ padding: "10px", display: isActive ? "none" : "" }}>
            <IoIosArrowDown />
          </div>

          <div style={{ padding: "10px" }}>
            <h3>
              <BsSlashLg />
            </h3>
          </div>

          <div style={{ padding: "10px", display: isActive ? "none" : "" }}>
            <IoIosArrowDown />
          </div>

          <div style={{ padding: "10px" }}>
            <h3>Ƭ</h3>
          </div>

          <div style={{ padding: "10px" }}>
            <h3>
              <BiMessageSquare />
            </h3>
          </div>
          <div style={{ padding: "10px", display: isActive ? "none" : "" }}>
            <h3>
              <IoIosStarOutline />
            </h3>
          </div>

          <div>
            <hr
              style={{
                display: "inline-block",
                width: "2px",
                height: "35px",
                backgroundColor: "black",
              }}
            />
          </div>

          <div style={{ padding: "15px" }}>
            <div
              style={{
                width: "60px",
                height: "35px",
                borderRadius: "10px",

                padding: "3px",
                backgroundColor: isActive ? "green" : "white",
              }}
            >
              <button
                onClick={handleclick}
                style={{
                  height: "auto",
                  width: "auto",
                  border: "none",
                  padding: "1px",
                  color: "black",
                  float: isActive ? "right" : "left",
                  borderRadius: "5px",
                }}
              >
                &lt;/&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
