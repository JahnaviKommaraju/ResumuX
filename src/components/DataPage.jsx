import React from "react";
import '../index.css';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-grid-system';

import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
const DataPage = (props)=>{
    const history = useHistory();
    const location = useLocation();
    const ptr = JSON.parse(location.state);

    return <>


              <Helmet>
                <meta charSet="utf-8" />
                <title>Render Page</title>
                <link rel="canonical" href="../index.css" />
            </Helmet>

        <header>
        <button className="btn btn-white btn-share ml-auto mr-3 ml-md-0 mr-md-auto" onClick={()=>{history.push('/')}}>

            Home</button>
         </header>

           <div className="content-wrapper">
           <aside>
            <div className="profile-img-wrapper">
                <img src={`https://robohash.org/${Math.random()}.png&size=200x180`} alt="ookay" />
            </div>
            <h1 className="profile-name">{ptr.NAME}</h1>
            <div className="text-center">
                <span className="badge badge-white badge-pill profile-designation">{ptr.DESIGNATION}</span>
            </div>
   
            <div className="widget card">
            <div className="card-body">
                    <div className="widget-content">
                <h5 className="time-line-item-title" style={{fontWeight:"bold"}}>Personal Information</h5>
                <div className="widget-content">
                    <p style={{fontSize:"15px",color:"black"}}> <span className="badge badge-primary" style={{backgroundColor:"#8552A0"}}>YoE</span><br /> {ptr.YOE}</p>
                    <p style={{fontSize:"15px",color:"black"}}> <span className="badge badge-primary" style={{backgroundColor:"#8552A0",fontSize:"12px"}}>Phone</span> <br />{ptr.PHONE}</p>
                    <p style={{fontSize:"13px",color:"black"}}> <span className="badge badge-primary" style={{backgroundColor:"#8552A0",fontSize:"12px"}} >Mail</span> <br />{ptr.EMAIL}</p>
                    <p style={{fontSize:"15px",color:"black"}}> <span className="badge badge-primary"style={{backgroundColor:"#8552A0",fontSize:"12px"}} >Location</span><br /> {  ptr.Location.join(' ')}</p>
                </div>
                </div>
            </div>
            </div>
        </aside>


        <main>
            <section className="resume-section">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="section-title">EDUCATION</h2>
                        <ul className="time-line">
                                { 
                                
                                ptr.EDUCATION.map((mp)=>{
                                    if(mp[0].length>=2){
                                    
                           return <li className="time-line-item">
                                <span className="badge badge-primary" style={{backgroundColor:"#8552A0",fontSize:"10px"}}>{mp[1]}</span>
                                <h6 className="time-line-item-title" style={{fontSize:"12px"}}>{mp[0]} </h6>
                            </li>;
                                    }else{

                                  return "";
                                    }
     
         
    
     
    
                })
            }
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="section-title">CERTIFICATIONS</h2>
                        <ul className="time-line">
                            {
                            
                            ptr.CERTIFICATIONS.length>0 ?     ptr.CERTIFICATIONS.map((mp)=>{
                                    return <li className="time-line-item">
                                    <h6 className="time-line-item-title">{mp}</h6>
                                </li>;

                                }) :
                                "N/A"
                            }
                            
                      
                       
                        </ul>
                    </div>
                </div>
            </section>
      
      
            <section className="clients-section">
                <h2 className="section-title">SKILLS</h2>

                <Container fluid>
  <Row >
  {
     ptr.SKILLS.map((mp)=>{
         if(mp.length>8) return "";
         return <Col  md={1}>
         <p className="badge badge-primary" style={{backgroundColor:"#8552A0"}}>{mp}</p>
         </Col>;
     
         
    
     
    
    })
}


     
      
    
  </Row>
</Container>
              
            </section>
        </main>


    </div>


    
     </>;
};

export default DataPage;