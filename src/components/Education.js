import React, { useState, useEffect} from "react";

function Education(props){
    const [school, setSchool] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        if(!(props.educationInformation.school === "")) {
            setSchool(props.educationInformation.school);
            setTitle(props.educationInformation.title);
            setDate(props.educationInformation.date);
        }
    }, [props.educationInformation])

    return (
        <div>
            <form className="form">
                <br></br>
                <h3>Education</h3>
                <input
                    type="text"
                    id="school"
                    placeholder="School"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                />
                <input
                    type="text"
                    id="title"
                    placeholder="Title of study"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="date"
                    id="date"
                    placeholder="Date of study"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </form>
            <button className="save"
                onClick={() => props.handleSaveEducationInformation (school, title, date) } >
                Save
            </button>
        </div>
    )
};

export default Education;