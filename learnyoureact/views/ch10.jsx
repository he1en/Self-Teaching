var React = require('react');

var TodoBox = React.createClass({
  render : function() {
    return (
      <div className='todoBox'>
        <h1>Todos</h1>
        <TodoList data = {this.props.data}/>
        <TodoForm />
      </div>
    );
  }
});

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
      titleValue: "",
      detailValue: ""
    };
  },
  changeTitle: function(e) {
    this.setState({titleValue: e.target.value})
  },
  changeDetail: function(e) {
    this.setState({detailValue: e.target.value})
  },
  addTodo: function() {
    this.setState({
      data: this.state.data.concat(
        {
          title: this.state.titleValue,
          detail: this.state.detailValue
        }),
      titleValue: "",
      detailValue: ""
    })
  },
  render : function() {
    var todo = this.state.data.map(function(obj) {
      return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>
    });

    return (
      <div className = 'todoList'>
        <div>
          Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle}/>
          Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail}/>
          <button onClick={this.addTodo}>Add</button>
        </div>
        <table style ={{border: "2px solid black"}}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
});

var Todo = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  getInitialState : function() {
    return {checked: false}
  },
  handleChange : function() {
    this.setState({checked : !this.state.checked})
  },
  render : function() {
    var isChecked = this.state.checked
    return (
      <tr style={isChecked ? style.checkedTodo : style.notCheckedTodo}>
        <td style={style.tableContent}>
          <input type = "checkbox" checked = {isChecked}
            onChange={this.handleChange} />
        </td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
    );
  }
});

var TodoForm = React.createClass({
  render : function() {
    return (
      <div className = 'todoForm'>
        I am a TodoForm.
      </div>
    );
  }
});

var style = {
  checkedTodo: {
    textDecoration: "line-through"
  },
  notCheckedTodo: {
    textDecoration: "none"
  },
  tableContent: {
    border: "1px solid black"
  }
};

module.exports = TodoBox;
