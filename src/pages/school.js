import React from "react"
import Layout from "../components/layout"
import SiteLinks from "../components/siteLinks";

const SchoolPage = () => (
  <Layout>
    <h1>School</h1>
    <p>Here's a quick summary of the schooling that I've done since high school:</p>
    <div class="work-section">
      <h3>IS Program <span role="img">&#128218;</span></h3>
      <p>In 2014, I started attending <a href="https://www.byu.edu/">Brigham Young University</a> in Provo, Utah. After a two year pause and some searching, I landed upon the <a href="https://marriottschool.byu.edu/infosys/">Information Systems</a> program in the Marriott School of Business. Why?</p>
      <p>I started the program in the fall of 2018. Over that school year, I took classes covering the following subjects:</p>   
      <ul>
        <li>C# ASP.Net programming</li>
        <li>SQL and database design</li>
        <li>Project management</li>
        <li>Django Python programming</li>
        <li>Machine learning in Azure ML Studio</li>
        <li>IT Networking</li>
        <li>Cybersecurity</li>
      </ul>
    </div>  
    <div class="work-section">  
      <h3>Masters program &#127891;</h3>
      <p>I applied to and was accepted into the <a href="https://marriottschool.byu.edu/infosys/mism/what-will-i-study/program-overview/">Masters of Information Systems Management</a> program, an 2 year integrated graduate program. I will graduate in April 2021 with my bachelors of science in Information Systems and a masters of Information Systems Management. This coming fall, I will take classes about:</p>
      <ul>
        <li>Data analytics</li>
        <li>Enterprise infrastructure</li>
        <li>Mobile app development</li>
      </ul>
      <p>I hope to keep learning from these classes and other out-of-class opportunities!</p>
    </div>
    <SiteLinks></SiteLinks>
  </Layout>
)

export default SchoolPage