import { useRef } from "react";
import CountUp from "react-countup";

const Counter = () => {
  const counterData = [
    { id: 1, num: "25", content: "Certified Engineers" },
    { id: 2, num: "150", content: "Happy Clients" },
    { id: 3, num: "5", content: "Ongoing Projects" },
    { id: 4, num: "200", content: "Projects Done" },
  ];
  const countUpRef = useRef();

  return (
    <section className="counter-section">
      <div className="overlay">
        <h2 className="heading">A SUMMARY OF OUR CHALLENGES TRANSLATED INTO NUMBERS</h2>
        <div className="container">
          <div className="experience">
            <div className="num">09</div>
            <p>Years of transforming places and creating plans that improves life</p>
          </div>
          <div className="grid grid-four--col">
            {counterData.map((data) => (
              <div key={data.id} className="counter-card">
                <CountUp start={0} end={parseInt(data.num)} enableScrollSpy={true}>
                  {({ countUpRef }) => <p className="heading" ref={countUpRef}></p>}
                </CountUp>
                <p className="counter-content">{data.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
