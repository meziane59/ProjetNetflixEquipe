

function Api() {
    const getFilm = () => {
      return fetch("http://localhost:5000/api/Films", {
        type: "GET",
      }).then((res) => res.json());
    };
  
    return {
        getFilm,
    };
  }
  
 



// import React, {Component } from 'react';
// class Api extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         error: null,
//         isLoaded: false,
//         items: []
//       };
//     }
  
//     componentDidMount() {
//       fetch("http://localhost:5000/api/Films")
//         .then(res => res.json())
//         .then(
//           (result) => {
//               console.log(result['Film']);
//             this.setState({
//               isLoaded: true,
//               items: result['Film']
//             });
//           },
//           // Note: it's important to handle errors here
//           // instead of a catch() block so that we don't swallow
//           // exceptions from actual bugs in components.
//           (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )
//     }
  
//     render() {
//       const { error, isLoaded, items } = this.state;
//       if (error) {
//         return <div>Error: {error.message}</div>;
//       } else if (!isLoaded) {
//         return <div>Loading...</div>;
//       } else {
//         return (
//           <ul>
//             {items.map(item => (
//               <li key={item.id}>
//                 {item.titre} {item.commentaire}
//               </li>
//             ))}
//           </ul>
//         );
//       }
//     }
//    }



// // function Api() {
// //   // add whatever other options you would add to `fetch` such as headers
// //   const options = {
// //     method: 'GET',
// //     body: {}, // whatever data you want to send
// //   }

// //   var [data, loading, error] = useFetch('http://localhost:5000/api/Films', options)

// //   // want to use object destructuring? You can do that too
// //   var { data, loading, error } = useFetch('http://localhost:5000/api/Films', options)

// //   if (error) {
// //     return 'Error!'
// //   }

// //   if (loading) {
// //     return 'Loading!'
// //   }

// //   return (
// //     <code>
// //       <pre>{data}</pre>
// //     </code>
// //   )
// // }

//   export default Api;