import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { toggleTodoStatus } from '../../redux/actions'
import { updateTodo } from '../TodoList/TodosSlice' 

const priorityColorMapping = {
  high: 'red',
  medium: 'blue',
  low: 'gray',
};

export default function Todo({ id, name, prioriry, completed }) {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(updateTodo(id))
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry.charAt(0).toUpperCase() + prioriry.slice(1)}
      </Tag>
    </Row>
  );
}
