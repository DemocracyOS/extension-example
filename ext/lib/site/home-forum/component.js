import React, { Component } from 'react'
import { Link } from 'react-router'
import config from 'lib/config'
import urlBuilder from 'lib/url-builder'
import forumStore from 'lib/stores/forum-store/forum-store'
import topicStore from 'lib/stores/topic-store/topic-store'

export default class HomeForum extends Component {
  constructor (props) {
    super(props)

    this.state = {
      forum: null,
      topics: []
    }
  }

  componentWillMount () {
    if (!config.multiForum && !config.defaultForum) {
      return window.location = '/forums/new'
    }

    let name = this.props.params.forum

    if (!name && !config.multiForum) {
      name = config.defaultForum
    }

    forumStore.findOneByName(name)
      .then((forum) => this.setState({ forum }))
      .then(() => topicStore.findAll({ forum: this.state.forum.id }))
      .then((topics) => this.setState({ topics }))
      .catch((err) => { throw err })
  }

  render () {
    if (!this.state.forum) return null

    return (
      <div className='ext-home-forum'>
        <div className='jumbotron'>
          <div className='container'>
            <h1 className='display-3'>Custom Homepage</h1>
            <p className='lead'>This is your customized homepage, located at <strong>/ext/lib/site/home-forum/component.js</strong></p>
            <p className='lead'>If yout want to edit the CSS, the file is: <strong>/ext/lib/site/home-forum/styles.styl</strong></p>
          </div>
        </div>
        {this.state.topics.length === 0 && (
          <div className='ext-forum-home-empty'>
            <p>You dont have any Topic yet, do it here:</p>
            <Link
              className='btn btn-primary'
              to={urlBuilder.for('admin.topics.create', { forum: this.state.forum.name })}>
              Create my first Topic
            </Link>
          </div>
        )}
        {this.state.topics.length > 0 && (
          <div className='container'>
            <p>Here's a list of all your Topics:</p>
            <ul>
              {this.state.topics.map((topic) => (
                <li>
                  <Link to={topic.url}>
                    {topic.mediaTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

    )
  }
}
