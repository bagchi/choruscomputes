// All news article data is stored here locally in array
// ordered by date, most recent first

// title: string
// date: string
// content: markdown string (include two spaces before \n for new line)
// images: {url: string, caption: string}[]
let news_articles = [
  {
    "title": "CHORUS & CRISP Grand Challenges Workshop 2024",
    "date": "November 19-21, 2024",
    "content": `&nbsp;
      \n**Event Link: [Grand Challenges Workshop 2024](https://engineering.purdue.edu/grandchallenges)**
      \n&nbsp;
      \n**Location**: [Wright Center](https://ag.purdue.edu/department/fnr/research/facilities/wright-center.html), Martell Forest (Reception on the 19th); [Recreational Sports Center](https://www.purdue.edu/recwell/) (20th and 21st); [Shively Club](https://purduesports.com/sports/2019/4/9/facilities-shively-club) (Banquet on the 20th), Purdue University, West Lafayette, IN
      \n&nbsp;
      \nKickstarting our NSF-funded CHORUS Center, this workshop will bring together leaders in resilient cyber-infrastructures, cyber-physical systems, and socio-technical resilience. Industry and academic speakers, along with federal program managers, will introduce the vision and goals through foundational techniques and real-world case studies to strengthen adaptive and resilient critical infrastructure.
    `,
    "images": [{
      "url": "/CHORUS-color.png",
      "caption": ""
    }]
  },
  {
    "title": "Purdue Team Starts Work on NSF Center on Resilient Cyber-Physical Systems with Application to Autonomous Transportation",
    "date": "October 2024",
    "content": "Purdue University's CHORUS Center has launched, thanks to a $7 million NSF grant, to boost resilience in autonomous transportation systems. Led by Saurabh Bagchi, a Purdue engineering professor, the project brings together experts from Purdue and partner institutions to address vulnerabilities in connected autonomous transportation systems (CATS), such as connectivity failures and cyberattacks. Collaborating with industry leaders like General Motors and Amazon Web Services, the CHORUS team aims to ensure safe, reliable, and secure autonomous networks, which could potentially reduce roadway fatalities by 85%. This work supports the Purdue Computes initiative, furthering Purdue's leadership in impactful, tech-driven research.  \n&nbsp;  \nMore information here: [[ WWW ](https://www.purdue.edu/research/features/stories/purdue-university-leads-research-on-autonomous-transportation-network/)]",
    "images": []
  },
  {
    "title": "Ryan Pickren, Animesh Chhotaray, Frank Li, Saman Zonouz, Raheem Beyah, Release the Hounds! Automated Inference and Empirical Security Evaluation of Field-Deployed PLCs using Active Network Data, ACM Conference on Computer and Communications Security (CCS), 2024.",
    "date": "September 2024",
    "content": "The skies above the Georgia Tech campus were clear in late spring as a group of graduate students gathered at Couch Park to test their custom-built drones one last time before the semester ended.  \n&nbsp;  \nTheir instructor, Associate Professor Saman Zonouz, created this course to teach students to prevent, detect, and respond to common cyberattacks launched against cyber-physical systems.  \n&nbsp;  \nMore information here: [[ WWW ]](https://www.cc.gatech.edu/news/video-drone-course-goes-beyond-protecting-our-eyes-sky)",
    "images": [
      {
        "url": "news_images/cyber-drones.jpg",
        "caption": ""
      }
    ]
  },
  {
    "title": "NSF Center CHORUS is up and running!",
    "date": "August 2024",
    "content": "The NSF Center CHORUS is up and running. The PIs got together to plan out the thrusts and the tasks within each. The thrust leads are:  \n Thrust 1: Modeling - Sam Coogan (Georgia Tech)  \nThrust 2: Proactive deployment - Shreyas Sundram (Purdue)  \nThrust 3: Runtime response - Saman Zonouz (Georgia Tech)  \nApplication: Connected and autonomous transportation systems (CATS) - Ramesh Govindan (University of Southern California)  \nEvaluation - Somali Chaterji (Purdue)",
    "images": [
      {
        "url": "news_images/chorus_9_9_24.jpg",
        "caption": "The Purdue PIs on the NSF CHORUS Center. Dated: August 31, 2024. From L to R: Carla Zoltowski, Shreyas Sundaram, Saurabh Bagchi, Timothy Cason, Aravind Machiry, Somali Chaterji"
      }
    ]
  },
  {
    "title": "Hiring Post-Docs for CHORUS",
    "date": "July 2024",
    "content": "We are hiring post-doctoral scholars for our CHORUS center. Here is how to apply. [[ DOC ]](https://docs.google.com/document/d/1ClUScynIkSB_V3qN9RVaTXjszN_c3FG9IAOFMgUdYO8/edit?usp=sharing)",
    "images": []
  },
  {
    "title": "Center kick-off event",
    "date": "July 2024",
    "content": "We will be organizing our Center kick-off event at Purdue in late September. This will be an intellectually invigorating event with participation by all our team members, NSF Program Officers, plus those from other federal agencies, all our industry partners, plus students and researchers from the Purdue community.",
    "images": []
  },
  {
    "title": "NSF Project Begins",
    "date": "June 2024",
    "content": "NSF project begins. We are en route on our bold journey to build resilient, large-scale Cyber-Physical Systems.",
    "images": []
  }
]

// Slugify generates a url-friendly slug from a string
const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

// we add the slug term as the unique identifier
news_articles = news_articles.map(item => ({
  ...item,
  slug: slugify(item.title)
}))

export default news_articles;