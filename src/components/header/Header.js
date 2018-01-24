import React, { Component } from 'react';
import './Header.css';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import DropDown from './DropDown';

const styles = {
    title: {
      cursor: 'pointer',
    },
};

class Header extends Component {
    constructor(props){
        super(props)

        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    render() {

        if ( this.state.width < 550) {
            return(
                <AppBar
                    style={{backgroundColor: 'grey'}}
                    showMenuIconButton={false}
                    title={<span style={styles.title}>UseThatAPI</span>}
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    iconElementRight={
                        <div>
                            <DropDown />
                        </div>
                    }
                />
            )
        }
        return(
            <AppBar
                style={{backgroundColor: 'grey'}}
                showMenuIconButton={false}
                title={<span style={styles.title}>UseThatAPI</span>}
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                iconElementRight={
                    <div>
                        <FlatButton label="button1" />
                        <FlatButton label="button2" />
                        <FlatButton label="button3" />
                    </div>
                }
            />
        )
    }
}

// import {PageHeader, Table} from 'react-bootstrap';

// class Header extends Component {
//     render() {
//         return(
//             <PageHeader style={styles.header}>
// 		        <Table striped bordered condensed hover>
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Username</th>
//                     </tr>
//                 </thead>
//             </Table>
// 	        </PageHeader>
//         )
//     }
// }

// const styles = {
//     header: {
//         backgroundColor: 'blue',
//         height: '200px',
//         width: '100%'
//     },
//     titleContainer: {
//         backgroundColor: 'red',
//         height: '100%',
//         width: '100%',
//     }
// }


export default Header;