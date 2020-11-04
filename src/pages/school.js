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
      <p>I applied to and was accepted into the <a href="https://marriottschool.byu.edu/infosys/mism/what-will-i-study/program-overview/">Masters of Information Systems Management</a> program, an 2 year integrated graduate program at BYU. I will graduate in April 2021 with my bachelor's of science in Information Systems and a master's degree in Information Systems Management. I am currently or will take classes on:</p>
      <ul class="work-section-list">
        <li>Web Development</li>
        <li>Data Analytics in Sports</li>
        <li>VBA Programming</li>
        <li>Global Supply Chain Management</li>
        <li>UX Design</li>
      </ul>
      <p>In previous semesters, I have taken classes on:</p>
      <ul className="work-section-list">
        <li>Data Structures (Python)</li>
        <li>Advanced Database Management</li>
        <li>Business Strategy</li>
        <li>Enterprise infrastructure (AWS)</li>
        <li>Mobile app development (Swift for iOS apps)</li>
        <li>Cybersecurity</li>
        <li>Advanced Database Management (Oracle, Cassandra tools)</li>
        <li>Data Structures</li>
        <li>Business Strategy</li>
      </ul>
      <p>I am also completing a capstone project. With a group of 3 students, I will be developing a mobile application to help track seizures in people with epilepsy, and reveal trends about seizures over time. The application will probably be written in React Native, with an external API for processing data from an Apple Watch. Excited to work more on this project my last semester of the program! </p>
      <p>I've enjoyed diving deeper into subjects that I've studied before. Over the next two semesters, I will follow the Development track in the program. School is fun when your classes are interesting!</p>
      <h3>IS Program <span role="img">&#128218;</span></h3>
      <p>In 2014, I started attending <a href="https://www.byu.edu/">Brigham Young University</a> in Provo, Utah. After a two year pause and some searching, I landed upon the <a href="https://marriottschool.byu.edu/infosys/">Information Systems</a> program in the Marriott School of Business. I loved the combination of technical and business classes offered, since I was (and still am!) uncertain of my future career path.</p>
      <p>I started the program in the fall of 2018. Over that school year, I took classes covering the following subjects:</p>   
      <ul className="work-section-list">
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