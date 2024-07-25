import React from 'react';

const sampleComponent = () => {
const [inputValue, setInputValue] = useState('');
const [response, setResponse] = useState(null);
const [error, setError] = useState(null);

const handleSubmission = async (event) => {
    event.preventDefault();
    try{
const res = await fetch(`https://xyz.com`)
    const resp = await res.json();
    setResponse(resp);
    }
    catch(e)
    {
        setResponse(null);
    }
}

const handleChange = (event) => {
    setInputValue(event.target.value);
}

return (
    <div>
        <form onSubmit = {handleSubmission}>
            <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder = "Enter movie title"
            />
            <button type = "submit">Submit</button>
        </form>

        {response && <div>Response: JSON.stringify(response)</div>}
    </div>
)
}

export default sampleComponent;
