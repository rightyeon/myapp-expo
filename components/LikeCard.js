import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function LikeCard({content,navigation}){ 
    return(
        <View style={styles.cardContainer} onPress={()=>{navigation.navigate('DetailPage',content)}}>
            <View style={styles.card} >
              <Image style={styles.cardImage} source={{uri:content.image}}/>
              <View style={styles.cardText}>
                  <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                  <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                  <Text style={styles.cardDate}>{content.date}</Text>
              </View>
            </View>
            <View style={styles.smallContainer}>
                <TouchableOpacity style={styles.etcBtn}><Text style={styles.etcText}>자세히 보기</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.etcBtn, styles.left]}><Text style={styles.etcText}>찜 해제</Text></TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    smallContainer : { flexDirection:'row', flex:1, alignSelf:'flex-end', marginRight:10},
    etcBtn : { borderColor:'deeppink', borderWidth:0.5, padding:10, borderRadius:10 },  
    etcText : { color:'deeppink'},
    left : {marginLeft:10},
    cardContainer : { borderBottomColor:"#eee" , borderBottomWidth:0.5,  paddingBottom:10},
    card:{
      flex:1,
      flexDirection:"row",
      margin:10,
     
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
      justifyContent:'space-between',
      marginLeft:10,
    },
    cardTitle: {
      fontSize:20,
      fontWeight:"700"
    },
    cardDesc: {
      fontSize:15
    },
    cardDate: {
      fontSize:10,
      color:"#A6A6A6",
    }
});