import PageTitle from "../components/PageTitle";
import { projectImg, projectVideo } from "../utils/data";

const Projects = () => {
  return (
    <div className="project-page">
      <PageTitle pageTitle="Projects" />
      <section className="project-section container">
        <h2 className="heading">Structures and Designs created by acity-studio and teams</h2>
        <div className="project-list grid grid-three--col">
          {projectVideo.map((data, id) => {
            return (
              <div key={id} className="project-item" data-aos="fade-up" data-aos-delay={`${id * 200}`}>
                <video className='video' autoPlay muted loop>
                  <source src={data} />
                </video>
              </div>
            )
          })}
        </div>
      </section>
      <section className="project-section container">
        <h2 className="heading">Structures and Designs created by acity-studio and teams</h2>
        <div className="project-list grid grid-two--col">
          {projectImg.map((data, id) => {
            return (
              <div key={id} className="project-item" data-aos="fade-up" data-aos-delay={`${id * 200}`}>
                <img className='pro-img' src={data} alt="Projects are showing" />
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
};

export default Projects;