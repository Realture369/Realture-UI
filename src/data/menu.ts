export const MENU = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "About",
    link: "/about",
  },
  {
    id: 3,
    label: "Property",
    children: [
      {
        id: "p1",
        label: "Property List",
        link: "/property-list",
      },
      {
        id: "p2",
        label: "Property Type",
        link: "/property-type",
      },
      {
        id: "p3",
        label: "Property Agent",
        link: "/property-agent",
      },
    ],
  },
  {
    id: 4,
    label: "Testimonial",
    link: "/testimonial",
  },
  {
    id: 5,
    label: "Contact",
    link: "/contact",
  },
];
