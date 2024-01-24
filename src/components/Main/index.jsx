/* eslint-disable react/no-unescaped-entities */
import imgTanya from "../../assets/images/image-tanya.jpg";
import imgJohn from "../../assets/images/image-john.jpg";
import prev from "../../assets/images/icon-prev.svg";
import next from "../../assets/images/icon-next.svg";
import "./index.scss";
import { useState } from "react";

function Main() {
  const [bio, setBio] = useState(
    "I'v been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future."
  );
  const [name, setName] = useState("Tanya Sinclair");
  const [job, setJob] = useState("UX Engineer");
  const [image, setImage] = useState(imgTanya);
  const [toggle, setToggle] = useState(false);

  const useToggle = () => {
    setToggle(!toggle);
    if (!toggle) {
      setImage(imgJohn);
      setBio(
        "If you want to lay the best foundation possible I'd recommend taking this course. The depth the intructors go into is incredible. I now feel so confident about  starting uo as a professional developer."
      );
      setName("John Tarkpor");
      setJob("Junior Front-end Developer");
    } else {
      setImage(imgTanya);
      setBio(
        "I'v been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future."
      );
      setName("Tanya Sinclair");
      setJob("UX Engineer");
    }
  };

  return (
    <main>
      <div className="main-box">
        <div className="slider">
          <img className="main-img" src={image} alt="avatar" />
          <div className="buttons">
            <div onClick={useToggle} className="prev">
              <img src={prev} alt="icon-prev" />
            </div>
            <div onClick={useToggle} className="next">
              <img src={next} alt="icon-next" />
            </div>
          </div>
        </div>
        <div className="bio">
          <p>" {bio} "</p>
          <h1>{name}</h1>
          <span>{job}</span>
        </div>
      </div>
    </main>
  );
}
export default Main;
