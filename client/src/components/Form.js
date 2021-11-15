import React, { useState } from "react";
import Loading from "./Loading";
import Success from "./Success";
import { addForm } from "../redux/actions/formActions";
import Error from "./Error";
import Payment from "./Payment";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [timings, setTimings] = useState("6-7 AM");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState();
  const [age, setAge] = useState();
  const [pay, setPay] = useState(false);
  const dispatch = useDispatch();

  function handleTimeChange(e) {
    setTimings(e.target.value);
  }
  const addformstate = useSelector((state) => state.addFormReducer);
  const { success, error, loading } = addformstate;

  function formHandler(e) {
    e.preventDefault();
    setPay(!pay);
    const form = {
      firstname,
      lastname,
      email,
      timings,
      city,
      zip,
      age,
    };
    console.log(form);
    dispatch(addForm(form));
    alert("Your Registration is done Successfully please pay the fees in given time limit")
  }

  if (pay) {
    return <Payment />;
  } else {
    return (
      <div>
        <div className="container shadow-lg p-3 mb-5 bg-white rounded">
          {loading && <Loading />}

          {error && <Error error="Something Went Wrong" />}
          <h1 className="text-center">Yoga Class Admission Form</h1>
          <form onSubmit={formHandler}>
            <div className="col ">
              <label for="validationDefault01" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="FirstName"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="col">
              <label for="validationDefault02" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="LastName"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="col">
              <label for="inputEmail3" class="form-label">
                Email ID
              </label>
              <div class="col">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail3"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <br />
            <div className="col">
              <label for="validationDefault04" className="form-label">
                Timings
              </label>
              <select
                className="form-select"
                id="validationDefault04"
                required
                defaultValue={timings}
                onChange={handleTimeChange}
              >
                <option value="6-7 AM">6-7 AM</option>
                <option value="7-8 AM">7-8 AM</option>
                <option value="8-9 AM">8-9 AM</option>
                <option value="5-6 PM">5-6 PM</option>
              </select>
            </div>
            <br />
            <div className="col">
              <label for="validationDefault044" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault044"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="col">
              <label for="validationDefault05" className="form-label">
                Zip
              </label>
              <input
                type="number"
                className="form-control"
                id="validationDefault05"
                placeholder="Zip"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="col-6">
              <label for="validationDefault06" className="form-label">
                Age
              </label>
              <input
                type="number"
                placeholder="Age"
                size="2"
                min="18"
                max="65"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-control"
                id="validationDefault06"
                required
              />
            </div>
            <br />
            <h5>
              The fees of the class is 500 RS. and you can pay this fees in
              anytime in month.
            </h5>
            <button className="btn btn-primary" type="submit">
              {" "}
              Submit Form
            </button>
          </form>
          <br />
          
          {success && (
            <Success success="Your Registration is done Successfully!!" />
          )}
        </div>
      </div>
    );
  }
}

export default Form;
