import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ProductPage from '../screens/ProductPage';
import ClientPage from '../screens/ClientPage';
import ContactBookPage from '../screens/ContactBookPage';
import PrinciplePage from '../screens/PrinciplePage';
import PipelinePage from '../screens/PipelinePage';
import LeadProjectPage from '../screens/LeadProjectPage';
import SalesAgendaPage from '../screens/SalesAgendaPage';
import HomePage from '../screens/HomePageKaTaren';
import AuthorityUserPage from '../screens/AuthorityUserPage';
import AuthorityRolePage from '../screens/AuthorityRolePage';
import FileManagementFilePage from '../screens/FileManagementFilePage'
import FileManagementFolderPage from '../screens/FileManagementFolderPage';
import LogActivitySignActivityPage from '../screens/LogActivitySignActivityPage';
import LogActivityUsersActivityPage from '../screens/LogActivityUsersActivityPage'

export default class DrawerNavigator extends Component{
    render(){
        return(
            <AppContainerNavigator/>
            //Test atau apa
        )
    }
}

const AppDrawerNavigator = createDrawerNavigator({
    Home: {screen: HomePage},
    AuthorityUser: {screen: AuthorityUserPage},
    AuthorityRole: {screen: AuthorityRolePage},
    Client: {screen: ClientPage},
    Product: {screen: ProductPage},
    Principle: {screen: PrinciplePage},
    Pipeline: {screen: PipelinePage},
    LeadProject: {screen: LeadProjectPage},
    SalesAgenda: {screen: SalesAgendaPage},
    FileManagement: {screen: FileManagementFilePage},
    FolderManagement: {screen: FileManagementFolderPage},
    ContactBook: {screen: ContactBookPage},
    LogSignActivity: {screen: LogActivitySignActivityPage},
    LogUsersActivity: {screen: LogActivityUsersActivityPage}
},{
    initialRouteName: 'Home',
    drawerWidth : 304,
    drawerPosition : 'left',
    drawerBackgroundColor : '#474B4F',
    drawerType : 'front',
    contentOptions : {
        activeTintColor : '#86C232',
        activeBackgroundColor : '#6B6E70',
        inactiveTintColor : '#61892F',
        inactiveBackgroundColor : '#474B4F',
    }
})

const AppContainerNavigator = createAppContainer(AppDrawerNavigator);