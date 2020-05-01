import React, { Component } from 'react'

class call extends Component {
  state = {
    data: [],
  }
  componentDidMount() {
    const serverUrl = '/v2'

    const credentials =
      'NDY0MmU2NDA0MGNkYjhiODljMzEwYTIxYTA3YzdmNjI6MjMyNjQxNTY1OTA3NWU3NTAwMGNlY2Q3YmNiZjM3NTY='

    const requestUrl = `${serverUrl}/accounts/4642e64040cdb8b89c310a21a07c7f62/vmboxes/b37675a2d7b90d60f0ee5d4175502394/messages?paginate=true`

    const headers = {
      Authorization: `Basic ${credentials}`,
    }

    fetch(requestUrl, { headers })
      .then((res) => {
        return res.json()
      })
      .then((response) => {
        let voice = response.data
        let voiceData = []
        for (let i in voice) {
          voiceData.push(voice[i])
        }
        this.setState({
          data: voiceData,
        })
      })
  }
  render() {
    return <div></div>
  }
}

export default call
