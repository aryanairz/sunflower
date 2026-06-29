// Venue content. Plain data, no icon dependencies.

export type PhotoBlock = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

// Alternating photo + text blocks down the home page.
export const photoBlocks: PhotoBlock[] = [
  {
    title: "The Palapa",
    body: "A large covered palapa anchors the grounds, offering shade for dining, dancing, and gathering. It opens directly onto the pool, so guests move easily between the water and the celebration.",
    image: "/Images/palapaimage.jpg",
    alt: "The covered palapa pavilion opening onto the pool at Sunflower Ranch in Edinburg, Texas",
  },
  {
    title: "The Pool",
    body: "The pool sits at the center of the property, framed by lounge seating and open sky. It is a natural focal point for warm afternoons and a quiet backdrop once the sun goes down.",
    image: "/Images/pool.jpg",
    alt: "The pool at golden hour, framed by palms and a shade canopy at Sunflower Ranch",
  },
  {
    title: "Event Setups",
    body: "Tables, chairs, and open space come ready for your plans. Arrange the grounds for a seated dinner, a dance floor, or a relaxed afternoon with family and friends.",
    image: "/Images/mrandmrsbetterview.jpg",
    alt: "Tables and chairs arranged under the palapa for an event at Sunflower Ranch",
  },
];

export type Amenity = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

// Feature row: image on top, serif heading, short paragraph.
export const amenities: Amenity[] = [
  {
    title: "Sparkling Pool",
    body: "A clean, open pool at the heart of the property for warm Rio Grande Valley afternoons.",
    image: "/Images/pool.jpg",
    alt: "The pool at Sunflower Ranch",
  },
  {
    title: "Shaded Palapa",
    body: "A covered, open-air pavilion for dining and dancing out of the sun.",
    image: "/Images/palapaimage.jpg",
    alt: "The shaded palapa at Sunflower Ranch",
  },
  {
    title: "Spacious Grounds",
    body: "Room for guests, music, and movement, with space to make the day your own.",
    image: "/Images/marriage.jpg",
    alt: "A celebration on the open grounds at Sunflower Ranch",
  },
  {
    title: "Tables & Chairs Included",
    body: "Seating comes with the venue, ready to arrange for your event.",
    image: "/Images/redchairs.jpg",
    alt: "Event chairs set out for a celebration at Sunflower Ranch",
  },
];

export type EventType = {
  title: string;
  body: string;
};

// Events we host: clean grid, no icons or number badges.
export const eventTypes: EventType[] = [
  { title: "Quinceañeras", body: "A grand setting for a milestone celebration." },
  { title: "Gender Reveals", body: "Share the news surrounded by family." },
  { title: "Birthdays", body: "From first birthdays to every year after." },
  { title: "Graduations", body: "Mark the achievement with the whole crew." },
  { title: "Baby Showers", body: "A warm, welcoming space for new beginnings." },
  { title: "Private Parties", body: "Whatever the occasion, the grounds are yours." },
];

// Inquiry form dropdown options.
export const EVENT_TYPE_OPTIONS = [
  "Quinceañera",
  "Gender Reveal",
  "Birthday",
  "Graduation",
  "Baby Shower",
  "Private Party",
  "Other",
] as const;

export type GalleryPhoto = { src: string; alt: string };

export const galleryPhotos: GalleryPhoto[] = [
  { src: "/Images/pool.jpg", alt: "The pool at golden hour at Sunflower Ranch" },
  { src: "/Images/palapaimage.jpg", alt: "The covered palapa opening onto the pool" },
  { src: "/Images/marriage.jpg", alt: "A wedding celebration at Sunflower Ranch" },
  { src: "/Images/mrandmrsbetterview.jpg", alt: "Event setup with decor and seating" },
  { src: "/Images/redchairs.jpg", alt: "Rows of event chairs set for a celebration" },
  { src: "/Images/birthday15.jpg", alt: "A birthday celebration under the palapa" },
  { src: "/Images/mrandmrs.jpg", alt: "Mr and Mrs celebration decor" },
  { src: "/Images/kathy.jpg", alt: "A guest enjoying an event at Sunflower Ranch" },
  { src: "/Images/minnie.jpg", alt: "A themed party setup at Sunflower Ranch" },
  { src: "/Images/40yr.jpg", alt: "A 40th birthday celebration at Sunflower Ranch" },
  { src: "/Images/baby.jpg", alt: "A baby shower celebration at Sunflower Ranch" },
  { src: "/Images/horse.jpg", alt: "A horse on the grounds at Sunflower Ranch" },
  { src: "/Images/fun.jpg", alt: "Guests having fun at a celebration at Sunflower Ranch" },
  { src: "/Images/fun12.jpg", alt: "Guests enjoying an event at Sunflower Ranch" },
];
