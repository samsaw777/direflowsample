import React from "react";
import "../direflow-components/example-direflow/App.css";

interface Course {
  Name: string;
  Description: string;
  ImageURL: string;
  SlugName: string;
  CreatedAt: string;
}

interface Props {
  course: Course;
}

const Course = ({
  course: { Name, Description, ImageURL, SlugName, CreatedAt },
}: Props) => {
  return (
    <div className="card">
      <img src={ImageURL} alt="Image" className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{Name}</h3>
        <p className="card-description">{Description}</p>
        <p className="card-date">{new Date(CreatedAt).toLocaleString()}</p>
        <p className="card-slugname">{SlugName}</p>
      </div>
    </div>
  );
};

export default Course;
