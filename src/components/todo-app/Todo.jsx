import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { StyledMain } from '../styled/Main.styled';
import { StyledTodo } from '../styled/Todo.styled';

const Todo = () => {

  return (
      <StyledMain>
        <StyledTodo>
          <div className='max-w-[1100px] my-5 p-1'>
            <h1 className='text-2xl font-bold py-4'>List</h1>
            <TodoList />
          </div>
          <div className='max-w-[1100px] mx-auto my-5 p-1'>
            <h1 className='text-2xl font-bold py-4'>New item</h1>
            <TodoInput />
          </div>
        </StyledTodo>
      </StyledMain>
  );
};

export default Todo;
