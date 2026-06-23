export type TeamMember = {
  id: string;
  name: string;
  firstName: string;
  credential: string;
  role: string;
  image: string;
  /** CSS object-position for the square crop; defaults to "center". */
  objectPosition?: string;
  /** Bio paragraphs shown on the member's detail page. */
  bio: string[];
};

// Order in the grid. Cori leads.
export const team: TeamMember[] = [
  {
    id: "cori-tobias",
    name: "Cori Tobias",
    firstName: "Cori",
    credential: "FNP-BC",
    role: "Nurse Practitioner",
    image: "/Images/cori.jpeg",
    bio: [
      "Cori has been a registered nurse since 2008 and a board-certified Family Nurse Practitioner since 2022, with nearly two decades in healthcare. She is passionate about wellness, prevention, and helping clients feel their best through personalized IV hydration and vitamin therapy.",
      "Outside the clinic, Cori spends time with her family and her fur babies. She brings that same warmth and attention to detail into every appointment, creating a welcoming experience at SereniDrip.",
    ],
  },
  {
    id: "kat-into",
    name: "Kat Into",
    firstName: "Kat",
    credential: "BSN, RN",
    role: "Registered Nurse",
    image: "/Images/kat.jpeg",
    objectPosition: "center 20%",
    bio: [
      "Kat has been a labor and delivery nurse for over 15 years, and caring for others has always been at the heart of her work. Supporting patients through some of life's most important moments has deepened her commitment to helping people feel their best.",
      "When she is not at the clinic, Kat is a wife and mother of two, plus two dogs, and loves to travel with her family. At SereniDrip, she combines her years of bedside experience with a personalized, wellness-focused approach to client care.",
    ],
  },
  {
    id: "oralia-diaz",
    name: "Oralia Diaz",
    firstName: "Oralia",
    credential: "RN",
    role: "Registered Nurse",
    image: "/Images/oralia.jpeg",
    objectPosition: "center 30%",
    bio: [
      "Oralia is a co-founder of SereniDrip and a Registered Nurse with over 12 years of experience caring for others as a labor and delivery nurse. She started SereniDrip to combine her passion for healthcare with a personalized approach to wellness, helping clients support their hydration, energy, recovery, and overall well-being in a relaxing, professional setting.",
      "Outside of work, Oralia is a wife and mother of three, shares her home with four pets, and loves to jog and stay active. She brings that same warmth and dedication into every appointment, delivering care with the attention and compassion you deserve.",
    ],
  },
];

export function getTeamMember(id: string): TeamMember | undefined {
  return team.find((m) => m.id === id);
}
