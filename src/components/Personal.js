import React, { useState, useEffect } from "react";

function Personal (props) {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if(!(props.personalInformation.name === "")) {
            setName(props.personalInformation.name);
            setTitle(props.personalInformation.title);
            setEmail(props.personalInformation.email);
            setPhone(props.personalInformation.phone);
            setDescription(props.personalInformation.description);
        }
    }, [props.personalInformation]);

    return(
        <div>
            <form>
                <h3>Personal Information</h3>
                <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    id="title"
                    placeholder="Title goes here"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    id="phone"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="text"
                    id="description"
                    placeholder="Brief description of yourself"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </form>
            <button
                onClick={() =>
                    props.handleSavePersonalInformation(
                        name,
                        title,
                        email,
                        phone,
                        description
                    )
                }
            >
                Save
            </button>
        </div>
    )
}

export default Personal;