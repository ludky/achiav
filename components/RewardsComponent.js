import React, {Component} from 'react';
import {FlatList, SafeAreaView, Alert} from 'react-native';
import {ListItem} from "react-native-elements";
import {connect} from "react-redux";
import { fetchRewards } from "../redux/ActionCreators";
import GlobalHeader from './HeaderComponent';
import Icon from 'react-native-vector-icons/AntDesign';



/**
 * Mapping function that maps dispatcher functions to this component's properties.  The property (which is a function) can then be called when
 * necessary.
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => ({
    fetchRewards: () => dispatch(fetchRewards())
});

class Rewards extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
      title: 'Rewards'
    };

    componentDidMount() {
        this.props.fetchRewards()
    }

    render() {
        const renderRewardItem = ({item, index}) => {
            return(
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{ source: { uri: item.imageUrl } }}
                />
            )
        };

        const renderGiftButton = () => {
          return(
          <Icon
            name="gift"
            backgroundColor="#3b5998"
            onPress={giftReward}
            color="#fff"
          >
            Gift
          </Icon>
        );
      };

      const giftReward = () => {
        Alert.alert(
          'Coming Soon!',
          'Soon, you will be able to gift rewards to other users! Hang tight!',
          {cancelable: false},
        );
      }

        return (
            <SafeAreaView>              
                <GlobalHeader title='Rewards' rightComponent={renderGiftButton}></GlobalHeader>
                <FlatList
                    data={this.props.rewards}
                    renderItem={renderRewardItem}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        );
    }
}

/**
 * Function that maps the state of rewards in Redux store to the properties of this component. 
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        rewards: state.rewards.rewards
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rewards);
