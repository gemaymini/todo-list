import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
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

    addTodoItem=(todoItemValue)=>{
      const newTodoItem={
        id:this.state.todoItems.length,
        value:todoItemValue,
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
  
    updateTodoItem=(item)=>{
      const newvalue = prompt("Enter new name for the todo item",item.value);
      const newitems=this.state.todoItems.map(
        (todoItem)=>todoItem.id===item.id?{...todoItem,value:newvalue}:todoItem
      )
      this.setState({todoItems:newitems});
    }


    render() {
      return (
        <div>
          <h1>My First React App --TODOLIST</h1>
          <TodoForm
            addTodoItem={this.addTodoItem}
          />
          <TodoList
            todoItems={this.state.todoItems}
            deleteTodoItem={this.deleteTodoItem}
            updateTodoItem={this.updateTodoItem}/>
        </div>
      )
    };
  }
