
// "ad" banner component, used to display a banner ad at the bottom of the navbar
// if display false, return nothing
export default function AdBanner({ display = false }) {
  if (!display) {
    return <></>
  }

  return <>
    <div className="bg-amber-300 flex justify-center py-1 shadow-md">
      <a href="https://engineering.purdue.edu/grandchallenges">
        <p className="text-sm hover:translate-y-0.5 transition">
          Join us for the CHORUS & CRISP Grand Challenges Workshop 2024 (Nov 19-21) at Purdue University!
        </p>
      </a>
    </div>
  </>
}