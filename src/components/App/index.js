import User from "../User/index.js";

const App = function () {
    const name = "Anton"
    return (
        <div>
            <User name={name} age='33' />
            <User name='Sonia' age='27' />
        </div>
    )
}

export default App