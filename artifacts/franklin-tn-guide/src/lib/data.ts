export interface Article {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  content: string;
  excerpt: string;
  imageUrl?: string;
}

export const articles: Record<string, Article> = {
  "why-move-to-franklin-tn": {
    slug: "why-move-to-franklin-tn",
    title: "Why People Are Moving to Franklin, TN",
    date: "March 10, 2024",
    readTime: "6 min read",
    excerpt: "Discover why Franklin is consistently ranked as one of the fastest-growing and most desirable cities in America.",
    content: `
Franklin, Tennessee, is no longer just a well-kept secret among Middle Tennesseans. It has blossomed into a premier destination for families, professionals, and retirees from across the country. But what exactly is driving this unprecedented growth? 

### 1. Top-Tier Education
One of the primary drivers for families relocating to Franklin is the exceptional quality of education. Williamson County Schools consistently rank among the highest-performing districts in Tennessee and hold their own nationally. The commitment to academic excellence, coupled with robust extracurricular programs, makes the area highly attractive to parents prioritizing their children's future.

### 2. A Booming, Diverse Job Market
While many commute the short 20 miles north to Nashville, Franklin itself is an economic powerhouse. The Cool Springs commercial area is home to major corporate headquarters, particularly in the healthcare, technology, and financial sectors. Companies like Nissan North America, Community Health Systems, and Mars Petcare have established significant footprints here, offering high-paying career opportunities right in your backyard.

### 3. Historic Charm Meets Modern Luxury
Downtown Franklin looks like it was pulled straight from a Hallmark movie. The 16-block historic district features impeccably preserved Victorian architecture, brick sidewalks, and an array of locally-owned boutiques, antique shops, and incredible dining options. Yet, step outside the historic core, and you'll find modern luxury communities, high-end shopping centers, and state-of-the-art medical facilities.

### 4. Safety and Community
Franklin boasts a significantly lower crime rate compared to national averages and nearby metropolitan areas. Beyond the statistics, there is a tangible sense of community. From the annual Main Street Festival to the Dickens of a Christmas celebration, the town creates numerous opportunities for neighbors to connect and celebrate together.

### 5. The Great Outdoors
Nestled in the rolling hills of Middle Tennessee, Franklin offers abundant access to nature. The scenic Natchez Trace Parkway is perfect for weekend drives or cycling. Numerous well-maintained city parks, the Harpeth River for kayaking, and expansive green spaces provide a breath of fresh air for outdoor enthusiasts.

In conclusion, Franklin offers a rare blend: the economic opportunities and amenities of a major suburb, wrapped in the warmth, safety, and charm of a historic small town. It's not just a place to live; it's a place to thrive.
    `
  },
  "best-neighborhoods-in-franklin-tn": {
    slug: "best-neighborhoods-in-franklin-tn",
    title: "The Best Neighborhoods in Franklin, TN",
    date: "March 15, 2024",
    readTime: "8 min read",
    excerpt: "From historic downtown charm to master-planned luxury, explore the top neighborhoods Franklin has to offer.",
    content: `
Choosing the right neighborhood is the most crucial step when moving to a new city. Franklin, TN, offers a diverse array of communities, each with its own distinct personality, architectural style, and lifestyle offerings. Here is your guide to the best neighborhoods in Franklin.

### 1. Downtown Franklin (Historic District)
**The Vibe:** Charming, walkable, historic, and vibrant.
**Best For:** Those who want to be in the center of the action and appreciate historic architecture.

Living near Main Street means you are just a short stroll away from world-class dining, boutique shopping, and year-round festivals. The homes here range from beautifully restored Victorian and Craftsman houses to newer infill constructions designed to match the historic character. Prices are at a premium due to the unbeatable location and limited inventory.

### 2. Cool Springs
**The Vibe:** Suburban, convenient, modern, and bustling.
**Best For:** Professionals, heavy shoppers, and those seeking convenience above all.

Cool Springs isn't just a neighborhood; it's a massive commercial and residential hub. Here you'll find the CoolSprings Galleria, numerous corporate headquarters, and an endless array of restaurants. Residential areas feature classic suburban homes, luxury apartments, and townhomes. It offers incredibly quick access to I-65 for an easy commute to Nashville.

### 3. Westhaven
**The Vibe:** Master-planned, resort-style, family-centric, and self-contained.
**Best For:** Families seeking an active community with built-in amenities.

Westhaven is perhaps Franklin's most famous master-planned community. It is designed so that residents rarely need to leave. It features its own town center with a grocery store, restaurants, and medical offices. Amenities include an 18-hole golf course, multiple resort-style pools, a massive clubhouse, and miles of walking trails. The architecture features welcoming front porches designed to foster neighborly interaction.

### 4. Berry Farms
**The Vibe:** Newer development, mixed-use, walkable, and growing.
**Best For:** Those looking for a modern, walkable community with a fresh feel.

Located in south Franklin, Berry Farms is a newer mixed-use master-planned community. It combines residential living with retail and office space, allowing residents to live, work, and play in one area. The homes feature traditional southern architecture with modern interiors, and the community is known for its farmer's markets and community events.

### 5. Fieldstone Farms
**The Vibe:** Established, leafy, community-focused.
**Best For:** First-time homebuyers and established families looking for a classic suburban feel.

One of Franklin's first major planned communities, Fieldstone Farms features mature trees, extensive walking trails, community pools, and tennis courts. It offers a wide range of housing options, from modest starter homes to larger executive estates, making it accessible to a variety of budgets.
    `
  }
};

export const neighborhoods = [
  {
    id: "downtown",
    name: "Downtown Franklin",
    description: "The historic heart of the city featuring preserved Victorian architecture, boutique shopping, and vibrant street life.",
    pros: ["Highly walkable", "Rich history and character", "Immediate access to festivals and dining"],
    cons: ["Premium pricing", "Limited yard space", "Tourist traffic on weekends"],
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "westhaven",
    name: "Westhaven",
    description: "A premier master-planned community with resort-style amenities, a private golf course, and a self-contained town center.",
    pros: ["Incredible amenities (pools, golf, clubhouse)", "Strong sense of community", "Very family-friendly"],
    cons: ["Higher HOA fees", "Can feel slightly isolated from the rest of town", "Homes are built close together"],
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "cool-springs",
    name: "Cool Springs",
    description: "The commercial powerhouse of Williamson County, offering modern suburban living with unbeatable convenience.",
    pros: ["Proximity to major corporate jobs", "Endless shopping and dining options", "Quick access to I-65 for Nashville commutes"],
    cons: ["Heavier traffic", "Less 'small town charm' than downtown", "More transient population"],
    imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "berry-farms",
    name: "Berry Farms",
    description: "A newer mixed-use community blending southern traditional architecture with modern walkability in South Franklin.",
    pros: ["Everything is brand new", "Walkable to local Publix and restaurants", "Great community events"],
    cons: ["Still under construction in some phases", "Further from Nashville", "Less mature landscaping"],
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  }
];
