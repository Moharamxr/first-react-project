import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-5 bg-dark text-white">
      <div className="container">
        <h2>Skills</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>HTML</h4>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '99%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">99%</div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>CSS</h4>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '99%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">99%</div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>Bootstrap</h4>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '99%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">99%</div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>JavaScript</h4>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '99%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">99%</div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>ES6</h4>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '99%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">99%</div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>React.js</h4>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>Angular.js</h4>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;