const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// const headingElement = React.createElement('h1', {}, 'Hello from React!');
// const secondHeadingElement = React.createElement('h2', {}, 'Some slogan here');
// const headerElement = React.createElement('header', {}, headingElement, secondHeadingElement);
// Use JSX Syntax 

function Heading(props) {
    return <h1 className="heading">{props.firstWord} from {props.title}!</h1>
}

const headerElement = (
    <div>
        <Heading firstWord= "hello" title="React"/>
        <header className="header-container">
            <h2>Slogan here</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis consequuntur architecto dolorum sit quidem tenetur doloremque aspernatur reprehenderit ratione sed!</p>
        </header>

        <button>Click</button>
    </div>
);

root.render(headerElement);