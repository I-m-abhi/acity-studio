import CountUp from "react-countup";

const Counter = () => {
  const counterData = [
    { id: 1, num: "25", content: "Certified Engineers" },
    { id: 2, num: "150", content: "Happy Clients" },
    { id: 3, num: "5", content: "Ongoing Projects" },
    { id: 4, num: "200", content: "Projects Done" },
  ];

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
            {counterData.map(({ id, num, content }) => (
              <div key={id} className="counter-card">
                <p className="heading">
                  <CountUp start={0} end={num} enableScrollSpy={true} />+
                </p>
                <p className="counter-content">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
