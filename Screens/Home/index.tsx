// React Imports
import React from "react";

// React Native Imports
import { Button, Text, View } from "react-native";


const Home = ({ navigation }: { navigation: any }): React.JSX.Element => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    )
}

export default Home