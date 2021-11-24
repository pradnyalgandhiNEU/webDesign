import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://www.datocms-assets.com/14946/1633281680-ux-vs-ui-cover-edited.png?auto=format&w=912"
                alt="..."
              />
            </div>
            <div class="col-lg-5">
              <h2 class="font-weight-light">INFO 6150 - Spring 22</h2>
              <p>
                Exposes students to both conceptual and technical aspects of Web
                design and User Experience. Studies the fundamental concepts,
                techniques, practices, work flows, and tools associated with the
                practice of user-experience design in Web interfaces. Additional
                areas of focus include typography, color theory and composition,
                responsive design, CSS3 concepts, basic scripting, and
                JavaScript libraries to create functional, effective, and
                visually appealing websites
              </p>
              <a class="btn btn-primary" href="#!">
                More Info
              </a>
            </div>
          </div>
          
          
        </div>
        
      </div>
    );
  }
}

export default Home;
