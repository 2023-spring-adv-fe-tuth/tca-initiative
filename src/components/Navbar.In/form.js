import * as React from 'react';
import '../../App.css';

const handleSubmit = event => {
    event.preventDefault();
    alert("Form has been submitted");
}

const Form = () => {
  return (
        <form class="Form" onSubmit = {handleSubmit}>
            <div>
                <label for="name">Name:</label><br/>
                <input id="name" type="text" /><br/><br/>
            </div>
            <div>
                <label for="roll">Roll:</label><br/>
                <input id="roll" type="text" /><br/><br/>
            </div>
            <div>
                <label for="modifier">Modifier:</label><br/>
                <input id="modifier" type="text" /><br/><br/>
            </div>
            <button class="Styled-button" type="submit">Submit</button>
        </form>
  );
};

export { Form };
