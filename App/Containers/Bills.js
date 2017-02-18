import React from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import styles from './Styles/BillsStyle'
import APIBills from '../Services/APIBills'
import FJSON from 'format-json'
import FullButton from '../Components/FullButton'
import BillCardInList from './BillCardInList'
import APIResult from './APIResult';
// import { Images } from '../Themes'
// import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

const endpoints = [
  { label: 'Get Bills', endpoint: 'getTheBills' },
  { label: 'pageOne', endpoint: 'getBills', args: [1] },
  { label: 'pageTwo', endpoint: 'getBills', args: [2] },
]

export default class Bills extends React.Component {
  constructor() {
    super()
    this.state = {
      bills: null
    }

    this.api = APIBills.create()
  }

  showResult(response, title = 'Response') {
    if (response.ok) {
      this.setState({ bills: response.data });
      this.billData = this.state.bills.map((bill) => {
        return <BillCardInList {...bill} key={bill.bill_id} />
      })
    } else {
      throw new Error('There was a problem with the API call.')
    }
  }

  tryEndpoint() {
    const endpoint = endpoints[0].endpoint
    this.api[endpoint].apply(this).then((result) => {
      this.showResult(result)
    })
  }

  renderButtons() {
    return endpoints.map(endpoint => this.renderButton(endpoint))
  }

  render() {
    return (
      <View style={styles.container}>
        {this.tryEndpoint()}
        <ScrollView style={styles.scrollContainer} ref={() => 'container'}>
          <Text
            style={styles.text}
          >
            Bills:
          </Text>
          {this.billData ? this.billData : <Text>Loading....</Text>}
        </ScrollView>
      </View>
    )
  }
}
