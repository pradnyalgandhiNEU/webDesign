import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div class="contact-form">
        <div class="cards">
          <div class="card-body">
            <h5 class="card-title">Contact US</h5>
            <p class="card-text">
              Contact us for queries and questions regarding courses and job
              opportunities.
            </p>
            <a href="mailto:admission@notheastern.edu" class="btn btn-primary">
              Email Us
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
