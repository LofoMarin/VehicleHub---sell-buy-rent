import { Component } from "react";
import Layout from "./components/Layout/Layout";
import { getFirestore, getDocs, collection } from "firebase/firestore/lite";
import { app } from "./API/firebase";


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      vehicule:[]
    };
  }

  async refreshVehicule(){
    var vehiculeList = [];
    const db = getFirestore(app);
    const vehiculeCol = collection(db, "vehicule");
    const vehiculeSnapshot = await getDocs(vehiculeCol);

    vehiculeSnapshot.forEach((doc) => {
      let vehicule = doc.data();
      vehicule.id = doc.id;
      vehiculeList.push(vehicule);
    });

    this.setState({vehicule: vehiculeList});
  }

  componentDidMount(){
    this.refreshVehicule();
  }

    render (){
      const {vehicule} = this.state;
      console.log(vehicule);

      return <Layout />;
  }
}
export default App;
