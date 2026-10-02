import React, { useState } from "react";

function UserForm() {

  const [user, setUser] = useState({
    name: "",
    dob: "",
    gender: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    <div>
      <h2>User Information</h2>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <br /><br />

        {/* Date of Birth */}
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={user.dob}
          onChange={handleChange}
        />

        <br /><br />

        {/* Gender */}
        <label>Gender:</label>

        <input
          type="radio"
          name="gender"
          value="Male"
          checked={user.gender === "Male"}
          onChange={handleChange}
        />
        Male

        <input
          type="radio"
          name="gender"
          value="Female"
          checked={user.gender === "Female"}
          onChange={handleChange}
        />
        Female

        <input
          type="radio"
          name="gender"
          value="Other"
          checked={user.gender === "Other"}
          onChange={handleChange}
        />
        Other

        <br /><br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default UserForm;