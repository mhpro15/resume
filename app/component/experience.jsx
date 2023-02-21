import React from "react";

const Experience = ({ data }) => {
  const { title, experiences } = data;

  return (
    <section>
      <div className="mb-6">
        <h3>{title}</h3>
        <div className="flex flex-col">
          {experiences?.map(({ role, description, current, web, img }) => (
            <div key={role} className="flex flex-col rounded-lg">
              <span className={`h-2 ${current ? "bg-green" : "bg-grey"}`} />
              <div className="bg-grey-light p-6 drop-shadow-md flex flex-col sm:flex-row">
                <div className="description">
                  <div>
                    <h4 className="font-name font-bold">{role}</h4>
                    <p className="mt-2">{description}</p>
                  </div>
                </div>
                {web !== "" ? (
                  <div className="project_pic m-auto">
                    <a href={web} target="_blank ">
                      <img src={`/images/${img}`}></img>
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
