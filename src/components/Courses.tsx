import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseView from "./Course";

interface Course {
  ID: string;
  UploadedContentType: string;
  Name: string;
  Description: string;
  ImageURL: string;
  CourseContentURL: string;
  StartDate: string;
  EndDate: string;
  Status: string;
  Duration: number;
  ProductID: string;
  SlugName: string;
  CreatedAt: string;
  UpdateAt: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const getAllCourse = async () => {
    await axios
      .get("https://sidecar-api-dev.azurewebsites.net/api/courses")
      .then((response: any) => {
        setCourses(response.data.courses.rows);
      })
      .catch((error: any) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getAllCourse();
  }, []);

  return (
    <div className="component-container">
      {courses.map((course: Course, index: number) => {
        return (
          <div key={index}>
            <CourseView
              course={{
                Name: course.Name,
                Description: course.Description,
                ImageURL: course.ImageURL,
                SlugName: course.SlugName,
                CreatedAt: course.CreatedAt,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
