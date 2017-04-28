import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styles from './styles.css';

class Transition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [ 'hello', 'world', 'click', 'me' ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({
      items: newItems
    });
  }

  handleRemove(i) {
    const newItems = this.state.items.slice(1);
    newItems.splice(i, 1);
    this.setState({
      items: newItems
    });
  }
  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>{item}</div>
    ));
    return (
      <section>
        <button onClick={this.handleAdd}>Add Item</button>
        <CSSTransitionGroup
          transitionName={{
            enter: styles.exampleEnter,
            enterActive: styles.exampleEnterActive,
            leave: styles.exampleLeave,
            leaveActive: styles.exampleLeaveActive,
            appear: styles.exampleAppear,
            appearActive: styles.exampleAppearActive
          }}
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          {items}
        </CSSTransitionGroup>
      </section>
    );
  }
}

export default Transition;
