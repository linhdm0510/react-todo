import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react'
// import { 
//   searchFilterChange, 
//   statusFilterChange,
//   priorityFilterChange 
// } from '../../redux/actions'
import filtersSlice from './FiltersSlice'
import { useDispatch } from 'react-redux';


const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch()

  const [searchText, setSearchText] = useState('')
  const [searchStatus, setSearchStatus] = useState('All')
  const [searchPriority, setSearchPriority] = useState([])

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
    dispatch(filtersSlice.actions.text(e.target.value))
  }

  const handleSearchStatusChange = (e) => {
    setSearchStatus(e.target.value);
    dispatch(filtersSlice.actions.status(e.target.value))
  }

  const handleSearchPriorityChange = (values) => {
    setSearchPriority(values)
    dispatch(filtersSlice.actions.priority(values))
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search 
          value={searchText}
          placeholder='input search text' 
          onChange={handleSearchTextChange}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group onChange={handleSearchStatusChange} value={searchStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={searchPriority}
          onChange={handleSearchPriorityChange}
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
      </Col>
    </Row>
  );
}
