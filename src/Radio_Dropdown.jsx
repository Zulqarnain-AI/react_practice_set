import { useState } from "react";

function Radio_Dropdown() {
    const [gender, setgender] = useState("male");
    const [country, setcountry] = useState("afghanistan");
    const handleselect = (e) => {
        setcountry(e.target.value);

    }
    const handleChange = (e) => {
        setgender(e.target.value);

    }
    return (
        <div>
            <div>
                <h1>radioButtons and dropdowns practice</h1>
                <h2>Gender</h2>
                <input onChange={handleChange} type="radio" name="gender" id="male" value="male" defaultChecked />
                <label htmlFor="male">Male</label>
                <br />
                <input onChange={handleChange} type="radio" name="gender" id="female" value="female" />
                <label htmlFor="female">Female</label>
                <br />
                <input onChange={handleChange} type="radio" name="gender" id="other" value="other" />
                <label htmlFor="other">Other</label>
                <h2>Gender: {gender}</h2>
            </div>
            <div>
                <select value={country} onChange={handleselect}>
                    <option value='pakistan'>Pakistan</option>
                    <option value='india'>India</option>
                    <option value='afghanistan'>Afghanistan</option>
                </select>
                <h2>Country: {country}</h2>
            </div>
        </div>
    )
}
export default Radio_Dropdown;
