import React, { Component } from 'react';

const MenuItem = require('src/MenuItem');
const SubMenu = require('src/SubMenu');
const ContextMenu = require('src/ContextMenu');
const ContextMenuTrigger = require('src/ContextMenuTrigger');

const MENU_TYPE = 'SIMPLE';

export default class SimpleMenu extends Component {
    constructor(props) {
        super(props);

        this.state = { logs: [] };
    }

    handleClick = (e, data) => {
        this.setState(({ logs }) => ({
            logs: [`Clicked on menu ${data.item}`, ...logs]
        }));
    }

    render() {
        return (
            <div>
                <h3>Simple Menu</h3>
                <p>This demo simple usage of a context menu.</p>
                <ContextMenuTrigger id={MENU_TYPE} holdToDisplay={1000}>
                    <div className='well'>right click to see the menu</div>
                </ContextMenuTrigger>
                <div>
                    {this.state.logs.map((log, i) => <p key={i}>{log}</p>)}
                </div>
                <ContextMenu id={MENU_TYPE}>
                    <MenuItem onClick={this.handleClick} data={{ item: 'item 1' }}>Menu Item 1</MenuItem>
                    <MenuItem onClick={this.handleClick} data={{ item: 'item 2' }}>Menu Item 2</MenuItem>
                    <SubMenu title='A SubMenu'>
                        <MenuItem onClick={this.handleClick} data={{ item: 'subitem 1' }}>SubItem 1</MenuItem>
                        <SubMenu title='Another SubMenu'>
                            <MenuItem onClick={this.handleClick} data={{ item: 'subsubitem 1' }}>SubSubItem 1</MenuItem>
                            <MenuItem onClick={this.handleClick} data={{ item: 'subsubitem 2' }}>SubSubItem 2</MenuItem>
                        </SubMenu>
                        <SubMenu title='Yet Another SubMenu'>
                            <MenuItem onClick={this.handleClick} data={{ item: 'subsubitem 3' }}>SubSubItem 3</MenuItem>
                            <MenuItem onClick={this.handleClick} data={{ item: 'subsubitem 4' }}>SubSubItem 4</MenuItem>
                        </SubMenu>
                        <MenuItem onClick={this.handleClick} data={{ item: 'subitem 2' }}>SubItem 2</MenuItem>
                    </SubMenu>
                </ContextMenu>
            </div>
        );
    }
}
