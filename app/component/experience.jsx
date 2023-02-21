import React from "react";

const Experience = ({ data }) => {
  const { title, experiences } = data;
  return (
    <section>
      <div className="mb-6">
        <h3>{title}</h3>
        <div className="flex flex-col">
          {experiences?.map(({ role, description, current }) => (
            <div key={role} className="flex flex-col rounded-lg">
              <span className={`h-2 ${current ? "bg-green" : "bg-grey"}`} />
              <div className="bg-grey-light p-6 drop-shadow-md">
                <h4>{role}</h4>
                <p className="mt-2">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
