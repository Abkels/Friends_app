// import React, {Component} from 'react'
import React, {useState, useEffect} from 'react'
import { robots } from '../components/robots'
import Cardlist from '../components/Cardlist'
import tachyons from 'tachyons'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'



// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       robots : [],
//       searchfield: '' 
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => { return res.json()})
//     .then(users => {
//       this.setState({robots:users})
//     });
//   }

//   onSearchChange = (event) => {
//     // console.log(event.target.value);
//     this.setState({searchfield: event.target.value})
//   }

//   render() {
//     // if you don't destructure, whereever u see robots or searchfield, u will have to add this.state.robots, this.state.searchfield....
//     const {robots, searchfield}= this.state;
    
//     // Filter the robots in the searchfiled
//     const filteredRobots = robots.filter((robot) => {
//       return robot.name.toLowerCase().includes(searchfield.toLowerCase())
//     })
//     // can also be if(robots === 0) or if(!robot.length)
//     return !robots.length ? (
//       <h1>Loading...</h1> 
//     ) : (
//         <div className='tc'>
//           <h1 className='f2'>RoboFriends</h1>
//           <SearchBox searchChange = {this.onSearchChange}/>
        
//           <Scroll>
//              <Cardlist  robots = {filteredRobots} />
//           </Scroll>
          
//         </div>
//       )
   
//   }
// }
  
// export default App

// USING HOOKS

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className='tc'>
      <h1 className='f2'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <Cardlist robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;




 
// const App = () => {
//   const [robots, setRobots] = useState ([]);
//   const [searchfiled, setSearchfield] = useState('');

//   useEffect(()=>{
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => { return res.json()})
//       .then(users => {
//         setRobots(users);
//       });
//   },[]);

//   const onSearchChange = (event) =>{
//     setSearchfield(event.target.value);
//   }; 

//   const filteredRobots = robots.filter((robot)=> {
//     return robot.name.toLowerCase().includes(searchfiled.toLowerCase)
//   });

//   return !robots.length ? (
//           <h1>Loading...</h1> 
//         ) : (
//             <div className='tc'>
//               <h1 className='f2'>RoboFriends</h1>
//               <SearchBox searchChange = {onSearchChange}/>
            
//               <Scroll>
//                  <Cardlist  robots = {filteredRobots} />
//               </Scroll>
              
//             </div>
//           )
// }

// export default App


// const App = () => {
//   const [robotData, setRobotData] = useState({
//     robots: robots,
//     searchfield: '',
//   });

//   const onSearchChange = (event) => {
//     setRobotData({ ...robotData, searchfield: event.target.value });
//   };

// const onSearchChange = () => {

// }

//   const filterRobots = () => {
//     return robotData.robots.filter((robot) => {
//       return robot.name.toLowerCase().includes(robotData.searchfield.toLowerCase());
//     });
//   };

//   const filteredRobots = filterRobots();

// OR
// const App = () => {
//   // Define state using useState hooks
//   const [robots, setRobots] = useState([]);
//   const [searchfield, setSearchfield] = useState('');

//   // Use useEffect hook to fetch data on component mount
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((users) => {
//         setRobots(users);
//       });
//   }, []); // Empty array as the second argument to mimic componentDidMount

//   // Handler for search field change
//   const onSearchChange = (event) => {
//     setSearchfield(event.target.value);
//   };

//   // Filter the robots based on the search field
//   const filteredRobots = robots.filter((robot) =>
//     robot.name.toLowerCase().includes(searchfield.toLowerCase())
//   );

//   // Use conditional rendering with ternary operator
//   return !robots.length ? (
//     <h1>Loading...</h1>
//   ) : (
//     <div className="tc">
//       <h1 className="f2">RoboFriends</h1>
//       <SearchBox searchChange={onSearchChange} />

//       <Scroll>
//         <Cardlist robots={filteredRobots} />
//       </Scroll>
//     </div>
//   );
// };

// export default App;


