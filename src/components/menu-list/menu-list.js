import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import './menu-list.scss';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { compose } from 'redux';
import { menuLoaded, menuRequested, menuRequestError } from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();
        const { RestoService } = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(err => {
                this.props.menuRequestError();
            })

    }

    render() {

        const { menuItems, loading, error } = this.props;

        if (error) { return <Error message={'Error accessing the database'} /> }

        if (loading) { return <Spinner /> };

        const items = menuItems.map(item => <MenuListItem ket={item.id} menuItem={item} />);

        return (
            <View items={items} />

        )
    }
};

const mStP = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }

}
const mDtP = { menuLoaded, menuRequested, menuRequestError };

export default compose(
    connect(mStP, mDtP),
    WithRestoService()
)(MenuList);

const View = ({ items }) => {
    return (
        <ul className="menu__list">
            {items}
        </ul>
    )
}
