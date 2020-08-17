import React from "react";

const Payment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("s");
  };

  return (
    <div class="row my-5">
      <div class="col-md-4 offset-md-4">
        <div class="card">
          <div class="card-body">
            <form class="" action="/paynow" method="post">
              <div class="form-group">
                <label for="">Name: </label>
                <input class="form-control" type="text" name="name" />
              </div>
              <div class="form-group">
                <label for="">Email: </label>
                <input class="form-control" type="text" name="email" />
              </div>
              <div class="form-group">
                <label for="">Phone: </label>
                <input class="form-control" type="text" name="phone" />
              </div>
              <div class="form-group">
                <label for="">Amount: </label>
                <input class="form-control" type="text" name="amount" />
              </div>
              <div class="form-group">
                <button type="submit" class="btn form-control btn-primary">
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

// import React, { useState } from "react";
// import axios from "axios";

// const Payment = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [amount, setAmount] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const body = {
//       name,
//       email,
//       phone,
//       amount,
//     };
//     const res = await axios.post(`/as`, body, config);
//     console.log(res);
//   };

//   return (
//     <div class="row my-5">
//       <div class="col-md-4 offset-md-4">
//         <div class="card">
//           <div class="card-body">
//             <form class="" onSubmit={handleSubmit}>
//               <div class="form-group">
//                 <label for="">Name: </label>
//                 <input
//                   onChange={(e) => {
//                     setName(e.target.value);
//                   }}
//                   class="form-control"
//                   type="text"
//                   name="name"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="">Email: </label>
//                 <input
//                   onChange={(e) => {
//                     setEmail(e.target.value);
//                   }}
//                   class="form-control"
//                   type="text"
//                   name="email"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="">Phone: </label>
//                 <input
//                   onChange={(e) => {
//                     setPhone(e.target.value);
//                   }}
//                   class="form-control"
//                   type="text"
//                   name="phone"
//                 />
//               </div>
//               <div class="form-group">
//                 <label for="">Amount: </label>
//                 <input
//                   onChange={(e) => {
//                     setAmount(e.target.value);
//                   }}
//                   class="form-control"
//                   type="text"
//                   name="amount"
//                 />
//               </div>
//               <div class="form-group">
//                 <button type="submit" class="btn form-control btn-primary">
//                   Pay Now
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;
