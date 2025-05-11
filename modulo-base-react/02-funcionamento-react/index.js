const root = document.getElementById('root')
const p = React.createElement('p', null, 'Olá! Eu sou um parágrafo!')
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(p);