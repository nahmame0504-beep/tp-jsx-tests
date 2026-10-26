import JSXDemo from './JSXDemo';
import ButtonWithLogging from './ButtonWithLogging';
import DataLoader from './DataLoader';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>TP JSX et Composition</h1>

      <section>
        <h2>Démo JSX</h2>
        <JSXDemo />
      </section>

      <section>
        <h2>Higher-Order Component (HOC)</h2>
        <ButtonWithLogging label="Cliquer ici" />
      </section>

      <section>
        <h2>Render Props</h2>
        <DataLoader
          render={(data) => (
            <ul>
              {data.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          )}
        />
      </section>
    </div>
  );
}

export default App;