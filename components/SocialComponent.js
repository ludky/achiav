import React, {Component} from 'react'
import {View, FlatList} from "react-native";
import GlobalHeader from './HeaderComponent';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchFriends } from '../redux/ActionCreators';

class Social extends Component {

    componentDidMount() {
        this.props.fetchFriends()
    }

    render() {
        const renderFriendItem = ({item, index}) => {
            return(
                <ListItem
                    key={index}
                    title={item.firstName + " " + item.lastName}                    
                    hideChevron={true}
                    leftAvatar={{ source: { uri: item.imageUrl } }}
                />
            )
        };
        return (
            <View>
                <GlobalHeader title='Social'></GlobalHeader>
                <FlatList
                    data={this.props.friends}
                    renderItem={renderFriendItem}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchFriends: () => dispatch(fetchFriends())
});

const mapStateToProps = (state) => {
    return {
        friends: state.friends.friends
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Social);