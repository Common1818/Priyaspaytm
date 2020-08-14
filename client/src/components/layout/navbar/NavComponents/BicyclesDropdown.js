// import React from "react";
// import { Link } from "react-router-dom";

// const BicyclesDropdown = () => {
//   const Brands = [
//     "Firefox",
//     "Montra",
//     "Hero",
//     "Hero Electric",
//     "Giant",
//     "Trek",
//     "Btwin",
//     "Hercules",
//     "MachCity",
//   ];

//   const Users = [
//     "Adults",
//     "Men",
//     "Women",
//     "Kids",
//     "Boy Kids",
//     "Girl Kids",
//     "Toddlers",
//   ];

//   const FrameTypes = [
//     "Alloy",
//     "ALuminum",
//     "Carbon Fiber",
//     "Steel",
//     "Chromoly",
//     "Plastic",
//     "Others",
//   ];

//   const Category = ["City", "Mountain", "Hybrid", "Highway", "Street"];
//   return (
//     <div className="subMenuContainer hideOnlyMobile ">
//       <ul className="list-unstyled subList bdRow">
//         <li className="appDropdown">
//           <span className="h byUsers hideOnlyMobile">By Users</span>
//           <ul className="list-unstyled linksList hideOnlyMobile">
//             {Users &&
//               Users.map((user) => {
//                 return (
//                   <li key={user}>
//                     <Link to="/en/bicycles/women">{user}</Link>
//                   </li>
//                 );
//               })}
//           </ul>
//         </li>
//         <li className="appDropdown">
//           <span className="h byCat hideOnlyMobile">By Categories</span>
//           <ul className="list-unstyled linksList hideOnlyMobile">
//             {Category &&
//               Category.map((category) => {
//                 return (
//                   <li key={category}>
//                     <Link to="/en/bicycles/city">{category}</Link>
//                   </li>
//                 );
//               })}
//           </ul>
//         </li>
//         <li className="appDropdown displaySubInline">
//           <span className="h byBrand hideOnlyMobile">By Brands</span>
//           <ul className="list-unstyled linksList hideOnlyMobile">
//             {Brands &&
//               Brands.map((brand) => {
//                 return (
//                   <li key={brand}>
//                     <Link to="/en/bicycles/firefox">{brand}</Link>
//                   </li>
//                 );
//               })}
//           </ul>
//         </li>
//         <div className="clearfix hidden-xs"></div>
//         <li className="appDropdown">
//           <span className="h byFrame hideOnlyMobile">By Frame Material</span>
//           <ul className="list-unstyled linksList hideOnlyMobile">
//             {FrameTypes &&
//               FrameTypes.map((type) => {
//                 return (
//                   <li key={type}>
//                     <Link to="/en/bicycles/alloy-frame">{type}</Link>
//                   </li>
//                 );
//               })}
//           </ul>
//         </li>

//         <li className="appLink allLink">
//           <span className="h">
//             <Link to="/en/bicycles">
//               <span className="subtext hidden-xs">
//                 Not sure and <br />
//                 like to see our full range?
//               </span>
//               <span className="pseudoButton">View All Bicycles</span>
//             </Link>
//           </span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default BicyclesDropdown;
