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
      picture: "unknown",
      affiliation: "unknown",
    },
    {
      name: "Shreyas Sundaram",
      title: "Thrust 2 lead",
      picture: "unknown",
      affiliation: "unknown",
    },
    {
      name: "Saman Zonouz",
      title: "Thrust 3 lead",
      picture: "unknown",
      affiliation: "unknown",
    },
    {
      name: "Ramesh Govindan",
      title: "Application domain lead",
      picture: "unknown",
      affiliation: "unknown",
    },
    {
      name: "Somali Chaterji",
      title: "Evaluation lead",
      picture: "unknown",
      affiliation: "unknown",
    },
    {
      name: "Carla Zoltowski",
      title: "Assessment lead",
      picture: "unknown",
      affiliation: "unknown",
    },
  ];

  // name: string
  // picture: string url to image
  // affiliation: string
  const CoPIs = [
    {
      name: "Tim Cason",
      picture: "unknown",
      affiliation: "unknown"
    },
    {
      name: "Yin Li",
      picture: "unknown",
      affiliation: "unknown"
    },
    {
      name: "Aravind Machiry",
      picture: "unknown",
      affiliation: "unknown"
    },
    {
      name: "Feng Qian",
      picture: "unknown",
      affiliation: "unknown"
    },
  ];

  // company: string
  // logo: string url to image
  // partners: { name: string, picture: string url to image }[]
  const industry_partners = [
    {
      company: "General Motors",
      logo: "unknown",
      partners: [
        {
          name: "Dr. Fan Bai",
          picture: "unknown",
        },
        {
          name: "Paul Krajeswi",
          picture: "unknown",
        },
      ]
    },
    {
      company: "INDOT",
      logo: "unknown",
      partners: [
        {
          name: "Nathan Sturdevant",
          picture: "unknown",
        },
      ]
    },
    {
      company: "Microsoft Azure",
      logo: "unknown",
      partners: [
        {
          name: "Ranveer Chandra",
          picture: "unknown",
        },
      ]
    },
    {
      company: "Adobe Research",
      logo: "unknown",
      partners: [
        {
          name: "Kanak Mahadik",
          picture: "unknown",
        },
      ]
    },
    {
      company: "Amazon",
      logo: "unknown",
      partners: [
        {
          name: "Murali Krishna Ramanathan",
          picture: "unknown",
        },
      ]
    },
    {
      company: "Intel",
      logo: "unknown",
      partners: [
        {
          name: "Christopher Gutierrez",
          picture: "unknown",
        },
      ]
    },
    {
      company: "Rose-Hulman Institute of Technology",
      logo: "unknown",
      partners: [
        {
          name: "Zachary Estrada",
          picture: "unknown",
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
              <img src={leader.picture} alt={leader.name} className="object-cover h-48 w-48 bg-red-400" />
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
              <img src={leader.picture} alt={leader.name} className="object-cover h-48 w-48 bg-red-400" />
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
            <div key={partner.company} className="flex flex-row gap-4">
              <img src={partner.logo} alt={partner.company} className="object-cover h-40 w-40 bg-red-400" />
              <div>
                <h3 className="text-xl font-bold">{partner.company}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                  {partner.partners.map((person) => (
                    <div key={person.name} className="flex flex-col">
                      <img src={person.picture} alt={person.name} className="object-cover h-28 w-28 bg-red-300" />
                      <h3 className="text-lg font-semibold text-wrap break-words bg-blue-400">{person.name}</h3>
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