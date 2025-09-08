// All news article data is stored here locally in array
// ordered by date, most recent first

// title: string
// date: string
// content: markdown string (include two spaces before \n for new line)
// images: {url: string, caption: string, size?: number}[]
let news_articles = [
  {
    "title": "Joint work with Hyundai on intrusion detection and prevention systems (IDPS) for in-vehicle networks",
    "date": "August 2025",
    "content": "The fruitful collaboration between PI Saman Zonouz at Georgia Tech and Hyundai has entered its second year. In the first year of our Hyundai collaboration, we focused on foundational research and prototyping intrusion detection and prevention systems (IDPS) for in-vehicle networks, primarily targeting CAN bus and Ethernet. We systematically analyzed attack surfaces --- application- and link-layer CAN exploits such as flooding, masquerading, and frame hijacking, as well as Ethernet threats including DoS, replay, fuzzing, and unauthorized communication. From this analysis, we developed two CAN defense prototypes: a bus monitor (a standalone node that detects and prevents selected CAN attacks via physical-layer fingerprinting and error-frame injection) and a bus guardian (an ECU-level hardware add-on enforcing ID, frequency, and protocol compliance to stop attacks at the source). Both prototypes were validated on testbeds and real vehicles, showing near-perfect detection and prevention rates with negligible false positives. In parallel, we built an Ethernet IDPS within the CCU, using hybrid rule-based and statistical anomaly detection to secure SOME/IP traffic. Experiments demonstrated >94% detection and prevention rates across diverse attack scenarios, and we developed dashboards and visualization tools to highlight real-time anomalies.  \n&nbsp;  \nBuilding on these results, the second year expands toward a context-aware, online operational system tailored to Hyundai’s vehicle networks. The emphasis is on embedding semantic and operational awareness into detection, so that message plausibility is validated against vehicle state (e.g., speed, acceleration, and subsystem conditions) rather than purely statistical anomalies. Phase 1 develops offline normal traffic profiling using Hyundai's private and other public datasets and machine learning models to capture temporal patterns, while formulating rule-based detection strategies. Phase 2 transitions to real-time deployment, implementing a monitor node that extracts semantic payloads and applies context-aware rules during live operations. The system will be rigorously evaluated on attack scenarios, including real-world ECU spoofing with an external CAN injection module, ensuring resilience to stealthy adversaries. Deliverables include embedded prototypes, recorded demonstrations, technical reports, and final testbed validations. Together, this fruitful collaborative effort progresses from robust proof-of-concept IDPS designs to a practical, context-aware cybersecurity framework ready for integration into Hyundai’s next-generation vehicle platforms. \n&nbsp;  \n**Some early results are to be found in: Zhaozhou Tang, Khaled Serag, Saman Zonouz, Z. Berkay Celik, Dongyan Xu, and Raheem Beyah. "{WIP}: Intrusion Detection and Localization for {CAN} by Extracting Propagation Delay Features from Message Intervals." In 3rd USENIX Symposium on Vehicle Security and Privacy (VehicleSec 25), pp. 19-26. 2025.",
    "images": [
      {
        "url": "news_images/saman-vehiclesec25.png",
        "caption": "Illustrating the origin of Timing Signatures (TS); Comparison of TS with other approaches",
        "size": 0.5
      }
    ]
  },
  {
    "title": "PAVE: Patching and Adapting Video Large Language Models accepted to CVPR 2025",
    "date": "March 2025",
    "content": "The paper addresses the problem of adapting pre-trained video large lanuage models to downstream tasks involving additional input modality or different data type. This work falls under Thrust 3 of the CHORUS center.  \n&nbsp;  \n**Citation**: Zhuoming Liu, Yiquan Li, Khoi Duc Nguyen, Yiwu Zhong, and Yin Li. PAVE: Patching and Adapting Video Large Language Models. IEEE/CVF Computer Vision and Pattern Recognition Conference (CVPR) 2025. (acceptance rate: 22.1%)  \n&nbsp;  \n**Software Release**: We have open-sourced the code for our CVPR 2025 paper at [https://github.com/dragonlzm/PAVE](https://github.com/dragonlzm/PAVE)",
    "images": [
      {
        "url": "news_images/pave_article.png",
        "caption": "",
        "size": 0.5
      }
    ]
  },
  {
    "title": "Agile3D: Adaptive 3D Object Detection System accepted to MobiSys 2025",
    "date": "March 2025",
    "content": "Our collaborative paper between Purdue and partner institutions has been accepted to MobiSys 2025. This work presents an adaptive 3D object detection system that dynamically reconfigures execution based on runtime contention and content characteristics. This research falls under Thrust 3 of the CHORUS center.  \n&nbsp;  \n**Citation**: Pengcheng Wang, Zhuoming Liu, Shayok Bagchi, Ran Xu, Saurabh Bagchi, Yin Li, and Somali Chaterji. Agile3D: Adaptive Contention- and Content-Aware 3D Object Detection for Embedded GPUs. ACM International Conference on Mobile Systems, Applications, and Services (MobiSys) 2025. (acceptance rate: 18.0%)",
    "images": [
      {
        "url": "news_images/agile3d_article.png",
        "caption": "",
        "size": 0.5
      }
    ]
  },
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
      "caption": "",
      "size": 0.5
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
