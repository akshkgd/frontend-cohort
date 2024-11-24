import Card from './components/Card';
const items = [
  {
    foodname: "Margherita Pizza",
    img: "https://plus.unsplash.com/premium_photo-1679436987530-ee11b5600161?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBpenphfGVufDB8MHwwfHx8MA%3D%3D",
    desc: "Classic Italian pizza with fresh tomatoes, mozzarella cheese, and basil.",
    price: 249,
    type: "veg",
    ratings: 4.7
  },
  {
    foodname: "Chicken Biryani",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENoaWNrZW4lMjBCaXJ5YW5pfGVufDB8MHwwfHx8MA%3D%3D",
    desc: "Aromatic basmati rice cooked with tender chicken pieces and a blend of spices.",
    price: 350,
    type: "nonveg",
    ratings: 4.3
  },
  {
    foodname: "Paneer Tikka",
    img: "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBhbmVlciUyMFRpa2thfGVufDB8MHwwfHx8MA%3D%3D",
    desc: "Grilled paneer cubes marinated in spicy yogurt and served with mint chutney.",
    price: 299,
    type: "veg",
    ratings: 4.1
  },
  {
    foodname: "Burger",
    img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D",
    desc: "Juicy  patty with lettuce, tomato, cheese, and a special sauce in a toasted bun.",
    price: 149,
    type: "veg",
    ratings: 4.6
  }
];

function App(){
  return(
    <>
      <div className="flex gap-2 mt-12 justify-center">
          {
            items.map(item=><Card img={item.img} ratings={item.ratings} title={item.foodname} desc={item.desc} type={item.type} />)
          }
      </div>
    </>
  )
}
export default App;