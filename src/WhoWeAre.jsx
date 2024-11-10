// Who We Are page, uses local data in arrays to display all roles.
// TODO: at some point, if needed, create a server to pull the data from, but you'll
//       have to restructure entire codebase
export default function WhoWeAre() {

  // name: string
  // title: string
  // picture: string url to image
  // affiliation: string
  const Leadership = [
    {
      name: "Saurabh Bagchi",
      title: "Director",
      picture: "pictures/saurabh-bagchi.jpg",
      affiliation: "Purdue University",
    },
    {
      name: "Sam Coogan",
      title: "Thrust 1 lead",
      picture: "pictures/sam-coogan.jpg",
      affiliation: "Georgia Institute of Technology (Georgia Tech)",
    },
    {
      name: "Shreyas Sundaram",
      title: "Thrust 2 lead",
      picture: "pictures/Shreyas-Sundaram.jpg",
      affiliation: "Purdue University",
    },
    {
      name: "Saman Zonouz",
      title: "Thrust 3 lead",
      picture: "pictures/Saman-Zonouz.jpeg",
      affiliation: "Georgia Institute of Technology (Georgia Tech)",
    },
    {
      name: "Ramesh Govindan",
      title: "Application domain lead",
      picture: "pictures/Ramesh-Govindan.jpg",
      affiliation: "University of Southern California",
    },
    {
      name: "Somali Chaterji",
      title: "Evaluation lead",
      picture: "pictures/Somali-Chaterji.png",
      affiliation: "Purdue University",
    },
    {
      name: "Carla Zoltowski",
      title: "Assessment lead",
      picture: "pictures/Carla-Zoltowski.jpg",
      affiliation: "Purdue University",
    },
  ];

  // name: string
  // picture: string url to image
  // affiliation: string
  const CoPIs = [
    {
      name: "Tim Cason",
      picture: "pictures/Tim-Cason.jpg",
      affiliation: "Purdue University"
    },
    {
      name: "Yin Li",
      picture: "pictures/yin-li.jpg",
      affiliation: "University of Wisconsin-Madison"
    },
    {
      name: "Aravind Machiry",
      picture: "pictures/Aravind-Machiry.jpg",
      affiliation: "Purdue University"
    },
    {
      name: "Feng Qian",
      picture: "pictures/Feng-Qian.jpg",
      affiliation: "University of Southern California"
    },
  ];

  // company: string
  // logo: string url to image
  // partners: { name: string, picture: string url to image }[]
  const industry_partners = [
    {
      company: "General Motors",
      logo: "partner_logos/General-Motors.png",
      partners: [
        {
          name: "Dr. Fan Bai",
          picture: "pictures/Fan-Bai.jpg",
        },
        {
          name: "Paul Krajeswi",
          picture: "pictures/Paul-Krajeswi.jpg",
        },
      ]
    },
    {
      company: "INDOT",
      logo: "partner_logos/indot.svg",
      partners: [
        {
          name: "Nathan Sturdevant",
          picture: "pictures/Nathan-Sturdevant.jpg",
        },
      ]
    },
    {
      company: "Microsoft Azure",
      logo: "partner_logos/Microsoft-Azure.png",
      partners: [
        {
          name: "Ranveer Chandra",
          picture: "pictures/Ranveer-Chandra.jpg",
        },
      ]
    },
    {
      company: "Adobe Research",
      logo: "partner_logos/adobe-research.png",
      partners: [
        {
          name: "Kanak Mahadik",
          picture: "pictures/Kanak-Mahadik.png",
        },
      ]
    },
    {
      company: "Amazon",
      logo: "partner_logos/amazon.png",
      partners: [
        {
          name: "Murali Krishna Ramanathan",
          picture: "pictures/Murali-Krishna-Ramanathan.jpg",
        },
      ]
    },
    {
      company: "Intel",
      logo: "partner_logos/intel.png",
      partners: [
        {
          name: "Christopher Gutierrez",
          picture: "pictures/Christopher-Gutierrez.jpg",
        },
      ]
    },
    {
      company: "Rose-Hulman Institute of Technology",
      logo: "partner_logos/Rose–Hulman_Institute_of_Technology.svg",
      partners: [
        {
          name: "Zachary Estrada",
          picture: "pictures/Zachary-Estrada.jpg",
        },
      ]
    },
  ]


  return (
    <>
      <h1 className="text-3xl font-bold text-sky-600">Who We Are</h1>

      <div className="flex flex-col gap-8 my-8">
        <h2 className="text-2xl font-bold mt-4">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Leadership.map((leader) => (
            <div key={leader.name} className="flex flex-row gap-4">
              <img src={leader.picture} alt={leader.name} className="object-cover h-48 w-48" />
              <div>
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <p>{leader.title}</p>
                <p>{leader.affiliation}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-8">Co-Principal Investigators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CoPIs.map((leader) => (
            <div key={leader.name} className="flex flex-row gap-4">
              <img src={leader.picture} alt={leader.name} className="object-cover h-48 w-48" />
              <div>
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <p>{leader.affiliation}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-8">Industry Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {industry_partners.map((partner) => (
            <div key={partner.company} className="flex flex-row gap-4 mb-8">
              <img src={partner.logo} alt={partner.company} className="object-cover h-40 w-40" />
              <div>
                <h3 className="text-xl font-bold">{partner.company}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                  {partner.partners.map((person) => (
                    <div key={person.name} className="flex flex-col">
                      <img src={person.picture} alt={person.name} className="object-cover h-28 w-28" />
                      <h3 className="text-lg font-semibold text-wrap break-words">{person.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}