import { Contact ,Message,} from "src/typescript-Interface/chat";


 const initialContacts: Contact[] =[
  {
    "id": "1",
    "name": "Reece Chung",
    "avatar": "https://avatars.githubusercontent.com/u/136140163?s=48&v=4",
    "status": "last seen at 10:23 am",
    "lastMessage": "The concert was a mesmerizing experience",
    "time": "2 hours",
    "isOnline": false,
    "info": {
      "title": "Software Developer",
      "address": "36901 Elmer Spurs Apt. 762, Miramar, DE 92836",
      "phone": "+91 22 1234 5678",
      "email": "reece.chung@email.com"
    },
    "attachments": [
      { "name": "project-plan.pdf", "date": "13 Mar 2025 12:54 am", "type": "document" },
      { "name": "cover-design.png", "date": "12 Mar 2025 10:22 pm", "type": "image" },
      { "name": "meeting-audio.mp3", "date": "11 Mar 2025 09:15 am", "type": "audio" }
    ]
  },
  {
    "id": "2",
    "name": "Lucian Obrien",
    "avatar": "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&auto=format",
    "status": "Active now",
    "lastMessage": "The waves crashed against the shore",
    "time": "Just Now",
    "isOnline": true,
    "info": {
      "title": "Marketing Specialist",
      "address": "7824 Bay St, San Francisco, CA 94109",
      "phone": "+1 415-678-9098",
      "email": "lucian.obrien@email.com"
    },
    "attachments": [
      { "name": "campaign-strategy.docx", "date": "13 Mar 2025 08:30 am", "type": "document" },
      { "name": "brand-logo.jpg", "date": "10 Mar 2025 07:20 pm", "type": "image" }
    ]
  },
  {
    "id": "3",
    "name": "Mina Patel",
    "avatar": "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&h=100&fit=crop&auto=format",
    "status": "offline",
    "lastMessage": "Let’s catch up soon!",
    "time": "10 minutes",
    "isOnline": false,
    "info": {
      "title": "Financial Analyst",
      "address": "1475 Wall St, New York, NY 10005",
      "phone": "+1 212-456-7890",
      "email": "mina.patel@email.com"
    },
    "attachments": [
      { "name": "financial-report.xlsx", "date": "12 Mar 2025 06:45 pm", "type": "document" }
    ]
  },
  {
    "id": "4",
    "name": "Ethan Nguyen",
    "avatar": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop&auto=format",
    "status": "online",
    "lastMessage": "Just finished reading that book",
    "time": "5 minutes",
    "isOnline": true,
    "info": {
      "title": "Content Writer",
      "address": "2442 Maple Ave, Chicago, IL 60616",
      "phone": "+1 312-123-4567",
      "email": "ethan.nguyen@email.com"
    },
    "attachments": []
  },
  {
    "id": "5",
    "name": "Sophia Gomez",
    "avatar": "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=100&h=100&fit=crop&auto=format",
    "status": "last seen at 10:23 am",
    "lastMessage": "Preparing for the big presentation",
    "time": "1 hour",
    "isOnline": false,
    "info": {
      "title": "Project Manager",
      "address": "1120 Westwood Blvd, Los Angeles, CA 90024",
      "phone": "+1 310-222-3333",
      "email": "sophia.gomez@email.com"
    },
    "attachments": [
      { "name": "presentation.pptx", "date": "13 Mar 2025 09:15 am", "type": "document" }
    ]
  },
  {
    "id": "6",
    "name": "James Carter",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&auto=format",
    "status": "Active now",
    "lastMessage": "Heading out for a run",
    "time": "Just now",
    "isOnline": true,
    "info": {
      "title": "Fitness Trainer",
      "address": "4555 Gym St, Miami, FL 33131",
      "phone": "+1 786-999-1111",
      "email": "james.carter@email.com"
    },
    "attachments": []
  },
  {
    "id": "7",
    "name": "Amara Singh",
    "avatar": "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop&auto=format",
    "status": "offline",
    "lastMessage": "Loved the movie last night!",
    "time": "30 minutes",
    "isOnline": false,
    "info": {
      "title": "Graphic Designer",
      "address": "6768 Art Blvd, Austin, TX 73301",
      "phone": "+1 512-456-6789",
      "email": "amara.singh@email.com"
    },
    "attachments": [
      { "name": "poster-design.psd", "date": "10 Mar 2025 05:00 pm", "type": "image" }
    ]
  },
  {
    "id": "8",
    "name": "Oliver Brown",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format",
    "status": "online",
    "lastMessage": "See you at the game later!",
    "time": "15 minutes",
    "isOnline": true,
    "info": {
      "title": "Sports Journalist",
      "address": "889 Sports Arena Rd, Denver, CO 80204",
      "phone": "+1 303-123-7890",
      "email": "oliver.brown@email.com"
    },
    "attachments": []
  },
  {
    "id": "9",
    "name": "Zara Khalid",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&auto=format",
    "status": "offline",
    "lastMessage": "Can’t wait for our trip!",
    "time": "10 minutes",
    "isOnline": false,
    "info": {
      "title": "Travel Blogger",
      "address": "7777 Wanderlust St, Seattle, WA 98109",
      "phone": "+1 206-999-2222",
      "email": "zara.khalid@email.com"
    },
    "attachments": []
  },
  {
    "id": "10",
    "name": "Nathan Kim",
    "avatar": "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=100&h=100&fit=crop&auto=format",
    "status": "offline",
    "lastMessage": "Had a great day at work!",
    "time": "3 hours",
    "isOnline": false,
    "info": {
      "title": "Data Scientist",
      "address": "1050 AI Lane, San Diego, CA 92101",
      "phone": "+1 619-444-5678",
      "email": "nathan.kim@email.com"
    },
    "attachments": [
      { "name": "machine-learning-notes.pdf", "date": "9 Mar 2025 04:10 pm", "type": "document" }
    ]
  }
]
;

