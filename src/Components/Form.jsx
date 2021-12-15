import { useRef, useState } from "react";

const initial = {
  name: "",
  gender: "",
  role: "",
  marritalStatus: false,
  image: null
};

export default function Form() {
  const imgRef = useRef(null);
  const [formData, setFormDat] = useState(initial);

  const handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    const checked = e.target.checked;
    const val = type === "checkbox" ? checked : e.target.value;

    setFormDat({
      ...formData,
      [name]: val
    });
  };

  const handleImageRef = (e) => {
    let file = e.target.files[0];
    setFormDat({
      ...formData,
      image: file.type
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        Name: <br />
        <input
          name="name"
          value={formData.name}
          type="text"
          placeholder="Type Name"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Gender</label>
        <br />
        <select value={formData.gender} onChange={handleChange} name="gender">
          <option>Choose an Option</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <br />
        <br />
        <label>Role</label>
        <br />
        <select value={formData.role} onChange={handleChange} name="role">
          <option>Choose a Role</option>
          <option>Full-Stack Developer</option>
          <option>Front-End Developer</option>
          <option>Back-End Developer</option>
        </select>
        <br />
        <br />
        <label>Marital Status</label>
        <input
          // value={formData.marritalStatus}
          name="marritalStatus"
          onChange={handleChange}
          type="checkbox"
        />
        <br />
        <br />
        <input onChange={handleImageRef} ref={imgRef} type="file" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
