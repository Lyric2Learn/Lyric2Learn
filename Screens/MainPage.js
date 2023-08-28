import { StyleSheet, Image, View, } from 'react-native'
import React, {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { wp, hp } from '../Components/DimensionPixel'
import CustomTexInput from '../Components/CustomTextInput'
import Search from '../Images/Svg/search'

 
// AnaSayfa UI Kodları
const MainPage = () => {
    const [value, setValue] = useState('')
    return (
        <LinearGradient colors={['#e5b2cacc', '#cf86dc4d']} style={styles.linear}>
         {/* Lyric2Learn adlı Logo  */}
           <View style={styles.imageAlign}>
           <Image source={require('../Images/Lyric2LearnLogo.png')} />
           </View>
         {/* Search Alanı */}
           <CustomTexInput icon={<Search/>}
            value={value}
            onChangeText={setValue}
            placeholder={'Şarkınızı Arayın...'}
           />
         {/* Şarkı araması yapılmadan önce gözükecek resim */}
          <View style={styles.backgroundView}>
          <Image source={require('../Images/SearchBefore.png')} style={styles.backgroundImage}/>
          </View>
          
        </LinearGradient>
    )
}

export default MainPage;

const styles = StyleSheet.create({
    linear: {
        flex: 1,
        
    },
    imageAlign: {
        marginTop: hp('6%'),
        marginLeft: hp('8%'),
    },
    backgroundView:{
       backgroundColor: '#ffffff99',
       width: wp('85%'),
       height: hp('55%'),
       margin: wp('8%'),
       borderRadius: wp('5%'),
       overflow: 'hidden',
    },
    backgroundImage: {
        resizeMode: 'contain',
        width:'100%',
        height: '100%',
        
      },
})