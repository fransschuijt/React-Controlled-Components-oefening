import React, {useState} from 'react';
import './App.css';

function App() {
    const [formState, setFormState] = useState({
        name: "",
        age: 0,
        comments: "",
        newsletter: false,
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    function handleChange(e) {
        const value = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [value]: newValue,
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Gegevens</legend>

                <label htmlFor="details-name">
                    Naam:
                    <input
                        type="text"
                        name="name"
                        id="details-name"
                        value={formState.name}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="details-age">
                    Leeftijd:
                    <input
                        type="number"
                        name="age"
                        id="details-age"
                        value={formState.age}
                        onChange={handleChange}
                    />
                </label>
            </fieldset>

            <fieldset>
                <legend>Jouw review</legend>

                <label htmlFor="review-text">
                    Opmerkingen:
                    <textarea
                        placeholder="Wat vond je van het recept?"
                        rows="4"
                        cols="40"
                        name="comments"
                        id="review-text"
                        value={formState.comments}
                        onChange={handleChange}
                    >
                    </textarea>
                </label>

                <label htmlFor="newsletter-checkbox">
                    <input
                        type="checkbox"
                        name="newsletter"
                        id="newsletter-checkbox"
                        checked={formState.newsletter}
                        onChange={handleChange}
                    />
                    Ik schrijf me in voor de nieuwsbrief
                </label>

                <button type="submit">
                    Versturen
                </button>

            </fieldset>

        </form>
    );
}

export default App;