import React from "react"
import Layout from "../components/layout"
import SiteLinks from "../components/siteLinks";
/* eslint-disable */
const SchoolPage = () => (
  <Layout>
    <h1>School</h1>
    <p>Here's a quick summary of the schooling that I've done since high school:</p>
    <div class="work-section">  
      <h3>Masters of Information Systems Management Program &#127891;</h3>
      <p>I applied to and was accepted into the <a href="https://marriottschool.byu.edu/infosys/mism/what-will-i-study/program-overview/">Masters of Information Systems Management</a> program, an 2 year integrated graduate program at BYU. I will graduate in April 2021 with my bachelor's of science in Information Systems and a master's degree in Information Systems Management. In fall of 2019, I took classes about:</p>
      <ul class="work-section-list">
        <li>Data analytics (Python, SAS JMP)</li>
        <li>Enterprise infrastructure (AWS Products)</li>
        <li>Mobile app development (Swift for iOS apps)</li>
        <li>Cybersecurity</li>
      </ul>
      <p>And in the winter of 2020, I am taking classes about:</p>
      <ul class="work-section-list">
        <li>Advanced Database Management (Oracle, Cassandra tools)</li>
        <li>Data Structures</li>
        <li>Business Strategy</li>
      </ul>
      <p>I've enjoyed diving deeper into subjects that I've studied before. Over the next two semesters, I will follow the Development track in the program. School is fun when your classes are interesting!</p>
    </div>
    <div class="work-section">
      <h3>IS Program <span role="img">&#128218;</span></h3>
      <p>In 2014, I started attending <a href="https://www.byu.edu/">Brigham Young University</a> in Provo, Utah. After a two year pause and some searching, I landed upon the <a href="https://marriottschool.byu.edu/infosys/">Information Systems</a> program in the Marriott School of Business. I loved the combination of technical and business classes offered, since I was (and still am!) uncertain of my future career path.</p>
      <p>I started the program in the fall of 2018. Over that school year, I took classes covering the following subjects:</p>   
      <ul class="work-section-list">
        <li>C# ASP.Net programming</li>
        <li>SQL and database design</li>
        <li>Project management</li>
        <li>Django Python programming</li>
        <li>Machine learning in Azure ML Studio</li>
        <li>IT networking</li>
        <li>Cybersecurity</li>
      </ul>
      <p>It was a difficult two semesters, but I got a lot of help from great team members and professors.</p>
    </div>  
    
    <SiteLinks></SiteLinks>
  </Layout>
)

export default SchoolPage