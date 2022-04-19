import { useState, useEffect} from "react";

function Experience(props) {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    useEffect(() => {
        if (!(props.experiences[0].position === "")) {
            props.experiences.forEach((exp))
        }
    })
}