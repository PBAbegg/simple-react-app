import React from 'react';
import './App.css';
import PostList from './components/PostList';

const RC = React.Component;

function Title(props)
{
  return (
  <h1>{props.title}</h1>
  )
}
function Dave(props)
{
  return (
  <div className="dave">
    {props.children}
  </div>
  )
}

function App() {
  return (
    <div className="page">
      <Title title="My Blog Page" />
      <PostList />
      <CharacterList />
    </div>
  );
}
export default App;




//--------------------------------
//--------------------------------
//--------------------------------
//--------------------------------

// import React from 'react';
// import './App.css';

// const RC = React.Component;


//     class ___ extends React.Component -- because you don't want to make your own Component, use React's instead
// class App extends React.Component {
//   constructor(props)
//{
//    super(props)
//    const stuff = ''
//}
// }...... (..can use instead of function App(){}..)



// -------------------------------------
// functional component 
// ------------------------------
// function Welcome (props)
// {
//   // return JSX code
//   // regular javascript needs to be in {} example: {color="blue"}
//   return (
//     <div style={{color="blue"}}>
//       <h1>Hello {props.person}</h1>      
//       {Math.random()}
//     </div>
//   )  
// };

// -----------------------
// class component
// ------------------
// class Welcome extends React.Component
// {
//   // classes use constructors
//   constructor(props)
//   {
//     super(props);
//     // initial state of the class making the constructor work
//     this.state = {
//       clicked: 0,
//       name: props.person
//     };
//     // this. in the anything method is now used as anything (this.) in the class
//     this.anything = this.anything.bind(this);
//   }

//   //----method----
//   anything()
//   {
//   // setState is how you can manipulate the state
//     const myObject = {
//       clicked: this.state.clicked + 1,
//     }
//     // this.setState fires an update function. if there is a setState within the function, the function will fire an infinite loop 
//     this.setState(myObject, function()
//     {
//         console.log('state: ', this.state);
//     });
//   }


//   render() //this render is just the presentation, no manipulation
//   {
//     return (
//        <div>
//         <h1 onClick={this.anything} style={{color="blue"}}>
//           Hello {this.props.person}
//           this has been clicked {this.state.clicked} times
//         </h1>
//       </div>
//     )  
//   }
// }



// function App ()
// {
//   return (
//     <div className="App">
//       <h1>Hey you</h1>
//       <Welcome color="red" person="Bort"/>
//       <Welcome color="green" person="Joe"/>
//       <Welcome/>
//     </div>
//   )  
// };

// export default App;
// //module.exports = App;  same thing




//----------------------------------
//----------------------------------
//----------------------------------
//-----------------------------------
