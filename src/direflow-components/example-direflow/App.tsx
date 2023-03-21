import React, { FC, useContext, useEffect } from "react";
import axios from "axios";
import Courses from "../../components/Courses";
import styles from "./App.css";
import { Styled } from "direflow-component";

interface IProps {
  componentTitle: string;
  sampleList: string[];
}

const App: FC<IProps> = () => {
  const [data, setData] = React.useState<any>([]);
  const [currentCom, setCurrentCom] = React.useState<string>("Dummy API");
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/api/data")
  //     .then((response) => {
  //       // console.log(response.data);
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, []);

  return (
    <Styled styles={[styles]}>
      <div>
        <div className="buttons">
          <span onClick={() => setCurrentCom("Dummy API")}>Dummy API</span>
          <span onClick={() => setCurrentCom("Course Api")}>Courses API</span>
        </div>
        {currentCom === "Dummy API" ? (
          <div className="dummy">
            {/* {data.map((data: any, index: number) => {
              return (
                <p key={index} className="dummy__data">
                  {data.name}
                </p>
              );
            })} */}
            <p>This is dummy component.</p>
          </div>
        ) : (
          <Courses />
        )}
      </div>
    </Styled>
  );
};

App.defaultProps = {
  componentTitle: "Example Direflow",
  sampleList: [
    "Create with React",
    "Build as Web Component",
    "Use it anywhere!",
  ],
};

export default App;
