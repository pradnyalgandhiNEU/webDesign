import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <div class="card text-white bg-dark my-5 py-4 text-center">
          <div class="card-body">
            <p class="text-white m-0">
              Introduces front-end web design and principles concepts while
              working on web design projects. Course offers students opportunity
              to understand and develop web pages quickly that cater to customer
              and business needs. Students will have an opportunity to use and
              learn JavaScript skills including libraries like Bootstrap,
              JQuery, React, Node JS, Express JS and AngularJS while doing the
              labs and final project. Security techniques will be discussed that
              can help avoid code injections in websites. Course will also
              introduce user experience concepts and its relation to the
              front-end web design
            </p>
          </div>
        </div>
        <div class="row gx-4 gx-lg-5">
          <div class="col-md-4 mb-5">
            <div class="card h-100">
              <div class="card-body">
                <h2 class="card-title">Course Objectives</h2>
                <p class="card-text">
                  Understand the User Experience concepts and importance of
                  making usable websites or products Develop web pages quickly
                  using HTML and JavaScript as per the business needs Learn
                  concepts of Bootstrap, JQuery, Angular JS, React JS, NodeJS,
                  Express JS JavaScript library
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="card h-100">
              <div class="card-body">
                <h2 class="card-title">Team Project</h2>
                <p class="card-text">
                  The final projects will be completed by a team of 4-5
                  students. The project details will be provided during the
                  second/third week of the course. Students are encouraged to
                  choose their topic of choice either from healthcare, business,
                  and/or technology related fields. Details on project
                  deliverable requirement will be specified at a later time.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="card h-100">
              <div class="card-body">
                <h2 class="card-title">Academic Integrity</h2>
                <p class="card-text">
                  A commitment to the principles of academic integrity is
                  essential to the mission of Northeastern University. The
                  promotion of independent and original scholarship ensures that
                  students derive the most from their educational experience and
                  their pursuit of knowledge. Academic dishonesty violates the
                  most fundamental values of an intellectual community and
                  undermines the achievements of the entire University.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
