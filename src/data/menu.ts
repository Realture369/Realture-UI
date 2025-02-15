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
        Link: "/property-list",
      },
      {
        id: "p2",
        label: "Property Type",
        Link: "/property-type",
      },
      {
        id: "p3",
        label: "Property Agent",
        Link: "/property-agent",
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
