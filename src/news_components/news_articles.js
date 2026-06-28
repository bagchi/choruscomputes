// All news article data is stored here locally in array
// ordered by date, most recent first

// title: string
// date: string
// content: markdown string (include two spaces before \n for new line)
// images: {url: string, caption: string, size?: number}[]
let news_articles = [
  {
      "title": "CHORUS has successful NSF site visit",
      "date": "June 8 2026",
      "content": "The NSF Center CHORUS organized a successful site visit at Purdue on June 8 and 9. The site visit was an opportunity for the team to present its progress and plans to the National Science Foundation. All of the CHORUS PIs across the four institutions, Purdue University, Georgia Tech, University of Southern California, and University of Wisconsin at Madison, came together for the site visit along with several graduate researchers.  \n&nbsp;  \nThe event was kicked off by Prof. Milind Kulkarni, the Michael and Katherine Birck Head of the Elmore Family School of Electrical and Computer Engineering. He welcomed the attendees, numbering 25, and stated the importance of resilience in our critical infrastructures. He recalled the team effort that went into winning the NSF Center competition and the continuing team effort that has led to the technical accomplishments of CHORUS so far.  \n&nbsp;  \nCHORUS Director, Saurabh Bagchi, Professor of ECE and CS at Purdue University, introduced the goals and the rationale behind CHORUS. He then outlined five technical breakthroughs that have been achieved through coordination and collaboration among the PIs of CHORUS. He described the broader impacts activities that have flown seamlessly from the research discoveries, such as the Capture The Flag contest on Connected and Autonomous Vehicles and the Georgia Tech course on cybersecurity of autonomous drones.  \n&nbsp;  \nThe three research thrust leads, Sam Coogan of Georgia Tech, Shreyas Sundaram of Purdue University, and Saman Zonouz of Georgia Tech, described the research accomplishments and the ongoing work in their respective thrusts. A standout was how many of the research accomplishments were enabled by multiple PIs working together. For example, the GreenEVT simulator developed by Coogan’s team has been key to the results obtained by Sundaram and his team on multi-fidelity Bayesian Optimization. Zonouz highlighted some of the practical uptake of CHORUS research, such as through demonstration of security defenses on Hyundai’s vehicle, Palisade 2025.  \n&nbsp;  \nNext, evaluation lead Ramesh Govindan of the University of Southern California introduced three application scenarios with perturbations that affect the safe, reliable, and secure operation today. These scenarios serve as an integrative platform for the various research tasks being carried out in CHORUS and have been developed through long and careful discussion among the team members and some of the industry partners. Then, the testbed lead Somali Chaterji of Purdue University outlined the ways the team is evaluating progress in each thrust, from a performance standpoint and from a safety, reliability, and security standpoint.  \n&nbsp;  \nPI Yin Li from the University of Wisconsin at Madison organized an energetic and fast-paced lightning talk session highlighting 16 posters and demonstrations created by the graduate researchers. In the late afternoon, there was a poster and demonstration viewing session. Three judges roamed the arena and spoke to the authors and then cast their ballots for the competition. The competition winners were announced and recognized at the dinner. The winner was Zhuoming Liu from Wisconsin, the first runner-up was Preeti Mukherjee from Purdue, and the second runner-up was Hyunseung Kim, also from Purdue.  \n&nbsp;  Saurabh Bagchi remarked, &quot;The site visit is a culmination of long, careful, and coordinated work by the team.&quot; He added, &quot;It is satisfying to step back and look at the big picture --- how we are taming the grand challenge of resilient Cyber Physical Systems, which we had set out to achieve when proposing CHORUS.&quot;  \n&nbsp;  \nThe event ended with dinner and a fun quiz session conducted by Bagchi on all things technical.",
      "images": [
        {
          "url": "news_images/chorus-group-pic-0626.jpg",
          "caption": "CHORUS team at the NSF site visit on Purdue campus",
          "size": 0.5
        },
        {
          "url": "news_images/nsf-audience-0626.JPG",
          "caption": "Part of the audience",
          "size": 0.5
        },
        {
          "url": "news_images/nsf-poster-demo-0626.JPG",
          "caption": "Poster and demo session in progress",
          "size": 0.5
        },
      ]
  },
    {
      "title": "Student researcher poster award winners announced",
      "date": "June 8 2026",
      "content": `At the NSF site visit, there was a poster and demo competition for the graduate researchers, in which there were 16 entries. Three judges viewed these entries and discussed with the researchers. They scored the entries on technical content (50%), lightning talk (25%), and presentation plus Q&A (25%). Thanks to the judges, Dr. Mark Tschopp, Prof. T. N. Vijaykumar, and Prof. Ashraf Alam. CHORUS PI, Yin Li from the University of Wisconsin organized the competition. The winners came out to be: 
      
       *Winner: Zhuoming Liu (University of Wisconsin at Madison)*: PAVE: Patching and Adapting Video Large Language Models  
       *First runner-up: Preeti Mukherjee (Purdue University)*: Content-Aware Efficient Diffusion Models for Image Generation  
       *Second runner-up: Hyunseung Kim (Purdue University)*: ApproxBit: Efficient Video Analytics through Latency-Aware Offloading with Learned Binary Codes `,
      "images": [
        {
          "url": "news_images/zhuoming-liu-poster-0626.jpg",
          "caption": "Zhuoming Liu: Winner of poster competition",
          "size": 0.5
        },
        {
          "url": "news_images/preeti-mukherjee-poster-0626.jpg",
          "caption": "Preeti Mukherjee: First runner-up of poster competition",
          "size": 0.5
        },
        {
          "url": "news_images/hyunseung-kim-poster-0626.jpg",
          "caption": "Hyunseung Kim: Second runner-up of poster competition",
          "size": 0.5
        }
      ]
  }, 
  {
      "title": "Autonomous vehicle CTF on April 19-20",
      "date": "April 2026",
      "content": "We organized a virtual autonomous vehicle Capture The Flag (CTF) contest over a 24-hour period, April 19-20. In this CTF, called ConCAVe, teams of 2 students hacked on 7 challenges from the comfort of their laptops.  \n&nbsp;  \nThere were cash prizes for winners and for those who complete the challenges. And there are bragging rights of winning an NSF-supported competition. One didn't need deep security or autonomous vehicle background to participate. In the end, 31 teams across the four universities participated in the CTF. This is the first CTF for Connected and Autonomous Vehicles.",
      "images": [
        {
          "url": "news_images/GRIDLOCK_Poster_2026.png",
          "caption": "",
          "size": 0.5
        }
      ]
  },
  {
    "title": "Purdue PIs of CHORUS recognized at Purdue Seed for Success program",
    "date": "November 2025",
    "content": "The Seed for Success event held at Purdue on November 18 honored Purdue faculty and staff who received a sponsored grant equal to or greater than $1 million in FY25. Among the CHORUS PIs, Saurabh Bagchi, Timothy Cason, Somali Chaterji, and Shreyas Sundaram, attended and were recognized at the event.",
    "images": [
      {
        "url": "news_images/chorus-seed-for-success-112025.jpg",
        "caption": "From L to R: Dan Delaurentis (Purdue VP for Research), Saurabh Bagchi, Somali Chaterji, Tim Cason, Shreyas Sundaram",
        "size": 0.5
      },
      {
        "url": "news_images/nsf-chorus-seed-for-success-slide.png",
        "caption": "NSF CHORUS logo and Purdue PIs",
        "size": 0.5
      }	
    ]
 },
 {
    "title": "A student from the CHORUS Center, Brendan Gould of Georgia Tech, co-advised by CHORUS PI Samuel Coogan, won a Fellowship from the NSF Graduate Research Fellowship Program (GRFP). The award provides 3 years worth of financial support for doctoral studies.",
    "date": "October 2025",
    "content": "**Proposal Title**: Safety-Assured Control in Heterogeneous, Multi-Agent Systems  \n&nbsp;  \n**Summary**: The field of robotics promises a future where intelligent agents work with and for humans in our day-to-day lives. To make this vision a reality, we must first ensure that engineered agents can safely interact with human decision-makers. Prior work uses game theory to describe and predict the interaction of strategic agents, but depends on the overly restrictive assumption that every agents' behavior can be exactly described as minimization of a known cost function. My proposal relaxes this restriction, allowing for a range of reasonably strategic responses instead of just an exact minimum, modelling both sub-rational behavior of human agents and uncertainty in the cost function. Then, I apply techniques from robust control, specifically reachable set analysis, to choose actions that perform well regardless of the decisions of other agents.  \n&nbsp;  \n**Background**: Brendan Gould is a Ph.D. student in the School of Electrical and Computer Engineering at Georgia Tech, co-advised by Professors Samuel Coogan and Kyriakos Vamvoudakis. His research interests lie at the intersection of robust control and algorithmic game theory, with the main goal of providing formal safety guarantees for engineered systems that interact with human agents. He graduated from the University of Colorado Colorado Springs with a dual B.S. in Mathematics and Computer Science, and recently received a NSF GRFP award.",
    "images": [
      {
        "url": "news_images/bgould-GRFP.png",
        "caption": "",
        "size": 0.5
      }
    ]
  },
  {
    "title": "Robust 3D Object Detection using Probabilistic Point Clouds from Single-Photon LiDARs accepted to ICCV 2025",
    "date": "August 2025",
    "content": "This paper presents Probabilistic Point Clouds (PPC), a novel 3D LiDAR scene representation for robust 3D object detection. PPC augments each point with a probability attribute that encapsulates the measurement uncertainty (or confidence) in the raw data. This research falls under Thrust 2 of the CHORUS center.  \n&nbsp;  \n**Citation**: Bhavya Goyal, Felipe Gutierrez-Barragan, Wei Lin, Andreas Velten, Yin Li, and Mohit Gupta. Robust 3D Object Detection using Probabilistic Point Clouds from Single-Photon LiDARs. International Conference on Computer Vision, 2025  \n&nbsp;  \n**Code Release**: [https://github.com/bhavyagoyal/ppc](https://github.com/bhavyagoyal/ppc)",
    "images": [
      {
        "url": "news_images/robust3D_article.jpg",
        "caption": "",
        "size": 0.5
      }
    ]
  },
  {
    "title": "LETS Forecast: Learning Embedology for Time Series Forecasting published in ICML 2025",
    "date": "August 2025",
    "content": "This paper introduces DeepEDM, a framework that integrates nonlinear dynamical systems modeling with deep neural networks for time series analysis. This research falls under Thrust 3 of the CHORUS center.  \n&nbsp;  \n**Citation**: Abrar Majeedi, Viswanatha Reddy Gajjala, Satya Sai Srinath Namburi GNVV, Nada Magdi Elkordi, and Yin Li. LETS Forecast: Learning Embedology for Time Series Forecasting. Forty-Second International Conference on Machine Learning, 2025.  \n&nbsp;  \n**Code Release**: [https://github.com/abrarmajeedi/DeepEDM](https://github.com/abrarmajeedi/DeepEDM)",
    "images": [
      {
        "url": "news_images/LETSforecast_article.gif",
        "caption": "",
        "size": 0.5
      }
    ]
  },
  {
    "title": "Joint work with Hyundai on intrusion detection and prevention systems (IDPS) for in-vehicle networks",
    "date": "August 2025",
    "content": "The fruitful collaboration between PI Saman Zonouz at Georgia Tech and Hyundai has entered its second year. In the first year of our Hyundai collaboration, we focused on foundational research and prototyping intrusion detection and prevention systems (IDPS) for in-vehicle networks, primarily targeting CAN bus and Ethernet. We systematically analyzed attack surfaces --- application- and link-layer CAN exploits such as flooding, masquerading, and frame hijacking, as well as Ethernet threats including DoS, replay, fuzzing, and unauthorized communication. From this analysis, we developed two CAN defense prototypes: a bus monitor (a standalone node that detects and prevents selected CAN attacks via physical-layer fingerprinting and error-frame injection) and a bus guardian (an ECU-level hardware add-on enforcing ID, frequency, and protocol compliance to stop attacks at the source). Both prototypes were validated on testbeds and real vehicles, showing near-perfect detection and prevention rates with negligible false positives. In parallel, we built an Ethernet IDPS within the CCU, using hybrid rule-based and statistical anomaly detection to secure SOME/IP traffic. Experiments demonstrated >94% detection and prevention rates across diverse attack scenarios, and we developed dashboards and visualization tools to highlight real-time anomalies.  \n&nbsp;  \nBuilding on these results, the second year expands toward a context-aware, online operational system tailored to Hyundai’s vehicle networks. The emphasis is on embedding semantic and operational awareness into detection, so that message plausibility is validated against vehicle state (e.g., speed, acceleration, and subsystem conditions) rather than purely statistical anomalies. Phase 1 develops offline normal traffic profiling using Hyundai's private and other public datasets and machine learning models to capture temporal patterns, while formulating rule-based detection strategies. Phase 2 transitions to real-time deployment, implementing a monitor node that extracts semantic payloads and applies context-aware rules during live operations. The system will be rigorously evaluated on attack scenarios, including real-world ECU spoofing with an external CAN injection module, ensuring resilience to stealthy adversaries. Deliverables include embedded prototypes, recorded demonstrations, technical reports, and final testbed validations. Together, this fruitful collaborative effort progresses from robust proof-of-concept IDPS designs to a practical, context-aware cybersecurity framework ready for integration into Hyundai’s next-generation vehicle platforms. \n&nbsp;  \n**Some early results are to be found in: Zhaozhou Tang, Khaled Serag, Saman Zonouz, Z. Berkay Celik, Dongyan Xu, and Raheem Beyah. {WIP}: Intrusion Detection and Localization for {CAN} by Extracting Propagation Delay Features from Message Intervals. In 3rd USENIX Symposium on Vehicle Security and Privacy (VehicleSec 25), pp. 19-26. 2025.",
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
