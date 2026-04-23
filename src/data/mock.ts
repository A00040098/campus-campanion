export const events = [
  {
    id: "e1",
    title: "Tech Society: Intro to Machine Learning",
    date: "2026-04-25T17:00:00",
    location: "Lecture Theatre 1",
    category: "Tech",
    categoryVector: [0, 1, 0], // [Social, Tech, Sports]
    description: "Join us for an introductory session on Machine Learning concepts and applications.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "e2",
    title: "Football Trials",
    date: "2026-04-26T14:00:00",
    location: "Main Pitch",
    category: "Sports",
    categoryVector: [0, 0, 1],
    description: "Tryouts for the university football team. All skill levels welcome!",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "e3",
    title: "Movie Night: Sci-Fi Classics",
    date: "2026-04-27T19:00:00",
    location: "Student Union",
    category: "Social",
    categoryVector: [1, 0, 0],
    description: "Relax and watch some of the greatest sci-fi movies of all time with free popcorn.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "e4",
    title: "Hackathon 2026",
    date: "2026-05-01T09:00:00",
    location: "Innovation Hub",
    category: "Tech",
    categoryVector: [0, 1, 0],
    description: "24-hour coding challenge. Build, innovate, and win prizes!",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "e5",
    title: "Board Games Evening",
    date: "2026-05-02T18:00:00",
    location: "Library Cafe",
    category: "Social",
    categoryVector: [1, 0, 0],
    description: "A chill evening of board games, card games, and meeting new people.",
    image: "https://images.unsplash.com/photo-1610890716175-34152c96b523?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "e6",
    title: "Basketball Tournament",
    date: "2026-05-05T10:00:00",
    location: "Indoor Sports Hall",
    category: "Sports",
    categoryVector: [0, 0, 1],
    description: "Inter-departmental basketball tournament. Come support your team!",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1000",
  }
];

export const timetable = [
  {
    class_id: "c1",
    student_id: "s1",
    module_name: "Introduction to Web Development",
    time: "09:00 - 11:00",
    room: "Lab 3",
    day: "Monday"
  },
  {
    class_id: "c2",
    student_id: "s1",
    module_name: "Database Systems",
    time: "11:30 - 13:00",
    room: "Lecture Theatre 2",
    day: "Monday"
  },
  {
    class_id: "c3",
    student_id: "s1",
    module_name: "Software Engineering",
    time: "10:00 - 12:00",
    room: "Room 402",
    day: "Tuesday"
  },
  {
    class_id: "c4",
    student_id: "s1",
    module_name: "Data Structures and Algorithms",
    time: "14:00 - 16:00",
    room: "Lab 1",
    day: "Wednesday"
  },
  {
    class_id: "c5",
    student_id: "s1",
    module_name: "Machine Learning Concepts",
    time: "13:00 - 15:00",
    room: "Lecture Theatre 1",
    day: "Thursday"
  }
];

export const canteenMenu = [
  {
    day: "Monday",
    items: [
      { name: "Chicken Tikka Masala", price: "£4.50", dietary: [] },
      { name: "Vegetable Stir Fry", price: "£3.80", dietary: ["V", "VG"] }
    ]
  },
  {
    day: "Tuesday",
    items: [
      { name: "Beef Burger & Chips", price: "£5.00", dietary: [] },
      { name: "Macaroni Cheese", price: "£4.00", dietary: ["V"] }
    ]
  },
  {
    day: "Wednesday",
    items: [
      { name: "Roast Chicken Dinner", price: "£5.50", dietary: [] },
      { name: "Mushroom Risotto", price: "£4.20", dietary: ["V", "VG"] }
    ]
  },
  {
    day: "Thursday",
    items: [
      { name: "Fish and Chips", price: "£4.80", dietary: [] },
      { name: "Lentil Shepherd's Pie", price: "£4.00", dietary: ["V", "VG"] }
    ]
  },
  {
    day: "Friday",
    items: [
      { name: "Pizza Slice", price: "£2.50", dietary: ["V"] },
      { name: "Spicy Bean Wrap", price: "£3.50", dietary: ["V", "VG"] }
    ]
  }
];

export const userProfile = {
  student_id: "s1",
  name: "Liam",
  course: "Computer Science",
  // Simulated user interaction history: [Social, Tech, Sports]
  interactionVector: [1, 4, 0] 
};
