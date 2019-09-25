import React, {Component} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {REWARDS} from "../shared/rewards";
import {ListItem} from "react-native-elements";

class Rewards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rewards: REWARDS,
        }
    }

    static navigationOptions = {
      title: 'Rewards'
    };

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
                    data={this.state.rewards}
                    renderItem={renderRewardItem}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        );
    }
}

export default Rewards;
