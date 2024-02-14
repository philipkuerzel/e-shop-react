import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    };
  }

  componentDidMount() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.setState({ isDarkMode: e.matches });
    });
  }

  render() {
    return (
      <div className={this.state.isDarkMode ? 'dark-mode' : 'light-mode'}>
        <h1>Willkommen in meiner App</h1>
      </div>
    );
  }
}

export default App;