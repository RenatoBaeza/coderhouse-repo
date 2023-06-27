import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: StatusBar.currentHeight,
    paddingTop: StatusBar.currentHeight,
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 0.95,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#212121',
    borderColor: '#424D9E',
    fontSize: 14,
  },
  listContainers: {
    marginHorizontal: 20,
    gap: 15,
    marginTop: 40
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  listItem: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
  }
});
