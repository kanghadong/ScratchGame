import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Button} from 'native-base';

import RowComponent from './RowComponent';

var itemArray = new Array(25).fill('empty');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: ''
    };
  }

  // when app loads up
  componentDidMount() {
    this.setState({ randomNumber: this.generateRandomNumber() })
  }

  generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 25);
    this.setState({ randomNumber, isScratched: true });
    
    return randomNumber;
  }

  scratchItem = itemNumber => {
    if (this.state.randomNumber === itemNumber) {
      itemArray[itemNumber] = 'lucky';
    } else {
      itemArray[itemNumber] = 'unlucky';
    }

    this.forceUpdate();
  }

  scratchItemIcon = itemNumber => {
    if (itemArray[itemNumber] === 'lucky') {
      return '🤑';
    } else if (itemArray[itemNumber] === 'unlucky') {
      return '😡';
    }

    return '❔';
  }

  showAllItem = () => {
    itemArray.fill('unlucky');
    itemArray[this.state.randomNumber] = 'lucky';

    this.forceUpdate();
  }

  resetGame = () => {
    this.setState({ randomNumber: this.generateRandomNumber() }, () => {
        itemArray.fill('empty');
        this.forceUpdate();
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topText}>Scratch and Win Game</Text>
        </View>
        <View style={styles.grid}>
          <RowComponent 
            indexArray={[0, 1, 2, 3, 4]}
            scratchItem={this.scratchItem}
            scratchItemIcon={this.scratchItemIcon}
          />
          <RowComponent 
            indexArray={[5, 6, 7, 8, 9]}
            scratchItem={this.scratchItem}
            scratchItemIcon={this.scratchItemIcon}
          />
          <RowComponent 
            indexArray={[10, 11, 12, 13, 14]}
            scratchItem={this.scratchItem}
            scratchItemIcon={this.scratchItemIcon}
          />
          <RowComponent 
            indexArray={[15, 16, 17, 18, 19]}
            scratchItem={this.scratchItem}
            scratchItemIcon={this.scratchItemIcon}
          />
          <RowComponent 
            indexArray={[20, 21, 22, 23, 24]}
            scratchItem={this.scratchItem}
            scratchItemIcon={this.scratchItemIcon}
          />
        </View>
        <Button full success style={styles.button} onPress={() => this.showAllItem()}>
          <Text style={styles.buttonText}>Show All coupons</Text>
        </Button>
        <Button full primary style={styles.button} onPress={() => this.resetGame()}>
          <Text style={styles.buttonText}>Reset</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  grid: {

  },
  button: {
    marginVertical: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  topBar: {
    backgroundColor: '#8b78e6',
    height: 50,
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    marginVertical: 20
  },
  topText: {
    color: 'white',
    textAlign: 'center'
  }
});
