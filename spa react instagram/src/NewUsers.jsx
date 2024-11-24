const Users = [
    {
        name: "Aarav",
        profession: "Software Engineer",
        image: "https://images.unsplash.com/photo-1598346762291-aee88549193f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Coding my way through life! 💻 | Coffee lover ☕ | Always curious 🚀",
        followers: 1200,
        following: 350,
        username: "aarav_coder",
        posts: [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww",
                caption: "New day, new code! 🌟 #CodingLife",
                likes: 200,
                posted: "2024-06-01"
            },
            {
                id: 2,
                image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
                caption: "Debugging mode: ON 🐛 #SoftwareEngineer",
                likes: 150,
                posted: "2024-06-05"
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D",
                caption: "Coffee and code ☕💻 #CodeLife",
                likes: 180,
                posted: "2024-06-10"
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
                caption: "Just launched a new feature! 🚀 #ProductLaunch",
                likes: 220,
                posted: "2024-06-12"
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Coding marathon underway 🏃‍♂️ #Hackathon",
                likes: 250,
                posted: "2024-06-15"
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=2628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Weekend coding session! 🖥️ #WeekendVibes",
                likes: 190,
                posted: "2024-06-17"
            }
        ]
    },
    {
        name: "Riya",
        profession: "Data Scientist",
        image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Data whisperer 📊 | Exploring the world through numbers 🌍 | Yoga enthusiast 🧘‍♀️",
        followers: 950,
        following: 420,
        username: "riya_data",
        posts: [
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Analyzing new data sets 📊 #DataScience",
                likes: 210,
                posted: "2024-06-01"
            },
            {
                id: 8,
                image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Data visualization is key 🔑 #BigData",
                likes: 190,
                posted: "2024-06-04"
            },
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Loving my new workspace setup! 🖥️ #WorkFromHome",
                likes: 230,
                posted: "2024-06-07"
            },
            {
                id: 10,
                image: "https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Deep dive into machine learning 🤖 #AI",
                likes: 250,
                posted: "2024-06-09"
            },
            {
                id: 11,
                image: "https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Yoga break to clear the mind 🧘‍♀️ #Balance",
                likes: 270,
                posted: "2024-06-12"
            },
            {
                id: 12,
                image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Numbers tell a story 📈 #DataScience",
                likes: 240,
                posted: "2024-06-15"
            }
        ]
    },
    {
        name: "Vivaan",
        profession: "Product Manager",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Building products that matter 🚀 | Tech enthusiast 💡 | Traveler 🌍",
        followers: 1500,
        following: 380,
        username: "vivaan_pm",
        posts: [
            {
                id: 13,
                image: "https://images.unsplash.com/photo-1588856122867-363b0aa7f598?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Brainstorming new ideas 💡 #ProductManagement",
                likes: 260,
                posted: "2024-06-02"
            },
            {
                id: 14,
                image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Launching our new app 🚀 #ProductLaunch",
                likes: 300,
                posted: "2024-06-06"
            },
            {
                id: 15,
                image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Traveling inspires innovation ✈️ #TravelDiaries",
                likes: 320,
                posted: "2024-06-09"
            },
            {
                id: 16,
                image: "https://images.unsplash.com/photo-1589187775328-882e91b3db4f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "User feedback session 🗣️ #UserExperience",
                likes: 290,
                posted: "2024-06-11"
            },
            {
                id: 17,
                image: "https://images.unsplash.com/photo-1591382696684-38c427c7547a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Working on the go 💻 #RemoteWork",
                likes: 310,
                posted: "2024-06-14"
            },
            {
                id: 18,
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Collaborating with an amazing team 🤝 #TeamWork",
                likes: 280,
                posted: "2024-06-17"
            }
        ]
        
    },
    {
        name: "Ananya",
        profession: "UX Designer",
        image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Designing delightful experiences 🎨 | Minimalist at heart 🌿 | Bookworm 📚",
        followers: 1100,
        following: 290,
        username: "ananya_designs",
        posts: [
            {
                id: 19,
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60",
                caption: "Sketching new ideas 🎨 #UXDesign",
                likes: 220,
                posted: "2024-06-03"
            },
            {
                id: 20,
                image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "User testing is crucial 🧪 #UserExperience",
                likes: 210,
                posted: "2024-06-06"
            },
            {
                id: 21,
                image: "https://images.unsplash.com/photo-1496180727794-817822f65950?w=800&auto=format&fit=crop&q=60",
                caption: "Minimalist designs speak volumes 🌿 #Minimalism",
                likes: 230,
                posted: "2024-06-08"
            },
            {
                id: 22,
                image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2698&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Book recommendations for designers 📚 #Bookworm",
                likes: 250,
                posted: "2024-06-11"
            },
            {
                id: 23,
                image: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Nature-inspired designs 🌲 #DesignInspiration",
                likes: 270,
                posted: "2024-06-13"
            },
            {
                id: 24,
                image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop&q=60",
                caption: "Always learning, always growing 🌱 #DesignerLife",
                likes: 260,
                posted: "2024-06-16"
            }
        ]
    },
    {
        name: "Kunal",
        profession: "Marketing Specialist",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Marketing ninja 🥷 | Creative thinker 💡 | Fitness freak 💪",
        followers: 800,
        following: 450,
        username: "kunal_markets",
        posts: [
            {
                id: 25,
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60",
                caption: "Brainstorming marketing strategies 📈 #Marketing",
                likes: 180,
                posted: "2024-06-02"
            },
            {
                id: 26,
                image: "https://images.unsplash.com/photo-1557683304-673a23048d34?w=800&auto=format&fit=crop&q=60",
                caption: "Creative campaigns drive engagement 💡 #CreativeMarketing",
                likes: 200,
                posted: "2024-06-05"
            },
            {
                id: 27,
                image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=60",
                caption: "Fitness fuels my creativity 🏋️‍♂️ #FitLife",
                likes: 220,
                posted: "2024-06-07"
            },
            {
                id: 28,
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60",
                caption: "Analyzing marketing trends 📊 #MarketAnalysis",
                likes: 240,
                posted: "2024-06-10"
            },
            {
                id: 29,
                image: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
                caption: "Collaboration is key 🤝 #TeamWork",
                likes: 260,
                posted: "2024-06-13"
            },
            {
                id: 30,
                image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop&q=60",
                caption: "Weekend workout session 🏋️‍♂️ #Fitness",
                likes: 280,
                posted: "2024-06-15"
            }
        ]
    },
    {
        name: "Priya",
        profession: "Financial Analyst",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHwwfDB8fHww",
        description: "Crunching numbers 📈 | Finance geek 💹 | Adventure seeker 🏔️",
        followers: 1250,
        following: 300,
        username: "priya_finance",
        posts: [
            {
                id: 31,
                image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Analyzing financial data 📊 #Finance",
                likes: 260,
                posted: "2024-06-03"
            },
            {
                id: 32,
                image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Balancing the books 💹 #Accounting",
                likes: 280,
                posted: "2024-06-06"
            },
            {
                id: 33,
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Adventure time in the mountains 🏔️ #Travel",
                likes: 300,
                posted: "2024-06-08"
            },
            {
                id: 34,
                image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D",
                caption: "Investment analysis 🧐 #Finance",
                likes: 320,
                posted: "2024-06-11"
            },
            {
                id: 35,
                image: "https://images.unsplash.com/photo-1570683062578-e3bb32efa535?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1vdW50YWluJTIwaGlraW5nfGVufDB8fDB8fHww",
                caption: "Mountain hiking adventure 🏔️ #NatureLover",
                likes: 340,
                posted: "2024-06-14"
            },
            {
                id: 36,
                image: "https://images.unsplash.com/photo-1606189934846-a527add8a77b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "Financial modeling in progress 📈 #FinancialAnalyst",
                likes: 360,
                posted: "2024-06-16"
            }
        ]
    },
    
];
export default Users;