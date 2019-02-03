import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  PlatformIOS
} from "react-native";
import { Font } from "expo";
import { Platform } from "expo-core";

let calculation = [];
let value;

class HomeScreen extends React.Component {
  state = {
    result: 0,
    value1: "",
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      "digital-7": require("../../assets/fonts/digital-7.ttf")
    });
    this.setState({
      fontLoaded: true
    });
  }

  calculationProcess = pressedValue => {
    if (this.state.value1 !== "") {
      if (
        pressedValue == "+" ||
        pressedValue == "-" ||
        pressedValue == "/" ||
        pressedValue == "*"
      ) {
        if (calculation.length < 3) {
          calculation = [];
          calculation.unshift(this.state.value1);
        }
      }
    }

    calculation.push(pressedValue);

    this.setState({
      result: calculation
    });
  };

  TotalResult = () => {
    try {
      const finalValue = calculation.join("");

      this.setState({
        result: eval(finalValue)
      });

      value = this.state.result;

      this.setState({
        value1: eval(value.join(""))
      });
      calculation = [];
      calculation.push(this.state.value1);
    } catch (err) {
      Alert.alert("Mathematical Expression Error!!");
    }

    if (calculation.length == 0) {
      this.setState({
        result: 0
      });
    }
  };

  resetValue = () => {
    calculation = [];
    this.setState({
      result: 0,
      value1: ""
    });
  };

  delDigit = () => {
    calculation1 = calculation.pop();

    if (calculation.length === 0) {
      this.setState({
        result: 0
      });
    } else {
      this.setState({
        result: calculation
      });
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#00134d",
          marginTop: Platform.OS == "ios" ? 40 : 0
        }}
      >
        <View style={styles.displayHeader}>
          <View
            style={{
              backgroundColor: "#e6e6e6",
              marginTop: "8%",
              marginLeft: "3%",
              marginRight: "3%",
              borderRadius: 5
            }}
          >
            {this.state.fontLoaded ? (
              <Text style={styles.displayTxt}>{this.state.result}</Text>
            ) : null}
          </View>
        </View>

        <View style={styles.body}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 10,
              flexWrap: "wrap"
            }}
          >
            <TouchableOpacity
              style={styles.txtStyleCalc}
              onPress={this.calculationProcess.bind(this, "(")}
            >
              <Text style={styles.txt}>(</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.txtStyleCalc}
              onPress={this.calculationProcess.bind(this, ")")}
            >
              <Text style={styles.txt}>)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.txtStyleC}
              onPress={this.resetValue}
            >
              <Text style={styles.txt}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.txtStyleDEL]}
              onPress={this.delDigit}
            >
              <Text style={styles.txt}>DEL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.txtStyle}
              onPress={this.calculationProcess.bind(this, 7)}
            >
              <Text style={styles.txt}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.txtStyle}
              onPress={this.calculationProcess.bind(this, 8)}
            >
              <Text style={styles.txt}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.txtStyle}
              onPress={this.calculationProcess.bind(this, 9)}
            >
              <Text style={styles.txt}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.txtStyleCalc}
              onPress={this.calculationProcess.bind(this, "/")}
            >
              <Text style={styles.txt}>/</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.txtStyle}
              onPress={this.calculationProcess.bind(this, 4)}
            >
              <Text style={styles.txt}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.txtStyle}
              onPress={this.calculationProcess.bind(this, 5)}
            >
              <Text style={styles.txt}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.txtStyle}
              onPress={this.calculationProcess.bind(this, 6)}
            >
              <Text style={styles.txt}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.txtStyleCalc}
              onPress={this.calculationProcess.bind(this, "*")}
            >
              <Text style={styles.txt}>*</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.txtStyle}
              onPress={this.calculationProcess.bind(this, 1)}
            >
              <Text style={styles.txt}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.txtStyle}
              onPress={this.calculationProcess.bind(this, 2)}
            >
              <Text style={styles.txt}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.txtStyle}
              onPress={this.calculationProcess.bind(this, 3)}
            >
              <Text style={styles.txt}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.txtStyleCalc}
              onPress={this.calculationProcess.bind(this, "+")}
            >
              <Text style={styles.txt}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.txtStyle}
              onPress={this.calculationProcess.bind(this, 0)}
            >
              <Text style={styles.txt}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.txtStyle}
              onPress={this.calculationProcess.bind(this, ".")}
            >
              <Text style={styles.txt}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.txtStyle}
              onPress={this.calculationProcess.bind(this, "-")}
            >
              <Text style={styles.txt}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.txtStyleCalc}
              onPress={this.TotalResult}
            >
              <Text style={styles.txt}>=</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            color: "white",
            paddingTop: 5
          }}
        >
          Ver 1.0
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  displayHeader: {
    height: "15%",
    backgroundColor: "#3399ff",
    marginTop: "6%"
  },
  displayTxt: {
    textAlign: "right",
    fontSize: 45,
    paddingRight: 3,
    fontFamily: "digital-7"
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold"
  },
  txtStyle: {
    height: 80,
    width: 80,
    backgroundColor: "#99ccff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  txtStyleDEL: {
    height: 80,
    width: 80,
    backgroundColor: "#ff4d4d",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10

  },
  txtStyleC: {
    height: 80,
    width: 80,
    backgroundColor: "#bbff99",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10

  },
  txtStyleCalc: {
    height: 80,
    width: 80,
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  body: {
    marginTop: "2%"
  }
});

export default HomeScreen;
