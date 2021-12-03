import React from 'react';
import main from './assets/main.png';
import pizza from './assets/pizza.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

export default function App() {
  console.disableYellowBox = true;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁 🍯</Text>
      <Image source={main} resizeMode="cover" style={styles.mainImage}></Image>
      {/* indicatorStyle 은 아이폰에서 스크롤바 색상을 지정하는 것임 black, white, default가 있음 */}
      <ScrollView horizontal style={styles.middleWrap} indicatorStyle='white'>
        {/* 스타일을 여러개 지정할땐 배열로 ! */}
        <TouchableOpacity style={[styles.middleBtn, styles.btn01]}><Text style={styles.btnText}>미용</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.middleBtn, styles.btn02]}><Text style={styles.btnText}>재테크</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.middleBtn, styles.btn03]}><Text style={styles.btnText}>할인</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.middleBtn, styles.btn04]}><Text style={styles.btnText}>반려동물</Text></TouchableOpacity>
      </ScrollView>
      <View style={styles.cardWrap}>
          <Image source={pizza} resizeMode="cover" style={styles.cardImage}></Image>
          <View style={styles.descWrap}>
            <Text style={styles.descTitle}>먹다 남은 피자를 촉촉하게💙</Text>
            <Text style={styles.desc} ellipsizeMode='tail' numberOfLines={3}>
  먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.
            </Text>
            <Text style={styles.date}>2021-12-03</Text>
          </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   container : { backgroundColor:'#ffffff' }
  ,title     : { fontSize:30, marginTop:50, marginHorizontal:20, fontWeight:'bold'}
  ,mainImage : { width:'90%', height:200, borderRadius:20, alignSelf:'center', marginTop:20}
  ,middleWrap: { marginLeft:20, height:60, marginTop:30}
  ,middleBtn : { width:100, height:50, borderRadius:15, marginRight:10}
  ,btn01     : { backgroundColor:'#F28A2E'}
  ,btn02     : { backgroundColor:'#8DBF5A'}
  ,btn03     : { backgroundColor:'#8C5549'}
  ,btn04     : { backgroundColor:'#D9BACE'} 
  ,btnText   : { color:"#ffffff", textAlign:'center',  lineHeight:50, fontSize:16 }
  ,cardWrap  : { flex:1, justifyContent:'space-between', flexDirection:'row', width:'90%', alignSelf:'center', marginTop:20}
  ,cardImage : {width:100, height:100, flex:1, marginRight:15, borderRadius:10}
  ,descWrap : { flex:2, flexDirection:'column', justifyContent:'space-between' }
  ,descTitle : { fontSize:18, fontWeight:'bold'}
  ,desc : {  lineHeight:18}
  ,date : { fontSize:12, color:"#aaaaaa"}
});