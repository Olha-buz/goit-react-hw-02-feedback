import React, { Component } from 'react';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbackOptions/feedbackOptions.jsx';

class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };



  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <Section title='TEST' />

      <Section title="Please leave your fedback">
        <FeedbackOptions 
          options={options}
          onLeaveFeedback={this.handleFeedback} />
      </Section>

      <Section title="Statistics">

      </Section>
    </div>

    
    
  );
    }
};

export default App;