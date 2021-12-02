import React from 'react';
import main from './assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

export default function App() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (
    /*
      return 구문 안에서는 {슬래시 + * 방식으로 주석
    */
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁🍯</Text>
      <Image style={styles.mainImage} source={main}/>
      <ScrollView style={styles.scrollContainer} horizontal indicatorStyle={"white"}>
        <TouchableOpacity style={styles.scrollButton01}><Text style={styles.scrollButtonText}>생활</Text></TouchableOpacity>
        <TouchableOpacity style={styles.scrollButton02}><Text style={styles.scrollButtonText}>재테크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.scrollButton03}><Text style={styles.scrollButtonText}>반려견</Text></TouchableOpacity>
        <TouchableOpacity style={styles.scrollButton04}><Text style={styles.scrollButtonText}>꿀팁 찜</Text></TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
        {/* 하나의 카드 영역을 나타내는 View */}
        <View style={styles.card}>
          <Image style={styles.cardImage} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3"}}/>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>먹다 남은 피자를 촉촉하게!</Text>
            <Text style={styles.cardDesc}  numberOfLines={3}>먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.</Text>
            <Text style={styles.cardDate}>2020.09.09</Text>
          </View>
        </View>
        
      </View>
   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginTop:50,
    marginLeft:20
  },
  mainImage: {
    width:'90%',
    height:200,
    borderRadius:15,
    marginTop:20, 
    alignSelf:"center"
  },
  scrollContainer:{
    marginTop:20,
    marginLeft:10,
    height:60
  },
  scrollButton01: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#fdc453",
    borderColor:"deeppink",
    borderRadius:15,
    margin:7
  },
  scrollButton02: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#fe8d6f",
    borderRadius:15,
    margin:7
  },
  scrollButton03: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#9adbc5",
    borderRadius:15,
    margin:7
  },
  scrollButton04: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#f886a8",
    borderRadius:15,
    margin:7    
  },
  scrollButtonText: {
    color:"#fff",
    fontWeight:"700",
    textAlign:"center",
    lineHeight:20
  },
  cardContainer: {
    marginTop:10,
    marginLeft:10
  },
  card:{
    flex:1,
    flexDirection:"row",
    margin:10,
    borderBottomWidth:0.5,
    borderBottomColor:"#eee",
    paddingBottom:20

  },
  cardImage: {
    flex:1,
    width:100,
    height:100,
    borderRadius:10,
  },
  cardText: {
    flex:2,
    flexDirection:"column",
    marginLeft:10,
  },
  cardTitle: {
    fontSize:20,
    fontWeight:"700"
  },
  cardDesc: {
    fontSize:15,
    paddingTop:5
  },
  cardDate: {
    fontSize:12,
    color:"#aaaaaa",
    paddingTop:5
  }


});