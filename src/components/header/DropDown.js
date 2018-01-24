import React, { Component } from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class DropDown extends Component {
    state = {
        valueSingle: '3',
        valueMultiple: ['3', '5'],
      };
    
      handleChangeSingle = (event, value) => {
        this.setState({
          valueSingle: value,
        });
      };
    

    render() {
        return (
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                onChange={this.handleChangeSingle}
                value={this.state.valueSingle}>
                <MenuItem value="1" primaryText="Refresh" />
                <MenuItem value="2" primaryText="Send feedback" />
                <MenuItem value="3" primaryText="Settings" />
                <MenuItem value="4" primaryText="Help" />
                <MenuItem value="5" primaryText="Sign out" />
            </IconMenu>
        )
    }
}

export default DropDown;