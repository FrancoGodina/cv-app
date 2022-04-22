import { useState, useEffect } from "react";

function Experience(props) {
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    useEffect(() => {
        if(!(props.experiences[0].position === "")) {
            props.experiences.forEach((exp) => {
                if(exp.id === props.id) {
                    setPosition(exp.position);
                    setCompany(exp.company);
                    setFrom(exp.from);
                    setTo(exp.to);
                }
            });
        }
    }, [props.experiences, props.id])

    return (
        <div>
            <form>
                <input
                    type="text"
                    id="position"
                    placeholder="Position held"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />
                <input
                    type="text"
                    id="company"
                    placeholder="Company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
                <input
                    type="text"
                    id="from"
                    placeholder="Starting date"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                />
                <input
                    type="text"
                    id="to"
                    placeholder="Ending date"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                />
            </form>
            <button
                onClick={() =>
                    props.handleSaveExperience(
                        props.id,
                        position,
                        company,
                        from,
                        to
                    )
                }
            >Save</button>
            <button
                onClick={() => props.handleDeleteExperience(props.id)}>Delete</button>
        </div>
    );
}

export default Experience;