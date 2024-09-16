import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    feedbackReceived: false,
  }

  getFeedback = () => {
    this.setState(prevState => ({
      feedbackReceived: !prevState.feedbackReceived,
    }))
  }

  renderFeedbackSection = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="feedback-heading">
          How satisfied are you with our customer support performance
        </h1>
        <div className="emojis-container">
          {emojis.map(({name, imageUrl}) => (
            <div className="emoji-card">
              <button
                type="button"
                className="emoji-button"
                onClick={this.getFeedback}
              >
                <img src={imageUrl} alt={name} className="emoji" />
              </button>
              <p className="emoji-name">{name}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  renderThankingYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thanking-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-heading">Thank You!</h1>
        <p className="feedback-description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {feedbackReceived} = this.state

    return (
      <div className="app-container">
        {feedbackReceived
          ? this.renderThankingYou()
          : this.renderFeedbackSection()}
      </div>
    )
  }
}
export default Feedback
