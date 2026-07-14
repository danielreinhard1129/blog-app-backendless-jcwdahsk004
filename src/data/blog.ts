export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  author: string;
  authorAvatar: string;
  category: string;
  date: string;
  readTime: string;
}

const avatar = (seed: string) => `https://picsum.photos/seed/${seed}/120/120`;

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Minimalist Design in Modern Web Apps",
    description:
      "Explore how stripping away the unnecessary can lead to interfaces that are both beautiful and intuitive, without sacrificing functionality.",
    content: `Minimalism in design is not about removing things for the sake of it. It is about removing everything that does not serve the user's goal. When we strip away the noise, what remains is the signal — the essential actions and information that help people get things done.

The first principle of minimalist design is clarity. Every element on the screen should earn its place. If a button, icon, or paragraph does not help the user accomplish a task or understand the context, it is a candidate for removal. This does not mean interfaces should be barren; it means every element should be intentional.

The second principle is hierarchy. In a minimalist interface, visual hierarchy does the heavy lifting. Typography scale, spacing, and color contrast guide the eye from the most important element to the least. A well-designed hierarchy means the user never has to wonder where to look next.

The third principle is restraint with color. A limited palette — often a single accent color paired with neutrals — creates a calm, focused environment. Color should be used to communicate meaning, not to decorate. A call-to-action button stands out not because it is loud, but because everything around it is quiet.

Finally, whitespace is not empty space; it is a design element. Generous padding and margins give content room to breathe and help the user parse information without feeling overwhelmed. Whitespace is the frame that makes the picture legible.

When these principles work together, the result is an interface that feels effortless. The user does not notice the design — they only notice that they got their task done quickly and without friction.`,
    thumbnail: "https://picsum.photos/seed/minimal/1200/800",
    author: "Elena Marsh",
    authorAvatar: avatar("elena"),
    category: "Design",
    date: "Jul 12, 2025",
    readTime: "6 min read",
  },
  {
    id: "2",
    title: "Why TypeScript Won the Frontend War",
    description:
      "A look at how static typing went from a niche preference to the default choice for modern web development teams.",
    content: `A decade ago, most frontend developers wrote plain JavaScript. TypeScript was seen as a tool for backend developers who happened to work on the web. Today, the landscape has shifted dramatically.

The turning point was not a single feature — it was the cumulative weight of maintainability. As frontend applications grew in complexity, teams found that JavaScript's flexibility became a liability. Refactoring a large codebase without type safety felt like walking through a minefield.

TypeScript changed that. By catching errors at compile time and providing rich autocomplete in the editor, it made large-scale refactoring safe and predictable. The cost of adoption — a steeper learning curve and a build step — was quickly outweighed by the reduction in runtime bugs.

Major frameworks took notice. Angular adopted TypeScript from the start. React's ecosystem, while agnostic, leaned heavily into types with hooks and prop interfaces. Even Vue embraced TypeScript in its third major version. The message was clear: static types on the frontend were here to stay.

The ecosystem followed. Libraries began shipping type definitions. Tooling like Vite and esbuild made the build step nearly instantaneous. Editors like VS Code turned type information into a first-class editing experience.

Today, starting a new frontend project without TypeScript is the exception, not the rule. The war was not won with a single battle, but with a thousand small victories in productivity and confidence.`,
    thumbnail: "https://picsum.photos/seed/typescript/1200/800",
    author: "Marcus Chen",
    authorAvatar: avatar("marcus"),
    category: "Technology",
    date: "Jul 10, 2025",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "Slow Travel: Finding Meaning Beyond the Itinerary",
    description:
      "How spending a month in a single city taught me more about a culture than a year of hopping between capitals ever could.",
    content: `I used to travel the way most people do: a checklist of cities, a photo at each landmark, and a blur of train rides in between. I saw a lot, but I understood very little. Then I tried something different.

I rented a small apartment in Porto for four weeks. No itinerary, no list of must-see attractions. Just a neighborhood, a market, and time. What I discovered was that travel is not about collecting places — it is about depth.

In the first week, I was restless. The instinct to move, to see the next thing, was hard to quiet. But by the second week, something shifted. The woman at the bakery started saving me the last pastel de nata. The man at the corner cafe remembered my coffee order. I was no longer a tourist passing through; I was a regular.

Slow travel taught me that culture is not found in museums. It is found in the rhythm of daily life — the way people greet each other, the hours they keep, the food they cook when no one is watching. You cannot access that in a three-day stopover.

The irony is that slow travel is not about doing less. It is about noticing more. When you stop rushing, the details surface. You learn the sound of the city at different hours. You learn which streets flood when it rains. You learn the small, untranslatable customs that make a place itself.

I still travel quickly sometimes — there are places I want to see and limited time to see them. But I no longer confuse movement with experience. The most meaningful trips are the ones where I stayed long enough to belong, even briefly.`,
    thumbnail: "https://picsum.photos/seed/travel/1200/800",
    author: "Sofia Reyes",
    authorAvatar: avatar("sofia"),
    category: "Travel",
    date: "Jul 8, 2025",
    readTime: "5 min read",
  },
  {
    id: "4",
    title: "The Science of a Perfect Morning Routine",
    description:
      "Forget the 5 AM cold plunges. The research points to something far simpler — and far more sustainable.",
    content: `The internet is full of morning routines that sound like punishment: wake up at 4:30, take an ice bath, meditate for an hour, journal three pages. For a tiny fraction of people, this works. For everyone else, it lasts about a week.

The actual science of morning routines is less dramatic and more useful. It comes down to three things: light, movement, and consistency.

Light is the most powerful signal you can give your body. Exposure to natural light within the first hour of waking sets your circadian rhythm for the day. It tells your brain to suppress melatonin and ramp up cortisol at the right time. This does not require a sunrise hike — stepping outside for ten minutes is enough.

Movement does not have to mean a full workout. Stretching, a short walk, or a few minutes of bodyweight exercise increases blood flow and alertness. The goal is to signal your body that the day has started, not to exhaust it.

Consistency is the part most people skip. Your body loves predictability. Waking at roughly the same time every day — even weekends — does more for your energy than any single habit. A consistent wake time stabilizes your internal clock, which improves sleep, mood, and focus.

Everything else — the journaling, the reading, the elaborate breakfast — is optional. If it adds to your life, keep it. If it feels like a chore you resent, drop it. The best morning routine is the one you can actually maintain.`,
    thumbnail: "https://picsum.photos/seed/morning/1200/800",
    author: "Dr. James Okoro",
    authorAvatar: avatar("james"),
    category: "Health",
    date: "Jul 6, 2025",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "Building a Side Project That Actually Ships",
    description:
      'Most side projects die in the "almost done" phase. Here is the framework that helped me finish and launch mine.',
    content: `The graveyard of side projects is vast. We have all been there: an exciting idea, a weekend of momentum, a folder of half-finished code, and then silence. The project joins the others in the "someday" pile.

The problem is rarely the idea. It is the absence of a system. Side projects die because they are open-ended — there is always one more feature, one more refactor, one more thing to learn before it is "ready." Without a forcing function, ready never arrives.

The framework that changed this for me has three parts: a scope, a deadline, and a definition of done.

Scope means deciding upfront what the project is and, more importantly, what it is not. My rule is to write a single sentence describing the core feature. If a task does not serve that sentence, it gets cut. This is painful but necessary. The feature you are most excited about is often the one that kills the project.

A deadline creates urgency. I give every side project two weeks. Not two weeks of work — two calendar weeks. Whatever is done by the deadline ships. Whatever is not done does not. This forces honest prioritization. When time is fixed, scope becomes flexible, and that is the only way to finish.

Definition of done is the most overlooked part. I write a checklist of what "shipped" means before I start coding. It might be: deployed to a live URL, one user can complete the core flow, and the README explains how to use it. When every box is checked, the project is done — even if it is ugly, even if it is missing features I wanted.

The result is that I ship more, learn faster, and build a portfolio of finished things instead of a hard drive of abandoned ones.`,
    thumbnail: "https://picsum.photos/seed/ship/1200/800",
    author: "Priya Nair",
    authorAvatar: avatar("priya"),
    category: "Productivity",
    date: "Jul 4, 2025",
    readTime: "6 min read",
  },
  {
    id: "6",
    title: "The Quiet Power of a Well-Stocked Pantry",
    description:
      "A good pantry is not about hoarding — it is about setting yourself up to cook real food on the nights you least feel like it.",
    content: `There is a moment most home cooks know: it is 7 PM, you are tired, and the fridge holds nothing that resembles a meal. The takeout app opens. Again. A well-stocked pantry is the defense against that moment.

The principle is simple. Shelf-stable ingredients — grains, canned beans, tomatoes, pasta, oils, spices — form a foundation that turns a random vegetable or a single protein into a full dinner. The pantry is not the meal; it is the scaffolding that makes the meal possible.

Start with the basics. Olive oil, salt, a few vinegars, and a handful of dried spices cover most of the flavor work. Add grains that cook fast — pasta, couscous, rice — and a couple of canned staples like chickpeas and crushed tomatoes. With just these, you can make a pasta dish, a grain bowl, or a quick soup on any given night.

The secret is that a pantry reduces decision fatigue. When the building blocks are already there, dinner becomes a question of assembly, not a question of starting from zero. You are not choosing what to make from a blank page — you are choosing which of three viable options sounds best.

Over time, the pantry evolves to match how you actually cook. Mine has miso, anchovies, and dried chiles because I cook a lot of quick weeknight Asian dishes. Yours might have lentils and tahini. There is no universal list — only the list that matches your kitchen and your life.

The payoff is quiet but real: fewer takeout orders, less food waste, and the satisfaction of knowing that even on your worst night, you can make something worth eating.`,
    thumbnail: "https://picsum.photos/seed/pantry/1200/800",
    author: "Tom Becker",
    authorAvatar: avatar("tom"),
    category: "Food",
    date: "Jul 2, 2025",
    readTime: "5 min read",
  },
  {
    id: "7",
    title: "How Remote-First Teams Stay Aligned Without the Meetings",
    description:
      "Meetings are not the only way to align a team. Here is how asynchronous communication creates clarity without the calendar fatigue.",
    content: `Remote work did not invent the problem of alignment, but it exposed it. In an office, alignment happens accidentally — in hallways, kitchens, and overheard conversations. Remove the office, and those accidental moments vanish. Teams overcorrect by scheduling meetings for everything, and soon the calendar is full and the work is squeezed into the gaps.

The alternative is asynchronous alignment, and it rests on one principle: write things down.

A written update replaces the status meeting. Instead of gathering everyone to hear progress, each person posts a short, structured update: what they did, what they are doing, and where they are blocked. Teammates read it on their own time and respond where needed. The information is preserved, searchable, and respectful of focus.

Decisions get written down too. When a team makes a choice, someone writes a short note: the context, the options considered, the decision, and the reasoning. This document becomes the source of truth. New team members can read it instead of asking someone to explain the history. Disagreements resurface less often because the reasoning is visible.

The hard part is cultural. Asynchronous communication requires trust — trust that people will read what is written, and trust that not every question needs an immediate answer. It also requires discipline: clear writing, thoughtful updates, and the patience to let conversations unfold over hours rather than minutes.

When it works, the payoff is significant. People reclaim deep work time. Time zones become an asset instead of a constraint. And the team builds a record of its thinking that no meeting transcript could match.`,
    thumbnail: "https://picsum.photos/seed/remote/1200/800",
    author: "Aisha Bello",
    authorAvatar: avatar("aisha"),
    category: "Business",
    date: "Jun 30, 2025",
    readTime: "7 min read",
  },
  {
    id: "8",
    title: "Designing for Focus in a World of Infinite Tabs",
    description:
      "Attention is the scarcest resource on the web. Here is how to design interfaces that protect it instead of fragmenting it.",
    content: `Every interface competes for the same thing: the user's attention. And attention is finite. The moment a design adds a banner, a modal, a notification badge, or a sidebar widget, it is asking the user to split their focus. Most designs ask too many times.

Designing for focus starts with a single question: what is the user here to do? Not what could they do — what are they here to do, right now, on this screen? Everything that does not serve that answer is competing against the user's goal.

The first move is usually subtraction. Remove the secondary call-to-action. Collapse the sidebar. Defer the tooltip. These are not features being deleted — they are distractions being deferred to a better moment. A focused interface is not empty; it is curated.

The second move is contrast. The primary action should be visually unmistakable. If three buttons look equally important, the user has to think about which one to press — and thinking is friction. One action should clearly dominate.

The third move is flow. A focused interface guides the user from one step to the next without dead ends or decision points that stall progress. Each screen answers a question and poses the next one. The user should never wonder what to do next, because the design has already told them.

None of this is easy. It is much harder to remove an element than to add one. But the interfaces people love — the ones they return to — are almost always the ones that asked for the least and gave the most.`,
    thumbnail: "https://picsum.photos/seed/focus/1200/800",
    author: "Elena Marsh",
    authorAvatar: avatar("elena"),
    category: "Design",
    date: "Jun 28, 2025",
    readTime: "6 min read",
  },
];
