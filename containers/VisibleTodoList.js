import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
export default VisibleTodoList
