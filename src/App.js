import React from 'react';
export default class App extends React.Component{
    constructor(props)
    {
      super(props);
      this.state={
        todoItems:[
          {id:0,value:'React',done:false,delete:false}
        ]
      }
    }

    addTodoItem=()=>{
      const newTodoItem={
        id:this.state.todoItems.length,
        value:this.todoItemValue.value,
        done:false,
        delete:false
      };
      this.setState({
        todoItems:[...this.state.todoItems,newTodoItem]
      })
    }

    deleteTodoItem=(item)=>{
      const newitems=this.state.todoItems.map(
        (todoitem)=>todoitem.id==item.id?{...todoitem,delete:true}:todoitem
      );
      this.setState({todoItems:newitems});
    }

    
    updateToDoItem = (item) => {
      let updatedValue = prompt("Enter new value:", item.value);
      if (updatedValue !== null) {
        const newItems = this.state.todoItems.map(
          (todoItem) => todoItem.id === item.id ? { ...todoItem, value: updatedValue } : todoItem
        );
        this.setState({ todoItems: newItems});
      }
    };
  
    render() {
      return (
        <div>
          <h1>My First React App --TODOLIST</h1>
          <div>
            <input type='text' placeholder='add something...' ref={(input) => this.todoItemValue = input} />
            <button type='submit' onClick={this.addTodoItem}>添加</button>
          </div>
          <ul>
            {
              this.state.todoItems.map((item) => {
                if (item.delete) return null;
                return (
                  <li key={item.id}>
                    <label>{item.value}</label>
                    <button onClick={() => this.deleteTodoItem(item)}>删除</button>
                    <button onClick={() => this.updateToDoItem(item)}>修改</button>
                  </li>
                );
              })
            }
          </ul>
        </div>
      );
    }
  }
