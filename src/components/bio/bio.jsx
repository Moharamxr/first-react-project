import React from 'react';

const BioSection = () => {
  return (
    <section id="bio" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Bio</h2>
            <p>I am a dedicated and results-driven web developer with a strong passion for creating innovative and user-friendly websites. With a solid foundation in both front-end and back-end development, I strive to deliver exceptional digital experiences that meet the needs of clients and users alike.</p>
            <h2>About me</h2>
            <p>
              <h5>1. Web Developer at meta, 2021 - Present</h5>
              - Collaborated with cross-functional teams to develop and maintain responsive websites using HTML, CSS, and JavaScript.
              - Implemented front-end frameworks such as Angular and React to enhance user interfaces and optimize performance.
              - Integrated APIs and third-party services to incorporate dynamic functionalities into web applications.
              - Conducted thorough testing and debugging to ensure seamless functionality across different browsers and devices.
              - Worked closely with designers to transform wireframes and mockups into fully functional web interfaces.
              <br />
              <h5>2. Internship at Google, 2020</h5>
              - Assisted in the development of a web-based e-commerce platform using PHP and MySQL.
              - Participated in code reviews and contributed to the optimization of existing codebase.
              - Collaborated with senior developers to resolve issues and implement new features.
              - Gained hands-on experience in version control systems such as Git and project management tools like Jira.
            </p>
            <p>
              Throughout my career, I have remained committed to learning and staying updated with the latest web development trends and technologies. I am passionate about creating clean and efficient code, optimizing website performance, and delivering exceptional user experiences.
            </p>
            <p>
              With a strong problem-solving mindset and effective communication skills, I thrive in collaborative environments and am always eager to take on new challenges. I am excited to leverage my skills and expertise to help businesses achieve their digital goals and make a positive impact in the online world.
            </p>
            <a href="#" className="btn btn-primary">Download CV</a>
          </div>
          <div className="col-md-6">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;