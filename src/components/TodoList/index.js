import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import {addTodo} from '../../redux/actions'
import todosSlice, {addNewTodo} from './TodosSlice' 
import { listFilter } from '../../redux/selectors'
import { v4 as uuidv4 } from 'uuid' 
export default function TodoList() {

  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('medium')

  const todoList = useSelector(listFilter)

  const dispatch = useDispatch()

  const handleAddTodo = () => {
    dispatch(addNewTodo({
      id: uuidv4(),
			name: todoName,
			priority: priority,
			isCompleted: false
    }))

    setTodoName('')
    setPriority('medium')
  }

  const handleInputChange = (e) => {
    setTodoName(e.target.value)
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo,index) => 
          <Todo 
            key={todo.id} 
            id={todo.id}
            name={todo.name} 
            prioriry={todo.priority}
            completed={todo.isCompleted}
          />
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input 
            value={todoName}
            onChange={handleInputChange}
          />
          <Select 
            defaultValue="medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value='high' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button 
            type='primary'
            onClick={handleAddTodo}
          >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
