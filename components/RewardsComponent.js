import React, {Component} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {ListItem} from "react-native-elements";
import {connect} from "react-redux";
import { fetchRewards } from "../redux/ActionCreators";


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
                <FlatList
                    data={this.props.rewards}
                    renderItem={renderRewardItem}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        rewards: state.rewards
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rewards);
