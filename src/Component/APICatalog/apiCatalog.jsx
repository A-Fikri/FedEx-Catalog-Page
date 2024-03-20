import React, { useState, useEffect } from "react";
import "./index.css";
import DATA from "../../Data/CatalogData";
import SearchBar from "./TopBar/SearchBar";

export default function APICatalog() {
  const [title, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState(DATA);

  useEffect(() => {
    filter();
  }, [title]);

  const filter = (category) => {
    const keyword = title.toLowerCase().trim();
    let results;

    if (keyword !== "") {
      results = DATA.filter((data) => {
        return (
          data.title.toLowerCase().includes(keyword) &&
          (category ? data.category === category : true)
        );
      });
    } else {
      results = DATA.filter((data) =>
        category ? data.category === category : true
      );
    }

    setFoundUsers(results);
  };

  return (
    <>
      <SearchBar
        value={title}
        onChange={(e) => setName(e.target.value)}
        onFilter={(category) => filter(category)}
      />
      <div className="api-catalog">
        {foundUsers.length > 0 ? (
          <div className="cards">
            {foundUsers.map((data) => (
              <a key={data.title} href={data.link} className="card-link">
                <div className="card">
                  <div>
                    <img
                      src={data.image}
                      className="card-image"
                      alt={data.title}
                    />
                  </div>
                  <div>
                    <p className="card-title">{data.title}</p>
                  </div>
                  <div>
                    <p className="card-description">{data.description}</p>
                  </div>
                  <div className="links">
                    <a href={data.overview} className="overview">
                      OVERVIEW
                    </a>
                    <a href={data.doc} className="doc">
                      DOC
                    </a>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p className="no-results-text-1">NO RESULT FOUND</p>
            <p>Try searching for another keyword</p>
          </div>
        )}
      </div>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import "./index.css";
// import DATA from "../../Data/CatalogData";
// import SearchBar from "./TopBar/SearchBar";

// export default function APICatalog() {
//   const [title, setName] = useState("");
//   const [foundUsers, setFoundUsers] = useState(DATA);

//   useEffect(() => {
//     filter();
//   }, [title]);

//   const filter = (category) => {
//     const keyword = title.toLowerCase().trim();
//     let results;

//     if (keyword !== "") {
//       results = DATA.filter((data) => {
//         return (
//           data.title.toLowerCase().includes(keyword) &&
//           (category ? data.category === category : true)
//         );
//       });
//     } else {
//       results = DATA.filter((data) =>
//         category ? data.category === category : true
//       );
//     }

//     setFoundUsers(results);
//   };

//   return (
//     <>
//       <SearchBar
//         value={title}
//         onChange={(e) => setName(e.target.value)}
//         onFilter={(category) => filter(category)}
//       />
//       <div className="api-catalog">
//         {foundUsers.length > 0 ? (
//           <div className="cards">
//             {foundUsers.map((data) => (
//               <div className="card" key={data.title}>
//                 <div>
//                   <img
//                     src={data.image}
//                     className="card-image"
//                     alt={data.title}
//                   />
//                 </div>
//                 <div>
//                   <p className="card-title">{data.title}</p>
//                 </div>
//                 <div>
//                   <p className="card-description">{data.description}</p>
//                 </div>
//                 <div className="links">
//                   <a href={data.overview} className="overview">
//                     OVERVIEW
//                   </a>
//                   <a href={data.doc} className="doc">
//                     DOC
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="no-results">
//             <p className="no-results-text-1">NO RESULT FOUND</p>
//             <p>Try searching for another keyword</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default function APICatalog() {
//   const [title, setName] = useState("");
//   const [foundUsers, setFoundUsers] = useState(DATA);

//   const filter = (category) => {
//     const keyword = title.toLowerCase();
//     let results;

//     if (keyword !== "") {
//       results = DATA.filter((data) => {
//         return (
//           data.title.toLowerCase().includes(keyword) &&
//           (category ? data.category === category : true)
//         );
//       });
//     } else {
//       results = DATA.filter((data) =>
//         category ? data.category === category : true
//       );
//     }

//     setFoundUsers(results);
//   };

//   return (
//     <>
//       <SearchBar
//         value={title}
//         onChange={(e) => setName(e.target.value)}
//         onFilter={(category) => filter(category)}
//       />
//       <div className="api-catalog">
//         <div className="cards">
//           {foundUsers.map((data) => (
//             <div className="card" key={data.title}>
//               <div>
//                 <img src={data.image} className="card-image" alt={data.title} />
//               </div>
//               <div>
//                 <p className="card-title">{data.title}</p>
//               </div>
//               <div>
//                 <p className="card-description">{data.description}</p>
//               </div>
//               <div className="links">
//                 <button className="overview">OVERVIEW</button>
//                 <button className="doc">DOC</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// import { useState } from "react";

// import "./index.css";
// import DATA from "../../Data/CatalogData";
// import SearchBar from "./TopBar/SearchBar";

// export default function APICatalog() {
//   const [title, setName] = useState("");
//   const [foundUsers, setFoundUsers] = useState(DATA);

//   const filter = (e) => {
//     const keyword = e.target.value;

//     if (keyword !== "") {
//       const results = DATA.filter((data) => {
//         return data.title.toLowerCase().includes(keyword.toLowerCase());
//       });
//       setFoundUsers(results);
//     } else {
//       setFoundUsers(DATA);
//     }

//     setName(keyword);
//   };

//   return (
//     <>
//       <SearchBar
//         value={title}
//         onChange={(e) => {
//           e.preventDefault();
//           filter(e);
//         }}
//       />
//       <div className="api-catalog">
//         <div className="cards">
//           {foundUsers.length > 0 ? (
//             foundUsers.map((data) => (
//               <div className="card" key={data.title}>
//                 <div>
//                   {data.image && (
//                     <img
//                       src={data.image}
//                       className="card-image"
//                       alt={data.title}
//                     />
//                   )}
//                 </div>
//                 <div>
//                   <p className="card-title">{data.title}</p>
//                 </div>
//                 <div>
//                   <p className="card-description">{data.description}</p>
//                 </div>
//                 <div className="links">
//                   <button className="overview">OVERVIEW</button>
//                   <button className="doc">DOC</button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="no-results">
//               <p className="no-results-text-1">NO RESULTS FOUND</p>
//               <p>Try searching for another keyword</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default function APICatalog() {
//   const [title, setName] = useState("");
//   const [foundUsers, setFoundUsers] = useState(DATA);

//   const filter = (e) => {
//     const keyword = e.target.value;

//     if (keyword !== "") {
//       const results = DATA.filter((data) => {
//         return data.title.toLowerCase().startsWith(keyword.toLowerCase());
//       });
//       setFoundUsers(results);
//     } else {
//       setFoundUsers(DATA);
//     }

//     setName(keyword);
//   };

//   return (
//     <>
//       <SearchBar
//         value={title}
//         onChange={(e) => {
//           // e.preventDefault();
//           filter(e);
//         }}
//       />
//       <div className="api-catalog">
//         <div className="cards">
//           {foundUsers.map((data) => (
//             <div className="card" key={data.title}>
//               <div>
//                 {data.image && (
//                   <img
//                     src={data.image}
//                     className="card-image"
//                     alt={data.title}
//                   />
//                 )}
//               </div>
//               <div>
//                 <p className="card-title">{data.title}</p>
//               </div>
//               <div>
//                 <p className="card-description">{data.description}</p>
//               </div>
//               <div className="links">
//                 <button className="overview">OVERVIEW</button>
//                 <button className="doc">DOC</button>
//               </div>
//             </div>
//           ))}
//           {/* <div className="no-results">
//             <p className="no-results-found">NO RESULTS FOUND</p>
//             <p>Try searching for a different keyword</p>
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// }

// const [title, setName] = useState("");

// // the search result
// const [foundUsers, setFoundUsers] = useState(DATA);

// const filter = (e) => {
//   const keyword = e.target.value;

//   if (keyword !== "") {
//     const results = DATA.filter((data) => {
//       return data.title.toLowerCase().startsWith(keyword.toLowerCase());
//       // Use the toLowerCase() method to make it case-insensitive
//     });
//     setFoundUsers(results);
//   } else {
//     setFoundUsers(DATA);
//     // If the text field is empty, show all users
//   }

//   setName(keyword);
// };

// return (
//   <>
//     {/* <div className="container">
//      <input
//   //     type="search"
//   //     value={title}
//   //     onChange={(e) => setName(e.target.value)}
//   //     className="input"
//   //     placeholder="Filter"
//   //   />

//   //   <div className="user-list">
//   //     {foundUsers && foundUsers.length > 0 ? (
//   //       foundUsers.map((user) => (
//   //         <li key={user.image} className="user">
//   //           <img src={user.image} />
//   //           <span className="user-name">{user.title}</span>
//   //           <span className="user-age">{user.description}</span>
//   //         </li>
//   //       ))
//   //     ) : (
//   //       <h1>No results found!</h1>
//   //     )}
//   //   </div>
//   // </div> */}
//     <SearchBar
//       value={title}
//       onChange={(e) => {
//         e.preventDefault();
//         setName(e.target.value);
//       }}
//     />
//     <div className="api-catalog">
//       <div className="cards">
//         {foundUsers.map((data) => {
//           return title.toLowerCase() == data.title.toLowerCase() ? (
//             <div className="card" key={data.title}>
//               <div>
//                 <img src={data.image} className="card-image" />
//               </div>
//               <div>
//                 <p className="card-title">{data.title}</p>
//               </div>
//               <div>
//                 <p className="card-description">{data.description}</p>
//               </div>
//               <div className="links">
//                 <button className="overview">OVERVIEW</button>
//                 <button className="doc">DOC</button>
//               </div>
//             </div>
//           ) : (
//             <div className="card">
//               <div>
//                 <img src={data.image} className="card-image"></img>
//               </div>
//               <div>
//                 <p className="card-title">{data.title}</p>
//               </div>
//               <div>
//                 <p className="card-description">{data.description}</p>
//               </div>
//               <div className="links">
//                 <button className="overview">OVERVIEW</button>
//                 <button className="doc">DOC</button>
//               </div>
//             </div>
//           );
//         })}
//         {/* {DATA.map((data, index) => (
//           <>
//             <div className="card">
//               <div>
//                 <img src={data.image} className="card-image"></img>
//               </div>
//               <div>
//                 <p className="card-title">{data.title}</p>
//               </div>
//               <div>
//                 <p className="card-description">{data.description}</p>
//               </div>
//               <div className="links">
//                 <button className="overview">OVERVIEW</button>
//                 <button className="doc">DOC</button>
//               </div>
//             </div>
//           </> */}
//         {/* ))} */}
//       </div>
//     </div>
//   </>
// );
//}
