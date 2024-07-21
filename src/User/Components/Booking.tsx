import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Booking: React.FC = () => {
//   const [startDate, setStartDate] = useState<Date | undefined>(undefined);
//   const [endDate, setEndDate] = useState<Date | undefined>(undefined);

//   return (
//     <section className="ftco-booking">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <form action="#" className="booking-form">
//               <div className="row">
//                 <div className="col-md-3 d-flex">
//                   <div className="form-group p-4 align-self-stretch d-flex align-items-end">
//                     <div className="wrap">
//                       <label htmlFor="checkin_date">Check-in Date</label>
//                       <DatePicker
//                         selected={startDate}
//                         onChange={(date: Date | null) =>
//                           setStartDate(date ?? undefined)
//                         }
//                         selectsStart
//                         startDate={startDate}
//                         endDate={endDate}
//                         className="form-control"
//                         placeholderText="Check-in date"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-3 d-flex">
//                   <div className="form-group p-4 align-self-stretch d-flex align-items-end">
//                     <div className="wrap">
//                       <label htmlFor="checkout_date">Check-out Date</label>
//                       <DatePicker
//                         selected={endDate}
//                         onChange={(date: Date | null) =>
//                           setEndDate(date ?? undefined)
//                         }
//                         selectsEnd
//                         startDate={startDate}
//                         endDate={endDate}
//                         minDate={startDate}
//                         className="form-control"
//                         placeholderText="Check-out date"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md d-flex">
//                   <div className="form-group p-4 align-self-stretch d-flex align-items-end">
//                     <div className="wrap">
//                       <label htmlFor="room">Room</label>
//                       <div className="form-field">
//                         <div className="select-wrap">
//                           <div className="icon">
//                             <span className="ion-ios-arrow-down" />
//                           </div>
//                           <select
//                             name="room"
//                             id="room"
//                             className="form-control"
//                           >
//                             <option value="Suite">Suite</option>
//                             <option value="Family Room">Family Room</option>
//                             <option value="Deluxe Room">Deluxe Room</option>
//                             <option value="Classic Room">Classic Room</option>
//                             <option value="Superior Room">Superior Room</option>
//                             <option value="Luxury Room">Luxury Room</option>
//                           </select>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md d-flex">
//                   <div className="form-group p-4 align-self-stretch d-flex align-items-end">
//                     <div className="wrap">
//                       <label htmlFor="customer">Customer</label>
//                       <div className="form-field">
//                         <div className="select-wrap">
//                           <div className="icon">
//                             <span className="ion-ios-arrow-down" />
//                           </div>
//                           <select
//                             name="customer"
//                             id="customer"
//                             className="form-control"
//                           >
//                             <option value="1 Adult">1 Adult</option>
//                             <option value="2 Adult">2 Adult</option>
//                             <option value="3 Adult">3 Adult</option>
//                             <option value="4 Adult">4 Adult</option>
//                             <option value="5 Adult">5 Adult</option>
//                             <option value="6 Adult">6 Adult</option>
//                           </select>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md d-flex">
//                   <div className="form-group d-flex align-self-stretch">
//                     <input
//                       type="submit"
//                       value="Check Availability"
//                       className="btn btn-primary py-3 px-4 align-self-stretch"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const Booking = () => {
  return (
    <section className="ftco-booking">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <form action="#" className="booking-form">
              <div className="row">
                <div className="col-md-3 d-flex">
                  <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                    <div className="wrap">
                      <label htmlFor="#">Check-in Date</label>
                      <input
                        type="text"
                        className="form-control checkin_date"
                        placeholder="Check-in date"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                    <div className="wrap">
                      <label htmlFor="#">Check-out Date</label>
                      <input
                        type="text"
                        className="form-control checkout_date"
                        placeholder="Check-out date"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex">
                  <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                    <div className="wrap">
                      <label htmlFor="#">Room</label>
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down" />
                          </div>
                          <select name="" id="" className="form-control">
                            <option value="">Suite</option>
                            <option value="">Family Room</option>
                            <option value="">Deluxe Room</option>
                            <option value="">Classic Room</option>
                            <option value="">Superior Room</option>
                            <option value="">Luxury Room</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex">
                  <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                    <div className="wrap">
                      <label htmlFor="#">Customer</label>
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down" />
                          </div>
                          <select name="" id="" className="form-control">
                            <option value="">1 Adult</option>
                            <option value="">2 Adult</option>
                            <option value="">3 Adult</option>
                            <option value="">4 Adult</option>
                            <option value="">5 Adult</option>
                            <option value="">6 Adult</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex">
                  <div className="form-group d-flex align-self-stretch">
                    <input
                      type="submit"
                      defaultValue="Check Availability"
                      className="btn btn-primary py-3 px-4 align-self-stretch"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
