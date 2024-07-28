import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { locateApi } from "../../service/locate/locateApi";

interface LocateData {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh: string;
}

interface LocateError {
  message: string;
}

type Props = {};

const Booking = (props: Props) => {
  const queryResult: UseQueryResult<LocateData[], LocateError> = useQuery({
    queryKey: ["locateListApi"],
    queryFn: locateApi.getLocate,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: true,
  });

  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  if (queryResult.isLoading) {
    return <div>Loading...</div>;
  }

  if (queryResult.error) {
    return <div>Error: {queryResult.error.message}</div>;
  }

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
                      <DatePicker
                        selected={startDate}
                        onChange={(date: Date | null) =>
                          setStartDate(date ?? undefined)
                        }
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className="form-control"
                        placeholderText="Check-in date"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex">
                  <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                    <div className="wrap">
                      <label htmlFor="#">Check-out Date</label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date: Date | null) =>
                          setEndDate(date ?? undefined)
                        }
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        className="form-control"
                        placeholderText="Check-out date"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex">
                  <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                    <div className="wrap">
                      <label htmlFor="#">Locate</label>
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon">
                            <span className="ion-ios-arrow-down" />
                          </div>
                          <select name="" id="" className="form-control">
                            {queryResult.data?.map((locate) => (
                              <option
                                key={locate.id}
                                value="{locate.tinhThanh}"
                              >
                                {locate.tinhThanh}
                              </option>
                            ))}
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
