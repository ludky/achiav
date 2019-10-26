import React, {Component} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {ListItem} from "react-native-elements";
import {connect} from "react-redux";
import { fetchRewards } from "../redux/ActionCreators";
import Header from './HeaderComponent';



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

        return (
            <SafeAreaView>
                <Header title='Rewards'></Header>
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
