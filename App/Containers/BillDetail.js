import React from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import styles from './Styles/BillDetailStyle'
import Separator from '../Components/Separator'
import prettifyDate from '../Helpers/DatePrettifier'

export default class BillDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      title: this.props.billTitle,
      dateIntroduced: this.props.dateIntroduced,
      lastAction: this.props.lastAction,
      chamber: this.props.chamber,
      sponsor: this.props.sponsor,
      status: this.props.status,
      progress: this.props.progress,
      detailedStatus: this.props.detailedStatus,
      isThereATitleButton: false
    }
  }

  componentWillMount () {
    if (this.state.title.split(' ').length > 50) {
      this.setState({ title: `${this.state.title.split(' ').slice(0, 50).join(' ')}...` })
      this.setState({ isThereATitleButton: true })
    }
  }

  showFullTitle = () => {
    this.setState({ title: this.props.title })
  }

  render () {
    const { id, title, dateIntroduced, lastAction, chamber, sponsor, status, progress, detailedStatus, isThereATitleButton } = this.state
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.id}>
            {id.toUpperCase()}
          </Text>
          <Text style={styles.title}>
            {this.state.title}
          </Text>
          {isThereATitleButton ? <Button
            title='Show Full Title'
            onPress={this.showFullTitle}
            /> : <Text />}
          <View style={styles.labelWrapper}>
            <Text style={styles.dateIntroduced}>
              <Text style={styles.boldSpan}>Proposed:</Text> {prettifyDate(dateIntroduced)}
            </Text>
            <Text style={styles.sponsor}>
              <Text style={styles.boldSpan}>Sponsor:</Text> {sponsor}
            </Text>
          </View>
          <View style={styles.labelWrapper}>
            <Text style={styles.status}>
              <Text style={styles.boldSpan}>Status:</Text> {status}
            </Text>
            <Text style={styles.lastAction}>
              <Text style={styles.boldSpan}>Last Action:</Text> {prettifyDate(lastAction)}
            </Text>
            <Separator backgroundColor={'#dddddd'} />
          </View>
          <Text style={styles.billSummaryHeadline}>
            Brief Bill Summary
          </Text>
          <Text style={styles.billSummaryDetailed}>
            lone-wolf-g modulo to-posse-or-not-to-posse slack-attack dale's-pale-ale mod-1-beards mod-1-beards mod-1-beards mod-1-beards command-line command-line command-line merge-conflicts k's-horse daledalf champus champus bicycles epically-bad-gusto-coffee epically-bad-gusto-coffee chaz-isms chaz-isms carne-asada game-time yoga-instructor NaN kansas-raptor gusto retro retro gabitron
          </Text>
          <Text style={styles.readFullBillSummary}>
            Read Full Bill Summary &raquo;
          </Text>
          <Separator backgroundColor={'#dddddd'} />
          <Text style={styles.billProgressHeadline}>
            Bill Progress
          </Text>
          <Text style={styles.detailedStatus}>
            {detailedStatus}
          </Text>
        </ScrollView>
      </View>
    )
  }
}

BillDetail.propTypes = {
  id: React.PropTypes.string,
  title: React.PropTypes.string,
  dateIntroduced: React.PropTypes.string,
  lastAction: React.PropTypes.string,
  chamber: React.PropTypes.string,
  sponsor: React.PropTypes.string,
  billTitle: React.PropTypes.string,
  status: React.PropTypes.string,
  progress: React.PropTypes.object,
  detailedStatus: React.PropTypes.string
}
