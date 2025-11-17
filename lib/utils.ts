export type BadgeColor = 'green' | 'purple';

export type FrameworkPrinciple = {
  id: number;
  letter: string;
  title: string;
  description: string;
  number: string;
  badgeText: string;
  badgeColor: BadgeColor;
  fullDescription: string;
};

export const frameworkPrinciples: FrameworkPrinciple[] = [
  {
    id: 1,
    letter: 'm',
    title: 'Measure',
    description: 'Establish the truth before you act',
    number: 'No. 1',
    badgeText: 'Clarity',
    badgeColor: 'green',
    fullDescription:
      "Measurement is how you see the system without emotion, bias, or story-warping.\nMAD leaders measure reality at its source — cycle time, escape rate, workload balance, morale drift — not vanity.\n\nYou don't chase charts; you instrument truth.\nIf the data doesn't change behavior, it's noise.\nIf it hides discomfort, it's a liability.\n\nEverything starts with clarity.",
  },
  {
    id: 2,
    letter: 'a',
    title: 'Analyze',
    description: 'Understand patterns and root causes',
    number: 'No. 2',
    badgeText: 'Insight',
    badgeColor: 'purple',
    fullDescription:
      "Analysis is where data becomes insight.\nMAD leaders go beyond the surface, identifying patterns and root causes that others miss.\n\nYou don't just see the symptom; you diagnose the system.\nIf the analysis doesn't reveal leverage points, dig deeper.\nIf it confirms what you already knew, you haven't gone far enough.\n\nTrue understanding comes from critical examination.",
  },
  {
    id: 3,
    letter: 'd',
    title: 'Decide',
    description: 'Make informed choices with confidence',
    number: 'No. 3',
    badgeText: 'Action',
    badgeColor: 'green',
    fullDescription:
      "Decision is where insight becomes action.\nMAD leaders make choices based on data, values, and strategic intent — not impulse or consensus.\n\nYou don't avoid hard calls; you own them.\nIf the decision doesn't create clarity, it creates chaos.\nIf it doesn't align with principles, it erodes trust.\n\nLeadership is defined by the choices you make.",
  },
  {
    id: 4,
    letter: '+',
    title: 'Connect',
    description: 'Build bridges between people and ideas',
    number: 'No. 4',
    badgeText: 'Unity',
    badgeColor: 'purple',
    fullDescription:
      "Connection is the bridge between isolation and collaboration.\nKIND leaders create networks of trust, linking people, teams, and ideas across boundaries.\n\nYou don't build silos; you break them down.\nIf the connection doesn't create flow, it creates friction.\nIf it doesn't strengthen relationships, it's transactional.\n\nSystems thrive on meaningful connection.",
  },
  {
    id: 5,
    letter: 'k',
    title: 'Know',
    description: 'Develop deep understanding and wisdom',
    number: 'No. 5',
    badgeText: 'Wisdom',
    badgeColor: 'green',
    fullDescription:
      "Knowledge is the foundation of effective leadership.\nKIND leaders pursue deep understanding — of their domain, their people, and themselves.\n\nYou don't settle for surface knowledge; you seek mastery.\nIf your knowledge doesn't inform better decisions, it's trivia.\nIf it doesn't create advantage, it's unused potential.\n\nWisdom comes from continuous learning.",
  },
  {
    id: 6,
    letter: 'i',
    title: 'Inspire',
    description: 'Motivate teams toward shared vision',
    number: 'No. 6',
    badgeText: 'Growth',
    badgeColor: 'purple',
    fullDescription:
      "Inspiration is what transforms work into purpose.\nKIND leaders create meaning, showing teams how their efforts contribute to something greater.\n\nYou don't command motivation; you cultivate it.\nIf your vision doesn't energize people, it's just words.\nIf it doesn't create pull, it relies on push.\n\nGreat teams are inspired, not managed.",
  },
  {
    id: 7,
    letter: 'n',
    title: 'Navigate',
    description: 'Guide through complexity and change',
    number: 'No. 7',
    badgeText: 'Direction',
    badgeColor: 'green',
    fullDescription:
      "Navigation is how you guide through uncertainty.\nKIND leaders provide direction without rigid control, adapting to changing conditions while staying true to purpose.\n\nYou don't cling to the plan; you adjust course as needed.\nIf your navigation doesn't account for reality, you'll run aground.\nIf it doesn't create confidence, people won't follow.\n\nLeadership is about finding the way forward.",
  },
  {
    id: 8,
    letter: 'd',
    title: 'Deliver',
    description: 'Execute with excellence and impact',
    number: 'No. 8',
    badgeText: 'Results',
    badgeColor: 'purple',
    fullDescription:
      "Delivery is where intention becomes reality.\nKIND leaders execute with discipline and quality, creating tangible value for stakeholders.\n\nYou don't just plan; you ship.\nIf your delivery doesn't meet commitments, trust erodes.\nIf it doesn't create value, it's wasted effort.\n\nExcellence is measured in outcomes.",
  },
];

export const badgeStyles: Record<BadgeColor, string> = {
  green: 'bg-[var(--badge-green-bg)] text-[var(--badge-green-text)]',
  purple: 'bg-[var(--badge-purple-bg)] text-[var(--badge-purple-text)]',
};

export type AboutContent = {
  name: string;
  title: string;
  profileImage: string;
  bio: string[];
  contact: {
    linkedin: string;
    email: string;
  };
};

export const aboutContent: AboutContent = {
  name: 'Alana Anderson',
  title: 'A MAD+KIND leader',
  profileImage: '/images/profile.png',
  bio: [
    "I'm Alana Anderson, a Senior Director of Engineering who builds teams that move fast without breaking people. My leadership style is equal parts clarity and humanity — data when it matters, empathy when it counts, and zero tolerance for chaos disguised as urgency.",
    "Throughout my career, I've led distributed engineering organizations through scale, modernization, architectural rewrites, and cultural overhauls. I've done the messy work: tightening feedback loops, raising technical standards, rebuilding trust, and creating systems where people can actually do the best work of their lives.",
    '→ MAD KIND ← is the framework I built out of necessity — long before it had a name. I needed a way to run teams with speed and accountability without slipping into burnout or fear-driven execution. Over time, I learned how to use measurement to create clarity, analysis to guide judgment, and decisive delivery to drive momentum — while also knowing my people deeply, including them early, navigating tension directly, and developing leaders at every layer.',
    "I believe clarity and kindness aren't opposites.\nPut together, they create the strongest teams you'll ever lead.",
    "Outside of work, I'm constantly iterating — on systems, on culture, and on myself. I coach new managers, architect engineering orgs, and write frameworks for leaders who want to build high-agency, high-integrity teams.",
    'Like my leadership style? Get in touch!',
  ],
  contact: {
    linkedin: 'https://linkedin.com/in/the-alana-anderson',
    email: 'contact@madkind.com',
  },
};

export const formatPrincipleTitle = (principle: FrameworkPrinciple) =>
  `{${principle.letter}}${principle.title.slice(1)}`;

export const getNextPrinciple = (
  currentId: number,
): FrameworkPrinciple => {
  const currentIndex = frameworkPrinciples.findIndex(
    (principle) => principle.id === currentId,
  );
  if (currentIndex === -1) return frameworkPrinciples[0];
  return (
    frameworkPrinciples[currentIndex + 1] ?? frameworkPrinciples[0]
  );
};

