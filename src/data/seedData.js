export const seedData = {
  donations: [
    {
      id: "don-1",
      amount: 98000,
      donorName: "North Harbor Guild",
      purpose: "Neighborhood pantry restock",
      date: "2026-03-16",
    },
    {
      id: "don-2",
      amount: 56000,
      donorName: "Bright Path Studio",
      purpose: "After-school meal kits",
      date: "2026-03-29",
    },
    {
      id: "don-3",
      amount: 131000,
      donorName: "Coastal Families Fund",
      purpose: "Emergency rent bridge support",
      date: "2026-04-08",
    },
  ],
  beneficiaries: [
    {
      id: "ben-1",
      name: "Maple Street Households",
      category: "Housing stability",
      supportType: "Short-term rent assistance",
    },
    {
      id: "ben-2",
      name: "Harbor Youth Lab",
      category: "Youth programs",
      supportType: "Supplies and transport passes",
    },
    {
      id: "ben-3",
      name: "South Pier Seniors",
      category: "Wellness outreach",
      supportType: "Home visits and medication support",
    },
  ],
  events: [
    {
      id: "evt-1",
      title: "Weekend Resource Market",
      date: "2026-04-18",
      location: "Bayfront Commons",
      description: "Pop-up distribution day for pantry goods, transit vouchers, and referral support.",
    },
    {
      id: "evt-2",
      title: "Navigator Onboarding Lab",
      date: "2026-04-14",
      location: "HarborLight Hub",
      description: "Practical training for coordinators covering intake notes, routing, and follow-up care.",
    },
  ],
  volunteers: [
    {
      id: "vol-1",
      name: "Lena Ortiz",
      role: "Neighborhood navigator",
      availability: "Tue-Thu mornings",
      contact: "+1 206 555 0141",
    },
    {
      id: "vol-2",
      name: "Marcus Chen",
      role: "Logistics lead",
      availability: "Weekends and event nights",
      contact: "+1 206 555 0187",
    },
  ],
  settings: {
    organizationName: "HarborLight",
    theme: "light",
    notifications: true,
    dashboardGreeting: "Track outreach, giving, and service delivery from one shared operations desk.",
  },
};
