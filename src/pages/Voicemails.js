import React, { Component } from 'react'
import Tables from '../components/Table'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
class Voicemails extends Component {
  constructor() {
    super()
    this.state = { data: [] }
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
    return (
      <React.Fragment>
        <Container maxWidth='lg'>
          <AppBar position='static'>
            <Toolbar variant='dense'>
              <IconButton edge='start' color='inherit' aria-label='menu'>
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' color='inherit'>
                Voicemail
              </Typography>
            </Toolbar>
          </AppBar>
          <CssBaseline />
          <TableContainer component={Paper}>
            <Table aria-label='simple table'>
              <TableHead color='inherit'>
                <TableRow>
                  <TableCell>Status</TableCell>
                  <TableCell align='right'>From</TableCell>
                  <TableCell align='right'>To</TableCell>
                  <TableCell align='right'>Duration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Tables info={this.state.data} />
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </React.Fragment>
    )
  }
}

export default Voicemails
