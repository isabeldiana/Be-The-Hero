import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffccff',
    paddingHorizontal: 24,
    paddingTop:  Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }, 

  headerText: {
    fontSize: 15,
    color: '#000',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#000',
    fontWeight: 'bold',
  }, 

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#777',
  },

  incidentList: {
    marginTop: 32,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#002233',
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: 'wheat',
    fontWeight: 'bold',
  },

  incidentValue: {
    fontSize: 15,
    color: '#eee',
    marginTop: 8,
    marginBottom: 24,
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
  },

  detailsButtonText: {
   color: '#e02041',
   fontSize: 15,
   fontWeight: 'bold',
  }
});