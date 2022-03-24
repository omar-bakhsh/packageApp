

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
function HomeScreen() {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}><Text style={styles.txt_header}> بكج رفيق التاجر </Text></View>
            <ImageSlider
                data={[
                    { img: 'https://media.zid.store/cdn-cgi/image/w=1300,q=85,f=auto/https://media.zid.store/423328ba-67d5-4542-b19b-3987b7729aca/ba02d2ab-67a6-4879-8ecc-143c56c441d8.png' },
                    { img:'file:///data/user/0/host.exp.exponent/cache//assets/whatsapp.png' },
                    { img: 'https://pbs.twimg.com/media/FMufr2FX0AEdb35?format=jpg&name=medium' }
                ]}
                autoPlay={true}
                onItemChanged={(item) => console.log("item", item)}
                closeIconColor="#fff"
            />

            {/* <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text>ابدأ</Text>
        </TouchableOpacity> */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C6EF6',
        alignItems: 'center',
        paddingTop: 50
    },
    header: {
        // backgroundColor: '#005',
        fontWeight: '800',
        width: 200,
        alignContent: 'center',
        alignItems: 'flex-end',
        top: 0,
        left: 100,
        paddingRight: 5
    },
    txt_header: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '800',

    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
});

export default HomeScreen