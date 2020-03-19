import React, { Component } from "react";
import axios from 'axios'
import {
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

class daftarProsespengajuan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPengiriman:[],
      placeholder: "show"
    };
  }
  componentDidMount = () => {
    axios.get(`http://localhost:8080/idCovid19/cekpengiriman`)
    .then( async result1 => {
      if (result1.data.status == "00") {
        await this.setState({
          ...this.state,
          dataPengiriman: result1.data.result,
          placeholder: "none"
        });
      } else {
        await this.setState({
          ...this.state,
          placeholder: "none"
        });
      }
    })
    .catch(error1 => {
      console.log(error1);
    });
  }
  render() {
    if(this.state.dataPengiriman.length > 0){
      return (
        <Card style={{ width: "100%" }}>
          <CardHeader>
            <h1>Daftar pengirimantest</h1>
          </CardHeader>
          <CardBody style={{padding:"0px",minHeight:"50vh",overflowX:"hidden",overflowY:"scroll"}}>
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading>
                  List group item heading
                </ListGroupItemHeading>
                <ListGroupItemText>
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      );
    } else {
      return (
        <Card style={{ width: "100%" }}>
          <CardHeader>
            <h1>Daftar pengiriman</h1>
          </CardHeader>
          <CardBody style={{padding:"0px",minHeight:"50vh",overflowX:"hidden",overflowY:"scroll"}}>
            <h1>Daftar pengiriman kosong</h1>
          </CardBody>
        </Card>
      );
    }
  }
}

export default daftarProsespengajuan;
