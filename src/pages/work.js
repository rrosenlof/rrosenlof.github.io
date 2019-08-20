import React from "react"
import Layout from "../components/layout"
import SiteLinks from "../components/siteLinks";
/* eslint-disable */
const WorkPage = () => (
  <Layout>
    <h1>Work</h1>
    <p>Here's the work experience that I have had in the past few years:</p>
    <div class="work-section">
      <h3>FedEx &#128230;</h3>
      <p>For 10 weeks in the summer of 2019, I interned with <a href="https://www.fedex.com/">FedEx</a> in Colorado Springs, Colorado. I was able to be involved with full stack development on two agile scrum teams. We improved and maintained several applications dealing with international clearance for shipments.</p>
      <p>Over the internship I was able to learn about and use Java (Spring Framework), Angular, PCF, Jenkins, AppD, and Splunk. I had no experience with these tools beforehand, and diving into some real code and pairing with other employees helped me learn more than I could at school or on my own.</p>
      <p>Our teams were able to improve performance of applications by tracking message counts in Splunk. We reduced pending message counts from around 20,000 down to an average less than 300.</p>
      <p>I was able to assist in implementation of Blue-Green deployment on PCF to eliminate application downtime and reduce risks. This project facilitated pushing applications for FedEx shipping centers, which run almost around the clock and rely on our software.</p>
      <p>I was also able to learn some basics of the Spring framework and Angular by creating a reference for FedEx employees. I made this project to help myself learn these frameworks and learn the company lingo.</p>
    </div>  
    <div class="work-section">  
      <h3>BYU IS &#128187;</h3>
      <p>During the school year, I worked part time in the <a href="https://www.is.byu.edu/">Independent Study</a> office of <a href="https://www.byu.edu/">Brigham Young University</a>. In the Computer Operations department, I was a QA tester, providing support and maintenance to an online registration service. I manually tested Jira tickets for new features and customer issues, providing feedback to developers. I also used Selenium to write and run automated tests that check hundreds of functions weekly. </p>
    </div>
    <div class="work-section">  
      <h3>Lizard Skins &#129422;</h3>
      <p>For a year and a half, I worked at <a href="https://www.lizardskins.com/">Lizard Skins</a>, a sporting goods manufacturer based in American Fork, Utah. I worked in the warehouse, shipping products around the globe, packaging goods, and invoicing customers using Oracle NetSuite and ShipStation. One of my favorite parts of the job was using an Adobe Illustrator and an Epilog laser engraver to create custom metal lock-rings for mountain bike grips. I mean, who doesn’t love lasers?!</p>
    </div>
    <div class="work-section">  
      <h3>Missionary Service &#127809;</h3>
      <p>Over two years, I left school and work behind to serve as a volunteer missionary for the <a href="https://www.churchofjesuschrist.org/">Church of Jesus Christ of Latter-day Saints</a> in Quebec, Canada. I lived in several towns across the province, both urban and rural. I was able to serve people from a variety of backgrounds (over 70 different countries of origin), learn French, and support local church congregations. These two years taught me about the importance of learning from others and so much more.</p>
    </div>
    <SiteLinks></SiteLinks>
  </Layout>
)

export default WorkPage