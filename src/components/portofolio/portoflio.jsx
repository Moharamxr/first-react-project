import React from 'react';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-dark text-white mb-3">
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">Description of Project 1 goes here...</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">Description of Project 2 goes here...</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">Description of Project 3 goes here...</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project 4</h5>
                <p className="card-text">Description of Project 4 goes here...</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">Project 5</h5>
                <p className="card-text">Description of Project 5 goes here...</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project 6</h5>
                <p className="card-text">Description of Project 6 goes here...</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;