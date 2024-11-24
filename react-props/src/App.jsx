import User from './components/User'
const users = [
    {
        name: "Aarav",
        profession: "Software Engineer",
        image: "https://images.unsplash.com/photo-1598346762291-aee88549193f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHVzZXJ8ZW58MHwwfDB8fHww"
    },
    {
        name: "Riya",
        profession: "Data Scientist",
        image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXJ8ZW58MHwwfDB8fHww"
    },
    {
        name: "Vivaan",
        profession: "Product Manager",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHwwfDB8fHww"
    },
    {
        name: "Ananya",
        profession: "UX Designer",
        image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHwwfDB8fHww"
    },
    {
        name: "Kunal",
        profession: "Marketing Specialist",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHwwfDB8fHww"
    },
    {
        name: "Priya",
        profession: "Financial Analyst",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHwwfDB8fHww"
    },
    {
        name: "Rohan",
        profession: "Operations Manager",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHwwfDB8fHww"
    }
];

function App(){
  return(
    <div >
        {
            users.map(user=>{
                return <User name={user.name} desc={user.profession} img={user.image} />
            })
        }
        
    </div>
  )
}
export default App;