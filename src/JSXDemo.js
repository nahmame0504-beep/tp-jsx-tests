import React from 'react';

function JSXDemo() {
  // Version JSX
  const elementJSX = <h1 className="titre">Bonjour JSX</h1>;

  // Version JavaScript pur générée par Babel
  const elementJS = React.createElement(
    'h1',
    { className: 'titre' },
    'Bonjour JavaScript pur'
  );

  return (
    <div>
      {elementJSX}
      {elementJS}

      {/* Respect des règles JSX : className et htmlFor */}
      <div style={{ marginTop: '10px' }}>
        <label htmlFor="champ">Entrez votre nom : </label>
        <input id="champ" placeholder="Votre nom..." />
      </div>
    </div>
  );
}

export default JSXDemo;