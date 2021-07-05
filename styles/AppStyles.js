import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'android'? '#4D3636':'#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    width: '70%',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
  header: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    zIndex: 99,
  },
  trash: {
    color: Platform.OS === 'android'? 'white':'#4D3636',
  },
  headerText: {
    color: Platform.OS === 'android'? 'white':'#4D3636',
    fontSize: 27,
    fontWeight: '600',
    fontFamily: Platform.OS === 'android'? 'monospace':'Optima',
  },
// Task Style

item: {
  backgroundColor: '#FFF',
  padding: 15,
  borderRadius: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 20,
},
itemLeft: {
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap'
},
square: {
  width: 24,
  height: 24,
  backgroundColor: Platform.OS === 'android' ? '#4D3636': '#55BCF6',
  opacity: 0.4,
  borderRadius: 5,
  marginRight: 15,
},
itemText: {
  maxWidth: '80%',
},
circular: {
  width: 12,
  height: 12,
  borderColor:Platform.OS === 'android' ? '#4D3636': '#55BCF6',
  borderWidth: 2,
  borderRadius: 5,
},

})

export default styles;