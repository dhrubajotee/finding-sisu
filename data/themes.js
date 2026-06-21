// Themes power the "Explore Themes" grid on the home page and the /themes/[slug] pages.
//
// To add a new theme later: copy one of the objects below, give it a unique
// `slug` (used in the URL, e.g. /themes/your-slug), and pick an `accent` from
// the palette names in app/globals.css (navy, terracotta, skyDeep, rust,
// periwinkle, caramel). `cover` can stay null until you have a photo —
// the site shows a soft gradient placeholder until then.

export const themes = [
  {
    slug: "first-impressions-culture-shock",
    tag: "First Impressions",
    title: "First Impressions & Culture Shock",
    description:
      "The early weeks of noticing everything — silence on the bus, supermarket rules, and the slow realisation that I'd moved somewhere completely new.",
    accent: "navy",
    icon: "Compass",
    cover: "/images/themes/first_impression_cover.jpg",
  },
  {
    slug: "travel-destinations",
    tag: "Travel Destinations",
    title: "Travel Destinations in Finland",
    description:
      "Systems, services, and the everyday logistics of figuring out how things actually work here.",
    accent: "skyDeep",
    icon: "Map",
    cover: "/images/themes/travel_cover.jpg",
  },
  {
    slug: "building-community-as-an-international",
    tag: "Community",
    title: "Building Community as an International",
    description:
      "Volunteering, language cafés, and the slow, quiet way friendships and belonging take shape.",
    accent: "rust",
    icon: "Users",
    cover: "/images/themes/building_cover.jpg",
  },
  // {
  //   slug: "jyvaskyla-through-my-eyes",
  //   tag: "Jyväskylä",
  //   title: "Jyväskylä Through My Eyes",
  //   description:
  //     "The lakes, the light, the seasons — this city as I've come to see it, one walk at a time.",
  //   accent: "periwinkle",
  //   icon: "Camera",
  //   cover: null,
  // },
  {
    slug: "work-integration-finding-my-place",
    tag: "Life Between Events",
    title: "Life Between Events",
    description:
      "Festivals, national holidays, and the public side of building a life and a place in this community.",
    accent: "terracotta",
    icon: "Briefcase",
    cover: "/images/themes/life_cover.jpg",
  },
  // {
  //   slug: "food-traditions-seasonal-life",
  //   tag: "Food & Traditions",
  //   title: "Food, Traditions & Seasonal Life",
  //   description:
  //     "What ends up on the table through the seasons, and the food traditions I've learned — and kept — along the way.",
  //   accent: "caramel",
  //   icon: "UtensilsCrossed",
  //   cover: null,
  // },
  {
    slug: "international-life-identity-belonging",
    tag: "Identity & Belonging",
    title: "International Life - Identity, Belonging & the In-Between Space",
    description:
      "On representing where I'm from while building a life somewhere new, and the in-between space that comes with it.",
    accent: "navy",
    icon: "Globe",
    cover: "/images/themes/international_cover.jpg",
  },
  {
    slug: "resources-links-things-i-wish-i-knew",
    tag: "Resources",
    title: "Resources, Links & Things I Wish I Knew Earlier",
    description:
      "Practical checklists and links for anyone navigating the same first steps I once did.",
    accent: "skyDeep",
    icon: "BookOpen",
    cover: "/images/themes/link_cover.jpg",
  },
];
