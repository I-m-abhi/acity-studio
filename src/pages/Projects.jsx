import PageTitle from "../components/PageTitle";
import { projectImg, projectVideo } from "../utils/data";

const Projects = () => {
  return (
    <div className="project-page">
      <PageTitle pageTitle="Walls That Tell Our Story" />
      <section className="project-section container">
        <h2 className="heading">***This page on under maintainance***</h2>
        <div className="project-list grid grid-three--col">
          {projectVideo.map((data, id) => {
            return (
              <div key={id} className="project-item" data-aos="fade-up" data-aos-delay={`${id * 100}`}>
                <video className='video' autoPlay muted loop>
                  <source src={data} />
                </video>
              </div>
            )
          })}
        </div>
      </section>
      <section className="project-section container">
        <h2 className="heading">***Project details - Coming soon***</h2>
        <div className="project-list grid grid-two--col">
          {projectImg.map((data, id) => {
            return (
              <div key={id} className="project-item" data-aos="fade-up" data-aos-delay={`${id * 100}`}>
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