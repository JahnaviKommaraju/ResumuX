import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  AttachFile,
  Description,
  PictureAsPdf,
  Theaters,
} from "@material-ui/icons";
import { DropzoneArea } from "material-ui-dropzone";
import "../App.css";
import {Helmet} from "react-helmet";
 


const Home = () => {
  const history = useHistory();


    const  [files,setFiles] = useState("");

  
  const Upload =()=>{





    const data = new FormData();
    data.append('file', files);


    fetch('http://localhost:80/upload', { method: 'POST', body: data })
    .then((response) => { response.json().then((body) => { 
     history.push('/push_resume',body);
    


      });
    });


  }

  const handlePreviewIcon = (fileObject, classes) => {
    const { type } = fileObject.file;
    const iconProps = {
      className: classes.image,
    };

    if (type.startsWith("video/")) return <Theaters {...iconProps} />;

    switch (type) {
      case "application/msword":
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return <Description {...iconProps} />;
      case "application/pdf":
        return <PictureAsPdf {...iconProps} />;
      default:
        return <AttachFile {...iconProps} />;
    }
  };

  return (
    <main className="auth-card-page auth auth-card-container">
      
    <div className="">
       <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="../App.css" />
            </Helmet>

      <section className="page-head text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center font-weight-bold white-col">
                Jobify
                <img
                  src={
                    "https://i.giphy.com/media/fAhZm10htd8TrQO6le/giphy.webp"
                  }
                  height="100px"
                  alt="home-pic"
                />
                Matcher{" "}
              </h1>
            </div>
          </div>
          <p className="white-col" style={{fontSize:"14px"}}>
          Jobify Matcher is a tool That helps to parse your resume and Cick Upload And Wait for the Magic 
          by Kommaraju Jahnavi
          </p>
        </div>
      </section>

      <div className="row">
        <DropzoneArea
          getPreviewIcon={handlePreviewIcon}
          onChange={(files) => setFiles(files[0]) }
        />
      </div>
      <div className="row align-items-center justify-content-center py-5">
        <button onClick={() => Upload()} className="mt-0 btn-lg btn-tumblr">
          Start Upload
        </button>
      </div>
    </div>
    </main>
  );
};

export default Home;