const initialMessages: Record<string, Message[]> = {
  '1': [
    { id: '1', text: 'The concert was a mesmerizing experience, with the music filling the venue and the crowd cheering in delight.', sender: 'Reece Chung', timestamp: '2 hours', isOwn: false },
    { id: '2', text: 'The waves crashed against the shore, creating a soothing symphony of sound.', sender: 'Me', timestamp: 'an hour', isOwn: true },
    { id: '3', text: 'That sounds amazing! What was your favorite song from the concert?', sender: 'Me', timestamp: '58 minutes', isOwn: true },
    { id: '4', text: 'The encore performance of "Lost in Sound" was incredible!', sender: 'Reece Chung', timestamp: '50 minutes', isOwn: false },
    { id: '5', text: 'I love that song! Must have been an unforgettable moment.', sender: 'Me', timestamp: '45 minutes', isOwn: true },
    { id: '6', text: 'Absolutely! The whole crowd sang along.', sender: 'Reece Chung', timestamp: '40 minutes', isOwn: false },
    { id: '7', text: 'Next time, let’s go together!', sender: 'Me', timestamp: '35 minutes', isOwn: true }
  ],
  '2': [
    { id: '1', text: 'The waves crashed against the shore', sender: 'Lucian Obrien', timestamp: 'Just Now', isOwn: false },
    { id: '2', text: 'That must have been relaxing. Were you at the beach all day?', sender: 'Me', timestamp: 'Just Now', isOwn: true },
    { id: '3', text: 'Yeah, spent most of the day there. The sunset was breathtaking.', sender: 'Lucian Obrien', timestamp: 'Just Now', isOwn: false },
    { id: '4', text: 'I bet! Did you take any pictures?', sender: 'Me', timestamp: 'Just Now', isOwn: true },
    { id: '5', text: 'Of course! I’ll send you a few.', sender: 'Lucian Obrien', timestamp: 'Just Now', isOwn: false },
    { id: '6', text: 'Can’t wait to see them!', sender: 'Me', timestamp: 'Just Now', isOwn: true },
    { id: '7', text: 'Sending them now.', sender: 'Lucian Obrien', timestamp: 'Just Now', isOwn: false }
  ],
  '3': [
    { id: '1', text: 'Let’s catch up soon!', sender: 'Mina Patel', timestamp: '10 minutes', isOwn: false },
    { id: '2', text: 'Definitely! When are you free?', sender: 'Me', timestamp: '9 minutes', isOwn: true },
    { id: '3', text: 'Maybe this weekend?', sender: 'Mina Patel', timestamp: '8 minutes', isOwn: false },
    { id: '4', text: 'Sounds great! Coffee or lunch?', sender: 'Me', timestamp: '7 minutes', isOwn: true },
    { id: '5', text: 'Lunch! It’s been too long.', sender: 'Mina Patel', timestamp: '6 minutes', isOwn: false },
    { id: '6', text: 'Agreed. Let’s finalize a time.', sender: 'Me', timestamp: '5 minutes', isOwn: true },
    { id: '7', text: 'How about 1 PM at the usual place?', sender: 'Mina Patel', timestamp: '4 minutes', isOwn: false }
  ],
  '4': [
    { id: '1', text: 'Just finished reading that book', sender: 'Ethan Nguyen', timestamp: '5 minutes', isOwn: false },
    { id: '2', text: 'Nice! What did you think?', sender: 'Me', timestamp: '4 minutes', isOwn: true },
    { id: '3', text: 'It had a great plot twist!', sender: 'Ethan Nguyen', timestamp: '3 minutes', isOwn: false },
    { id: '4', text: 'No spoilers! I haven’t finished it yet.', sender: 'Me', timestamp: '3 minutes', isOwn: true },
    { id: '5', text: 'Haha, don’t worry. You’re going to love it.', sender: 'Ethan Nguyen', timestamp: '2 minutes', isOwn: false },
    { id: '6', text: 'Can’t wait to discuss it with you.', sender: 'Me', timestamp: '2 minutes', isOwn: true },
    { id: '7', text: 'Absolutely. Let’s talk after you finish!', sender: 'Ethan Nguyen', timestamp: '1 minute', isOwn: false }
  ],
  '5': [
    { id: '1', text: 'Preparing for the big presentation', sender: 'Sophia Gomez', timestamp: '1 hour', isOwn: false },
    { id: '2', text: 'Good luck! What’s it about?', sender: 'Me', timestamp: '58 minutes', isOwn: true },
    { id: '3', text: 'It’s about the future of AI in marketing.', sender: 'Sophia Gomez', timestamp: '55 minutes', isOwn: false },
    { id: '4', text: 'That sounds really interesting!', sender: 'Me', timestamp: '50 minutes', isOwn: true },
    { id: '5', text: 'Yeah! Hoping it makes an impact.', sender: 'Sophia Gomez', timestamp: '45 minutes', isOwn: false },
    { id: '6', text: 'I’m sure it will!', sender: 'Me', timestamp: '40 minutes', isOwn: true },
    { id: '7', text: 'Thanks for the support!', sender: 'Sophia Gomez', timestamp: '35 minutes', isOwn: false }
  ],
  '6': [
    { id: '1', text: 'Heading out for a run', sender: 'James Carter', timestamp: 'Just now', isOwn: false },
    { id: '2', text: 'Nice! How long are you running today?', sender: 'Me', timestamp: 'Just now', isOwn: true },
    { id: '3', text: 'Planning to do 5 miles.', sender: 'James Carter', timestamp: 'Just now', isOwn: false },
    { id: '4', text: 'Impressive! Stay hydrated.', sender: 'Me', timestamp: 'Just now', isOwn: true },
    { id: '5', text: 'Will do! Thanks.', sender: 'James Carter', timestamp: 'Just now', isOwn: false },
    { id: '6', text: 'Send me your route later.', sender: 'Me', timestamp: 'Just now', isOwn: true },
    { id: '7', text: 'For sure!', sender: 'James Carter', timestamp: 'Just now', isOwn: false }
  ]
};


export { initialContacts, initialMessages };