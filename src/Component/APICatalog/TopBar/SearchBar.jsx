import React from "react";
import "./index.css";

export default function SearchBar({ value, onChange, onFilter }) {
  return (
    <>
      <div className="topbar">
        <h2 className="title">API Catalog</h2>
        <div className="searchbar">
          <ul className="searchbar-content">
            <li className="input-box">
              <input
                type="search"
                value={value}
                onChange={onChange}
                className="input"
                placeholder="🔎   Search APIs..."
              />
            </li>
            <li>
              <p className="filter">FILTER:</p>
            </li>
            <li>
              <button className="api" onClick={() => onFilter("API")}>
                API
              </button>
            </li>
            <li>
              <button className="webhook" onClick={() => onFilter("WEBHOOK")}>
                WEBHOOK
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

// import "./index.css";
// import Footer from "../../Footer/footer";

// export default function SearchBar({ value, onChange }) {
//   return (
//     <>
//       <div className="topbar">
//         <h2 className="title">API Catalog</h2>
//         <div className="searchbar">
//           <ul className="searchbar-content">
//             <li className="input-box">
//               <input
//                 type="search"
//                 value={value}
//                 onChange={onChange}
//                 className="input"
//                 placeholder="🔎   Search APIs..."
//               />
//             </li>
//             <li>
//               <p className="filter">FILTER:</p>
//             </li>
//             <li>
//               <button className="api">API</button>
//             </li>
//             <li>
//               <button className="webhook">WEBHOOK</button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }
