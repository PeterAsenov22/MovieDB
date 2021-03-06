import React, {Component} from 'react'
import FormStore from '../../stores/FormStore'
import FormActions from '../../actions/FormActions'
import MovieActions from '../../actions/MovieActions'

class CommentForm extends Component {
  constructor (props) {
    super(props)

    this.state = FormStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    FormStore.listen(this.onChange)
  }

  componentWillUnmount () {
    FormStore.unlisten(this.onChange)
  }

  handleSubmit (event) {
    event.preventDefault()

    if (!this.state.comment) {
      return FormActions.commentValidationFail()
    }

    MovieActions.addComment(this.props.movieId, this.state.comment)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} >
        <div className={`form-group ${this.state.commentValidationState}`}>
          <label className='control-label' htmlFor='content'>
            Add comment
          </label>
          <textarea
            id='content'
            className='form-control'
            value={this.state.comment}
            onChange={FormActions.handleCommentChange}
            rows='5' />
          <span className={`help-block`}>
            { this.state.message }
          </span>
        </div>
        <div className='form-group'>
          <input type='submit' className='btn btn-primary' value='Comment' />
        </div>
      </form>
    )
  }
}

export default CommentForm
