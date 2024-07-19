const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image:
      "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FmYXJpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Serengeti",
    country: "Tanzania",
  },
  {
    title: "Vibrant Apartment in Barcelona",
    description:
      "Immerse yourself in the vibrant culture of Barcelona with a stay in this colorful apartment.",
    image:
      "https://images.unsplash.com/photo-1535914541694-3f9e4e6b0f20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyY2VsJTIwYXQlMjBiYXJnb3JsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Private Island Paradise",
    description:
      "Escape to your own private island in the Maldives. Crystal clear waters and white sandy beaches await.",
    image:
      "https://images.unsplash.com/photo-1582155112953-9b8ac5e40eb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpdmF0ZSUyMGxhcmdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle set amidst the breathtaking landscapes of Scotland.",
    image:
      "https://images.unsplash.com/photo-1578882618450-2f31570cc597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FzdGxlJTIwc2NvdHRzJTIwbWVkaWNhbHxlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Cliffside Villa in Santorini",
    description:
      "Wake up to breathtaking views of the Aegean Sea from this stunning cliffside villa in Santorini.",
    image:
      "https://images.unsplash.com/photo-1561024489-d70a8a5b341b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FudG9yaW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Jungle Retreat in Bali",
    description:
      "Immerse yourself in the lush jungle surroundings of Bali with a stay in this serene retreat.",
    image:
      "https://images.unsplash.com/photo-1543076440-09f99f7f24df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFsaSUyMHJldHJlYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Experience the bustling city life of Tokyo with a stay in this sleek and modern apartment.",
    image:
      "https://images.unsplash.com/photo-1534833789314-3f29c8416f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRva3lvJTIwbWVkaWNhbHxlbnwwfHwwfHx8&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Rooftop Studio in Paris",
    description:
      "Enjoy panoramic views of the Eiffel Tower from the rooftop of this charming studio in Paris.",
    image:
      "https://images.unsplash.com/photo-1586181927555-73ae9c5494fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFyaXMlMjByb290b29wJTIwc3R1ZGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1900,
    location: "Paris",
    country: "France",
  },
  {
    title: "Tropical Bungalow in Fiji",
    description:
      "Escape to paradise in this tropical bungalow in Fiji. Enjoy white sandy beaches and crystal clear waters.",
    image:
      "https://images.unsplash.com/photo-1588839201581-cb8e5fc64fc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlqaSUyMGJ1bmdhbG93JTIwc3R1ZGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Scenic Vineyard Retreat",
    description:
      "Relax and unwind in the picturesque vineyards of Napa Valley with a stay in this cozy retreat.",
    image:
      "https://images.unsplash.com/photo-1520403022654-ea3ac5d7e6d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpbmV5YXJkJTIwdmludGVyaWFyaWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Napa Valley",
    country: "United States",
  },
];

module.exports = { data: sampleListings };
