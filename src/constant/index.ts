export const navbarlinks = [
  {
    name: "Home",
    link: "/",
    sublink: [],
    external: false,
    isDisable: false,
  },
  {
    name: "Locations",
    link: "/contact",
    sublink: [],
    external: true,
    isDisable: false,
  },
  {
    name: "Be Trained",
    link: "/training",
    sublink: [
      {
        name: "About",
        link: "/training/about",
        external: false,
        isDisable: false,
      },
      {
        name: "Blog",
        link: "/training/blog",
        external: false,
        isDisable: true,
      },
      {
        name: "Apply",
        link: "/training/apply",
        external: false,
        isDisable: false,
      },
      {
        name: "MENA Prayers",
        link: "/training/prayers",
        external: false,
        isDisable: false,
      },
      {
        name: "Login",
        link: " https://www.dev.rhemamena.com/signin",
        external: true,
        isDisable: true,
      },
    ],
    external: false,
    isDisable: false,
  },
  {
    name: "Free Resources",
    link: "https://rhemaconnect.com/",
    sublink: [],
    external: true,
    isDisable: false,
  },
  {
    name: "Partners",
    link: "/partner",
    sublink: [
      {
        name: "Become a partner",
        link: "/partner",
        external: false,
        isDisable: false,
      },
      {
        name: "Donate",
        link: "/partner/donate-online",
        external: false,
        isDisable: false,
      },
    ],
    external: false,
    isDisable: false,
  },
];

export const footerlinks = [
  {
    title: "RHEMA Campuses",
    linksdata: [
      {
        name: "MENA Campuses",
        link: "/training/about",
      },
      {
        name: "RHEMA Brazil",
        link: "https://rhema.org.br/",
      },
      {
        name: "RHEMA USA",
        link: "https://rbtc.org",
      },
      {
        name: "RHEMA Europe",
        link: "https://rhema.eu/",
      },
    ],
  },
  {
    title: "Get to know us",
    linksdata: [
      {
        name: "Our purpose",
        link: "/training/about",
      },
      {
        name: "Mission & Vision",
        link: "#",
      },
      {
        name: "Values",
        link: "",
      },
      {
        name: "FAQs",
        link: "/faq",
      },
    ],
  },
  {
    title: "Others",
    linksdata: [
      {
        name: "Blog",
        link: "/training/blog",
      },
      {
        name: "Alumni",
        link: "https://www.dev.rhemamena.com/signin",
      },
    ],
  },
];

export const partnerlinks = [
  {
    name: "Sponsor a Student ",
    linkText: "$78 per month (based on RBTC Beirut)",
    link: "/partner/donate-online",
  },
  {
    name: "Partner Monthly",
    linkText: " Help see RHEMA expand throughout MENA",
    link: "/partner/donate-online",
  },
  {
    name: "One Time Gift",
    linkText: "Give a one-time gift to RHEMA MENA",
    link: "/partner/donate-online",
  },
];

export const contactinfo = [
  {
    name: "RHEMA Lebanon",
    details: "Reach us from anywhere in the Middle East & North Africa Region",
    address: {
      name: "RHEMA Bible Training College",
      // contact_location: "Antelias, Mount Lebanon",
      email: "admin@rhemamena.com",
    },
  },
  {
    name: "RHEMA Egypt",
    details: "Reach us from anywhere in the Middle East & North Africa Region",
    address: {
      name: "RHEMA Bible Training College",
      // contact_location: "Antelias, Mount Lebanon - Lebanon",
      email: "admin@rhemamena.com",
    },
  },
  // {
  //   name: "RHEMA TURKEY",
  //   details: "Reach us from anywhere in the Middle East & North Africa Region",
  //   address: {
  //     name: "RHEMA Bible Training College",
  //     contact_location: "Antelias, Mount Lebanon - Lebanon",
  //     email: "lebanon@rhematurkey.com",
  //   },
  // },
];

export const tuitionfee = [
  {
    name: "Application fee",
    fee: "$10",
  },
  {
    name: "Enrollment fee",
    fee: "$100",
  },
  {
    name: "Application fee",
    fee: "$10",
  },
  {
    name: "Module Tution payment",
    fee: "$5",
  },
];
