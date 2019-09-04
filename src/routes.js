import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './pages/Home/';
import PartnersCategory from './pages/PartnersCategory';
import PartnerDetails from './pages/PartnerDetails';

export default createAppContainer(
    createStackNavigator({
        PartnerDetails,
        Home,
        PartnersCategory,
    },{
        headerMode: 'none'
    }
    )
);