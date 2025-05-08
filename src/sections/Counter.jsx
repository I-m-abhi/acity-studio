import CountUp from "react-countup";

const Counter = () => {
  const counterData = [
    { id: 1, num: "250", content: "Projects Taken" },
    { id: 2, num: "225", content: "Happy Clients" },
    { id: 3, num: "7", content: "Ongoing Projects" },
    { id: 4, num: "243", content: "Projects Done" },
  ];

  return (
    <section className="counter-section">
      <div className="overlay">
        <h2 className="heading">"The Impact We’ve Made, By the Numbers"</h2>
        <div className="container">
          <div className="experience">
            <div className="num">05</div>
            <p>Years of Turning Spaces into Statements</p>
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
