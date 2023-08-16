import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: <a href="mailto:yourname@example.com">Mohamed@example.com</a></p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/yourusername" target="_blank" rel="nofollow">
                  <i className="fab fa-facebook-f">facebook</i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/yourusername" target="_blank" rel="nofollow">
                  <i className="fab fa-github">github</i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="nofollow">
                  <i className="fab fa-linkedin-in">linkedin</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;