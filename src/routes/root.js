export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <nav>
                    <ul>
                        <li>
                            <a href={`/Home`}>Home</a>
                        </li>
                        <li>
                            <a href={`./About`}>About</a>
                        </li>
                        <li>
                            <a href={`./Statistics`}>Statistics</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}